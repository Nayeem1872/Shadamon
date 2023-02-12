import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
// import Categories from '../settings/categories/Categories';
import { Link, Router } from 'react-router-dom';
const Sidebar = () => {

  return (
    <div className='sidebar'>
      <div className='top'><span className="logo">Nayeem Admin</span></div>
      <hr/>
      <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            <li><DashboardIcon className='icon' /> <a href="/"><span>Dashboard</span></a></li>
            <p className="title">LISTS</p>
            <li><PersonIcon className='icon'/><a href="/users"><span>Users</span></a></li>
            <li><ProductionQuantityLimitsIcon className='icon'/><Link to={"/admin/product"}><span>Products</span></Link></li>
            <li><ShoppingCartCheckoutIcon className='icon'/><span>Orders</span></li>
            <li><RoomServiceIcon className='icon'/><span>Delivery</span></li>
            <p className="title">USEFUL</p>
            <li><QueryStatsIcon className='icon'/><span>Stats</span></li>
            <li><CircleNotificationsIcon className='icon'/><span>Notifications</span></li>
            <p className="title">SERVICE</p>
            <li><MonitorHeartIcon className='icon'/><span>System health</span></li>
            <li><BookIcon className='icon' /><span>Logs</span></li>
            
 
<div class="accordion font-sans" id="accordionExample">
  <div class="">
   
            <li><SettingsIcon className='icon font-medium
      text-xs'/>
      <button class= "icon " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
        aria-controls="collapseOne">
        Settings
      </button>
      </li>
   
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
        <li class="icon"><Link to={"/admin/location"}>location</Link></li>
        <li><Link to={"/admin/categories"}>Categories</Link></li>
        <li><Link to={"/admin/package"}>Package</Link></li>
      </div>
    </div>
  </div>
      
  
  
</div>


            
            <p className="title">USER</p>
            <li><AccountCircleIcon className='icon'/><span>Profile</span></li>
            <li><LogoutIcon className='icon' /><span>Logout</span></li>   

        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>


      </div>
    </div>
  )
}

export default Sidebar
