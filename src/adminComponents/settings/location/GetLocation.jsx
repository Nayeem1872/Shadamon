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
    <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingThree">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        Sub
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

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