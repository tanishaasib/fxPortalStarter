const hre = require("hardhat");

async function main() {
  const dinosaur_contract = await hre.ethers.deployContract("Dinosaur");
  console.log("Dinosaur in school contract address:", dinosaur_contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
