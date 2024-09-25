const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Dinosaur.sol/Dinosaur.json");

const tokenAddress = "0xaD7B479e0b34A1AeefF5b5994959912e87D9671c";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x685eB3c7f8bb318e6f79aE12C1BCDDa636c2276f"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("Dinosaur attedning school amoy balance: " + await token.balanceOf(walletAddress) + " fxDS");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
