import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import api from '../../../apiEndpoint/apiEndpoint'








const GetSort = () => {

    const [sort,setSort]=useState([])
   
   
    const fetchData = async () => {
        try {
          const reqData = await axios.get(`${api.url}/package/packages`, { withCredentials: true });
          setSort(reqData.data.data.Sort);
        } catch (error) {
          console.log(error);
        }
      };



      const handleClick = () => {
        fetchData();
      };






    return (
    <>
     <button onClick={handleClick}>Fetch Data</button>
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Sub-Category
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
          {sort.map((s)=>(
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                
               {s.sort.subcategories}
                
                
                </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
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

export default GetSort