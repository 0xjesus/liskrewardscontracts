const { ethers } = require("hardhat");

async function main() {
    // Obtén los signers
    const signers = await ethers.getSigners();
    const deployer = signers[0];

    // Despliega el contrato FitCoinAI
    const FitCoinAI = await ethers.getContractFactory("FitCoinAI");
    const fitCoinAI = await FitCoinAI.deploy();
    await fitCoinAI.deployed();

    console.log("FitCoinAI deployed to:", fitCoinAI.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
