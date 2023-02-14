import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import api from '../../../apiEndpoint/apiEndpoint'

const GetBundle = () => {

  const [bundle,setBundle]=useState([])
  const fetchData = async () => {
    try {
      const reqData = await axios.get(`${api.url}/package/packages`, { withCredentials: true });
      setBundle(reqData.data.data.Bundle);
    } catch (error) {
      console.log(error);
    }
  };



  const handleClick = () => {
    fetchData();
  };
//Handle Delete 
const [showSuccess, setShowSuccess] = useState(false);
const [showDanger, setShowDanger] = useState(false);

  const handleDelete = async (x)=>{
    console.log(x)
    try{
    const delete1 = await axios.delete(`${api.url}/package/deletepackage/${x}`,{withCredentials:true})
    if(delete1.status === 200){
      setShowSuccess(true);
      setTimeout(() => {
      setShowSuccess(false);
      },2000)
    }} catch(error) {
      setShowDanger(true);
    }
}



  return (
    <>
    <button onClick={handleClick}>Fetch Data</button>
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <div>
            { showSuccess && (
              <div className="bg-green-500 text-white p-2 rounded">
             Deleted successfully 
            </div>
            )}
          { showDanger && (
           <div className="bg-red-500 text-white p-2 rounded">
             Something Went Wrong
            </div>
      )}

            </div>
        <table class="min-w-full">
          <thead class="border-b">
          <tr class="border-b bg-gray-800 boder-gray-900">
              <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                Name
              </td>
              <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                Status
              </td>
              <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                Edit
              </td>
              <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                Delete
              </td>
            </tr>
            
          </thead>
          <tbody>
          {bundle.map((b)=>(
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {b.name}
                
                </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <button type="button" class="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                
              {b.packageStatus ? "Active" : "Inactive"}
              
              
              </button>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <button type="button" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handleDelete(b._id)}>Delete</button>
              </td>
            </tr>
           ))}
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    
    
    
    
    
    </>
  )
}

export default GetBundle