const main = async () => {
	const [owner] = await hre.ethers.getSigners();
	const helloWorldFactory = await hre.ethers.getContractFactory("HelloWorld");
	const helloWorldContract = await helloWorldFactory.deploy();
	await helloWorldContract.deployed();

	console.log("CONTRACT ADDRESS: ", helloWorldContract.address);
	console.log("OWNER ADDRESS: ", owner.address);

	let text;
	// read text
	text = await helloWorldContract.getText();
	console.log("TEXT: ", text);

	// change text
	await helloWorldContract.updateText("msucedo");
	console.log("TEXT: ", text);

	// read text
	text = await helloWorldContract.getText();
	console.log("TEXT: ", text);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log("errorsin");
		console.log(error);
		process.exit(1);
	}
};

runMain();