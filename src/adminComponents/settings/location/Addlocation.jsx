import React from 'react'
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import Datatable from '../../locationDatatable/LocationDatatable'
import './location.scss';
import Getlocation from './GetLocation';
import Test from './Test';
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../../apiEndpoint/apiEndpoint'



const Addlocation = () => {

    // Add Location
    const [data, setData] = useState();
    const onInputChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
      
    };
    const finalObj = (x)=>{
      console.log(x);
      let finalData ={}
      if(x==true){
        finalData = {
          
          locationName: data.locationName,
          ordering: data.ordering,
          status: data.status,
        }
        
        
      }
      else{
        finalData = {
          
          locationName: data.locationName,
          ordering: data.ordering,
          status: data.status,
        }
      }
      addData(finalData)
      console.log(finalData);
  
    }

    const submitForm = (e)=>{
      e.preventDefault()
      finalObj();
      // let checkValue = isNaN(login.emailphone)
      // checkValue ? finalObj(checkValue) : finalObj(checkValue)
    }

    async function addData(formdata) {
      // event.preventDefault();
  
      // const sendData = await axios.post("https://apiweb.cyclic.app/api/auth/login", formdata,{withCredentials:true},{
  
      // body: JSON.stringify(formdata),
  
      // });
    
      
    
      // const data = await sendData.json();
      // console.log(data);
      const response = await fetch(
        "https://sadamon.onrender.com/api/product/location",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
  
          body: JSON.stringify(formdata),
        }
      );
  
      const data = await response.json();
     
  
  
      console.log(data);
    
    }



// put location into option

const [locationName,setLocations]= useState ([]);


useEffect(() => {
    const getUser = async () => {
        try {
          const reqData = await axios.get("https://sadamon.onrender.com/api/product/alllocations", { withCredentials: true });
          setLocations(reqData.data.data);
        } catch (error) {
          console.error(error);
        }
      };
      getUser()
      console.log(locationName)
  }, []);


// Add SubLocation

