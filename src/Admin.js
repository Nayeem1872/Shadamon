import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Demo from "./components/demo/Demo";
import Login from "./components/login/Login";
import Login1 from "./components/login/Login1";
import Signup from "./components/login/Signup";
import Home from "./components/main/home/home"
import Search from "./components/search/Search";
import AddStoryPost from "./components/storyAddPost/StoryAddPost"
import Advertisement from "./components/advertisement/Advertisement";

function App() {
  return (
    <div className="App ">
      < Navbar />
      <div className="flex bg-gray-100">
      <div className="flex gap-[50px] absoloute inset-y-0 left-0 ml-[400px] bg">
          <div className=" w-[250px] hidden lg:block">

            < Sidebar />
          
          </div>
           
          < Login />
          < Login1 />
          <Signup />
      </div>
      <div className="grid gap-8 grid-cols-2 px-4 ">
      < Home />
      <div class="relative h-32 w-32 pr-4 bg-gray-100">
        <div class="absolute inset-y-0 left-12 w-32 bg-gray-100 ">
      < Advertisement />
      </div>
      </div>
      </div>
      </div>
      <div className=" flex justify-center items-center bg-gray-100">
        <div className=" col-span-2">
          < Search />
          < AddStoryPost />
          </div>
        
      </div>
      
      
    </div>
  );
}

export default App;
