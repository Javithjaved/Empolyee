import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Component from './Component'

export default function App (){
  return(
    <>
    <Component />
   
    </>
    
  )
  
}
// import React from 'react';
// import './App.css';
// import { useState } from 'react';
// import '../src/bootstrap-5.3.2-dist/css/bootstrap.css';
// import Component from './Component';
// const App = () => {
//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [emailId, setEmailId] = useState();
//   const [mobile, setMobile] = useState();
//   const [gender, setGender] = useState();
//   const [dob, setDob] = useState();
//   const [address, setAddress] = useState();
//   const [city, setCity] = useState();
//   const [state, setstate] = useState();
//   const [zip, setZip] = useState();
//   const [india, setindia] = useState();
//   const [collegeName, setCollegeName] = useState();
//   const [degree, setDegree] = useState();
//   const [passout, setPassout] = useState();
//   const [skills, setSkills] = useState();
//   const [url, setUrl] = useState();
//   const [about, setAbout] = useState();
//   const handle = () => {
//     alert("First Name :" + firstName + "\nlast Name :" + lastName + "\nMobile No:" + mobile + "\ngender :" + gender + "\nDate of Birth :" + dob + "\nAddress :" + address + "\nCity :" + city + "\nState" + state + "\nZip:" + zip + "\nCountry :" + Countryname  + "\nCollege Name :" + collegeName + "\nDegree :" + degree + "\nPassout :" + passout + "\nSkills :" + skills + "\nUrl :" + url + "\nAbout :" + about);
//   }
//   const statename = ["Select", 
//   "Andhra Pradesh",
//     "Arunachal Pradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Goa",
//     "Gujarat",
//     "Haryana",
//     "Himachal Pradesh",
//     "Jammu and Kashmir",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "Tamil Nadu",
//     "Telangana",
//     "Tripura",
//     "Uttarakhand",
//     "Uttar Pradesh",
//     "West Bengal",
//     "Andaman and Nicobar Islands",
//     "Chandigarh",
//     "Dadra and Nagar Haveli",
//     "Daman and Diu",
//     "Delhi",
//     "Lakshadweep",
//     "Puducherry"]
//   const passoutyear = ["Select", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]
//   const degreedepartment = ["Select", "BE-CSE", "BTech-IT", "BE-ECE", "BE-EEE", "BE-MECH"]
//   const Countryname = ["India"]
//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <div className="bg">
//             <div className='cantainer d-flex justify-content-center'>
//               <div className="row">
//                 <div className="col-12">
//                   <div className="col-12">
//                     <h1 className="header fs-4 text-center">Empolyee Registration</h1>
//                     <h2 className="header2">Personal Infromation </h2>
//                     <div className="row">
//                       <div className="col">
//                         <label className='name'>First Name :</label>
//                         <input type="text" className="form-control mt-1" value={firstName} onChange={(e) => setFirstName(e.target.value)} id='FirstName' name='FirstName' ></input>
//                       </div>
//                       <div className="col">
//                         <label className='lname'>Last Name :</label>
//                         <input type="text" className="form-control mt-1" value={lastName} onChange={(e) => setLastName(e.target.value)} id='LastName' name='LastName' ></input>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col">
//                         <label className='email'>Email-ID :</label>
//                         <input type="text" className="form-control mt-1" value={emailId} onChange={(e) => setEmailId(e.target.value)} id='EmailId' name='EmailID ' ></input>
//                       </div>
//                       <div className="col">
//                         <label className='mobile'>Mobile No :</label>
//                         <input type="text" className="form-control mt-1" value={mobile} onChange={(e) => setMobile(e.target.value)} id='Mobile' name='Mobile' ></input>
//                       </div>
//                     </div>
//                     <div className='row'>
//                       <div className='col'>
//                         <div className="gender">
//                           <div className="gendername" id='gender'>Gender :</div>
//                           <input type="radio" value="Male" name="radio" className='form-check-input' onChange={(e) => setGender(e.target.value)} />
//                           <label className='Male ms-2'>Male</label>
//                           <input type="radio" value="Female" name="radio" className='form-check-input ms-2' onChange={(e) => setGender(e.target.value)} />
//                           <label className='Female ms-2'>Female</label>
//                           <input type="radio" value="Other" name="radio" className='form-check-input ms-2' onChange={(e) => setGender(e.target.value)} />
//                           <label className='other ms-2'>Other</label>
//                         </div>
//                       </div>
//                       <div className='col'>
//                         <div className="Dob">
//                           <label className="birth">Date of birth :</label>
//                           <div className="date">
//                             <input type="date" className="form-control mt-1" value={dob} onChange={(e) => setDob(e.target.value)} id="Dob"></input>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-12">
//                       <hr>
//                       </hr>
//                       <div className='details'>
//                         <h2 className="Address">Address Details</h2>
//                         <label className="form-label">Street :</label>
//                         <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} id="Address" placeholder="1234 Main St" name='Address' ></input>
//                       </div>

