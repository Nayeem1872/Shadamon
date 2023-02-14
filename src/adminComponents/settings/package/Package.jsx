import React, { useEffect, useState,useRef}  from 'react'
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import axios from 'axios';

import api from '../../../apiEndpoint/apiEndpoint'

import GetBundle from './GetBundle';
import GetSort from './GetSort';
import GetCoupon from './GetCoupon';
import Select from "react-select";



const Package = () => {
  // const [abc, setAbc] = useState("some default value");
// single page Add Button
const [selectedOption, setSelectedOption] = useState("");

const [selectSort,SetSelectSort] = useState("")

  const [inputFields,setInputFields] = useState([
    {subcategories1:'', reach:'',click:'', price:'',minAmount:'',reach1:'',click1:'', price1:'',minAmount1:''},
  

  ]);

  const handleChangeSingleInput =(index,e)=>{

    console.log(e.target.name,index)
    const values =[...inputFields];
   values[index][e.target.name]= e.target.value
    setInputFields(values);
  }
  const handleSingleSubmit = (e)=>{
    e.preventDefault()
    console.log("InputFields", inputFields)

  }
  const handleAddSingleFields = ()=>{

     setInputFields([...inputFields,
      
      {subcategories1:'', reach:'',click:'', price:'',minAmount:'',reach1:'',click1:'', price1:'',minAmount1:''},
      
    
    ])

  }
  const handleSingleRemove = (i)=>{
    const values = [...inputFields];
    values.splice(i,1);
    setInputFields(values)

  }

// handle both funtion
const handleBothInput = (index,e)=>{

  handleChangeSingleInput(index,e)
  onInputSignalChange(e)


}

// const handleBothSubmit = ()=>{

//   handleSingleSubmit()
//   bundleSignalSubmit()
// }

// put subcat into option
const [subCat,setsubCat]= useState ([]);

useEffect(()=>{
const getUser = async()=>{
      try{
        const reqData = await axios.get(`${api.url}/admin/allsubcategory`,{withCredentials:true});
        setsubCat(reqData.data.data);



      }catch(error){

        console.log(error);

      }

};
getUser()
// console.log(type)



},[])




// post single 
const [dataSignal,setDataSignal]=useState()
const onInputSignalChange =(e)=>{
  setDataSignal({...dataSignal,[e.target.name]:e.target.value});
}



const dataSignalobj = ()=>{

  let allSelectedSubCat = []
  console.log(selectedOption)
  selectedOption.map(ee=>{
    allSelectedSubCat.push(ee.value)
  })

 

  let addData = {}
  addData={
 


    subcategories:allSelectedSubCat,
    promote:{
      price:dataSignal.price,
      reach:dataSignal.reach,
      click:dataSignal.click,
      minAmount:dataSignal.minAmount,
    },
    Traffic:{
      price:dataSignal.price1,
      reach:dataSignal.reach1,
      click:dataSignal.click1,
      minAmount:dataSignal.minAmount1
    }



  }
  console.log(addData)


  // addBundle(addData)
}
const bundleSignalSubmit = (e)=>{
  e.preventDefault()
  dataSignalobj()

}
// async function addBundle(formdata){

//   const sendData = await axios.post(`${api.url}/`,formdata,{withCredentials:true},{

//     body:JSON.stringify(formdata)

//   })





// }





// post sort 
const [dataSort,setDataSort]=useState()
const onInputSortChange =(e)=>{
  setDataSort({...dataSort,[e.target.name]:e.target.value});
}



const dataSortobj = ()=>{

 let allSelectedSort = []
 console.log(selectSort)
 selectSort.map(ee=>{
  allSelectedSort.push(ee.value)
 })
 let allSelectedSubCat = []
 console.log(selectedOption)
 selectedOption.map(ee=>{
   allSelectedSubCat.push(ee.value)
 })




  let addData = {}
  addData={
    subcategories:allSelectedSubCat,
    sortId:allSelectedSort,
    price:dataSort.price,




  }
  console.log(addData)


  // addBundle(addData)
}
const bundleSortSubmit = (e)=>{
  e.preventDefault()
  dataSortobj()

}
// async function addBundle(formdata){

//   const sendData = await axios.post(`${api.url}/`,formdata,{withCredentials:true},{

//     body:JSON.stringify(formdata)

//   })





// }
// handle both funtion
const handleBothInput1 = (index,e)=>{

  handleChangeSortInput(index,e)
  onInputSortChange(e)


}




// Add Sort

const [sort,setInputSort] = useState([
  {subcategories:'', sortId:'',price:''}

]);

const handleChangeSortInput =(index,e)=>{

  console.log(e.target.name,index)
  const values =[...sort];
 values[index][e.target.name]= e.target.value
  setInputSort(values);
}
const handleSortSubmit = (e)=>{
  e.preventDefault()
  console.log("InputFields", sort)

}
const handleAddSortFields = ()=>{

   setInputSort([...sort,{subcategories:'',sortId:'',price:''}])

}
const handleSortRemove = (i)=>{
  const values = [...sort];
  values.splice(i,1);
  setInputSort(values)

}












  // CRC
  const [crc,setCrc] = useState([
    {subcategories:'',reach:'',click:''}

  ]);
  const handleCrcChangeInput =(index,e)=>{

    console.log(e.target.name,index)
    const values =[...crc];
   values[index][e.target.name]= e.target.value
    setCrc(values);
  }
  const handleAddCrcFields = ()=>{

    setCrc([...crc,{subcategories:'',reach:'',click:''}])

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
  {subcategories:'', sort:''}

]);
const handleCuChangeInput =(index,e)=>{

  console.log(e.target.name,index)
  const values =[...cu];
 values[index][e.target.name]= e.target.value
  setCu(values);
}
const handleAddCu = ()=>{

  setCu([...cu,{subcategories:'',sort:''}])

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
  {totalPost:'', couponCode:'', inTime:'', discAmount:'', validDays:'',status:''}

]);
const handleCouponChangeInput =(index,e)=>{

  console.log(e.target.name,index)
  const values =[...coupon];
 values[index][e.target.name]= e.target.value
  setCoupon(values);
}
const handleAddCoupon = ()=>{

  setCoupon([...coupon,{totalPost:'', couponCode:'', inTime:'', discAmount:'', validDays:'',status:''}])

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
// handle both coupon Input
const handleBothCoupon = (index,e)=>{
  handleCouponChangeInput(index,e)
  onInputCouponChange(e)



}


// coupon post request

const [dataCoupon,setDataCoupon]=useState()
const onInputCouponChange =(e)=>{
  setDataCoupon({...dataCoupon,[e.target.name]:e.target.value});
}



const dataCouponobj = ()=>{

 

  let addData = {}
  addData={
  totalPost:dataCoupon.totalPost,
  inTime:dataCoupon.inTime,
  discAmount:dataCoupon.discAmount,
  validDays:dataCoupon.validDays,
  status:dataCoupon.status,
  couponCode:dataCoupon.couponCode




  }
  console.log(addData)


  // addBundle(addData)
}
const bundleCouponSubmit = (e)=>{
  e.preventDefault()
  dataCouponobj()

}
// async function addBundle(formdata){

//   const sendData = await axios.post(`${api.url}/`,formdata,{withCredentials:true},{

//     body:JSON.stringify(formdata)

//   })













// VAT ADD
const [vat,setVat] = useState([
  {addVat:'', status:''}

]);
const handleVatChangeInput =(index,e)=>{

  console.log(e.target.name,index)
  const values =[...vat];
 values[index][e.target.name]= e.target.value
  setVat(values);
}
const handleAddVat = ()=>{

  setVat([...vat,{addVat:'', status:''}])

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
// handle both
const handleBothVat = (index,e)=>{
  handleVatChangeInput(index,e)
  onInputVatChange(e)



}



// Vat Post request

const [dataVat,setDataVat]=useState()
const onInputVatChange =(e)=>{
  setDataVat({...dataVat,[e.target.name]:e.target.value});
}



const dataVatobj = ()=>{

 

  let addData = {}
  addData={
    addVat:dataVat.addVat,
    status:dataVat.status



  }
  console.log(addData)


  // addBundle(addData)
}
const bundleVatSubmit = (e)=>{
  e.preventDefault()
  dataVatobj()

} 
















// get all sort

const [sort1,setSort1]=useState([])


const fetchSort =async()=>{
  try{
    const reqData = await axios.get( `${api.url}/package/sort`,{withCredentials:true});
    console.log(reqData)
    setSort1(reqData.data.data)
    // fetchParent();

  }catch(error){

      console.log(error)
  }
}
const sortOptions = []
sort1.map(sort=>{
  let obj = {
    value:sort._id,
    label:sort.sortName


  }

sortOptions.push(obj)
console.log(obj)

})


var handleSortChange =(select)=>{

SetSelectSort(select)
console.log(selectSort)

}












// Add Sub Cat into option
const [sub,setSub]=useState([])


const fetchSubCat =async()=>{
  try{
    const reqData = await axios.get( `${api.url}/admin/allsubcategory`,{withCredentials:true});
    console.log(reqData)
    setSub(reqData.data.data)

    // fetchParent();

    

  }catch(error){

      console.log(error)
  }
}






const options = [];
sub.map(subCat=>{
  let obj = {
    value:subCat._id,
    label:subCat.subCategoryName
  }
  options.push(obj)
})


  var handleChange = (selectedOption) => {
    // console.log(selectedOption);
    setSelectedOption(selectedOption);
    console.log(selectedOption)
  };

// handle subCat/Sort
const handleSubCatSort =()=>{
  fetchSubCat()
  fetchSort()

}

// post BUNDLE
const [data,setData]=useState()
const onInputChange =(e)=>{
  setData({...data,[e.target.name]:e.target.value});
}

const [parentArray,setParentArray]=useState([])

const fetchParent =async()=>{
  try{
    const reqData = await axios.get( `${api.url}/admin/allparentcat`,{withCredentials:true});
    console.log(reqData)
    setParentArray(reqData.data.data)

  }catch(error){

      console.log(error)
  }
}


const dataobj = ()=>{

  const postAccessData = [
    // {
    //   parentId:parentArray[0]._id,
    //   noOfPost:noOfPost[0]
    // },
    // {
    //   parentId:parentArray[1]._id,
    //   noOfPost:noOfPost[1]
    // },
    // {
    //   parentId:parentArray[2]._id,
    //   noOfPost:noOfPost[2]
    // },
    // {
    //   parentId:parentArray[3]._id,
    //   noOfPost:noOfPost[3]
    // },
    // {
    //   parentId:parentArray[4]._id,
    //   noOfPost:noOfPost[4]
    // },
  ]

  let addData = {}
  addData={
    name:data.name,
    oldPrice:data.oldPrice,
    price:data.price,
    validDays: data.validDays,
    postAccess:{
              parentId:data.parentId,

              noOfPost:data.noOfPost,
    },
    post: crc,
    stickerSort:cu,
    packageFeature:data.packageFeature,
    uncheckFeature:data.uncheckFeature,
    bestSuggestion:data.bestSuggestion,
    note:data.note,
    packageStatus:data.packageStatus



  }
  console.log(addData)


  // addBundle(addData)
}
const bundleSubmit = (e)=>{
  e.preventDefault()
  dataobj()

}
// async function addBundle(formdata){

//   const sendData = await axios.post(`${api.url}/`,formdata,{withCredentials:true},{

//     body:JSON.stringify(formdata)

//   })





// }



// Handle multi






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
      aria-controls="tabs-profile3" aria-selected="false" onClick={()=>fetchSubCat()}>Single</a>
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
      aria-controls="tabs-messages3" aria-selected="false" onClick={()=>handleSubCatSort()}>Sorts</a>
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


  <div>
  <GetBundle />
</div>


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
      name="name"
      onChange={(e) => onInputChange(e)} 
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
      onChange={(e) => onInputChange(e)} 
      // value={data.bundle.oldPrice}
      
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
      name='price'
      onChange={(e) => onInputChange(e)} 
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
      name='validDays'
      onChange={(e) => onInputChange(e)} 
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
      name='noOfPost[]'
      
      onChange={(e) => onInputChange(e)} 
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
      name='noOfPost[]'
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
      value={input.subcategories}
      placeholder="Category" name='subcategories' onChange={e=>handleCrcChangeInput(index,e)} >
 {sub.map(cat => (
                         <option value={cat._id} >{cat.subCategoryName}</option>
                             ))}
    </select>
            <input
            name='reach'
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Reach"  lable="Sort" value={input.reach} type="text" onChange={e=>handleCrcChangeInput(index,e)}/>
              <input 
              name='click'
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Click"  lable="Per Day Price" value={input.click} type="number" onChange={e=>handleCrcChangeInput(index,e)}/>


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
      name='subcategories'
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
      value={input.subcategories}
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='sort' placeholder="Urgent" value={input.sort} type="number" onChange={e=>handleCuChangeInput(index,e)}/>


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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" lable="Per Day Price" placeholder='Checked 1' onChange={(e) => onInputChange(e)}  type="text" name="packageFeature"/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder='Checked 2' lable="Per Day Price" name="packageFeature" onChange={(e) => onInputChange(e)} type="text"/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="packageFeature" placeholder='Checked 3' lable="Per Day Price"  onChange={(e) => onInputChange(e)} type="text"/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="packageFeature" placeholder='Checked 4' lable="Per Day Price" onChange={(e) => onInputChange(e)}  type="text"/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="packageFeature" placeholder='Checked 5' onChange={(e) => onInputChange(e)} lable="Per Day Price"  type="text"/>

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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="uncheckFeature" lable="Per Day Price" onChange={(e) => onInputChange(e)} placeholder='Checked 1'  type="text"/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="uncheckFeature" onChange={(e) => onInputChange(e)} placeholder='Checked 2' lable="Per Day Price"  type="text"/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="uncheckFeature" onChange={(e) => onInputChange(e)} placeholder='Checked 3' lable="Per Day Price"  type="text"/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="uncheckFeature" onChange={(e) => onInputChange(e)} placeholder='Checked 4' lable="Per Day Price"  type="text"/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="uncheckFeature" onChange={(e) => onInputChange(e)} placeholder='Checked 5' lable="Per Day Price"  type="text"/>

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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="bestSuggestion"  lable="Per Day Price" placeholder='Best Suggestion'  type="text" onChange={(e) => onInputChange(e)}/>

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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='note' placeholder='Note'  type="text" onChange={(e) => onInputChange(e)}/>
                {/* <select name="packageStatus" id="" value={status} onChange={(e) => setStatus(e.target.value === "true")}>
    <option value="true">Active</option>
    <option value="false">Inactive</option>
  </select> */}
      </div>
      


      <button type="button" class="inline-block mt-3 px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out" onClick={bundleSubmit}>Save</button>




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
  <button type="button" class="inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={()=>handleAddSingleFields()}>
    + Add New
  </button>
    <div class="">

    <form class="" onSubmit={handleSingleSubmit}>
      {inputFields.map((input,index)=>(
        <div class="flex gap-3"  key={index}>
          
          <table class="table-auto">
     
          <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class=" inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sub-Categories
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Reach
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Click
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Price
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Min-Amount
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <td class=" whitespace-nowrap text-sm font-medium text-gray-900 ">
                
                <div class="relative w-64">
                
               
               


               <Select name='subcategories' isMulti onChange={handleChange} options={options} />


               
              
               
</div>
                </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='reach' lable="category" value={input.reach} type="number" onChange={e=>handleBothInput(index,e)} />
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='reach1' lable="category" value={input.reach1} type="number" onChange={e=>handleBothInput(index,e)} />
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='click' lable="category" value={input.click} type="number" onChange={e=>handleBothInput(index,e)} />
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='click1' lable="category" value={input.click1} type="number" onChange={e=>handleBothInput(index,e)} />
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='price' lable="category" value={input.price} type="number" onChange={e=>handleBothInput(index,e)} />
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='price1' lable="category" value={input.price1} type="number" onChange={e=>handleBothInput(index,e)} />
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='minAmount' lable="category" value={input.minAmount} type="number" onChange={e=>handleBothInput(index,e)} />
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
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='minAmount1' lable="category" value={input.minAmount1} type="number" onChange={e=>handleBothInput(index,e)} />
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 <button onClick={bundleSignalSubmit} type='submit'>Save</button>
                 <button class="mx-3" onClick={()=>handleSingleRemove(index)} type='submit'>Remove</button>
         
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  </div>
</div>
       
        
           
          
         
         
         
      
     </table>
                
        






        </div>









      )) }
     </form>



    </div>
  </div>


  {/* Sorts */}
  <div class="tab-pane fade " id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
  <button type="button" class="inline-block px-6 py-2.5  mx-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={()=>handleAddSortFields()}>
    + Add New
  </button>
    <div class=" mt-2 mx-2">
    <form class="" onSubmit={handleSortSubmit}>
      {sort.map((input,index)=>(
        <div class="flex gap-3"  key={index}>

<Select name='subcategories' isMulti onChange={handleChange} options={options} />


<Select name='sortId' isMulti onChange={handleSortChange} options={sortOptions} />


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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='price' placeholder='Per Day Price' value={input.price} type="number" onChange={e=>handleBothInput1(index,e)}/>


                 <button onClick={bundleSortSubmit} type='submit'>Save</button>
                 <button onClick={()=>handleSortRemove(index)} type='submit'>Remove</button>




        </div>









      )) }
     </form>
     <GetSort />

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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='totalPost' placeholder='Total Post' value={input.totalPost} type="number" onChange={e=>handleBothCoupon(index,e)} />
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='couponCode' placeholder='Coupon Code' value={input.couponCode} type="text" onChange={e=>handleBothCoupon(index,e)}/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='inTime' placeholder='In Time' value={input.inTime} type="number" onChange={e=>handleBothCoupon(index,e)}/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='discAmount' placeholder='Discount Amount' value={input.discAmount} type="number" onChange={e=>handleBothCoupon(index,e)}/>
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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='validDays' placeholder='Valid Days' value={input.validDays} type="number" onChange={e=>handleBothCoupon(index,e)}/>
                  <div class="form-check form-check-inline">
    <input class="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="status" id="inlineRadio1" value="true" onChange={e=>handleBothCoupon(index,e)}/>
    <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Active </label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="status" id="inlineRadio2" value="false" onChange={e=>handleBothCoupon(index,e)}/>
    <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">Inactive</label>
  </div>


                 <button class="inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" onClick={bundleCouponSubmit} type='submit'>Save</button>
                 <button class="inline-block px-6 py-2.5  bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>handleRemoveCoupon(index)} type='submit'>Remove</button>




        </div>









      )) }
     </form>
     <GetCoupon />

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
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='addVat' placeholder='Vat Percentage' value={input.addVat} type="number" onChange={e=>handleBothVat(index,e)} />
       <div class="form-check form-check-inline">
    <input class="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="status" id="inlineRadio1" value="true" onChange={e=>handleBothVat(index,e)}/>
    <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Active </label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="status" id="inlineRadio2" value="false" onChange={e=>handleBothVat(index,e)}/>
    <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">Inactive</label>
  </div>
             


                 <button class="inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" onClick={bundleVatSubmit} type='submit'>Save</button>
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