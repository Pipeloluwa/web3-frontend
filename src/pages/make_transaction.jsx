import { useState } from "react";
import { perform_transaction } from "./etther_wallet/transaction";


export const MakeTransaction= () => {
  // start_process();
  let [receiver, set_receiver]= useState('');
  let [g_price, set_g_price]= useState('');
  let [value_price, set_value_price]= useState('');

  const [passwordHash, set_passwordHash]= useState(null);

  const [showProcessing, setshowProcessing]= useState(false);




  const submit_all = async() => {
    let sender_address= ""; 
    let sender_key= "";

    try{
      sender_address= localStorage.getItem('sender_address');;
      sender_key= localStorage.getItem('sender_key');
    }
    catch{
      alert("Can not get your details for transaction, please log in again")
    }

    if (sender_key==="" || sender_address==="" ){
      return alert("Can not get your details for transaction, please log in again");
    }

    const receiver_address= receiver.trim();
    const g_price_data= g_price.trim()
    const value_price_data= value_price.trim()

    if (receiver_address.length === 0){
      return alert("Please fill in the address you want to transfer to.");
    }

    if (value_price_data.length === 0){
      return alert("Please fill in the value you want to transfer.");
    }

    if (g_price_data.length === 0){
      return alert("Please fill in the gas price you want to transfer.");
    }

    
    
    setshowProcessing(true);
  
    const result_gotten= await perform_transaction(sender_address, receiver_address, value_price_data, g_price_data, sender_key);
    set_passwordHash(result_gotten);

    // localStorage.removeItem('sender_address');
    // localStorage.removeItem('sender_key');
    setshowProcessing(false);
  }


  return (
    <div className="relative">
      <div className="sm:scale-100 scale-75  h-screen max-h-screen relative mx-auto justify-center items-center flex">
          <div className=" flex flex-col sm:scale-75 md:w-[600px] bg-[#3f3f7e] shadow-md shadow-black/50 rounded-3xl mx-auto   space-y-4 justify-center  px-8 py-12  items-center">
          <div className="pb-4 mx-auto flex justify-center"></div>

            <h1 className="py- my-4 px-5 shadow-lg text-center pb-12 text-3xl font-bold text-white">React ERC20 Wallet Sample Project</h1>

            <h1 className="text-white bg-blue-900 px-4 py-1 font-bold">(NOTE: GAS LIMIT IS 21000)</h1>
            {/* <div className="flex flex-row w-[550px] space-x-2 justify-center">
              <h1 className="py-4 text-[20px] text-white bg-blue-500/30 text-center w-[14rem] shadow-black shadow-sm rounded-full">Sender Address:</h1>
              <input onChange={e => set_sender(e.target.value)} className="bg-white/20 text-white flex py-4 px-6 w-[25rem] rounded-full shadow-sm shadow-black" placeholder={"0x6A20cfB4A2e921d23490f5ed49C691F54c26e700"} />
            </div> */}

            <br />
            <div className=" flex flex-row sm:w-[550px] w-[450px] space-x-2 justify-center">
              <h1 className="py-4 text-[20px] text-white bg-blue-500/30 text-center w-[14rem] shadow-black shadow-sm rounded-full">To Address:</h1>
              <input onChange={e => set_receiver(e.target.value)} className="bg-white/20 text-white  flex py-4 px-6 w-[25rem] rounded-full shadow-sm shadow-black" />
            </div>

            <div className=" flex flex-row sm:w-[550px] w-[450px] space-x-2 justify-center">
              <h1 className="py-4 text-[20px] text-white bg-blue-500/30 text-center w-[14rem] shadow-black shadow-sm rounded-full">Value:</h1>
              <input onChange={e => set_value_price(e.target.value)} className="bg-white/20 text-white  flex py-4 px-6 w-[25rem] rounded-full shadow-sm shadow-black" />
            </div>

            <div className=" flex flex-row sm:w-[550px] w-[450px] space-x-2 justify-center">
              <h1 className="py-4 text-[20px] text-white bg-blue-500/30 text-center w-[14rem] shadow-black shadow-sm rounded-full">Gas Price:</h1>
              <input onChange={e => set_g_price(e.target.value)} className="bg-white/20 text-white  flex py-4 px-6 w-[25rem] rounded-full shadow-sm shadow-black" />
            </div>



            <div className="py-4 flex flex-row sm:w-[550px] w-[450px] justify-center ">
              <button onClick={submit_all} className="mt-6 text-center mx-auto justify-center text-white border bg-blue-500 font-bold text-[18px] flex py-4 px-2 w-[16rem] rounded-2xl shadow-sm shadow-black">Make Payment</button>
            </div>

            {passwordHash 
              ? <a href={passwordHash} className=" flex rounded-2xl sm:w-[550px] w-[450px]  shadow-lg shadow-gray-700/70 justify-center bg-white/75">
                  
                    <div className="flex flex-col sm:w-[550px] w-[450px] overflow-hidden space-y-0 py-2 mx-4">
                        <h1 className="flex text-center mx-auto font-bold">Click here to go to the link: </h1> 
                        <p href="" className="break-words text-ellipsis justify-center flex text-center text-black w-[350px] my-4">{passwordHash}</p>
                      </div>
                </a> 
              : <br/>
            }
            <div className="pb-2 pt-6"></div>
          
        </div>
      </div>




      {showProcessing 
                ? 
                  <div className="fixed h-screen bg-black/70 text-center text-white flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0">
                    <svg className="animate-spin h-10 w-10 bg-blue-500 mb-4" viewBox="0 0 24 24">
                    </svg>
                    Please wait...
                  </div> 
                  
                  
                : ''}

    </div>

  );
}