//                     </div>
//                     <div className='row'>
//                       <div className="col-5">
//                         <label className="form-label">City :</label>
//                         <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} id="City" name='City' ></input>
//                       </div>
//                       <div className="col-4">
//                         <label className="form-label">State :</label>
//                         <select name="state" value={state} onChange={(e) => setstate(e.target.value)} id="state" className="form-control">
//                           {statename.map((state) => {
//                             return <option value={state}>{state}</option>
//                           })}
//                         </select>
//                       </div>
//                       <div className="col-3">
//                         <label className="form-label">Zip :</label>
//                         <input type="text" className="form-control" value={zip} onChange={(e) => setZip(e.target.value)} id="Zip" name='Zip' ></input>
//                       </div>
//                     </div>
//                     <div className='col-5'>
//                       <div className='Country'>
//                         <label className="form-label" >Country :</label>
//                         <input type="text" className="form-control country mt-2" placeholder='India' disabled value={india} onClick={(e) => setindia(e.target.value)} ></input>
//                       </div>
//                     </div>
//                     <div><hr></hr></div>
//                     <div className="row">
//                       <h3 className="header3 mt-2">Education Details</h3>
//                       <div className="col-4 " >
//                         <label className='college' >College Name :</label>
//                         <input type="text" className="form-control mt-2" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} id='CollegeName' name='CollegeName' ></input>
//                       </div>
//                       <div className="col-4 ">
//                         <label className="form-label">Pass out :</label>
//                         <select value={passout} onChange={(e) => setPassout(e.target.value)} id="Passout" className="form-control"  >
//                           {passoutyear.map((passout) => {
//                             return <option value={passout}>{passout}</option>
//                           })}
//                         </select>
//                       </div>
//                       <div className="col-4">
//                         <label className="form-label">Degree :</label>
//                         <select name="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} id="Degree" className="form-control">
//                           {degreedepartment.map((degree) => {
//                             return <option value={degree}>{degree}</option>
//                           })}
//                         </select>
//                       </div>
//                     </div>
//                     <div className='row'>
//                       <div className="col-6 ">
//                         <label className="skills ">Skills :</label>
//                         <input type="text" className="form-control mt-1" value={skills} onChange={(e) => setSkills(e.target.value)} id="skills" name='Skills'></input>
//                       </div>
//                       <div className='col-6'>
//                         <label className="Url">Enter Photo URL:</label>
//                         <input type="Url" name="Url" value={url} onChange={(e) => setUrl(e.target.value)} id="Url" className="form-control mt-1" placeholder="https://example.com" pattern="https://.*" required />
//                       </div>
//                     </div>
//                     <div className="About">
//                       <div className="col-12">
//                         <label className="about">About :</label>
//                         <textarea className="form-control mt-1" value={about} onChange={(e) => setAbout(e.target.value)} id="About" placeholder='Intro about Yourself' name='About ' ></textarea>
//                       </div>
//                     </div>
//                     <div className='hr'>
//                       <div className='col-12'>
//                         <hr></hr>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="button">
//                     <div className="col-12">
//                       {/* <button type="button " value={value} onChange={(e) => setValue(e.target.value)} className="btn btn-danger mx-3">Cancel</button> */}
//                       <button type="button " onClick={handle} id='Sumbit' className="btn btn-danger btn ">Submit</button>
//                     </div>
//                   </div>
//                   <div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>
//     </>
//   );
// }

