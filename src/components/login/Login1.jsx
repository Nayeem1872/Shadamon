import React from 'react';
import 'tw-elements';
import logo from "../../assets/signup-logo.png"
import { useState } from "react";
import axios from "axios";


const Login1 = () => {
  const [login, setLogin] = useState();
  const onInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    
  };
  const finalObj = (x)=>{
    console.log(x);
    let finalData ={}
    if(x==true){
      finalData = {
        name: login.name,
        email: login.emailphone,
        password: login.password
      }
      
      
    }
    else{
      finalData = {
        name: login.name,
        phone: login.emailphone,
        password: login.password
      }
    }
    loginUser(finalData)
    console.log(finalData);

  }
  //submit form 
  const submitForm = (e)=>{
    e.preventDefault()
    console.log(isNaN(login.emailphone));
    let checkValue = isNaN(login.emailphone)
    checkValue ? finalObj(checkValue) : finalObj(checkValue)
  }


  async function loginUser(event) {
    event.preventDefault();

    async function sendData (formdata ) { await axios.post("https://apiweb.cyclic.app/api/auth/login", formdata,{withCredentials:true}) }

    // const response = await fetch(
    //   "https://apiweb.cyclic.app/api/auth/login",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },

    //     body: JSON.stringify({
          
    //       emailphone,
    //       password,
    //     }),
    //   }
    // );

    const data = await response.json();
    console.log(data);
  }

  
  
  
  
  
  
  
  
  return (
    
       <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="login" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none align-items-center">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto items-center bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
      <div className="pt-5 pb-3 align-middle">
            <span className="px-2 py-1 bg-[#e4e4e4] rounded-l-md">বাংলা</span>
            <span className="px-2 py-1 text-white bg-blue-600 rounded-r-md">
              ENG
            </span>
          </div>
       
      </div>
          <div classname="flex items-center justify-center">
            <img class="object-center" src={logo} alt="" width={100} height={100} />
          </div>
      <div class="modal-body relative px-8 items-center justify-center ">
      <p className="font-semibold text-center">Post an Ad</p>
          <p className="mb-2 text-sm">Please Sign Up to post your ad</p>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center space-x-2 justify-center p-4 border-t border-gray-200 rounded-b-md">
        <form method="post">
            
            <div className="form-floating mb-3 xl:w-96">
              <input
                type="text"
                className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="emailphone"
                onChange={(e) => setEmail(e)}
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput" className="text-gray-700">
                Email or phone
              </label>
            </div>
            <div className="form-floating mb-3 xl:w-96">
              <input
                type="password"
                className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="password"
                onChange={(e) => onInputChange(e)}
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword" className="text-gray-700">
                Password
              </label>
            </div>
            <button type="button" onClick={submitForm} class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Success</button>
          </form>
      
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login1
