import '../asset/css/App.css';
import Personal from '../components/Personal';
import Address from '../components/Address';
import Education from '../components/Education';

const Empolyee = ({ setInputArr, allValue, setAllValue, inputArr, active, setActive,isSignedIn,setIsSignedIn }) => {
  return (

    <>
      <div className='h-50'>
        <Personal
          setAllValue={setAllValue}
          allValue={allValue}
          active={active}
          setActive={setActive}
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
          
        />
        </div>
        <div>
        <Address
          setAllValue={setAllValue}
          allValue={allValue}
        />
        </div>
        <div>
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