import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import "./category.scss";

const Categories = () => {
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
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <form method="post">
                        <div class="mb-3 xl:w-96">
                          <label
                            for="exampleFormControlInpu3"
                            class="form-label inline-block mb-2 text-gray-700"
                          >
                            New Category
                          </label>
                          {/* Category */}

                          <div className="flex">
                            <label>
                              <select
                                name="locationId"
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
                                placeholder="Category"
                              ></select>
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
                              name="feature"
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
                              placeholder="Category"
                            ></select>
                          </label>

                          {/* Free Post */}
                          <div class="flex justify-center">
                            <div class="mb-3 xl:w-96">
                              {/* <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
               >Number input</label
             > */}
                              <input
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
                                placeholder="Free Post"
                              />
                            </div>
                          </div>

                          {/* SubCategory Name */}

                          <input
                            type=""
                            name=""
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
                                name="status"
                                // value={data1.status}

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
                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                          >
                            Save changes
                          </button>
                          <button
                            type="button"
                            class="inline-block px-6 mx-auto py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>






                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter4">
    Add Feature
  </button>
                      <div class="flex flex-row ">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                          <div class="py-1 min-w-full sm:px-6 lg:px-4 ">
                            <div class="overflow-hidden">
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
                                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                      1
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
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {/* <button>Edit/ </button> */}
                                      <button class="">Delete</button>
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                      2
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Jacob
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Thornton
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      @fat
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                      3
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Larry
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Wild
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      @twitter
                                    </td>
                                  </tr>
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
                            New Location
                          </label>

                          {/* SubLocation */}

                          <input
                            type="text"
                            name="locationName"
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
                          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                        >
                          Save changes
                        </button>
                      </form>
                    </div>

                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"></div>
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

                          {/* SubLocation */}

                          <input
                            type="text"
                            name="locationName"
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
                                name="locationId"
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
                                placeholder="Category"
                              ></select>
                            </label>

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
                          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                        >
                          Save changes
                        </button>
                      </form>
                    </div>

                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"></div>
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
