import Home from "./adminPages/home/Home";
// import Login from "./adminPages/login/Login";
// import List from "./adminPages/list/List";
// import Single from "./adminPages/single/Single";
// import New from "./adminPages/new/New"
import App1 from "./App"
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
          {/* <Route path="/" >
            <Route index element={<App1/>} /> */}
             {/* <Route path="/admin/:userId" element={<Single/>}/>
              
             <Route path="/admin/new" element={<New/>}/>
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
