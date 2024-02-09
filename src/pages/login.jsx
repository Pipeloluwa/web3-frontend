import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {api_root, keep_bearer_token} from '../api/api_endpoint';
import axios from "axios";



export const Login= () => {
  const navigate= useNavigate();
  const go_dashboard= (event) => {
    // If you want to rewrite current page in history with the target page, use replace: true. Otherwise, leave out the config object or set replace: false.
    navigate('/add-wallet', {relative: true});
  }

  const go_signup= (event) => {
    // If you want to rewrite current page in history with the target page, use replace: true. Otherwise, leave out the config object or set replace: false.
    navigate('/sign-up', {relative: true});
  }

  const [showProcessing, setshowProcessing]= useState(false);
  const [show_message, set_show_message]= useState('');

  let [username, set_username]= useState('');
  let [password, set_password]= useState('');



  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : '');

    document.cookie = `${name}=${cookieValue}; path=/`;
  };

  let access_token;
  const post_request= (string_json_upload) => {
      setshowProcessing(true);

      axios.request(
          {
              method: 'post',
              data: string_json_upload,
              maxBodyLength: Infinity,
              url: api_root + 'login',
              headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
              }
          }
      )
      .then((response) => {
          const bearer_token= (`${response.data.token_type} ${response.data.access_token}`);
          setCookie('access_token', bearer_token, 1);

          set_show_message("");
          setshowProcessing(false);
          go_dashboard();
      })
      .catch((error) => {
          if (error.response.status === 404){
            set_show_message(error.response.data.detail);
          }

          else{set_show_message("Sorry, we could not create your account!")}
          setshowProcessing(false);
          console.log(error.response.status);
      });
  }


  const submit_all = async() => {
    const get_username= username.trim();
    const get_password= password.trim();

    if (get_username.length === 0){
      return alert("You have not entered the username");
    }

    else if (get_password.length === 0){
      return alert("You have not entered the password");
    }


    const json_upload= {"username": get_username, "password": get_password};
    post_request(json_upload);
  }


  return (
    <div>
      <div className="lg:scale-75 md:scale-100 sm:scale-75 scale-90  h-screen max-h-screen relative mx-auto justify-center items-center flex flex-col sm:mt-0 -mt-8">
          <h1 className="sm:text-[20px] px-5 my-5 text-center sm:py-2 py-8 lg:text-3xl font-bold text-white">React ERC20 Wallet Sample Project</h1>
          
          <div className=" flex flex-col lg:mt-0  md:w-[550px] sm:w-[540px] w-[380px] bg-[#3f3f7e] shadow-md shadow-black/50 rounded-3xl mx-auto sm:gap-y-6  gap-y-4 justify-center items-center">
            <div className="pb-2 mx-auto flex justify-center"></div>

            <h1 className="px-5 shadow-lg justify-center flex items-center text-center pt-6 pb-8 text-3xl font-bold text-white">User Login</h1>
            <h1 className="mx-4 text-white font-bold text-[18px]">{show_message}</h1>


            <div className="flex flex-row md:w-[550px] sm:w-[500px] mx-auto space-x-2 justify-center ">
              <input type="text" onChange={e => set_username(e.target.value)} className="bg-white/20 text-white flex justify-center py-4 px-6 sm:w-[25rem] w-[20rem] rounded-full shadow-sm shadow-black" placeholder={"Username"} />
            </div>

            <div className="flex flex-row md:w-[550px]  sm:w-[500px] mx-auto space-x-2 justify-center">
              <input type="password" onChange={e => set_password(e.target.value)} className="bg-white/20 text-white  flex py-4 px-6 sm:w-[25rem] w-[20rem] rounded-full shadow-sm shadow-black" placeholder={"Password"} />
            </div>



            <div className="sm:py-4  flex flex-row md:w-[550px] justify-center ">
              <button onClick={submit_all} className="mt-6 text-center mx-auto justify-center text-white border bg-blue-500 text-[18px] font-bold flex py-4 px-2 sm:w-[16rem] w-[11rem] rounded-2xl shadow-sm shadow-black">Login</button>
            </div>

            <button onClick={go_signup} className="underline pb-6 text-center text-white">Don't have account? click here to sign up!</button>
          
        </div>
      </div>


      {showProcessing 
              ? 
                // <div className="fixed h-screen bg-black/70 text-center text-white flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0">
                //   <svg className="animate-spin h-10 w-10 border-[6px] border-[#714E2C] border-t-[#714E2C] rounded-full mb-4" viewBox="0 0 24 24">
                //   </svg>
                //   Please wait...
                // </div>

                <div className="fixed h-screen bg-black/70 text-center text-white flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0">
                  <svg className="animate-spin h-10 w-10 bg-blue-500 mb-4" viewBox="0 0 24 24">
                  </svg>
                   Logging in...
                </div> 
                
                
              : <div> </div>}
    </div>

  );
}

