<div
                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModalCenter3"
                data-bs-toggle="modal"
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