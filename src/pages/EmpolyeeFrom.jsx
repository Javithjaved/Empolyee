import '../asset/css/App.css';
import Personal from '../components/Personal';
import Address from '../components/Address';
import Education from '../components/Education';
const Empolyee = ({ setInputArr, allValue, setAllValue, inputArr,active,setActive }) => {
  return (
    <>

      <div>
        <Personal
          setAllValue={setAllValue}
          allValue={allValue}
          active={active} 
          setActive={setActive}
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