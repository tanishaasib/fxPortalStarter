# ERC721A Sepolia to Amoy Bridge Using fxPortal
This project demonstrates how to use the fxPortal contracts to transfer ERC721A tokens from Sepolia to Amoy.

* IPFS Storage link - "https://gateway.pinata.cloud/ipfs/QmYkGvA5RmqmL72qk53Jaw8upWH9igiUMczwcCViRzod3F"

* Token contract Address - "0xaD7B479e0b34A1AeefF5b5994959912e87D9671c"

* Title(prompt) - "dinosaur attending modern day college"

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network sepolia to deploy ERC721A contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network sepolia to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network sepolia to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use amoy.polygonscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network amoy to see the new polygon balance

## Authors

Tanisha Ibrahim - tanishaassii@gmail.com
