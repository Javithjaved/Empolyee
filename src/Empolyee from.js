import './App.css';
import { useState } from 'react';
import Personal from './Personal';
import Address from './Address';
import Education from './Education';
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
const DashBoard1 = () => {
  // const [show, setShow] = useState(true)
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [emailId, setEmailId] = useState();
  // const [mobile, setMobile] = useState();
  // const [gender, setGender] = useState();
  // const [dob, setDob] = useState();
  // const [address, setAddress] = useState();
  // const [city, setCity] = useState();
  // const [state, setstate] = useState();
  // const [zip, setZip] = useState();
  // const [collegeName, setCollegeName] = useState();
  // const [degree, setDegree] = useState();
  // const [passout, setPassout] = useState();
  // const [skills, setSkills] = useState();
  // const [url, setUrl] = useState();
  // const [about, setAbout] = useState();
  
  const [Allvalue, setAllValue] = useState(
    {firstName :"",
    lastName :"",
    emailId :"",
    mobile :"",
    gender :"",
    dob :"",
    address :"",
    city :"",
    state :"",
    zip :"",
    collegeName :"",
    degree :"",
    passout :"",
    skills :"",
    url :"",
    about:"",
})
const Inputhandlechange=(e)=>{
   setAllValue=(prevState)=>{
    ...prevState,[e.target.name] : e.target.Value

  }
}

  const Navigate = useNavigate();
  return (
    <>
      {show ?
        <div>
          <Personal
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmailId={setEmailId}
            setMobile={setMobile}
            setGender={setGender}
            setDob={setDob}
            firstName={firstName}
            lastName={lastName}
            emailId={emailId}
            mobile={mobile}
            gender={gender}
            dob={dob}
          />
          <Address
            setAddress={setAddress}
            setCity={setCity}
            setstate={setstate}
            setZip={setZip}
            address={address}
            city={city}
            state={state}
            zip={zip}
          />
          <Education
            setCollegeName={setCollegeName}
            setPassout={setPassout}
            setDegree={setDegree}
            setSkills={setSkills}
            setUrl={setUrl}
            setAbout={setAbout}
            setShow={setShow}
            setFirstName={setFirstName}
            setEmailId={setEmailId}
            setMobile={setMobile}
            firstName={firstName}
            emailId={emailId}
            mobile={mobile}
            collegeName={collegeName}
            passout={passout}
            degree={degree}
            skills={skills}
            url={url}
            about={about}
            show={show}
          />
        </div> : null
      } 
    </>
  );
};
export default DashBoard1;