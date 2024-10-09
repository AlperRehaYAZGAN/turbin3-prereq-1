import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor";
import { IDL, Turbin3Prereq } from "./programs/Turbin3_prereq";
import bs58 from "bs58";
const prompt = require("prompt-sync")();

// ENV First
let walletParam = process.env.TURBIN3_WALLET_SECRET_B58 || "not-found";
var keypair: Keypair | null = null;
if (walletParam === "not-found") {
  // try to get prompt sync
  const secret = prompt("Enter your wallet secret: ");
  if (!secret || secret.length <= 1) {
    throw new Error(
      "TURBIN3_WALLET_SECRET_B58 env variable is not set or the provided secret is too short. It should be your wallet secret key"
    );
  }

  // secret is provided
  keypair = Keypair.fromSecretKey(new Uint8Array(bs58.decode(secret)));
}

// env found try to get keypair
try {
  keypair = Keypair.fromSecretKey(new Uint8Array(bs58.decode(walletParam)));
} catch (e) {
  console.error("TURBIN3_WALLET_SECRET_B58 env variable is not set or the provided secret is too short. It should be your wallet secret key");
  throw e;
}

// Github account
const GITHUB_SLUG = process.env.GITHUB_SLUG || "not-found";
if (GITHUB_SLUG === "not-found") {
  throw new Error(
    "GITHUB_SLUG env variable is not set. It should be your github account"
  );
}
const slug = Buffer.from(GITHUB_SLUG, "utf8");

// BUMP_SEED
const BUMP_SEED = process.env.BUMP_SEED || "not-found";
if (BUMP_SEED === "not-found") {
  throw new Error(
    "BUMP_SEED env variable is not set. It should be a correct bump seed. (look at the mail)"
  );
}

// Create a devnet connection
const connection = new Connection("https://api.devnet.solana.com");

// Create our anchor provider
const provider = new AnchorProvider(connection, new Wallet(keypair), {
  commitment: "confirmed",
});

// Create our program
const program: Program<Turbin3Prereq> = new Program(IDL, provider);

// Create the PDA for our enrollment account
const enrollment_seeds = [Buffer.from("prereq"), keypair.publicKey.toBuffer()];
const [enrollment_key, _bump] = PublicKey.findProgramAddressSync(
  enrollment_seeds,
  program.programId
);

(async () => {
  try {
    const txhash = await program.methods
      .complete(slug)
      .accounts({
        signer: keypair.publicKey,
      })
      .signers([keypair])
      .rpc();
    console.log(`✅ Success! Check out your TX here:
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();

// debug logs
console.log("✅ Successfully completed enrollment");
