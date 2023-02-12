import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../apiEndpoint/apiEndpoint';

const Getlocation = () => {


  // get location
  const [locationss, setLocations] = useState([]);
  const [firstCall, setFirstcall] = useState(false)

  
  
  
  // useEffect (()=>{
    
  //   const getUser = async ()=>{ 
  //     const reqData = await axios.get("https://sadamon.onrender.com/api/product/alllocations",{withCredentials:true});
  //     // const resData = await reqData.json()
  //     setLocations(reqData.data.data);
      
      
      
  
  //   }
  //   if(firstCall===false){
  //     setFirstcall(true)
  //   }
    
  //     getUser()
      
      

  // },[locationss]);


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

// Get Sub Location
const [sub, setSub] = useState([]);

useEffect(()=>{
  const getUser = async()=>{
        try{
          const reqData = await axios.get(`${api.url}/product/alllocations`,{withCredentials:true});
          setSub(reqData.data.data);
  
  
  
        }catch(error){
  
          console.log(error);
  
        }
  
  };
  getUser()
  console.log(sub)
  
  
  
  },[])



  
  
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
            <th>#</th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Location
              </th>
            {/* <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          
  <a  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
 

</th> */}
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
            { sub.map((user)=>(



      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
        {/* <td>
          <div id="collapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
        <li class="icon"><Link to={"/admin/location"}>location</Link></li>
        <li><Link to={"/admin/categories"}>Categories</Link></li>
        <li><Link to={"/admin/package"}>Package</Link></li>
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Order:
              </th>
              <td>89</td>
      </div>
    </div></td> */}
    <td>
    <p class="md:space-x-1 space-y-1 md:space-y-0 mb-4">
    <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
    </p>
    
    </td>
    

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
    <button class="bg-red-600" onClick={() => handleDelete(user.location._id)}>Delete</button>
  </td>
  
  <thead>
  
  

  {/* {showDetails[user.location.locationName] && ( */}

    
  
  <tr>
    <td colSpan={5}>
      <table>
        <tbody>
          <tr>
            <th>Sublocation:</th>
            <td>
          <div id="collapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
        {/* <li class="icon"><Link to={"/admin/location"}>location</Link></li>
        <li><Link to={"/admin/categories"}>Categories</Link></li>
        <li><Link to={"/admin/package"}>Package</Link></li> */}
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Order:
              </th>
              <td>89</td>
      </div>
    </div></td>
          </tr>
          <tr>
            <th>URL:</th>
            <td>{user.sublocations.link}</td>
          </tr>
          <tr>
            <td>Ordering</td>
            <td>{user.sublocations.ordering}</td>
          </tr>
          <tr>
            <td>Entry Date</td>
            <td>{user.sublocations.createdAt}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{user.sublocations.status}</td>
          </tr>
          <div>
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="block p-6 rounded-lg shadow-lg bg-white">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
        </tbody>
      </table>
    </td>
  </tr>
  
{/* )}  */}
     </thead>
     
            </tr>
            
           )  ) } 
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