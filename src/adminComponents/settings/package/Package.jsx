import React, { useEffect, useState } from 'react'
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import axios from 'axios';

import api from '../../../apiEndpoint/apiEndpoint'

const Package = () => {
// single page Add Button
  const [inputFields,setInputFields] = useState([
    {Categories:'', Sort:'',perDay:''}

  ]);

  const handleChangeInput =(index,e)=>{

    console.log(e.target.name,index)
    const values =[...inputFields];
   values[index][e.target.name]= e.target.value
    setInputFields(values);
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("InputFields", inputFields)

  }
  const handleAddFields = ()=>{

     setInputFields([...inputFields,{Categories:'',Sort:'',perDay:''}])

  }
  const handleRemove = (i)=>{
    const values = [...inputFields];
    values.splice(i,1);
    setInputFields(values)

  }
  // CRC
  const [crc,setCrc] = useState([
    {Categories:'', Reach:'',Sort:''}

  ]);
  const handleCrcChangeInput =(index,e)=>{

    console.log(e.target.name,index)
    const values =[...inputFields];
   values[index][e.target.name]= e.target.value
    setCrc(values);
  }
  const handleAddCrcFields = ()=>{

    setCrc([...crc,{Categories:'',Reach:'',Sort:''}])

 }
 const handleCrcRemove = (i)=>{
  const values = [...crc];
  values.splice(i,1);
  setCrc(values)

}
const handleCrcSubmit = (e)=>{
  e.preventDefault()
  console.log("InputFields", crc)

}

// CU
const [cu,setCu] = useState([
  {Categories:'', Urgent:''}

]);
const handleCuChangeInput =(index,e)=>{

  console.log(e.target.name,index)
  const values =[...cu];
 values[index][e.target.name]= e.target.value
  setCu(values);
}
const handleAddCu = ()=>{

  setCu([...cu,{Categories:'',Urgent:''}])

}
const handleRemoveCu = (i)=>{
  const values = [...cu];
  values.splice(i,1);
  setCu(values)

}
const handleCuSubmit = (e)=>{
  e.preventDefault()
  console.log("InputFields", cu)

}

// Coupon ADD
const [coupon,setCoupon] = useState([
  {totalPost:'', code:'', inTime:'', disAmount:'', validDays:''}

]);
const handleCouponChangeInput =(index,e)=>{

  console.log(e.target.name,index)
  const values =[...coupon];
 values[index][e.target.name]= e.target.value
  setCoupon(values);
}
const handleAddCoupon = ()=>{

  setCoupon([...coupon,{totalPost:'', code:'', inTime:'', disAmount:'', validDays:''}])

}
const handleRemoveCoupon = (i)=>{
  const values = [...coupon];
  values.splice(i,1);
  setCoupon(values)

}
const handleCouponSubmit = (e)=>{
  e.preventDefault()
  console.log("InputFields", coupon)

}
// VAT ADD
const [vat,setVat] = useState([
  {vatPer:'', status:''}

]);
const handleVatChangeInput =(index,e)=>{

  console.log(e.target.name,index)
  const values =[...vat];
 values[index][e.target.name]= e.target.value
  setVat(values);
}
const handleAddVat = ()=>{

  setVat([...vat,{vatPer:'', status:''}])

}
const handleRemoveVat = (i)=>{
  const values = [...vat];
  values.splice(i,1);
  setVat(values)

}
const handleVatSubmit = (e)=>{
  e.preventDefault()
  console.log("InputFields", vat)

}

// Add Sub Cat into option
const [sub,setSub]=useState([])
// useEffect(()=>{
// const getUser =async()=>{
//   try{
//     const reqData = await axios.get( `${api.url}/admin/allsubcategory`,{withCredentials:true});
//     console.log(reqData)
//     setSub(reqData.data.data)

//   }catch(error){

//       console.log(error)
//   }
//   getUser()
//   console.log(sub)



// }



// },[])

const fetchSubCat =async()=>{
  try{
    const reqData = await axios.get( `${api.url}/admin/allsubcategory`,{withCredentials:true});
    console.log(reqData)
    setSub(reqData.data.data)

  }catch(error){

      console.log(error)
  }
}


// post BUNDLE
const [data,setData]=useState()
const onInputChange =(e)=>{
  setData({...data,[e.target.name]:e.target.value});
}

const dataobj = ()=>{

  let addData = {}
  addData={
    oldPrice:data.bundle.oldPrice,
    price:data.bundle.price,
    validDays: data.bundle.validDays,
    parent2ID:data.bundle.postAccess.parentId,
    post:data.bundle.postAccess.noOfPost,
    subcat:data.bundle.post.subcategories,
    reach:data.bundle.post.reach,
    click:data.bundle.post.click,
    stickerSort:data.bundle.stickerSort,
    packageFeature:data.bundle.packageFeature,
    uncheckFeature:data.bundle.uncheckFeature,
    bestSuggestion:data.bundle.bestSuggestion,
    note:data.bundle.note


  }
  console.log(addData)


  addBundle(addData)
}
const bundleSubmit = (e)=>{
  e.preventDefault()
  dataobj()

}
async function addBundle(formdata){

  const sendData = await axios.post(`${api.url}/`,formdata,{withCredentials:true},{

    body:JSON.stringify(formdata)

  })





}











  return (
    <>
   
     <div>
     <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
     

    <div class="">
    <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3"
  role="tablist">
  <li class="nav-item" role="presentation">
    <a href="#tabs-home3" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3"
      aria-selected="true">Bundle</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-profile3" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
      aria-controls="tabs-profile3" aria-selected="false">Single</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-messages3" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab"
      aria-controls="tabs-messages3" aria-selected="false">Sorts</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-messages4" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab4" data-bs-toggle="pill" data-bs-target="#tabs-messages4" role="tab"
      aria-controls="tabs-messages4" aria-selected="false">Coupon</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-messages5" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab5" data-bs-toggle="pill" data-bs-target="#tabs-messages5" role="tab"
      aria-controls="tabs-messages5" aria-selected="false">Vat</a>
  </li>
</ul>



<div class="tab-content" id="tabs-tabContent3">
    {/* BUNDLE */}
  <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">



  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalXl" onClick={()=>fetchSubCat()} >+ ADD NEW</button>

  <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
          Create Bundle Package
        </h5>
        

        {/* <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div class="flex">
      <div class="modal-body relative p-4 ">
      <div class="  items-center justify-between">
    <div class="mb-3 xl:w-96">
   <div class="flex gap-2">
    <input
      type="text"
      class="
        form-control
       
        w-auto
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
      id="exampleFormControlInput1"
      placeholder="Name"
    />
    <input
      type="text"
      class="
      w-auto
        form-control
      
        
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
      // id="exampleFormControlInput1"
      placeholder="Old Price"
      name='oldPrice'
      value={data.bundle.oldPrice}
      
    />
        <input
      type="text"
      class=" flex
       
      w-auto
        
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
      id="exampleFormControlInput1"
      placeholder="New Price"
    />
    
     <input

      type="number"
      class="
      w-auto
        form-control
        
        
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
      id="exampleNumber0"
      placeholder="Valid"
    />
    </div>
    <div class="flex w-3/2 mt-3 gap-2">
     <input
      type="number"
      class="
        form-control
        
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
      id="exampleNumber0"
      placeholder="Sell Any"
    />
     <input
      type="number"
      class="
        form-control
        
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
      id="exampleNumber0"
      placeholder="Rent Anything"
      name=""
    />
     <input
      type="number"
      class="
        form-control
       
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
      id="exampleNumber0"
      placeholder="Post"
    />
     <input
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
      id="exampleNumber0"
      placeholder="Create"
    />
     <input
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
      id="exampleNumber0"
      placeholder="Create"
    />
    </div>
    <div class=" w-full   mt-2">
    <h5 class="  w-auto mt-8 text-xl mb-2 font-medium text-center leading-normal text-gray-800 border-b border-gray-200" id="exampleModalXlLabel">
    Category Wise Every Post reach and click and how many
        </h5>


    </div>
    {/* Category/Reach/Click */}
    <div>
    <form class="" onSubmit={handleCrcSubmit}>
    {crc.map((input,index)=>(
    <div class="flex mt-3 gap-3" key={index}>

      <select 
      class="form-control
                 
      w-60
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      value={input.Categories}
      placeholder="Category" name='Categories' onChange={e=>handleCrcChangeInput(index,e)} >
 {sub.map(cat => (
                         <option value={cat._id} >{cat.subCategoryName}</option>
                             ))}
    </select>
            <input
            name='Reach'
            class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Reach"  lable="Sort" value={input.Reach} type="text" onChange={e=>handleCrcChangeInput(index,e)}/>
              <input 
              name='Sort'
              class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Click"  lable="Per Day Price" value={input.Sort} type="number" onChange={e=>handleCrcChangeInput(index,e)}/>


                 <button class="inline-block mt-3 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>handleAddCrcFields()} type='submit'>Add</button>
                 <button class="inline-block mt-3 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>handleCrcRemove(index)} type='submit'>Remove</button>




        </div>
     
     )) }
     </form>

     </div>



      {/* Category Wise Sort Item Access */}
     <div class="">
     <h5 class=" w-auto mt-8 text-xl mb-2 font-medium leading-normal text-center text-gray-800 border-b border-gray-200" id="exampleModalXlLabel">
     Category Wise Sort Item Access
        </h5>
        <div>

          {/* CU */}
    <form class="" onSubmit={handleCuSubmit}>
    {cu.map((input,index)=>(
    <div class="flex mt-3 gap-3" key={index}>

      <select 
      name='Categories'
      class="form-control
                 
      w-60
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      value={input.Categories}
      placeholder="Category" onChange={e=>handleCuChangeInput(index,e)} >
 {sub.map(cat => (
                         <option value={cat._id} >{cat.subCategoryName}</option>
                             ))}
    </select>
      
            
              <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Urgent' lable="Per Day Price" placeholder="Urgent" value={input.Urgent} type="number" onChange={e=>handleCuChangeInput(index,e)}/>


                 <button class="inline-block mt-3 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>handleAddCu()} type='submit'>Add</button>
                 <button class="inline-block mt-3 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>handleRemoveCu(index)} type='submit'>Remove</button>




        </div>
     
     )) }
     </form>

     </div>







     </div>

      <div class="mt-4 gap-3">

      <h3>Checked Feature Write-up</h3>
      <div class="flex">
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' lable="Per Day Price" placeholder='Checked 1'  type="text"/>
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' placeholder='Checked 2' lable="Per Day Price"  type="text"/>
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' placeholder='Checked 3' lable="Per Day Price"  type="text"/>
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' placeholder='Checked 4' lable="Per Day Price"  type="text"/>
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' placeholder='Checked 5' lable="Per Day Price"  type="text"/>

    </div>

      </div>

{/* UnChecked Feature Write-up */}

      <div class="mt-4 gap-3">

      <h3>UnChecked Feature Write-up</h3>
      <div class="flex">
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' lable="Per Day Price" placeholder='Checked 1'  type="text"/>
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' placeholder='Checked 2' lable="Per Day Price"  type="text"/>
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' placeholder='Checked 3' lable="Per Day Price"  type="text"/>
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' placeholder='Checked 4' lable="Per Day Price"  type="text"/>
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' placeholder='Checked 5' lable="Per Day Price"  type="text"/>

    </div>

      </div>

      <div class="flex mt-3 gap-3">
      <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' lable="Per Day Price" placeholder='Best Suggestion'  type="text"/>

<input class=" form-control
                 
                 w-60
                 px-3
                 py-3.5
                 text-base
                 font-normal
                 text-gray-700
                 bg-white bg-clip-padding
                 border border-solid border-gray-300
                 rounded
                 transition
                 ease-in-out
                 m-0
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' lable="Per Day Price" placeholder='Note'  type="text"/>
                 <select name="" id="">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>

                 </select>

      </div>
      


      <button type="button" class="inline-block mt-3 px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>




  </div>
</div>
      </div>
      </div>
    </div>
  </div>
</div>





  
  
  
  
  
  
  </div>



{/* Single */}


  <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
  <button type="button" class="inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={()=>handleAddFields()}>
    + Add New
  </button>
    <div class="">

    <form class="" onSubmit={handleSubmit}>
      {inputFields.map((input,index)=>(
        <div class="flex gap-3"  key={index}>
          
          <table class="table-auto">
     
       <thead>
         <tr>
           <th>Categories</th>
           <th>Reach</th>
           <th>Click</th>
           <th>Price</th>
           <th>Min Amount</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td><input class="
        
        form-control
               
               w-60
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Categories' lable="category" value={input.Categories} type="text" onChange={e=>handleChangeInput(index,e)} /> </td>
          
           <td class="mx-3"><input class="
        
        form-control
               
        w-20
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Categories' lable="category" value={input.Categories} type="number" onChange={e=>handleChangeInput(index,e)} />
               <input class="
        
        form-control
               
        w-20
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Categories' lable="category" value={input.Categories} type="number" onChange={e=>handleChangeInput(index,e)} />
               </td>
           <td>     <input class="
        
        form-control
        w-20
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Categories' lable="category" value={input.Categories} type="number" onChange={e=>handleChangeInput(index,e)} />
                    <input class="
        
        form-control
               
        w-20
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Categories' lable="category" value={input.Categories} type="number" onChange={e=>handleChangeInput(index,e)} /></td>

               <td>     <input class="
        
        form-control
               
        w-20
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Categories' lable="category" value={input.Categories} type="number" onChange={e=>handleChangeInput(index,e)} />
                    <input class="
        
        form-control
               
        w-20
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Categories' lable="category" value={input.Categories} type="number" 
              //  onChange={e=>handleChangeInput(index,e)} 
               /></td>
               <td>     <input class="
        
        form-control
               
               w-auto
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Categories' lable="category" value={input.Categories} type="number" onChange={e=>handleChangeInput(index,e)} />
                    <input class="
        
        form-control
               
               w-60
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Categories' lable="category" value={input.Categories} type="number" onChange={e=>handleChangeInput(index,e)} /></td>
         </tr>
         
       </tbody>
     </table>
                
        


                 <button onClick={handleSubmit} type='submit'>Save</button>
                 <button onClick={()=>handleRemove(index)} type='submit'>Remove</button>




        </div>









      )) }
     </form>



    </div>
  </div>


  {/* Sorts */}
  <div class="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
  <button type="button" class="inline-block px-6 py-2.5  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={()=>handleAddFields()}>
    + Add New
  </button>
    <div class="">
    <form class="" onSubmit={handleSubmit}>
      {inputFields.map((input,index)=>(
        <div class="flex gap-3"  key={index}>

          <input class="
        
          form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Categories' lable="category" value={input.Categories} type="text" onChange={e=>handleChangeInput(index,e)} />
            <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='Sort' lable="Sort" value={input.Sort} type="text" onChange={e=>handleChangeInput(index,e)}/>
              <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='perDay' lable="Per Day Price" value={input.perDay} type="number" onChange={e=>handleChangeInput(index,e)}/>


                 <button onClick={handleSubmit} type='submit'>Save</button>
                 <button onClick={()=>handleRemove(index)} type='submit'>Remove</button>




        </div>









      )) }
     </form>

    </div>
  </div>

{/* Coupon */}

  <div class="tab-pane fade" id="tabs-messages4" role="tabpanel" aria-labelledby="tabs-profile-tab4">
  <button type="button" class="inline-block px-6 py-2.5 ml-4  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={()=>handleAddCoupon()}>
    + Add New
  </button>
    <div class="">
    <form class="" onSubmit={handleCouponSubmit}>
      {coupon.map((input,index)=>(
        <div class="flex gap-3 mt-3 mb-3 ml-4"  key={index}>

          <input class="
        
          form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='totalPost' placeholder='Total Post' value={input.totalPost} type="number" onChange={e=>handleCouponChangeInput(index,e)} />
            <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='code' placeholder='Coupon Code' value={input.code} type="text" onChange={e=>handleCouponChangeInput(index,e)}/>
              <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='inTime' placeholder='In Time' value={input.inTime} type="number" onChange={e=>handleCouponChangeInput(index,e)}/>
              <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='disAmount' placeholder='Dicount Amount' value={input.disAmount} type="number" onChange={e=>handleCouponChangeInput(index,e)}/>
              <input class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='validDays' placeholder='Valid Days' value={input.validDays} type="number" onChange={e=>handleCouponChangeInput(index,e)}/>


                 <button class="inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleCouponSubmit} type='submit'>Save</button>
                 <button class="inline-block px-6 py-2.5  bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>handleRemoveCoupon(index)} type='submit'>Remove</button>




        </div>









      )) }
     </form>

    </div>
  </div>

{/* Vat */}
  <div class="tab-pane fade" id="tabs-messages5" role="tabpanel" aria-labelledby="tabs-profile-tab5">
  <button type="button" class="inline-block px-6 py-2.5 ml-4  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={()=>handleAddVat()}>
    + Add New
  </button>
    <div class="">
    <form class="" onSubmit={handleVatSubmit}>
      {vat.map((input,index)=>(
        <div class="flex gap-3 mt-3 mb-3 ml-4"  key={index}>

          <input class="
        
          form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='vatPer' placeholder='Vat Percentage' value={input.vatPer} type="number" onChange={e=>handleVatChangeInput(index,e)} />
            <select class=" form-control
                 
                 w-60
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='status' placeholder='Status' value={input.status} type="number" onChange={e=>handleVatChangeInput(index,e)}>
                  <option>Active</option>
                  <option>Inactive</option>
                  </select>
             


                 <button class="inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleVatSubmit} type='submit'>Save</button>
                 <button class="inline-block px-6 py-2.5  bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>handleRemoveVat(index)} type='submit'>Remove</button>




        </div>









      )) }
     </form>

    </div>
  </div>



</div>



    </div>


















    
  
  
  </div>
  
  </div>
    
    
    
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Package