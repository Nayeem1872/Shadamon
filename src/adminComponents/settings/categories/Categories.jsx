import React, { useEffect, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import "./category.scss";
import axios from "axios";
import api from '../../../apiEndpoint/apiEndpoint'

const Categories = () => {
  // ADD + Button
  const [inputValues, setInputValues] = useState([{add:''}]);

  // const handleAddInput = (e, index) => {
    // const values = [...inputValues];
    // values[index] = e.target.value; 
    // setInputValues(values);
    // console.log(inputValues)
    // const{}


  // };
  
  // const handleAddClick = () => {
  //   const abc = ([...inputValues, {add:''}]);
  //   setInputValues(abc)
  // };
// const handleremove = ()=>{


// }


 // Add Feature................
  const [feature,setFeature]= useState()
const onInputfeature = (e)=>{
  setFeature({...feature, [e.target.name]:e.target.value});
}

const featureobj = ()=>{

  let featureData = {}
  featureData={
    featureName: feature.featureName,
    ordering:feature.ordering,
    featureType:feature.featureType,
    options:feature.option,
    status:feature.status,
  }
  console.log(featureData)
  // addfeature(featureData)

}

const featureSubmit = (e)=>{
  e.preventDefault()
  featureobj()
}


// async function addfeature(formdata){

//   const sendData = await axios.post(`${api.url}/admin/createfeature`,formdata,{withCredentials:true},{


//     body:JSON.stringify(formdata),
//   });

//   // const data =await sendData.json();
//   console.log(sendData);


// }

// put feature Type and name into option


const [type,setType]= useState ([]);

useEffect(()=>{
const getUser = async()=>{
      try{
        const reqData = await axios.get(`${api.url}/admin/allfeatures`,{withCredentials:true});
        setType(reqData.data.data);



      }catch(error){

        console.log(error);

      }

};
getUser()
// console.log(type)



},[])

// Get Category Name into Options
const [catName,setCatName]= useState ([]);

useEffect(()=>{
const getUser = async()=>{
      try{
        const reqData = await axios.get(`${api.url}/admin/getallcategory`,{withCredentials:true});
        setCatName(reqData.data.data);



      }catch(error){

        console.log(error);

      }

};
getUser()
// console.log(type)



},[])
// parent Category into options
const [parent,setParent]= useState ([]);

useEffect(()=>{
const getUser = async()=>{
      try{
        const reqData = await axios.get(`${api.url}/admin/allparentcat`,{withCredentials:true});
        setParent(reqData.data.data);



      }catch(error){

        console.log(error);

      }

};
getUser()
// console.log(type)



},[])
// get button type
const [button,setButton]= useState ([]);

useEffect(()=>{
const getUser = async()=>{
      try{
        const reqData = await axios.get(`${api.url}/product/buttons`,{withCredentials:true});
        setButton(reqData.data.data);



      }catch(error){

        console.log(error);

      }

};
getUser()
// console.log(type)



},[])


//get all feature


const [allFeature,setAllFeature]= useState ([]);

useEffect(()=>{
const getUser = async()=>{
      try{
        const reqData = await axios.get(`${api.url}/admin/allfeatures`,{withCredentials:true});
        setAllFeature(reqData.data.data);



      }catch(error){

        console.log(error);

      }

};
getUser()
console.log(allFeature)



},[])







// double handle
function handleBothChanges(e,index) {
  // handleAddClick(e, index );
  onInputfeature(e);
  console.log(index)
}


  // ADD CATEGORY


  const [cat, setCat] = useState()

  const onInputCatChange = (e)=>{
    setCat({...cat, [e.target.name]: e.target.value })
  }


  const catobj = ()=>{
    let catData = {}
    catData= {
      parentId:cat.parentId,
      categoryName:cat.categoryName,
      categoryOrder:cat.categoryOrder,
      categoryImg:cat.categoryImg,
      buttons:cat.buttons
}
    
    addCatData (catData)
    
    console.log(catData)

  }


  const submitCatForm = (e)=>{
    e.preventDefault()

    catobj()

  }


  async function addCatData (formdata){

    const sendData = await axios.post(`${api.url}/admin/addcategory`,formdata,{withCredentials:true},{
      
      body:JSON.stringify(formdata),

    });

    console.log(sendData);


  }




  // ADD SUB CATEGORY
  const [subCat,setSubCat]= useState()
const onInputsubcat = (e)=>{
  setFeature({...feature, [e.target.name]:e.target.value});
}

const subcatobj = ()=>{

  let subcatData = {}
  subcatData={
   categoryId:subCat.categoryId,
   subCategoryName:subCat.subCategoryName,
    freePost:subCat.freePost,
    status:subCat.status,
    ordering:subCat.ordering,
    features:subCat.features

  }
  console.log(subcatData)
  setSubCat(subcatData)

}

const subcatSubmit = (e)=>{
  e.preventDefault()
  subcatobj()
}


async function subcat(formdata){

  const sendData = await axios.post(`${api.url}/admin/addsubcategory`,formdata,{withCredentials:true},{


    body:JSON.stringify(formdata),
  });

  // const data =await sendData.json();
  console.log(sendData);


}




  return (
    <div >
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
                + Add Category
              </button>


              {/* NEW CATEGORY */}
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
                   <div class="flex"> 
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <form method="post">
                        <div class="mb-3 xl:w-96">
                          <label
                            for="exampleFormControlInpu3"
                            class="form-label inline-block mb-2 text-gray-700"
                          >
                            New Sub Category
                          </label>
                          {/* Category */}

                          <div className="flex">
                            <label>
                              <select
                              onChange={(e) => onInputsubcat(e)} 
                                name="categoryId"
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
               
                   " >
                    {catName.map(catname=>(

                      <option value={catname._id}>{catname.categoryName}</option>


                    ))}




                   </select>
                            </label>

                            <button
                              type="button"
                              class="inline-block px-3 py-2.5 mb-4  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter1"
                            >
                              Add New
                            </button>
                          </div>

                          {/* Number */}
                          <div class="flex justify-center">
                            <div class="mb-3 xl:w-96">
                              {/* <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
               >Number input</label
             > */}
                              <input
                              onChange={(e) => onInputsubcat(e)} 
                                name="ordering"
                                // value={data1.ordering}

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
                                placeholder="Ordering"
                              />
                            </div>
                          </div>

                          {/* feature */}
                          <label>
                            <select

                            onChange={(e) => onInputsubcat(e)} 


                              name="features"
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
                
                  
                
                
                   ">
                    {type.map(name=>(
                      <option value={name._id}>{name.featureName}</option>


                   ) )}



                   </select>
                          </label>

                          {/* Free Post */}
                          <div class="flex justify-center">
                            <div class="mb-3 xl:w-96">
                              
                              <input
                              onChange={(e) => onInputsubcat(e)} 
                                name="freePost"
                                

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
                                placeholder="Free Post"
                              />
                            </div>
                          </div>

                          {/* SubCategory Name */}

                          <input
                          onChange={(e) => onInputsubcat(e)} 
                            type=""
                            name="subCategoryName"
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
                            placeholder="Sub Category Name"
                          />
                        </div>

                        {/* Status */}
                        <div class="flex">
                          <div>
                            <div class="form-check">
                              <input
                              onChange={(e) => onInputsubcat(e)} 
                                name="status"
                                // value={data1.status}

                                value="true"
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
                              onChange={(e) => onInputsubcat(e)} 
                                name="status"
                                value="false"
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
                            onClick={subcatSubmit}
                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                          >
                            Save changes
                          </button>
                          
                       
                        </div>
                      </form>
                    </div>



{/* Table */}

                    <div class="px-px bg-white mr-auto">
                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t bg-white border-gray-200 rounded-b-md">
                    <button type="button" class="  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter4">
    Add Feature
    </button>
                      <div class="flex flex-row ">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                          <div class="py-1 min-w-full sm:px-6 lg:px-4 ">
                            <div class="overflow-hidden">


{/* Table */}


                              <table class="min-w-full">
                                <thead class="bg-white border-b">
                                  <tr>
                                    
                                    <th
                                      scope="col"
                                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                      Feature Name
                                    </th>
                                    <th
                                      scope="col"
                                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                      Order
                                    </th>
                                    <th
                                      scope="col"
                                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                      Input
                                    </th>
                                    <th
                                      scope="col"
                                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                      Status
                                    </th>
                                    <th
                                      scope="col"
                                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {allFeature.map(feature=>(
                                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >
                                      {feature.featureName}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {feature.featureOrdering}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {feature.featureType}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {feature.status}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {/* <button>Edit/ </button> */}
                                      <button class="">Delete</button>
                                    </td>
                                  </tr>
                                  ))}
                                  
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add new */}

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
                      <form>
                        {/* <input type="search" id="locationId" autocomplete="off" class="ant-select-selection-search-input" role="combobox" aria-haspopup="listbox" aria-owns="locationId_list" aria-autocomplete="list" aria-controls="locationId_list" aria-activedescendant="locationId_list_0" aria-required="true" readonly="" unselectable="on" value="" style="opacity: 0;" aria-expanded="false"/> */}

                        <div class="mb-3 xl:w-96">
                          <label
                            for="exampleFormControlInpu3"
                            class="form-label inline-block mb-2 text-gray-700"
                          >
                            New Category
                          </label>
                          {/* Parent Category */}
                          <label>
                              <select
                              onChange={(e) => onInputCatChange(e)} 
                                name="parentId"
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

                            {parent.map(name=>(

                              <option value={name._id}>{name.name}</option>


                            ))}




                              </select>
                            </label>




                          {/* Category Name */}

                          <input
                            onChange={(e) => onInputCatChange(e)} 
                            type="text"
                            name="categoryName"
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
                            placeholder="Category Name"
                          />
                        </div>
                        {/* Button Type */}
                        <label>
                              <select
                                onChange={(e) => onInputCatChange(e)}  
                                name="buttons"
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

                              {button.map(type=>(

                                <option value={type._id}>{type.buttonName}</option>

                              ))}


                              </select>
                            </label>

                        {/* Number */}
                        <div class="flex justify-center">
                          <div class="mb-3 xl:w-96">
                            {/* <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
               >Number input</label
             > */}
                            <input
                              onChange={(e) => onInputCatChange(e)} 
                              type="number"
                              name="categoryOrder"
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
{/* Upload Image */}

<div>
    <input
      onChange={(e) => onInputCatChange(e)} 
      name="categoryImg"
    
    class="py-auto" type="file"  />
    <button >Upload Image</button>
  </div>



                        {/* Status */}
                        <div class="flex">
                          <div>
                            <div class="form-check">
                              <input
                                // id="status"
                                name="status"
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
                          onClick={submitCatForm}
                          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                        >
                          ADD
                        </button>
                        <button type="button" class=" ml-6 px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
    Back
  </button>
                      </form>
                    </div>

                    {/* <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"></div> */}
                  </div>
                </div>
              </div>

{/* Add Feature */}

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter4" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
      <form>
                        {/* <input type="search" id="locationId" autocomplete="off" class="ant-select-selection-search-input" role="combobox" aria-haspopup="listbox" aria-owns="locationId_list" aria-autocomplete="list" aria-controls="locationId_list" aria-activedescendant="locationId_list_0" aria-required="true" readonly="" unselectable="on" value="" style="opacity: 0;" aria-expanded="false"/> */}

                        <div class="mb-3 xl:w-96">
                          <label
                            for="exampleFormControlInpu3"
                            class="form-label inline-block mb-2 text-gray-700"
                          >
                            New Feature
                          </label>

                          {/* Feature Name */}

                          <input
                          
                            type="text"
                            onChange={(e) => onInputfeature(e)} 
                            name="featureName"
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
                            placeholder="Feature Name"
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
                            onChange={(e) => onInputfeature(e)} 
                              type="number"
                              name="ordering"
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
                              placeholder="Ordering"
                            />
                          </div>
                        </div>

                        {/* Feature Type */}
                        <label>
                              <select
                              onChange={(e) => onInputfeature(e)} 
                                name="featureType"
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
              
                   "   placeholder="Category">
                          
                          
                          {type.map(type=>(

                            <option value="{type._id}">{type.featureType}</option>


                          ))}




              </select>
                            </label>
                            {/* ADD */}
                            {/* <input type="button" class="addButtonTwo" value="+" onclick={addRow()} /> */}

                        {/* Status */}
                        <div class="flex">
                          <div>
                            <div class="form-check">
                              <input
                              onChange={(e) => onInputfeature(e)} 
                                
                                name="status"
                                
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

 
               
                          </form>
      </div>
                            
        <div>
                            
                              
                              
                                <div 
                                  // key={index}
                                  >
                                        <input
                                        name="option"
                                        // onChange={(e) => onInputfeature(e)} 
                                        class="
                   form-control
                   block
                   w-full
                   px-1
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
                 " placeholder="Feature Option"
                //  value={inputValue.options.optionName}
                  // onChange={e=>handleAddInput(e,index)} 
                  
                  />
                                   
                                   
                                   
                                      
                                        </div>
                                     

                                      
                                
                            <button  class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                            //  onClick={()=>handleremove}
                            
                            >Remove</button>

                                
                                    
                                      <button  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                      
                                       
                                       >Add</button>

                                

     
      

    </div>
                                  
    <div class="">
    <button
                          onClick={featureSubmit}
                            type="submit"
                            class=" mt-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                            >
                            Save 
                          </button>
                          <button type="button" class=" ml-6 px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
    Back
  </button>
  </div>
                            {/* Plus Add Button */}
    
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
       
      </div>
      
      
    </div>
  </div>
</div>





              {/* < Datatable /> */}
            </div>
            <div>
              {/* <Getlocation />
                  <Test /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