const [data1, setData1] = useState()
  
  const onInputChange1 = (e) =>{

    setData1({ ...data1, [e.target.name]: e.target.value });
}
  
  const finalobj1 = ()=>{
    console.log();
    let finalData1 ={}
    finalData1 ={
  locationId: data1.locationId,
    subLocationName: data1.subLocationName,
    link: data1.link,
    ordering: data1.ordering,
    status: data1.status,
    }
    console.log(finalData1)
  
  addSubData (finalData1)
  console.log(finalData1)
  }


  const submitForm1 = (e)=>{
    e.preventDefault()
    finalobj1()
  }


  async function addSubData(formdata) {
    // event.preventDefault();

    const sendData = await axios.post(`${api.url}/product/postsublocation`, formdata,{withCredentials:true},{

    body: JSON.stringify(formdata),

    });
  
    
  
    const data = await sendData.json();
    console.log(data);

  
  }







    return (
        <div>
          <div className="list">
            <Sidebar />
            <div className="listContainer">
              <Navbar />
              <div>
                <div class=" flex flex-1 mx-2 mt-2 p-4">
                  <button
                    type="button"
                    class="flex items-end px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                  >
                    + Add Sub-Location
                  </button>
                  <div
                    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModalCenter"
                    tabindex="-1"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-modal="true"
                    role="dialog"
                  >
                    <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                      <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <form method="post" >
                      
      
                            <div class="mb-3 xl:w-96">
                              <label
                                for="exampleFormControlInpu3"
                                class="form-label inline-block mb-2 text-gray-700"
                              >
                                Add Sub-Location
                                
                              </label>
                              {/* Location */}
                              
                              <div className="flex">
                                <label>
                                  <select
                                   onChange={(e) => onInputChange1(e)} 
                                name='locationId'
                                    class="
                   form-control
                   block
                   w-full
                   px-3
                   py-1.5
                   mb-4
                   pl-12
                   text-base
                   font-normal
                   text-gray-700
                   bg-white bg-clip-padding
                   border border-solid border-gray-300
                   rounded
                   transition
                   ease-in-out
                   m-0
                   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                 "
                                  >
                                    
                     {locationName.map(location => (
                         <option value={location.location._id} >{location.location.locationName}</option>
                             ))}
                          </select>
                                </label>
                                
                                <button
                                  type="button"
                                  class="inline-block px-3 py-2.5 mb-4  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter1"
                                >
                                  + New Location
                                </button>
                              </div>
      
                              {/* SubLocation */}
      
                              <input
                               type="text"
                               name="subLocationName"
                               onChange={(e) => onInputChange1(e)} 
                              //  value={data1.subLocationName}
                               
                                class="
                   form-control
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
                   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                 "
                                
                                placeholder="Sub Location"
                              />
                            </div>
                         
                            {/* Number */}
                            <div class="flex justify-center">
                              <div class="mb-3 xl:w-96">
                                {/* <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
               >Number input</label
             > */}
                                <input
                                name="ordering" 
                                // value={data1.ordering} 
                                onChange={(e) => onInputChange1(e)} 
                                 
                                
                                type="number"
                                  class="
                 form-control
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
               "
                                  
                                  placeholder="Number input"
                                />
                              </div>
                            </div>
                            {/* URL */}
                            <div class="flex justify-center">
                              <div class="mb-3 xl:w-96">
                                {/* <label for="exampleURL0" class="form-label inline-block mb-2 text-gray-700"
               >URL input</label
             > */}
                                <input
                                name="link" 
                             
                                onChange={(e) => onInputChange1(e)} 
                                  type="url"
                                  class="
                 form-control
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
               "
                                  
                                  placeholder="URL input"
                                />
                              </div>
                            </div>
      
                            {/* Status */}
                            <div class="flex">
                              <div>
                                <div class="form-check">
                                  <input
                                  name="status" 
                                  // value={data1.status} 
                                  onChange={(e) => onInputChange1(e)} 
                                  value="active"
                                    class="flex form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio"
                                    
                                    
                                  />
                                  <label
                                    class="form-check-label inline-block text-gray-800"
                                    for="flexRadioDefault1"
                                  >
                                    Active
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                     name="status" 
                                      value="inactive"
                                     onChange={(e) => onInputChange1(e)} 
                                    class="flex form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio"
                                    
                                 
                                  />
                                  <label
                                    class="form-check-label inline-block text-gray-800"
                                    for="flexRadioDefault2"
                                  >
                                    Inactive
                                  </label>
                                </div>
                              </div>
                            </div>
                        <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                          <button
                            type="submit"
                            onClick={submitForm1}
                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                            >
                            Save changes
                          </button>
                    </div>
                          </form>
                        </div>
      
                          {/* <button
                            type="button"
                            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button> */}
                      </div>
                    </div>
                  </div>
      


















                  {/* Add Location */}













                  <div
                    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModalCenter1"
                    tabindex="-1"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-modal="true"
                    role="dialog"
                  >
                    <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                      <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <form >
                            {/* <input type="search" id="locationId" autocomplete="off" class="ant-select-selection-search-input" role="combobox" aria-haspopup="listbox" aria-owns="locationId_list" aria-autocomplete="list" aria-controls="locationId_list" aria-activedescendant="locationId_list_0" aria-required="true" readonly="" unselectable="on" value="" style="opacity: 0;" aria-expanded="false"/> */}
      
                            <div class="mb-3 xl:w-96">
                              <label
                                for="exampleFormControlInpu3"
                                class="form-label inline-block mb-2 text-gray-700"
                              >
                                New Location
                              </label>
      
                              {/* SubLocation */}
      
                              <input
                                type="text"
                                name="locationName"
                                onChange={(e) => onInputChange(e)}
                                // value={data.locationName}
                                class="
                   form-control
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
                   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                 "
                                placeholder="Location Name"
                              />
                            </div>
                            {/* Date */}
      
                            {/* Number */}
                            <div class="flex justify-center">
                              <div class="mb-3 xl:w-96">
                                {/* <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
               >Number input</label
             > */}
                                <input
                                  type="number"
                                  name="ordering"
                                  onChange={(e) => onInputChange(e)}
                                  // value={data.ordering}
                                  class="
                 form-control
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
               "
                                  placeholder="Order"
                                />
                              </div>
                            </div>
      
                            {/* Status */}
                            <div class="flex">
                              <div>
                                <div class="form-check">
                                  <input
                                
                                    // id="status"
                                    name="status"
                                    onChange={(e) => onInputChange(e)}
                                    // value={data.status}
                                    class="flex form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio"
                                  
                                    checked
                                  />
                                  <label
                                    class="flex form-check-label  text-gray-800"
                                    for="flexRadioDefault1"
                                  >
                                    Active
                                  </label>
                                  <input
                                    // id="status"
                                    name="status"
                                    onChange={(e) => onInputChange(e)}
                                    // value={data.status}
                                    class="flex form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio"
                                    
                                    // id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    class="flex form-check-label  text-gray-800"
                                    for="flexRadioDefault2"
                                  >
                                    Inactive
                                  </label>
                                </div>
                              </div>
                            </div>
                          <button
                            type="submit"
                            onClick={submitForm}
                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                          >
                            Save changes
                          </button>
                          </form>
                        </div>
      
                        <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        </div>
                      </div>
                    </div>
                  </div>
      
                  {/* < Datatable /> */}
                </div>
                <div>
                  <Getlocation />
                  <Test />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default Addlocation