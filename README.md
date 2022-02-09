# Hello World DAPP

HWdapp is a hello world decentralized application. Contains the basic functionality so you can use it as a template and start building your own application.

Think of it as a hello world dapp starter kit.

## Table of contents
  * [What the dapp does?](#what-the-dapp-does-)
  * [Architecture diagram](#architecture-diagram)
  * [Technologies stack](#technologies-stack)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Disclaimer](#disclaimer)
  * [FAQ](#faq)
  * [Other helpful resources](#other-helpful-resources)
  * [License](#license)

## What the dapp does?

![Screenshot](./docs/HWdapp.png)

- show text stored in the blockchain, and update that text. interact directly with ethereum blockchain!! (a testnet).

- feel free to udpdate the text of my contract through ehterscan.io at RINKEBY -> 0x4E98dfb698055717c013C42e2F84989e9bC9631a

## Basic architecture diagram

![Screenshoot2](./docs/HWdappArchitecture2.png)

## Technologies stack
> - react - build front end, animations, make your app look cute
> - ethers - Communicate with the blockchain and bridge to frontend
> - hardhat - compile, test and create a local blockchain

![Screenshot3](./docs/tech_stack2.png)
###### each red box represents the main file name from each technology


## Prerequisites

1. node js and yarn
2. metamask account -> [https://metamask.io](url)
3. an alchemy.com account -> [https://www.alchemy.com](url) (only if you want to deploy to testnet)
4. fake ether from the testnet you want to use  -> [https://faucet.rinkeby.io](url) (only if you want to deploy to testnet)

## Installation

1. Clone repository
```bash
git clone https://github.com/msucedo/HWdapp.git
``` 

2. Install dependencies
```bash
cd HWdapp
yarn install
```

## Usage

- Compile smart contract with hardhat

```bash
cd HWdapp
yarn compile
```

- To test on hardhat local network with access to 20 accounts, with 1000eth, 0 blocks mined. note: three open terminal windows needed.
###### 	Terminal window 1 - deploy local blockchain
```bash
cd HWdapp
yarn chain
```
> ###### please copy any account from the terminal output and add it to metamask, we will use our localhost 8545 network. how to? -> [add hardhat account to metamask](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13)

###### Terminal window 2 - deploy contract to local blockchain
```bash
cd HWdapp
yarn deployLocal
```	
###### Terminal window 3 - deploy server to interact with your application at `http://localhost:3000/`
```bash
cd HWdapp
yarn start
```	

- To test on a testnet (i.e. rinkeby)
1. edit "HWdapp/hardhat-zone/secret.json"
2. add your alchemy.com api url and your metamask account private key
3. edit "HWdapp/hardhat.zone/hardhat.config.js"
4. remove last comment inside "networks" to enable the testnet settings
5. go to "HWdapp/hardhat-zone/package.json", scripts deployTesnet: and update your testnet
3. run below commands
```bash
cd HWdapp
yarn deployTestnet
```	
###### note: copy the contract address from your terminal window, open etherscan.io for the rinkeby network at search for this address. you should be able to see your contract.


##### everytime you update your contract, it will deploy with a new address, you need to point your frontend (in the above file) to that new address.

## Disclaimer
you might find bugs, but for the simplicity and goal of the exercise they don't represent a risk, take this code as what it is (a path to the needed tools, folders, configurations to build, test and deploy locally a dapp).

Please note the goal of this repository is to give a clearer path of (one in between many choices you have on) how to locally build dapps, I found myself having trouble to understand how to develop locally and now that I have a kinda better idea I wanted to share with anyone interested the tools that I used and make available this simple template.

- note1: these are not the only tools available to build and deploy dapps.
- note2: regarding the alchemy.com account, it is free, from there we just need to create an app and copy the application key
- note3: I did not talk about some steps as they are easily self explanatory (funding your metamask with fake ether, create an alchemy account, etc)
- note4: any questions, comments, suggestions feel free to ping me at discord @msaucedo#2231


## FAQ

- Where can I edit the smart contract and the frontend?
> #### edit contract - HWdapp/hardhat-zone/contracts/HelloWorld.sol
> #### edit frontend - HWdapp/react-zone/src/App.js

- why the next text in the DAPP is not changing?
> probably because common metamask error: "Nonce to high".
> Solution: metamask>accounts>settings>advanced>reset account
more on this here [nonce to high error](https://medium.com/@thelasthash/solved-nonce-too-high-error-with-metamask-and-hardhat-adc66f092cd)
 

- I'm having issues compiling and running the project, what should I do?
> if no luck by yourself, ping me @msaucedo#2231 at discord.

- what if I want to make a change to the contract?
> 1. make changes to the contract
> 2. make sure your node and frontend server are up
> 3. run "yarn deploy"
> 4. copy the contract's address
> 5. open "HWdapp/react-zone/src/App.js" update the property "contractAddress"
##### note: automatically update this file is a nice to have I'm working on

- I'm seeing error:
```
Error: call revert exception (method="getText()", errorArgs=null, errorName=null, errorSignature=null, reason=null, code=CALL_EXCEPTION, 
version=abi/5.5.0)
    at Logger.makeError (index.ts:225:1)
    at Logger.throwError (index.ts:237:1)
    at Interface.decodeFunctionResult (interface.ts:425:1)
    at Contract.<anonymous> (index.ts:392:1)
    at Generator.next (<anonymous>)
    at fulfilled (index.ts:1:1)

```
> you need to import a local hardhat account to metamask and use local network 8545. how to? -> [add hardhat account to metamask](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13)

## Other helpful resources
- [buildspace.so](https://buildspace.so) - this is where this repo comes from!
- [eth.build](https://eth.build)
- [scaffold-eth](https://github.com/scaffold-eth/scaffold-eth)
- [cryptozombies](https://cryptozombies.io)

## License
[MIT](https://choosealicense.com/licenses/mit/)
