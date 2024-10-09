// Turbin3 mail content replica
import { Keypair } from "@solana/web3.js";

// Now we're going to create a new Keypair, like so:
// Generate a new keypair
let kp = Keypair.generate();

console.log(
  `🔐 You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`
);

console.log(`🔐 You generate a new wallet secret [${kp.secretKey}]`);

// write public and private key pair to file in keys folder
const fs = require("fs");

// public key to file "keys/publicKey.txt"
fs.writeFile(
  "keys/dev-wallet-pubkey.txt",
  kp.publicKey.toBase58(),
  function (err: any) {
    if (err) throw err;
    console.log("✅ Public key saved!");
  }
);

// private key to file "keys/privateKey.json"
let keyArr = [];
for (let i = 0; i < kp.secretKey.length; i++) {
  keyArr.push(kp.secretKey[i]);
}

fs.writeFile(
  "keys/dev-wallet.json",
  JSON.stringify(keyArr),
  function (err: any) {
    if (err) throw err;
    console.log("✅ Private key saved!");
  }
);

// import bs58 from 'bs58'
// import * as prompt from 'prompt-sync';
