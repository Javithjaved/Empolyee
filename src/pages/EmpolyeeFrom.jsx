import '../asset/css/App.css';
import Personal from '../components/Personal';
import Address from '../components/Address';
import Education from '../components/Education';

const Empolyee = ({ setInputArr, allValue, setAllValue, inputArr, active, setActive, isSignedIn, setIsSignedIn }) => {
  return (
    <>
    <div className='w-100'>
        <Personal
          setAllValue={setAllValue}
          allValue={allValue}
          active={active}
          setActive={setActive}
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
        />     
        <Address
          setAllValue={setAllValue}
          allValue={allValue}
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
        />
        <Education
          setAllValue={setAllValue}
          allValue={allValue}
          setInputArr={setInputArr}
          inputArr={inputArr}
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
        />
        </div>
    </>
  );
};
export default Empolyee;