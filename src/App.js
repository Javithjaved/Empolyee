import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import LoginPage from "./Loginpage.jsx";
import DashBoard from "./DashBoard";
import PersonalEdit from "./personalEdit.jsx";
import Table from "./Table.jsx";
import Employee from "./Empolyee from";
const App = () => {
  return (
    <>
    <BrowserRouter>    
        <Routes>
           <Route path="/" element={<LoginPage />}></Route>
          <Route path="/DashBoard" element={<DashBoard />}></Route>
          <Route path="/Employee" element={<Employee/>}></Route>
          <Route path="/DashBoard" element={<Employee/>}></Route>
         
          <Route path="/personalEdit" element={<PersonalEdit/>}></Route> 
          {/* <Route path="/Table" element={<Table/>}></Route> */}
        </Routes> 
      </BrowserRouter>
    </>
  )
}
export default App;
