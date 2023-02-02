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
        </div>
    </div>
  )
}

export default Home
 