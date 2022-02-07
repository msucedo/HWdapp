require("@nomiclabs/hardhat-waffle");
let secret = require("./secret.json");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

 module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: '../react-zone/src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    /*
    rinkeby: {
      url: secret.url,
      accounts: [secret.key],
    },
    */
  }
};