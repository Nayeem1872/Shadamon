import React from 'react';
import 'tw-elements';
import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxLine } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import logo from "../../assets/signup-logo.png"
// import { Link } from 'react-router-dom';
import login1 from './Login1';


const Login = () => {
  return (
    <div>
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
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
        <form
                
                action=""
                className="flex flex-col items-center w-full justify-content-center"
              >
                <div
                  className="border w-[78%] rounded-md "
                  id="recaptcha-container"
                >
                  <select name="" id="" className="py-2">
                    <option value="BD">+880</option>
                    <option value="USA">+000</option>
                  </select>
                  <input
                    
                    className="py-2 pl-2 w-auto"
                    type="tel"
                    name=""
                    minLength={9}
                    id=""
                    value=""
                    required
                    placeholder="Enter mobile number"
                  />
                </div>
                <button
                  type="submit"
                  className={`pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-common-color disabled:opacity-70`}
                  
                >
                  <p className="mx-auto">Continue</p>
                </button>
                <p>OR</p>
              <button
            type="submit"
            className={`pl-5 my-1 border flex text-center items-center gap-3 w-[78%] rounded-md p-2 disabled:opacity-70`}>
            <div>
              <FcGoogle />
            </div>
            <p className='text-center'>Continue with Google</p>
          </button>
          <button
            className="pl-5 my-1 border text-center flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-blue-900">
            <div>
              <RiFacebookBoxLine />
            </div>
            <p className='text-center'>Continue with Facebook</p>
          </button>
          <button
            className="pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 bg-common-color text-white"
           
          >
            <div>
              <BiEnvelope />
            </div>
            <p className='text-center'>Continue with Email or Phone Number</p>
          </button>
       </form>
        <a >
        <button type="button"
          class=" px-6 py-2.5 flex items-center bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" data-bs-toggle="modal" data-bs-target="#login">
          LOGIN
        </button>
        </a>
        
        <button type="button" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#signup"> Registration</button>
        
      </div>
      <ul className="flex text-center gap-5 my-4 text-xs list-disc text-common-gray">
              <li>Posting Rules</li>
              <li>Posting Allowance</li>
              <li>Helpline</li>
              <li>Help Chat</li>
            </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login