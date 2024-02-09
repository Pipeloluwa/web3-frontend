const {Web3}= require("web3")
// const Web3= require("web3")
const Tx = require('ethereumjs-tx').Transaction;
const web3= new Web3("https://polygon-mumbai.infura.io/v3/4357f87ba3264482aacd7c0447a2a605");






export async function perform_transaction(fromAddress, toAddress, value, gasPrice, privateKeyGotten){
    // const block = await web3.eth.getBlock(0);
    const privateKey= Buffer.from(privateKeyGotten.slice(2), 'hex');
    // const block_number= "latest";

    


    web3.eth.getTransactionCount(fromAddress)
        .then((txCount) => {
            const txObject= {
                nonce: web3.utils.toHex(txCount),
                to: toAddress,
                value: web3.utils.toHex(web3.utils.toWei(`${value}`, 'ether')),
                gasLimit: web3.utils.toHex(21000),
                gasPrice: web3.utils.toHex(web3.utils.toWei(`${gasPrice}`, 'gwei'))
                // maxPriorityFeePerGas: 0.000000002
            }

            
            console.log(txObject);
            // +++++ SINGINIG THE TRANSACTION +++++++++++
            const tx= new Tx(txObject);
            tx.sign(privateKey);

            const serializedTransaction= tx.serialize();
            const raw= "0x" + serializedTransaction.toString('hex');

            console.log(txCount);
            console.log(serializedTransaction);
            console.log(raw);



            // web3.eth.getTransactionCount(fromAddress)
            // .then(console.log);


            // web3.eth.sendSignedTransaction(raw [() => {}, () => {}])

            // web3.eth.sendSignedTransaction(raw, (err, txtHash) => {
            //     if (err){console.log(err)}
            //     else{
            //         console.log('txHash', txtHash);
            //     }
            // });

        })


        .catch((error) => {
            console.error('Error:', error);
        });


}
