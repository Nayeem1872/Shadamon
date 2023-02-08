import React, { useState } from 'react'
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';

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




  return (
    <>
   
     <div>
     <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
     

    <div>
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



  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalXl">Extra large modal</button>

  <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
          Create Bundle Package
        </h5>
        

        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
      <div class="flex  flex-shrink-0 items-center justify-between">
  <div class="mb-3 xl:w-96">
   
    <input
      type="text"
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
      id="exampleFormControlInput1"
      placeholder="Example label"
    />
    <input
      type="text"
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
      id="exampleFormControlInput1"
      placeholder="Old Price"
    />
        <input
      type="text"
      class=" flex
       
       
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
      id="exampleFormControlInput1"
      placeholder="New Price"
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
      placeholder="Valid"
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
      placeholder="Sell Any"
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
      placeholder="Rent Anything"
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
</div>
      </div>
    </div>
  </div>
</div>





  
  
  
  
  
  
  </div>



{/* Single */}


  <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
  <button type="button" class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={()=>handleAddFields()}>
    + Add New
  </button>
    <div class="flex flex-row">
    <form onSubmit={handleSubmit}>
      {inputFields.map((input,index)=>(
        <div key={index}>

          <input class="form-control
                 block
                 
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
            <input class="flex form-control
                 
                 
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
              <input class="flex form-control
                 
                 
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


  {/* Sorts */}
  <div class="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
    Tab 3 content button version
  </div>

{/* Coupon */}

  <div class="tab-pane fade" id="tabs-messages4" role="tabpanel" aria-labelledby="tabs-profile-tab4">
    Tab 4 content button version
  </div>

{/* Vat */}
  <div class="tab-pane fade" id="tabs-messages5" role="tabpanel" aria-labelledby="tabs-profile-tab5">
    Tab 5 content button version
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