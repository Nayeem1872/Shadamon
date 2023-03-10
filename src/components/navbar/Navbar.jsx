import React from "react";

import {FaEnvelope} from "react-icons/fa";
import {GoChevronDown} from "react-icons/go";
import {BiHome, BiChevronDown,BiEnvelope, BiSearch  } from "react-icons/bi";
import { CgProfile  } from "react-icons/cg";
import { BsPlusLg  } from "react-icons/bs";
import logo from "../../../src/head-logo.png"

const Navbar = () => {
  return (

    <>
    <div className="sticky top-0 z-50 lg:bg-common-bg transition-full duration-300 bg-body-bg translate-y-[-100%] lg:translate-y-0">
    <div className="flex gap-[50px] sm:w-[500px] w-full p-1 lg:w-auto  lg:justify-center justify-between mx-auto items-center lg:border-b lg:border-b-[#dee2e6] border-0 py-2 lg:py-0">
      <div
        className="w-[250px] lg:pl-5 flex items-center cursor-pointer">
        <img src={logo} width="132px" height="100%" alt="logo" />
        <div className="border-l-[2px] border-common-gray pl-1 ml-1 flex flex-col mb-[-12px] lg:hidden">
          <span className="leading-[8px] text-[12px] font-bold">
            546534
          </span>
          <span className="leading-3 text-[9px]">Result</span>
        </div>
      </div>
      <div className="w-[500px] nav__item  lg:flex hidden">
        <div className="p-2 active">
          <a href="#"> All Adds</a>
        </div>
        <div className="p-2">
          <a href="#"> Loan</a>
        </div>
        <div className="p-2">
          <a href="#"> Offer</a>
        </div>
        <div className="p-2">
          <a href="#"> Bid</a>
        </div>
      </div>
      <div className="w-[180px] flex items-center justify-end gap-1">
        <button className="nav__icon">en</button>
        <div className="nav__icon active">
          <FaEnvelope />
        </div>
        <div>
          <button className="px-1 py-1 font-medium tracking-tight text-white whitespace-nowrap uppercase rounded-full text-[13px] hidden lg:block cursor-pointer bg-common-color">
            post add
          </button>
        </div>
        <div className="nav__icon">
          <GoChevronDown data-bs-toggle="modal" data-bs-target="#exampleModalCenter"/>
        </div>
      </div>
    </div>
    <div className="hidden lg:flex justify-center lg:border-b lg:border-b-[#dee2e6]">
      <div className="w-[250px]"></div>
      <div className="w-[500px] nav__item lg:flex hidden text-common-gray  items-center gap-2 font-semibold text-[1rem]">
        <div className="p-2 my-1 w-auto rounded-md nav__icon text-common-color">
          <a href="#"> All Products</a>
        </div>
        <div className="p-2 my-1 w-auto rounded-md nav__icon">
          <a href="#"> All Orders</a>
        </div>
        <div className="p-2 my-1 w-auto rounded-md nav__icon">
          <a href="#"> My Page</a>
        </div>
        <div
          className="p-2 my-1 w-auto rounded-md nav__icon">
          <span> Promote</span>
        </div>
      </div>
      <div className="w-[160px]"></div>
    </div>
  </div>
  <div className=" bg-white items-center max-w-[500px] border lg:hidden rounded-t-[30px]  fixed bottom-0 z-50  w-full left-[50%] translate-x-[-50%] text-center
       transition-all duration-300 translate-y-[100%]">
        <div className="hidden justify-center rounded-full">
          <div className="basis-[30%] flex px-2 pt-1 rounded-full justify-around   bg-white  ">
            <div className="flex flex-col justify-center items-center">
              <div className="text-black nav__icon">
                <BiHome size={22} />
              </div>
              <span className="text-sm font-semibold tracking-tight leading-3 text-common-gray">
                Post
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-black nav__icon">
                <BiHome size={22} />
              </div>
              <span className="text-sm font-semibold tracking-tight leading-3 text-common-gray">
                Post
              </span>
            </div>
          </div>
          <div className=" rounded-full mt-[-5px] ">
            <div className=" flex items-center justify-center rounded-full  w-[35px] h-[35px] nav__icon border-common-gray border text-black">
              <BiChevronDown className="font-bold" size={25} />
            </div>
          </div>
          <div className="basis-[30%] flex px-2 pt-1 rounded-full justify-around bg-white ">
            <div className="flex flex-col justify-center items-center">
              <div className="text-black nav__icon">
                <BiEnvelope size={22} />
              </div>
              <span className="text-sm font-semibold tracking-tight leading-3 text-common-gray">
                Page
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-black nav__icon">
                <CgProfile size={22} />
              </div>
              <span className="text-sm font-semibold tracking-tight leading-3 text-common-gray">
                Promote
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-[#747474]">
          <div className="flex gap-2 justify-center self-end pr-2 bg-white rounded-full border-t-2 basis-full sm:justify-around sm:gap-0 border-t-common-gray">
            <div className="flex flex-col justify-center items-center px-2 py-1 text-black bg-gray-300 rounded-b-2xl">
              <BiHome size={25} />
              <span className="text-xs leading-3">Home</span>
            </div>
            <div className="flex flex-col justify-center items-center px-2 py-1 rounded-b-2xl">
              <BiSearch size={25} />
              <span className="text-xs leading-3">Search</span>
            </div>
          </div>
          <div className="p-2 pt-0 rounded-md rounded-b-full border-b-2 border-b-common-gray">
            <div className=" flex items-center justify-center px-2 rounded-full  w-[37px] h-[37px] bg-common-color text-white ">
              <BsPlusLg className="font-bold" size={35} />
            </div>
          </div>
          <div className="flex gap-2 justify-center self-end pr-2 bg-white rounded-full border-t-2 basis-full sm:justify-around sm:gap-0 border-t-common-gray">
            <div className="flex flex-col justify-center items-center px-2 py-1 rounded-b-2xl">
              <BiEnvelope size={25} />
              <span className="text-xs leading-3">Message</span>
            </div>
            <div className="flex flex-col justify-center items-center px-2 py-1 rounded-b-2xl">
              <CgProfile size={25} />
              <span className="text-xs leading-3">Profile</span>
            </div>
          </div>
        </div>
      </div>


  
  
  
  
  </>
  
  );
};

export default Navbar;
