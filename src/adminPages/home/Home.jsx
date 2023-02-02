import React from 'react';
import Sidebar from '../../adminComponents/sidebar/Sidebar';
import Navbar from '../../adminComponents/navbar/Navbar'
import "./home.scss";
// import Widget from '../../adminComponents/widget/Widget';
// import Featured from '../../adminComponents/featured/Featured';
// import Chart from '../../adminComponents/chart/Chart';
// import Table from '../../adminComponents/table/Table'
const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>

        <div className="homeContainer">
          <Navbar/>
          
          {/* <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
          <div className="charts">
            <Featured />
            <Chart/>
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              < Table />
            </div> */}
          {/* <div class="box-content h-32 w-32 p-4 border-4 hover:box-content md:box-content">
              Total Users
          </div> */}
          
          <div class=" flex flex-1 mx-2 mt-2">
  <div class="block p-6 mx-2 col-span-2 rounded-lg shadow-lg bg-lime-400 max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">All Users</h5>
    <p class="text-gray-700 text-base mb-4">
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
  <div class="block p-6 mx-2 rounded-lg shadow-lg bg-teal-400 max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
    <p class="text-gray-700 text-base mb-4">
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
  <div class="block p-6 mx-2 rounded-lg shadow-lg bg-sky-400 max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
    <p class="text-gray-700 text-base mb-4">
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
  <div class="block p-6 mx-2 rounded-lg shadow-lg bg-violet-400 max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
    <p class="text-gray-700 text-base mb-4">
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
  <div class="block p-6 mx-2 rounded-lg shadow-lg bg-orange-400 max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
    <p class="text-gray-700 text-base mb-4">
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
  <div class="block p-6 mx-2 rounded-lg shadow-lg bg-orange-400 max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
    <p class="text-gray-700 text-base mb-4">
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
 
</div>
          



        </div>
    </div>
  )
}

export default Home
 