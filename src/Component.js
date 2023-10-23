import React, { useState } from 'react';
// import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
const Component = () => {
  const [show, setShow] = useState(true)
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailId, setEmailId] = useState();
  const [mobile, setMobile] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setstate] = useState();
  const [zip, setZip] = useState();
  const [india, setindia] = useState();
  const [collegeName, setCollegeName] = useState();
  const [degree, setDegree] = useState();
  const [passout, setPassout] = useState();
  const [skills, setSkills] = useState();
  const [url, setUrl] = useState();
  const [about, setAbout] = useState();
  const statename = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]
  const passoutyear = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]
  const degreedepartment = ["BE-CSE", "BTech-IT", "BE-ECE", "BE-EEE", "BE-MECH"]
  const Countryname = ["India"]
  const handleChangeFname = (e) => {
    setFirstName(e.target.value)
  }
  const handleChangeLname = (e) => {
    setLastName(e.target.value)
  }
  const handleChangeEmail = (e) => {
    setEmailId(e.target.value)
  }
  const handleChangeMobile = (e) => {
    setMobile(e.target.value)
  }
  const handleChangeGender = (e) => {
    setGender(e.target.value)
  }
  const handleChangeDOB = (e) => {
    setDob(e.target.value)
  }
  const handleChangeAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleChangeCity = (e) => {
    setCity(e.target.value)
  }
  const handleChangeState = (e) => {
    setstate(e.target.value)
  }
  const handleChangeStateZip = (e) => {
    setZip(e.target.value)
  }
  const handleChangeCountry = (e) => {
    setindia(e.target.value)
  }
  const handleChangeCollegeName = (e) => {
    setCollegeName(e.target.value)
  }
  const handleChangepassout = (e) => {
    setPassout(e.target.value)
  }
  const handleChangeDegree = (e) => {
    setDegree(e.target.value)
  }
  const handleChangeSkills = (e) => {
    setSkills(e.target.value)
  }
  const handleChangeurl = (e) => {
    setUrl(e.target.value)
  }
  const handleChangeAbout = (e) => {
    setAbout(e.target.value)
  }
  return (
    <>
      {show ?
        <div>
          <div className='bg'>
            <div className='container d-flex justify-content-center'>
              <div className='row'>
                <div className='col-12 box'>
                  <div className='col-12'>
                    <h1 className="header fs-3 text-center">Empolyee Registration</h1>
                    <h2 className="personalinformation">Personal Information </h2>
                    <div className="row">
                      <div className="col">
                        <label className='Fname' for='FirstName'>First Name :</label>
                        <input type="text" className="form-control mt-2" value={firstName} onChange={handleChangeFname} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-"].includes(e.key) && e.preventDefault()} id='FirstName' name='firstname ' required></input>
                      </div>
                      <div className="col">
                        <label className='Lname' for='LastName'>Last Name :</label>
                        <input type="text" className="form-control lastname mt-2" value={lastName} onChange={handleChangeLname} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-"].includes(e.key) && e.preventDefault()} id='LastName' name='Lname' required ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label className='email' for='EmailId'>Email-ID :</label>
                        <input type="text" className="form-control mt-2" value={emailId} onChange={handleChangeEmail} id='EmailId' name='EmailID ' required></input>
                      </div>
                      <div className="col">
                        <label className='mobile' for='Mobile'>Mobile No :</label>
                        <input type="number" className="form-control mobileno mt-2" value={mobile} onChange={handleChangeMobile} onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} id='Mobile' name='Mobile' required ></input>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <div className="gender">
                          <div className="gendername">
                            <label className='gender' for='gender'>Gender :</label>
                          </div>
                          <input type="radio" value="Male" name="radio" id='Gender' className='form-check-input' onChange={handleChangeGender} required />
                          <label className='Male ms-2'>Male</label>
                          <input type="radio" value="Female" name="radio" id='Gender' className='form-check-input ms-2' onChange={handleChangeGender} required />
                          <label className='Female ms-2'>Female</label>
                          <input type="radio" value="Other" name="radio" id='Gender' className='form-check-input ms-2' onChange={handleChangeGender} required />
                          <label className='other ms-2'>Other</label>
                        </div>
                      </div>
                      <div className='col'>
                        <div className="Dob">
                          <label className="birth" for='Dob'>Date of birth :</label>
                          <div className="date">
                            <input type="date" id="myDate" className='form-control' value={dob} onChange={handleChangeDOB} name="myDate" min="1945-01-01" max="2000-10-23"></input>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <hr></hr>
                        <div className='details'>
                          <h2 className="AddressDetalis" id='Address'>Address Details</h2>
                          <label className="street " for="street" >Street :</label>
                          <input type="text" className="form-control mt-2" value={address} onChange={handleChangeAddress} id="street" placeholder="1234 Main St" name='Address' required ></input>
                        </div>
                        <div className='row'>
                          <div className="col-5">
                            <label className="city" for='City'>City :</label>
                            <input type="text" className="form-control mt-2" value={city} onChange={handleChangeCity} id="City" name='City' onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} required ></input>
                          </div>
                          <div className="col-4">
                            <label className="state" for='state'>State :</label>
                            <select name="state" value={state} onChange={handleChangeState} id="state" className="form-control m-1" required>
                              {statename.map((state) => {
                                return <option value={state}>{state}</option>
                              })}
                            </select>
                          </div>
                          <div className="col-3">
                            <label className="zip" for='Zip'>Zip :</label>
                            <input type="text" className="form-control mt-2" value={zip} onChange={handleChangeStateZip} id="Zip" name='Zip' required ></input>
                          </div>
                        </div>
                        <div className='col-5'>
                          <div className='Country'>
                            <label className="country" for='Country'>Country :</label>
                            <input type="text" className="form-control country mt-2" id='Country' placeholder='India' disabled value={india} onClick={handleChangeCountry} required ></input>
                          </div>
                        </div>
                        <div><hr></hr></div>
                        <div className="row">
                          <h3 className="Educationdetails">Education Details</h3>
                          <div className="col-4" >
                            <label className='college' for='CollegeName' >College Name :</label>
                            <input type="text" className="form-control mt-2" value={collegeName} onChange={handleChangeCollegeName} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id='CollegeName' name='CollegeName' required ></input>
                          </div>
                          <div className="col-4">
                            <label className="passOut " for='Passout'>Pass out :</label>
                            <select value={passout} onChange={handleChangepassout} id="Passout" className="form-control mt-2" required >
                              {passoutyear.map((passout) => {
                                return <option value={passout}>{passout}</option>
                              })}
                            </select>
                          </div>
                          <div className="col-4">
                            <label className="degree" for='Degree'>Degree :</label>
                            <select name="Degree" value={degree} onChange={handleChangeDegree} id="Degree" className="form-control mt-2" required>
                              {degreedepartment.map((degree) => {
                                return <option value={degree}>{degree}</option>
                              })}
                            </select>
                          </div>
                        </div>
                        <div className='row'>
                          <div className="col-6 ">
                            <label className="skills " for='skills'>Skills :</label>
                            <input type="text" className="form-control mt-2" value={skills} onChange={handleChangeSkills} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id="skills" name='Skills' required></input>
                          </div>
                          <div className='col-6'>
                            <label className="Url" for='Url'>Enter Photo URL:</label>
                            <input type="img" name="Url" value={url} onChange={handleChangeurl} id="Url" className="form-control mt-2" placeholder="https://example.com" pattern="src/Images/" required />
                          </div>
                        </div>
                        <div className="About">
                          <div className="col-12">
                            <label className="about" for='About'>About :</label>
                            <textarea className="form-control mt-2" value={about} onChange={handleChangeAbout} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id="About" placeholder='Intro about Yourself' name='About ' required></textarea>
                          </div>
                        </div>
                        <div className='hr'>
                          <hr></hr>
                        </div>
                        <div className="button">
                          <div className="col-12">
                            <button type="button " onClick={() => setShow(!show)} className="btn btn-danger submit ">Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> : null
      }
      {!show ?
        <div className='bg1'>
          <div className='Card col-6 ' >
            <h3 className='details text-center'>Empolyee Details</h3>
            <h4>Personal Information</h4>
            <div className="row">
              <div className="col">
                <label className='Fname' for='FirstName'>First Name :</label>
                <p>{firstName}</p>
              </div>
              <div className="col">
                <label className='Lname' for='LastName'>Last Name :</label>
                <p>{lastName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className='email' for='Email-Id'>Email-ID :</label>
                <p>{emailId}</p>
              </div>
              <div className="col">
                <label className='mobile' for='Mobile No'>Mobile No :</label>
                <p>{mobile}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className="gender">
                  <div className="gendername">
                    <label className='gender' for='gender'>Gender :</label>
                  </div>
                  <p className='text'>{gender}</p>
                </div>
              </div>
              <div className='col'>
                <div className="Dob">
                  <label className="birth" for='Dob'>Date of birth :</label>
                  <div className="date">
                    <p>{dob}</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <hr></hr>
                <div className='details'>
                  <h2 className="AddressDetalis" id='Address'>Address Details</h2>
                  <label className="street " for="street" >Street :</label>
                  <p>{address}</p>
                </div>
                <div className='row'>
                  <div className="col-5">
                    <label className="city" for='City'>City :</label>
                    <p>{city}</p>
                  </div>
                  <div className="col-4">
                    <label className="state" for='state'>State :</label>
                    <p>{state}</p>
                  </div>
                  <div className="col-3">
                    <label className="zip" for='Zip'>Zip :</label>
                    <p>{zip}</p>
                  </div>
                </div>
                <div className='col-5'>
                  <div className='Country'>
                    <label className="country" for='Country'>Country :</label>
                    <p>{Countryname}</p>
                  </div>
                </div>
                <div><hr></hr></div>
                <div className="row">
                  <h3 className="Educationdetails">Education Details</h3>
                  <div className="col-4" >
                    <label className='college' for='CollegeName' >College Name :</label>
                    <p>{collegeName}</p>
                  </div>
                  <div className="col-4">
                    <label className="passOut " for='Passout'>Pass out :</label>
                    <p>{passout}</p>
                  </div>
                  <div className="col-4">
                    <label className="degree" for='Degree'>Degree :</label>
                    <p>{degree}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className="col-6 ">
                    <label className="skills " for='skills'>Skills :</label>
                    <p>{skills}</p>
                  </div>
                  <div className='col-6'>
                    <label className="Url" for='Url'>Enter Photo URL:</label>
                    <p>{url}</p>
                  </div>
                </div>
                <div className="About">
                  <div className="col-12">
                    <label className="about" for='About'>About :</label>
                    <p>{about}</p>
                  </div>
                </div>
                <div className='hr'>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <button type="button " onClick={() => setShow(!show)} className="btn btn-danger Edit me-4">Edit</button>
              <button type="button " onClick={() => window.location.reload()} className="btn btn-danger confirm">Confirm</button>
            </div>
          </div>
        </div> : null
      }
    </>
  );
};
export default Component;