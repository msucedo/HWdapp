# Hello World DAPP

HWdapp is your hello world decentralized application. Contains the basic functionality so you can use it as a template and start building your own application.

## what the dapp does?

![Screenshot](./docs/HWdapp.png)

- show text stored in the blockchain, and update that text. interact directly with ethereum blockchain!! (a testnet).

- feel free to udpdate the text of my contract through ehterscan.io at RINKEBY -> 0x06188947C018B21b9D20417D31A7f00f414919e4

- after making the transaction to updat the text, please wait around 20 seconds there, until the transaction is confirmed, the app will automatically detect the change and update the text.

## what you will need

1. npm
2. an alchemy.com account
3. metamask account
4. fake ether from the testnet you want to use

## Installation

Clone this repository, 'cd' into the folder and let npm work
```bash
cd HWdapp
npm install
``` 
The package.json should be able to download all needed dependencies.
- note: in case hardhat was not automatically installed please run:
```bash
cd HWdapp/contracts
npm install
``` 

## Usage

- to compile, run from "HWdpp/contracts"

```bash
npx hardhat compile
```

- to test on a local network (live only during execution), run from "HWdpp/contracts"
```bash
npx hardhat run scripts/run.js
```

- to test on a local network (live undefined) with access to 20 accounts, with 1000eth, 0 blocks mined.
```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

note: run the second command from a different terminal window but without closing the first terminal window with the first command running


- to test on a testnet (i.e. rinkeby)
1. go to HWdapp/contracts
2. create a file called "secret.json"
3. add your alchemy.com api url and your metamask account private key
4. from HWapp/contracts try:
```bash
run npx hardhat run scripts/deploy.js --network rinkeby
```

- link your contract and react
1. open "HWapp/src/App.jsx"
2. replace "contractAddress" with your contract address
3. from HWdapp root folder try:
```bash
npm run dev
```
that will run vite and our app will be live!

## Disclaimer
I don't consider myself an expert, take this code as what it is (a path to the needed tools, folders, configurations to start your path in the dapp development world).

Please note the goal of this repository is to give a clearer path of how to locally build dapps, I found myself having trouble to understand how to develop locally and now that I have a kinda better idea I wanted to share with anyone interested the tools that I used and make available this simple template.

- note1: these are not the only tools available to build and deploy dapps.
- note2: I used solidity 0.8.4 - (no specific reason)
- note3: regarding the alchemy.com account, it is free, from there we just need to create an app and copy the its key
- note4: get fake ether for rinkeby testnet: https://faucet.rinkeby.io
- note5: I did not talk about some steps because I though you could handle them by yourself (funding your metamask with fake ether, create an alchemy account, etc)
- note6: any questions, comments, suggestions feel free to ping me at discord @msaucedo#2231


## License
[MIT](https://choosealicense.com/licenses/mit/)
