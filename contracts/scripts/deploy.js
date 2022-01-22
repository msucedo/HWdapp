const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
  
    console.log("OWNER: ", deployer.address);
    console.log("OWNER BALANCE: ", accountBalance.toString());
  
    const Token = await hre.ethers.getContractFactory("HelloWorld");
    const portal = await Token.deploy();
    await portal.deployed();
  
    console.log("CONTRACT ADDRESS: ", portal.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();