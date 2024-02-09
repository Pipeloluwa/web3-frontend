import { useEffect, useState } from "react";
import { getWalletBalance, start_process } from "../create_wallet";
import { useNavigate } from "react-router-dom";
import { api_root, keep_json_data, keep_json_data2, keep_sender_address, keep_sender_key } from "../api/api_endpoint";
import axios from "axios";



export const DashBoard_MyWallets= () => {
  const [token_address, set_token_address]= useState('');
  const [token_key, set_token_key]= useState('');

  const [left_active_tab, set_left_active_tab]= useState(false);
  const [right_active_tab, set_right_active_tab]= useState(true);




  const navigate= useNavigate();
  const go_dashbord_add_wallet= (event) => {
    // If you want to rewrite current page in history with the target page, use replace: true. Otherwise, leave out the config object or set replace: false.
    navigate('/add-wallet', {relative: true});
  }




  const go_login= (event) => {
    navigate('/', {relative: true});
  }



  const go_transaction= (event, sender_address, sender_key) => {
    localStorage.setItem('sender_address', sender_address);
    localStorage.setItem('sender_key', sender_key);
    navigate('/make-transaction', {relative: true});
  }

  const [showProcessing, setshowProcessing]= useState(false);

  const [model_json_data, set_model_json_data]= useState([]);
  const model_json_data_= async (res) => {
      setshowProcessing(true);
      
      keep_json_data.length= 0;
      
      keep_json_data.push(res.data.user_tokens);

      const store_data= [];
      for (let i=0; i < keep_json_data[0].length; i ++){
        const get_balance= await getWalletBalance(keep_json_data[0][i].id);
        store_data.push(
          <div key={i} className="scale-90 bg-black/25 border border-white/30 border-x-white/10 mx-auto p-2 justify-center flex flex-col space-y-2">
            
            <div className="px-6 justify-between flex text-white text-[20px]">
              <label>Balance:</label> <span>Wallet {(i+1)} </span>
            </div>
            
            <div className="flex lg:flex-row flex-col mx-auto items-center justify-center text-white text-[20px]">
              <textarea readOnly  className=" outline-none rounded-2xl lg:ml-6 px-4 py-2 shadow-sm shadow-black lg:w-[45rem] w-[25rem] resize-none bg-white/20 text-white/65 flex" defaultValue= {`${get_balance} Mei`} />
            </div>


            <div className="flex sm:mx-auto lg:mx-6 mx-auto text-white text-[20px]">
              <label>Address:</label>
            </div>

            <div className="flex lg:flex-row flex-col mx-auto items-center justify-center text-white text-[20px]">
              <textarea readOnly  className=" outline-none rounded-2xl lg:ml-6 px-4 py-2 shadow-sm shadow-black lg:w-[45rem] w-[25rem] resize-none bg-white/20 text-white/65 flex" defaultValue={keep_json_data[0][i].id} />
            </div>

            <div onClick={event => {go_transaction(event, keep_json_data[0][i].id, keep_json_data[0][i].token_key)}} className={`sm:scale-75 md:scale-75 lg:scale-75 scale-75 px-6 py-2 rounded-2xl text-white bg-blue-500 shadow-sm shadow-black cursor-pointer hover:bg-blue-400 active:bg-blue-300 mx-auto text-center flex justify-center`}> 
              <h1 className={`font-bold text-xl flex justify-center self-center`}>Make Transaction</h1> 
            </div>
          </div>
        );
      }

      set_model_json_data(store_data);
      keep_json_data2.length= 0;
      keep_json_data2.push(store_data);
      setshowProcessing(false);
  };




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
    if (keep_json_data.length === 0){
      handleGetCookie();
      if (access_token === null){
          go_login();
      }

      else{
          axios.get(api_root + 'user/get-user', {
              headers: {
                  'Authorization': access_token,
                  'Content-Type': 'application/json', // Add other headers if needed
                },
          }).then((response) => {
            model_json_data_(response)
          })
          .catch(e => {
            if (e.response.status === 401){
              alert("Your session has expired, please login again");
              go_login();
            }
          });
      }
    }


    else{

      set_model_json_data(keep_json_data2);
      // const retrieve_data= async() => {
      //   const store_data= [];
      //   for (let i=0; i < keep_json_data[0].length; i ++){
      //     const get_balance= await getWalletBalance(keep_json_data[0][i].id);
      //     store_data.push(
      //       <div key={i} className="scale-90 bg-black/25 border border-white/30 border-x-white/10 mx-auto p-2 justify-center flex flex-col space-y-2">
      //         <div className="flex lg:flex-row flex-col mx-auto items-center justify-center text-white text-[20px]">
      //           <label>Balance:</label>
      //           <textarea readOnly  className=" outline-none rounded-2xl lg:ml-6 px-4 py-2 shadow-sm shadow-black lg:w-[45rem] w-[25rem] resize-none bg-white/20 text-white/65 flex" defaultValue= {`${get_balance} Mei`} />
      //         </div>

      //         <div className="flex lg:flex-row flex-col mx-auto items-center justify-center text-white text-[20px]">
      //           <label>Address:</label>
      //           <textarea readOnly  className=" outline-none rounded-2xl lg:ml-6 px-4 py-2 shadow-sm shadow-black lg:w-[45rem] w-[25rem] resize-none bg-white/20 text-white/65 flex" defaultValue={keep_json_data[0][i].id} />
      //         </div>

      //         <div onClick={event => {go_transaction(event, keep_json_data[0][i].id, keep_json_data[0][i].token_key)}} className={`sm:scale-75 md:scale-75 lg:scale-75 scale-75 px-6 py-2 rounded-2xl text-white bg-blue-500 shadow-sm shadow-black cursor-pointer hover:bg-blue-400 active:bg-blue-300 mx-auto text-center flex justify-center`}> 
      //           <h1 className={`font-bold text-xl flex justify-center self-center`}>Make Transaction</h1> 
      //         </div>
      //       </div>
      //     );
      //   }
      //   set_model_json_data(store_data);
      // }
      // retrieve_data();

    }
  }, []); 



  return (
    <div className="h-screen max-h-screen relative mx-auto flex flex-col">
      <div className="flex w-screen  h-14 space-x-6 justify-evenly text-white">
        <div onClick={go_dashbord_add_wallet} className={`${left_active_tab ? "bg-blue-500 shadow-sm shadow-black": "bg-gray-500"} cursor-pointer hover:bg-blue-400 active:bg-blue-300 mx-auto w-screen text-center flex justify-center`}> <h1 className={`${left_active_tab ? "font-bold text-xl" : ""} flex justify-center self-center`}>Add Wallet <span className="pl-2">+</span></h1> </div>
        <div className={`${right_active_tab ? "bg-blue-500 shadow-sm shadow-black": "bg-gray-500"} cursor-pointer hover:bg-blue-400 active:bg-blue-300 mx-auto w-screen text-center flex justify-center`}> <h1 className={`${right_active_tab ? "font-bold text-xl" : ""} flex justify-center self-center`}>My Wallets</h1> </div>
      </div>



      <div className="h-screen pt-8  overflow-x-hidden  flex flex-col space-y-10 ">
          {model_json_data}
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

