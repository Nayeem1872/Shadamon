import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import ad from "../../assets/ad.jpg"
import cover from "../../assets/cover.jpg"

const Advertisement = () => {
  return (
    <div className= "">
    <img  src={ad} alt="" />
    <div className="my-4 p-2 rounded-lg">
      <h2 className="font-bold py-2 text-sm tracking-tight">
        Chat or Send message
      </h2>
      <div className="flex border border-common-gray rounded-sm items-center justify-center gap-2 px-2">
        <BiSearch size={13} />
        <input
          className="place placeholder:text-[12px] bg-transparent"
          type="search"
          placeholder="search by name.."
        />
      </div>
      <div>
        <Carousel
         
          className="   relative mr-2  text-xs overflow-visible border-b border-b-common-gray"
        >
          <div className="flex items-center cursor-pointer justify-center flex-col border-gray-300  rounded-md   gap-1 mr-1 my-2   w-[50px]">
            <div className="relative w-[40px]">
              <img
                className="object-cover  rounded-full  h-[40px]"
                src="/cover.jpg"
                alt=""
              />
              <div className="absolute rounded-full bottom-0 left-[70%] bg-white w-[12px] h-[12px] flex items-center justify-center">
                <span className="bg-green-700 w-[10px] h-[10px] rounded-full "></span>
              </div>
            </div>
            <span className="overflow-hidden text-ellipsis relative whitespace-nowrap w-[40px] leading-3 text-[10px]">
              Moumi Tabassum
            </span>
          </div>
          <div className="flex items-center cursor-pointer justify-center flex-col border-gray-300  rounded-md   gap-1 mr-1 my-2   w-[50px]">
            <div className="relative w-[40px]">
              <img
                className="object-cover  rounded-full  h-[40px]"
                src={cover}
                alt=""
              />
              <div className="absolute rounded-full bottom-0 left-[70%] bg-white w-[12px] h-[12px] flex items-center justify-center">
                <span className="bg-green-700 w-[10px] h-[10px] rounded-full "></span>
              </div>
            </div>
            <span className="overflow-hidden text-ellipsis relative whitespace-nowrap w-[40px] leading-3 text-[10px]">
              Moumi Tabassum
            </span>
          </div>
          <div className="flex items-center cursor-pointer justify-center flex-col border-gray-300  rounded-md   gap-1 mr-1 my-2  w-[50px]">
            <div className="relative w-[40px]">
              <img
                className="object-cover  rounded-full  h-[40px]"
                src={cover}
                alt=""
              />
              <div className="absolute rounded-full bottom-0 left-[70%] bg-white w-[12px] h-[12px] flex items-center justify-center">
                <span className="bg-green-700 w-[10px] h-[10px] rounded-full "></span>
              </div>
            </div>
            <span className="overflow-hidden text-ellipsis relative whitespace-nowrap w-[40px] leading-3 text-[10px]">
              Moumi Tabassum
            </span>
          </div>
          <div className="flex items-center cursor-pointer justify-center flex-col border-gray-300  rounded-md   gap-1 mr-1 my-2   w-[50px]">
            <div className="relative w-[40px]">
              <img
                className="object-cover  rounded-full  h-[40px]"
                src={cover}
                alt=""
              />
              <div className="absolute rounded-full bottom-0 left-[70%] bg-white w-[12px] h-[12px] flex items-center justify-center">
                <span className="bg-green-700 w-[10px] h-[10px] rounded-full "></span>
              </div>
            </div>
            <span className="overflow-hidden text-ellipsis relative whitespace-nowrap w-[40px] leading-3 text-[10px]">
              Moumi Tabassum
            </span>
          </div>
        </Carousel>
      </div>
      <div className="my-3 ">
        <div className="flex items-center gap-1 mb-4 cursor-pointer">
          <img
            className="w-[40px] h-[40px] rounded-full object-cover"
            src={cover}
            alt=""
          />
          <div>
            <h2 className="leading-3 font-semibold text-sm">
              Farhana Yesmin
            </h2>
            <span className="leading-4 text-xs block font-semibold">
              4 days ago
            </span>
            <p className=" relative overflow-hidden text-ellipsis w-[100px] text-sm text-common-gray whitespace-nowrap">
              Hi I am Farhana. I like to be talking{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-4 cursor-pointer">
          <img
            className="w-[40px] h-[40px] rounded-full object-cover"
            src={cover}
            alt=""
          />
          <div>
            <h2 className="leading-3 font-semibold text-sm">
              Farhana Yesmin
            </h2>
            <span className="leading-4 text-xs block font-semibold">
              4 days ago
            </span>
            <p className=" relative overflow-hidden text-ellipsis w-[100px] text-sm text-common-gray whitespace-nowrap">
              Hi I am Farhana. I like to be talking{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-4 cursor-pointer">
          <img
            className="w-[40px] h-[40px] rounded-full object-cover"
            src={cover}
            alt=""
          />
          <div>
            <h2 className="leading-3 font-semibold text-sm">
              Farhana Yesmin
            </h2>
            <span className="leading-4 text-xs block font-semibold">
              4 days ago
            </span>
            <p className=" relative overflow-hidden text-ellipsis w-[100px] text-sm text-common-gray whitespace-nowrap">
              Hi I am Farhana. I like to be talking{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Advertisement