import React from 'react'
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex shadow-xl p-2 px-4 items-center gap-3 bg-white rounded-lg my-4">
      <div className="flex bg-blue-500 p-2 rounded-lg">
        <div className="p-1 border rounded-full bg-white">
          <BiSearch />
        </div>
      </div>
      <p className="leading-5 font-semibold">
        What Are You looking for today? Find it near you.
      </p>
    </div>
  )
}

export default Search