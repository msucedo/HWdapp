const hre = require("hardhat");

async function main() {
 
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const HWcontract = await HelloWorld.deploy();

  await HWcontract.deployed();

  console.log("contract deployed to:", HWcontract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
