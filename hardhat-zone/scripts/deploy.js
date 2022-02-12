const hre = require("hardhat");


/*

 _______ _________ _______  _______
(  ____ \\__   __/(  ___  )(  ____ )
| (    \/   ) (   | (   ) || (    )|
| (_____    | |   | |   | || (____)|
(_____  )   | |   | |   | ||  _____)
      ) |   | |   | |   | || (
/\____) |   | |   | (___) || )
\_______)   )_(   (_______)|/

This deploy script is no longer in use, but is left for reference purposes!

HWdapp now uses hardhat-deploy to manage deployments, see the /deploy folder
And learn more here: https://www.npmjs.com/package/hardhat-deploy

*/

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
