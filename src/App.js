import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import LoginPage from "./Loginpage.jsx";
import DashBoard from "./DashBoard";
import Empolyee from "./Empolyee from";
import Card from "./Card.js";
const App = () => {
  
  // console.log(inputArr);
  const  [allValue, setAllValue] = useState(
    {firstName :"",
    lastName :"",
    emailId :"",
    mobile :"",
    Gender :"",
    dob :"",
    address :"",
    city :"",
    state :"",
    zip :"",
    Country :"",
    collegeName :"",    
    degree :"",
    passout :"",
    skills :"",
    url :"",
    about:"", 
}) 
const [inputArr, setInputArr] = useState([]);
  return (
    <>
    <BrowserRouter>    
        <Routes>
           <Route path="/" element={<LoginPage />}></Route>
           <Route path="/Employee" element={<Empolyee setInputArr={setInputArr} inputArr={inputArr} setAllValue={setAllValue} allValue={allValue}/>}></Route>
           <Route path="/DashBoard" element={<DashBoard inputArr={inputArr} allValue={allValue} />}></Route>
           <Route path="/Card" element={<Card setAllValue={setAllValue} allValue={allValue} />}></Route>

        </Routes> 
      </BrowserRouter>
    </>
  )
}
export default App;
