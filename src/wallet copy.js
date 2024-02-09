//yarn add web3
//yarn add ethereumjs-tx
import Web3 from "web3";

// var Tx= require('ethereumjs-tx');

// require('dotenv').config();
// const PRIVATE_KEY1=  process.env.PRIVATE_KEY1;
// const PRIVATE_KEY2= process.env.PRIVATE_KEY2;
const PRIVATE_KEY1= "0x409b560b2bafec8ce42f6c45a84216bbf2ecbea9e3f0409cac0333fb7ce3cc3b";
const PRIVATE_KEY2= "0x1f1af0fc1b9b2d82c7312b98022bfcb3f397957304ec3e61455b1fe386986c32";
// var Buffer = require('buffer/').Buffer;
// const PRIVATE_KEY1=Buffer.from("0x409b560b2bafec8ce42f6c45a84216bbf2ecbea9e3f0409cac0333fb7ce3cc3b");
// const PRIVATE_KEY2= Buffer.from("0x1f1af0fc1b9b2d82c7312b98022bfcb3f397957304ec3e61455b1fe386986c32");

const contractAddress= "0x0000000000000000000000000000000000001010";
const fromAddress= '0x6A20cfB4A2e921d23490f5ed49C691F54c26e700';

const toAddress= "0x0f10c1AD4758BdC07661e09648eDb0B1ec83A038";

const web3 = new Web3(Web3.givenProvider || "https://polygon-rpc.com/");

// const tokenAbi_safe= [
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "name",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_spender",
//                 "type": "address"
//             },
//             {
//                 "name": "_value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "approve",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "totalSupply",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_from",
//                 "type": "address"
//             },
//             {
//                 "name": "_to",
//                 "type": "address"
//             },
//             {
//                 "name": "_value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "transferFrom",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "decimals",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint8"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "name": "_owner",
//                 "type": "address"
//             }
//         ],
//         "name": "balanceOf",
//         "outputs": [
//             {
//                 "name": "balance",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "symbol",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_to",
//                 "type": "address"
//             },
//             {
//                 "name": "_value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "transfer",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "name": "_owner",
//                 "type": "address"
//             },
//             {
//                 "name": "_spender",
//                 "type": "address"
//             }
//         ],
//         "name": "allowance",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "fallback"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "name": "owner",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "name": "spender",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "name": "value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Approval",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "name": "from",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "name": "to",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "name": "value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Transfer",
//         "type": "event"
//     }
// ]


const tokenAbi= [{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"setParent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"data","type":"bytes32"},{"internalType":"uint256","name":"expiration","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"transferWithSig","outputs":[{"internalType":"address","name":"from","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_childChain","type":"address"},{"internalType":"address","name":"_token","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"parent","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parentOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"ecrecovery","outputs":[{"internalType":"address","name":"result","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"networkId","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_TOKEN_TRANSFER_ORDER_SCHEMA_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"disabledHashes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokenIdOrAmount","type":"uint256"},{"internalType":"bytes32","name":"data","type":"bytes32"},{"internalType":"uint256","name":"expiration","type":"uint256"}],"name":"getTokenTransferOrderHash","outputs":[{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CHAINID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_DOMAIN_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_DOMAIN_SCHEMA_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output1","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output1","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output2","type":"uint256"}],"name":"LogTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output2","type":"uint256"}],"name":"LogFeeTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];

// const tokenAbi= [
//     {"inputs":[{"internalType":"address","name":"devAdr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"balanceOfETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ceoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adr","type":"address"}],"name":"changeCeo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_adr","type":"address"}],"name":"changeDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"newFee","type":"uint16"}],"name":"changeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"smartContract","type":"address"}],"name":"changeSmartContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFee","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyWithdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_adr","type":"address"}],"name":"emergencyWithdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"smartContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}
// ];


async function sendTransaction (tokenContract, fromAddress, toAddress, amount, privateKey){
    const transaction = await tokenContract.methods.transfer(toAddress, amount);
    // console.log(transaction);
    // console.log(transaction.arguments[0]);
    // tokenContract.options.address
    // transaction.arguments[0]

 

    // const txObject = {
    //     nonce: web3.utils.toHex(10),
    //     to : toAddress,
    //     value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
    //     gasLimit: web3.utils.toHex(21000),
    //     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    // };



    // const getTCount= await web3.eth.getTransactionCount(
    //     fromAddress
    // ).then(console.log)
    // console.log(getTCount);


    web3.eth.getTransactionCount(fromAddress)
    .then(console.log);

    const txObject = {
        nonce: 1,
        to : toAddress,
        data: transaction.encodeABI(),
        gas : await transaction.estimateGas({from: fromAddress}),
        gasPrice: '234567897654321',
    };

    const signed = await web3.eth.accounts.signTransaction(
        txObject, 
        privateKey
    ).then();
    return signed;

    // return web3.eth.sendSignedTransaction(signed.rawTransaction);

}


let accounts;
export const createWallet = async () => {
    accounts = await web3.eth.accounts.create();
    return accounts;
}



export const start_process = async () => {
    // console.log(createWallet());
    // console.log(PRIVATE_KEY1);
    // console.log(PRIVATE_KEY2);
    if (!accounts){
        // console.log(accounts);
        const tokenContract = new web3.eth.Contract(tokenAbi, contractAddress);
        // console.log(tokenContract.methods.name().call((err, result) => {console.log(result)}));
        // console.log(tokenContract.methods.symbol().call((err, result) => {console.log(result)}));
        // console.log(tokenContract.methods.balanceOf('0x0000000000000000000000000000000000001010').call((err, result) => {console.log(result)}));

        
        // console.log(web3.eth.getBalance(fromAddress, (err, bal) => {}));

        // console.log(tokenContract.methods.balanceOf('0x0000000000000000000000000000000000001010').call((err, result) => {console.log(result)}));

        const amount= 1;
    


        const receipt = await sendTransaction(tokenContract, fromAddress, toAddress, amount, PRIVATE_KEY1);
        // console.log(receipt);
        console.log(`https://polygonscan.com/tx/${receipt.transactionHash}`); 

    }
};

