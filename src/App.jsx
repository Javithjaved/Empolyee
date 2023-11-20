import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage.jsx";
import DashBoard from "../src/pages/DashBoard.jsx";
import Empolyee from '../src/pages/EmpolyeeFrom.jsx';
import Card from "../src/pages/EmployeeDetails.jsx";
import NewUser from "../src/pages/NewUser.jsx";
import TableDashBoradApi from "../src/pages/FTSReisterDashBoard.jsx";
const App = () => {
  const [allValue, setAllValue] = useState(
    {
      firstName: "",
      lastName: "",
      emailId: "",
      mobile: "",
      Gender: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      Country: "",
      collegeName: "",
      degree: "",
      passout: "",
      skills: "",
      url: "",
      about: "",
    })
  const [inputArr, setInputArr] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/employee" element={<Empolyee setInputArr={setInputArr} inputArr={inputArr} setAllValue={setAllValue} allValue={allValue} />}></Route>
          <Route path="/dashboard" element={<DashBoard inputArr={inputArr} allValue={allValue} />}></Route>
          <Route path="/card" element={<Card setAllValue={setAllValue} allValue={allValue} />}></Route>
          <Route path="/newuser" element={<NewUser />}></Route>
          <Route path="/tabledashboradapi" element={<TableDashBoradApi />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
