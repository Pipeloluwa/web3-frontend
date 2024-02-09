import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider || "https://polygon-rpc.com/");


let accounts;
export const createWallet = async () => {
    accounts = await web3.eth.accounts.create();
    return accounts;
}


export const getWalletBalance = async (address) => {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
}


