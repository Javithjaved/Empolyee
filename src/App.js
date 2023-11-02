import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Component from './Empolyee from'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Loginpage.jsx";
import DashBoard from "./DashBoard";
const App= ()=>{
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/Component" element={<Component />}></Route>
        <Route path="/DashBoard" element={<DashBoard />}></Route>
        <Route path="/" element={<Component/>}></Route>
      </Routes>
    </Router>
    </>
  )
}
export default App;
