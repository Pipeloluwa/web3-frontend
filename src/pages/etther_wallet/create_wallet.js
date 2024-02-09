const {Web3} = require("web3")
var Tx= require('ethereumjs-tx');
const web3= new Web3("https://polygon-mumbai.infura.io/v3/4357f87ba3264482aacd7c0447a2a605");


export const createWallet = async () => {
    const account = await web3.eth.accounts.create();
    return account;
}


export const getWalletBalance = async (address) => {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
}


