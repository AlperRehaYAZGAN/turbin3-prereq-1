import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

// We're also going to import our wallet and recreate the Keypair object using its private key:
import wallet from "./keys/dev-wallet.json";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Now we're going to establish a connection to the Solana devnet:
// Create a Solana devnet connection to devnet SOL tokens
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
  try {
    // We're going to claim 2 devnet SOL tokens
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      2 * LAMPORTS_PER_SOL
    );

    const text = `✅ Success! Check out your TX here:
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`;

    console.log(text);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
