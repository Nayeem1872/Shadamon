import Home from "./adminPages/home/Home";
// import Login from "./adminPages/login/Login";
// import List from "./adminPages/list/List";
// import Single from "./adminPages/single/Single";
// import New from "./adminPages/new/New"
import App1 from "./App"
import Categories from "./adminComponents/settings/categories/Categories";
import Location from "./adminComponents/settings/location/Location";
import Datatable from "./adminComponents/locationDatatable/LocationDatatable"


import {
  BrowserRouter,Route,Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<App1/>} />
          <Route path="/admin" element={<Home/>}/>
             <Route path="/admin/categories" element={< Categories />}/>
             <Route path="/admin/location" element={< Location />}/>
              
              {/* <Route path="/admin/new" element={<New/>}/>
              <Route path="/admin/categories" >
                <Route index element={<Categories/>} />
              </Route> 

            <Route path="/admin/product" >
            <Route index element={<List/>} />
             <Route path="/admin/:productId" element={<Single/>}/>
              
             <Route path="/admin/new" element={<New/>}/> */}
              {/* </Route>      */}
            
            
            
            
            
            </Route>
          </Routes>




      </BrowserRouter>
    </div>
  );
}

export default App;
