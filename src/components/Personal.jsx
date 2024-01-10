import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Personal = ({ allValue, setAllValue, active, setActive, isSignedIn, setIsSignedIn }) => {
    const Navigate = useNavigate()
    const handleChangeInput = (e) => {
        e.preventDefault();
        setAllValue({ ...allValue, [e.target.name]: e.target.value });
    }   
    return (
        <div className='container-fluid p-0'>
            <Header isSignedIn={isSignedIn}
                setIsSignedIn={setIsSignedIn}
                active={active}
                setActive={setActive}
                />
            <div className='row'>
                <div className="col-2 d-none d-sm-block"><Sidebar active={active} setActive={setActive} /></div>
                <div className="col-sm-12 col-md-10 col-xl-10 backgroundcolor ps-3 p-0">
                    <div className="row mx-2 mt-3"><h5 className="label2 "> <span className="pointer"  onClick={()=>Navigate("/dashboard")}>DashBoard</span>  &#10095; <span className="text ">Add Profile</span></h5></div>
                    <hr className="hr3 ms-3 me-3" ></hr>
                    <div className=" backgroundcolorinnerbox rounded-top-4 p-3 pb-4">
                        <h5 className="header1  ">Personal Information</h5>
                        <div className="row">
                            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
                                <label className='label' for='FirstName'>First Name : </label>
                                <input type="text" className="form-control mt-2" value={allValue.firstName} onChange={(e) => handleChangeInput(e)} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id='FirstName' name='firstName' required></input>
                            </div>
                            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
                                <label className='label' for='LastName'>Last Name :</label>
                                <input type="text" className="form-control lastname mt-2" value={allValue.lastName} onChange={(e) => handleChangeInput(e)} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id='LastName' name='lastName' required ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
                                <label className='label' for='EmailId'>Email-ID :</label>
                                <input type="text" className="form-control mt-2" value={allValue.emailId} onChange={(e) => handleChangeInput(e)} id='EmailId' name='emailId' required></input>
                            </div>
                            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
                                <label className='label' for='Mobile'>Mobile No :</label>
                                <input type="number" className="form-control mobileno mt-2" value={allValue.mobile} onChange={(e) => handleChangeInput(e)} onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} id='mobile' name='mobile' required ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-xl-6 col-sm-12 col-lg-6 col-md-6'>
                                <div className="gender">
                                    <div className="gendername">
                                        <label className='label' for='Gender'>Gender :</label>
                                    </div>
                                    <input type="radio" value="Male" name="Gender" id='Gender' className='form-check-input mt-1' onChange={(e) => handleChangeInput(e)} required />
                                    <label className='Male ms-2 ' for="Male">Male</label>
                                    <input type="radio" value="Female" name="Gender" id='Gender' className='form-check-input ms-2 mt-1' onChange={(e) => handleChangeInput(e)} required />
                                    <label className='Female ms-2 ' for="Female">Female</label>
                                    <input type="radio" value="Other" name="Gender" id='Gender' className='form-check-input ms-2 mt-1' onChange={(e) => handleChangeInput(e)} required />
                                    <label className='other ms-2 ' for="Other">Other</label>
                                </div>
                            </div>
                            <div className='col-xl-6 col-sm-12 col-lg-6 col-md-6'>
                                <div className="Dob">
                                    <label className="label" for='Dob'>Date of birth :</label>
                                    <div className="date">
                                        <input type="date" id="Dob" className='form-control mt-2' value={allValue.dob} onChange={(e) => handleChangeInput(e)} name='dob' min="1945-01-01" max="2003-12-31"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Personal;