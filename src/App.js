import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import LoginPage from "./Loginpage.jsx";
import DashBoard from "./DashBoard";
import Empolyee from "./Empolyee from";
const App = () => {
  return (
    <>
    <BrowserRouter>    
        <Routes>
           <Route path="/" element={<LoginPage />}></Route>
           <Route path="/Employee" element={<Empolyee/>}></Route>
           <Route path="/DashBoard" element={<DashBoard />}></Route>
           {/* <Route path='/DashBoard' element={<DashBoard />}></Route>
           <Route path="/Profile" element={<Employee />}></Route>
           <Route path="/Employee" element={<Employee />}></Route> */}
           
     
        </Routes> 
      </BrowserRouter>
    </>
  )
}
export default App;
