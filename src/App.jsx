import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage.jsx";
import DashBoard from "../src/pages/DashBoard.jsx";
import Empolyee from "../src/pages/EmpolyeeFrom.jsx";
import Card from "../src/pages/EmployeeDetails.jsx";
import NewUser from "../src/pages/NewUser.jsx";
import FTSReisterDashBoard from "../src/pages/FTSReisterDashBoard.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import Header from "./components/Header.jsx";
const App = () => {
  const initialState = {
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
  };
  const [allValue, setAllValue] = useState(initialState);
  const [inputArr, setInputArr] = useState([]);
  const [active, setActive] = useState();
  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem("IsSigedIn Status") === true && false);
  const signIn = () => {
    setIsSignedIn(true);
  }
  useEffect(() => {
    localStorage.setItem("IsSigedIn Status", isSignedIn);
  }, [isSignedIn]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage isSignedIn={isSignedIn} signIn={signIn} setIsSignedIn={setIsSignedIn} />} />
          <Route path="/employee" element={<PrivateRoutes isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} ><Empolyee setInputArr={setInputArr} inputArr={inputArr} setAllValue={setAllValue} allValue={allValue} active={active} setActive={setActive} /></PrivateRoutes>} />
          <Route path="/dashboard" element={<PrivateRoutes isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} ><DashBoard inputArr={inputArr} allValue={allValue} active={active} setActive={setActive} /></PrivateRoutes>} />
          <Route path="/card" element={<PrivateRoutes isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}  ><Card setAllValue={setAllValue} allValue={allValue} active={active} setActive={setActive} /></PrivateRoutes>} />
          <Route path="/header" element={<Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
          <Route path="/fts-new-user" element={<PrivateRoutes isSignedIn={isSignedIn}><NewUser active={active} setActive={setActive} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></PrivateRoutes>} />
          <Route path="/fts-edit-user/:id" element={<PrivateRoutes isSignedIn={isSignedIn}><NewUser active={active} setActive={setActive} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></PrivateRoutes>} />
          <Route path="/table-fts-dashborad" element={<PrivateRoutes isSignedIn={isSignedIn}><FTSReisterDashBoard active={active} setActive={setActive} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></PrivateRoutes>} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
