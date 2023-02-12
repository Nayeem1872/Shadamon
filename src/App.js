import Home from "./adminPages/home/Home";
// import Login from "./adminPages/login/Login";
// import List from "./adminPages/list/List";
// import Single from "./adminPages/single/Single";
// import New from "./adminPages/new/New"
import Admin from "./Admin"
import Categories from "./adminComponents/settings/categories/Categories";
import Location from "./adminComponents/settings/location/Addlocation";
import GetLocation from "./adminComponents/settings/location/GetLocation";
import Package from "./adminComponents/settings/package/Package";
import Product from "./adminComponents/allproduct/Product";



import {
  BrowserRouter,Route,Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<Admin/>} />
          <Route path="/admin" element={<Home/>}/>
             <Route path="/admin/categories" element={< Categories />}/>
             <Route path="/admin/location" element={< Location />}/>
             <Route path="/admin/location" element={< GetLocation />}/>
             <Route path="/admin/package" element={< Package />}/>
             <Route path="/admin/product" element={< Product />}/>
             <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
              
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
