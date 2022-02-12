require("@nomiclabs/hardhat-waffle");
let secret = require("./secret.json");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers")

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

  const defaultNetwork = "localhost"; // update to your testnet i.e. 'rinkeby'

 module.exports = {
   defaultNetwork,
  solidity: "0.8.4",
  namedAccounts: {
    deployer: {
      default: 0,
    }
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      url: "http://localhost:8545",
    },
    /*
    ------------- UNCOMMENT TO DEPLOY TO TESTNET ------------
    rinkeby: {
      url: secret.url,
      accounts: [secret.key],
    },
    */
  }
};