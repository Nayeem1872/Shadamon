import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Getlocation = () => {
  const [locationss, setLocations] = useState([]);
  const [firstCall, setFirstcall] = useState(false)

  
  
  
  useEffect (()=>{
    
    const getUser = async ()=>{ 
      const reqData = await axios.get("https://sadamon.onrender.com/api/product/alllocations",{withCredentials:true});
      // const resData = await reqData.json()
      setLocations(reqData.data.data);
      
      
      
  
    }
    if(firstCall===false){
      setFirstcall(true)
    }
    
      getUser()
      
      

  },[locationss]);
  


  
  
  return (

       <>
       <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Location
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Order
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Status
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Entry Date
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {locationss.map((users)=>console.log(users))} */}
            { locationss.map((user)=>(



          <tr
          
          class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.location.locationName}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.location.ordering}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.location.status===1?"Active":"Inactive"}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.location.updatedAt}
              </td>
             
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <Link to='/edit' class='btn btn-blue mx-2'> Edit</Link>
            <Link to='/edit' class='btn btn-danger'> Delete</Link>
            </td>
            </tr>
             )) } 
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
       
       
       
       
       
       </>
    )
}

export default Getlocation