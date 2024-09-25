const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {

  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-sepolia-rpc.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);
  const contractAddress = "0x0764Cf580b49f83c7F62FB56B3108273C253eD1b";
  const Dinosaur_contract = await ethers.getContractFactory("Dinosaur", signer);
  const Dinosaur = await Dinosaur_contract.attach(contractAddress);

  await Dinosaur.mint(5);
  console.log("5 Dinosaur NFTs on sepolia");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
