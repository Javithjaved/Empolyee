import './App.css';

import Personal from './Personal';
import Address from './Address';
import Education from './Education';
import { useState } from 'react';
const Empolyee = ({setInputArr,allValue,setAllValue,inputArr}) => { 
  return (
    <>
    
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
          setInputArr={setInputArr}
          inputArr={inputArr}
          />
        </div>

    </>
  );
};
export default Empolyee;