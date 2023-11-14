import './App.css';
import { useState } from 'react';
import Personal from './Personal';
import Address from './Address';
import Education from './Education';
import DashBoard from './DashBoard';
const Empolyee = () => { 
  // const [rows, initRow] = useState([]);
  // const addRowTable = () => {
  //   const data = {
  //     name: "",
  //     email: "",
  //     profile: "",
  //   };
  //   initRow([...rows, data]);
  // };
  const  [allValue, setAllValue] = useState(
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
    Country :"",
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
    {!allValue.show ?
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
        </div>:null
}
{allValue.show ?
<div>
  <DashBoard
  setAllValue={setAllValue}
  allValue={allValue} 
/>
</div>:null
}
    </>

  );
};
export default Empolyee;