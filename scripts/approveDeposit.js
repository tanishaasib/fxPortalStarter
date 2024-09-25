const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/Dinosaur.sol/Dinosaur.json");
require("dotenv").config();


async function main() {
  const networkAddress = "https://ethereum-sepolia-rpc.publicnode.com";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const wallet = new ethers.Wallet(privateKey, provider);
  const signer = wallet.connect(provider);

  const Dinosaur_contract = await ethers.getContractFactory("Dinosaur", signer);
  const dino_attach = Dinosaur_contract.attach("0x0764Cf580b49f83c7F62FB56B3108273C253eD1b");
  const fxRootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
  const fxRoot = new ethers.Contract(fxRootAddress, FXRootContractAbi, signer);

  const ID_mappings = [0, 1, 2, 3, 4];
  const approveTx = await dino_attach.setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Dinosaurs have been set approved on sepolia");

  for (const tokenId of ID_mappings) {
    const depositTx = await fxRoot.deposit(dino_attach.address, wallet.address, tokenId, "0x6566");
    await depositTx.wait();
  }
  console.log("Dinosaur NFTs have been deposited to amoy testnet");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
