import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_root, keep_json_data } from "../api/api_endpoint";
import axios from "axios";
import { createWallet, getWalletBalance } from "./etther_wallet/create_wallet";



export const DashBoard_AddWallet= () => {
  const [token_address, set_token_address]= useState('');
  const [token_key, set_token_key]= useState('');

  const [left_active_tab, set_left_active_tab]= useState(true);
  const [right_active_tab, set_right_active_tab]= useState(false);



  const navigate= useNavigate();
  const go_dashbord_my_wallet= (event) => {
    // If you want to rewrite current page in history with the target page, use replace: true. Otherwise, leave out the config object or set replace: false.
    navigate('/my-wallets', {relative: true});
  }

  const go_login= (event) => {
    navigate('/', {relative: true});
  }





  var access_token;
  const getCookie = (name) => {
      const cookies = document.cookie.split(';');

      for (const cookie of cookies) {
          const [cookieName, cookieValue] = cookie.trim().split('=');

          if (cookieName === name) {
          return decodeURIComponent(cookieValue);
          }
      }

      return null;
  };

  const handleGetCookie = () => {
      // Retrieve the value of the "exampleCookie" cookie
      access_token = getCookie('access_token');
  };

  useEffect(() => {
    handleGetCookie();
    if (access_token === null){
        go_login();
    }

    else{
        axios.get(api_root + 'user/manual_verify_user', {
            headers: {
                'Authorization': access_token,
                'Content-Type': 'application/json', // Add other headers if needed
              },
        }).then()
        .catch(e => {
          if (e.response.status === 401){
            alert("Your session has expired, please login again");
            go_login();
          }
        });
    }
  }, []); 


  const [save_token, set_save_token]= useState(false);
  const [token_balance, set_token_balance]= useState('');

  const create_wallet= async() => {
    set_show_message("");
    setshowProcessing(true);
    try{    
      const wallet= await createWallet();
      const wallet_address= wallet.address;
      const wallet_key= wallet.privateKey;
      set_token_address(wallet_address);
      set_token_key(wallet_key);
      const _balance= await getWalletBalance(wallet_address);
      set_token_balance(_balance);
      set_show_message("New wallet created with 0 Wei balance.");
    }
    catch(e){
      set_show_message("Failed to create wallet, something went wrong.");
    }
    set_save_token(true);
    setshowProcessing(false);
  }



  const [showProcessing, setshowProcessing]= useState(false);
  const [show_message, set_show_message]= useState('');

  const upload_token= () => {
    setshowProcessing(true);
    handleGetCookie();
    if (access_token === null){
        go_login();
    }

    else{
        const json_data= {
          "id": token_address,
          "token_key": token_key
        }

        axios.request(
            {
                method: 'post',
                data: json_data,
                maxBodyLength: Infinity,
                url: api_root + 'user/add-token',
                headers: { 
                  'Authorization': access_token,
                  'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
          set_show_message("Wallet Saved Successfully");
          setshowProcessing(false);
          set_save_token(false);
          keep_json_data.length= 0;
        })
        .catch(e => {
          if (e.response.status === 401){
            alert("Your session has expired, please login again");
            go_login();
          }

          setshowProcessing(false);
          set_show_message("Could not save token, somethig went wrong");
        });
    }
  }

  const discard_token= () => {
    set_save_token(false);
    set_token_address('');
    set_token_key('');
    set_show_message("");
  }



  return (
    
    <div className="relative">
      <div className="h-screen max-h-screen relative mx-auto flex flex-col">
        <div className="flex w-screen  h-14 space-x-6 justify-evenly text-white">
          <div className={`${left_active_tab ? "bg-blue-500 shadow-sm shadow-black": "bg-gray-500"} cursor-pointer hover:bg-blue-400 active:bg-blue-300 mx-auto w-screen text-center flex justify-center`}> <h1 className={`${left_active_tab ? "font-bold text-xl" : ""} flex justify-center self-center`}>Add Wallet <span className="pl-2">+</span></h1> </div>
          <div onClick={go_dashbord_my_wallet} className={`${right_active_tab ? "bg-blue-500 shadow-sm shadow-black": "bg-gray-500"} cursor-pointer hover:bg-blue-400 active:bg-blue-300 mx-auto w-screen text-center flex justify-center`}> <h1 className={`${right_active_tab ? "font-bold text-xl" : ""} flex justify-center self-center`}>My Wallets</h1> </div>
        </div>

        <div className="h-screen overflow-hidden justify-center flex flex-col space-y-2 ">
          <div className="flex lg:flex-row flex-col mx-auto items-center justify-center text-white text-[20px]">
            <h1 className="font-bold lg:w-40">Token Address:</h1>
            <textarea readOnly className=" outline-none rounded-2xl lg:ml-6 px-4 py-2 shadow-sm shadow-black lg:w-[45rem] w-[25rem] resize-none bg-white/20 text-white/65 flex" defaultValue={token_address} />
          </div>

          <br />

          <div className="flex lg:flex-row flex-col mx-auto items-center justify-center lg:space-y-6   text-white text-[20px]">
            <h1 className="font-bold lg:w-40">Private Key:</h1>
            <textarea readOnly className="outline-none rounded-2xl lg:ml-6 px-4 py-2 shadow-sm shadow-black lg:w-[45rem] w-[25rem] resize-none bg-white/20 text-white/65 flex" defaultValue={token_key} />
          </div>

          <br />

          <h1 className="mx-4 text-center py-2 text-white font-bold text-[18px]">{show_message}</h1>



          
          {! save_token 
            ? 
              <div onClick={create_wallet} className={` sm:scale-100 md:scale-100 lg:scale-100 scale-125 px-6 py-2 rounded-2xl text-white bg-blue-500 shadow-sm shadow-black cursor-pointer hover:bg-blue-400 active:bg-blue-300 mx-auto text-center flex justify-center`}> 
                <h1 className={` font-bold text-xl flex justify-center self-center`}>Generate Token</h1> 
              </div>
            
            
            :
              <div className="flex flex-row"> 
                <div onClick={upload_token } className={` sm:scale-100 md:scale-100 lg:scale-100 scale-125 px-6 py-2 rounded-2xl text-white bg-green-600 shadow-sm shadow-black cursor-pointer hover:bg-blue-400 active:bg-blue-300 mx-auto text-center flex justify-center`}> 
                  <h1 className={` font-bold  flex justify-center self-center`}>Save Token</h1> 
                </div>


                <div onClick={discard_token } className={` sm:scale-100 md:scale-100 lg:scale-100 scale-125 px-6 py-2 rounded-2xl text-white bg-red-600 shadow-sm shadow-black cursor-pointer hover:bg-blue-400 active:bg-blue-300 mx-auto text-center flex justify-center`}> 
                  <h1 className={` font-bold flex justify-center self-center`}>Discard Token</h1> 
                </div>
              </div>

          }
        </div>
      </div>      




      {showProcessing 
              ? 

                <div className="fixed h-screen bg-black/70 text-center text-white flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0">
                  <svg className="animate-spin h-10 w-10 bg-blue-500 mb-4" viewBox="0 0 24 24">
                  </svg>
                   Please wait...
                </div> 
                
                
              : <div> </div>}
    </div>


  );
}

