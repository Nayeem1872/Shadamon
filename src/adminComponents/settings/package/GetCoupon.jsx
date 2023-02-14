import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import api from '../../../apiEndpoint/apiEndpoint'
import { useEffect } from 'react'

const GetCoupon = () => {
    const [coupon,setCoupon]=useState([])

// Fetch data



    // useEffect(()=>{
    //     const getUser = async()=>{
    //           try{
    //             const reqData = await axios.get(`${api.url}/package/packages`,{withCredentials:true});
    //             setCoupon(reqData.data.data);
        
        
        
    //           }catch(error){
        
    //             console.log(error);
        
    //           }
        
    //     };
    //     getUser()
    //     console.log(coupon)
        
        
        
    //     },[])


    const fetchData = async () => {
        try {
          const reqData = await axios.get(`${api.url}/package/packages`, { withCredentials: true });
          setCoupon(reqData.data.data.Coupone);
        } catch (error) {
          console.log(error);
        }
      };



      const handleClick = () => {
        fetchData();
      };



// Delete
const [showSuccess, setShowSuccess] = useState(false);
const [showDanger, setShowDanger] = useState(false);

  const handleDelete = async (x)=>{
    console.log(x)
    try{
    const delete1 = await axios.delete(`${api.url}/package/deletecoupon/${x}`,{withCredentials:true})
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
          <tr class="border-b bg-indigo-100 border-indigo-200">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Total Post
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Coupon Code
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                InTime
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Discount Amount
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Status
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Valid Days
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Actions
              </td>
            </tr>
          </thead>
          
          <tbody>
            {coupon.map((c)=>(



            
          <tr class="border-b bg-gray-50 border-gray-200  hover:bg-gray-100">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {c.totalPost}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {c.couponCode}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {c.inTime}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {c.discAmount}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {c.status ? "Active" : "Inactive"}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {c.validDays}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <button type="button" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
              <button type="button" class="inline-block mx-2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handleDelete(c._id)}>Delete</button>
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

export default GetCoupon