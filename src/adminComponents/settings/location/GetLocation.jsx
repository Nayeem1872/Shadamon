import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../apiEndpoint/apiEndpoint';

const Getlocation = () => {


  // get location
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


  // delete fuction

  const [showSuccess, setShowSuccess] = useState(false);
  const [showDanger, setShowDanger] = useState(false);

    const handleDelete = async (x)=>{
      console.log(x)
      try{
      const delete1 = await axios.delete(`${api.url}/product/deletelocation/${x}`,{withCredentials:true})
      if(delete1.status === 200){
        setShowSuccess(true);
        setTimeout(() => {
        setShowSuccess(false);
        },2000)
      }} catch(error) {
        setShowDanger(true);
      }
}



//nested table
  
const [showDetails, setShowDetails] = useState({});

const toggleDetails = name => {
  setShowDetails({
    ...showDetails,
    [name]: !showDetails[name]
  });
};

  
  
  return (

       <>
       <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <div>
            { showSuccess && (
              <div className="bg-green-500 text-white p-2 rounded">
             deleted successfully 
            </div>
            )}
          { showDanger && (
           <div className="bg-red-500 text-white p-2 rounded">
             Something Went Wrong
            </div>
      )}

            </div>
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



          <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
             <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    <a href="#" onClick={() => toggleDetails(user.location.locationName)}>
      {user.location.locationName}
    </a>
  </td>
  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    {user.location.ordering}
  </td>
  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    {user.location.status === 1 ? "Active" : "Inactive"}
  </td>
  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    {user.location.updatedAt}
  </td>
  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    <Link to='/edit' class='btn btn-blue mx-2'> Edit</Link>
    <button onClick={() => handleDelete(user.location._id)}>Delete</button>
  </td>
  {showDetails[user.location.locationName] && (
  <tr>
    <td colSpan={5}>
      <table>
        <tbody>
          <tr>
            <td>Sublocation</td>
            <td>{user.location.sublocation}</td>
          </tr>
          <tr>
            <td>Ordering</td>
            <td>{user.location.ordering}</td>
          </tr>
          <tr>
            <td>URL</td>
            <td>{user.location.url}</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
)}
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