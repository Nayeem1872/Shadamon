import React from 'react';
import 'tw-elements';
import logo from "../../assets/signup-logo.png"



const Signup = () => {
  return (
   
       <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="signup" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
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
                <div class="flex justify-center">
  <div>
  <div class="form-floating mb-3 xl:w-96">
      <input type="name" class="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" />
      <label for="floatingInput" class="text-gray-700">Name</label>
    </div>
    <div class="form-floating mb-3 xl:w-96">
      <input type="email" class="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" />
      <label for="floatingInput" class="text-gray-700">Email address</label>
    </div>
    <div class="form-floating mb-3 xl:w-96">
      <input type="password" class="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingPassword" />
      <label for="floatingPassword" class="text-gray-700">Password</label>
    </div>
  </div>
</div>
                <button
                  type="button"
                  className={`pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-common-color disabled:opacity-70` } data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
                  
                >
                  <p className="mx-auto">Back</p>
                </button>
                <button
                  type="button"
                  className={`pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-common-color disabled:opacity-70`}
                  data-bs-toggle="modal" data-bs-target="#login">
                  <p className="mx-auto">Login</p>
                </button>
                <p className="mx-auto" >Forget Password?</p>
              
       </form>
      
    </div>
    </div>
    </div>
    </div>
  )
}

export default Signup
