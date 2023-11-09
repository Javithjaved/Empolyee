import './App.css';
import { useState } from 'react';
import Personal from './Personal';
import Address from './Address';
import Education from './Education';
import DashBoard from './DashBoard';
const DashBoard1 = () => {  
  const [allValue, setAllValue] = useState(
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
    show :"",
})
  return (
    <>
    {
        <div>
          <Personal
          setAllValue={setAllValue}
          allValue={allValue}
          
    
          />
          <Address
           setAllValue={setAllValue}
           allValue={allValue}
           
          />
          <Education
           setAllValue={setAllValue}
           allValue={allValue}
           
          />
          
          {/* <DashBoard
          setAllValue={setAllValue}
          allValue={allValue}
          
          /> */}
        </div>
}
    </>

  );
};
export default DashBoard1;