### Turbin3 Assessment - 1 Typescript IDL Check  

#### Environment variable before starting


```bash
# set airdrop target address (your turbin3 public key)
export TO_ADDRESS=<your public-key>
export TURBIN3_WALLET_SECRET_B58=<your private-key-from-phantom-base58>

# add your github username to verify your identity
export GITHUB_SLUG=username

# BUMP_SEED for they pointing pda account
export BUMP_SEED=prereq
``` 

#### Steps

1. Generate a key pair for the client and server using the following command:

```bash
yarn keygen
```

2. Airdrop yourself some tokens using the following command:

```bash
yarn airdrop
```

3. Transfer all airdrop from temp wallet into tubin3 wallet
```bash
yarn transfer
```

4. Execute WBA program to graduate from course

```bash
yarn enroll
```


#### Logs 

```txt

1: First command (Airdrop)
    yarn airdrop
    yarn run v1.22.22
    $ ts-node ./airdrop.ts
    ✅ Success! Check out your TX here:
        https://explorer.solana.com/tx/5VuTBikv1oqRE7rd63jxK9iwPH7n2tPRCPLdZ7vcSoJDg6EsM8xdZdKSg8ANpzcEZvDqC2C4DK2jtGWQFWneoBtz?cluster=devnet


2: Second command (Transfer to Turbin3 wallet)
    yarn transfer    
    yarn run v1.22.22
    $ ts-node ./transfer.ts
    ✅ Success! Check out your TX here:
        https://explorer.solana.com/tx/ui3aqvfAgeoCbPKvaLQ8m49idJ1KFR7baCPfp9gHrSsayQwVokGH1ruERspcrmz2hHZT2KkBPwMnUNL6Yi4FwAe?cluster=devnet

3: Third command (Transfer to Turbin3 wallet)
    yarn transfer    
    yarn run v1.22.22
    $ ts-node ./transfer.ts
    Success! Check out your TX here:
        ✅ https://explorer.solana.com/tx/ui3aqvfAgeoCbPKvaLQ8m49idJ1KFR7baCPfp9gHrSsayQwVokGH1ruERspcrmz2hHZT2KkBPwMnUNL6Yi4FwAe?cluster=devnet


4: Fourth command (Execute Turbin3 Program)  
    yarn enroll            
    yarn run v1.22.22
    $ ts-node ./enroll.ts
    ✅ Success! Check out your TX here:
        https://explorer.solana.com/tx/3wrE6Bk2Ab5XfogQNN3jZjZfN87hrzwN36j1drsDctJeUXYGsn3Qafz1GuzFwyn6JAdCyLoJKTcisfxF5aJnxLvQ?cluster=devnet
    ✅ Successfully completed enrollment

```
