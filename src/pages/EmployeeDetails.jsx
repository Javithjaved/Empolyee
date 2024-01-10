import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Card = ({ allValue, active, setActive, isSignedIn, setIsSignedIn }) => {
    const Navigate = useNavigate();
    const Country = ["India"]
    return (
        <>
            <div className="backgroundcolor">
                <div className="row">
                    <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} active={active} setActive={setActive} />
                    <div className="col-2 Sidebar1 d-none d-sm-block">
                        <Sidebar active={active} setActive={setActive} />
                    </div>
                    <div className='col-sm-12 col-xl-10 col-md-10 col-lg-10 bg1 pb-4'>
                        <div className="row mx-3 mt-3"><h5 className="pointer" onClick={()=>Navigate("/employee")}>Empolyee Details &#10095; <span className="text ">View Empolyee Details</span></h5></div>
                        <hr className='hr0  ms-4 me-5'></hr>
                        <div className='col-11 personal rounded-top-4 p-3 ms-4 me-4 mt-4 pb-0'>
                            <h4>Personal Information</h4>
                            <div className="row">
                                <div className="col-sm-6 col-md-4 col-xl-4 col-lg-4">
                                    <label className='label' for='FirstName'>First Name :</label>
                                    <p className='firstname1 fw-medium '>{allValue.firstName}</p>
                                </div>  
                                <div className="col-sm-6 col-md-4 col-xl-4 col-lg-4">
                                    <label className='label' for='LastName'>Last Name :</label>
                                    <p className='lastname1 fw-medium'>{allValue.lastName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-4 col-xl-4 col-lg-4">
                                    <label className='label' for='Email-Id'>Email-ID :</label>
                                    <p className='email1 fw-medium'>{allValue.emailId}</p>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-4 col-lg-4">
                                    <label className='label' for='Mobile No'>Mobile No :</label>
                                    <p className='mobile1 fw-medium'>{allValue.mobile}</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6 col-md-4 col-xl-4 col-lg-4'>
                                    <div className="gender">
                                        <div className="gendername">
                                            <label className='label' for='gender'>Gender :</label>
                                        </div>
                                        <p className='gendeer1 fw-medium'>{allValue.Gender}</p>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="Dob">
                                        <label className="label" for='Dob'>Date of birth :</label>
                                        <div className="date">
                                            <p className='Dob1 fw-medium'>{allValue.dob}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <hr></hr>
                                    <div className='details'>
                                        <h4 className="AddressDetalis" id='Address'>Address Details</h4>
                                        <label className="label" for="street" >Street :</label>
                                        <p className='address1 fw-medium'>{allValue.address}</p>
                                    </div>
                                    <div className='row'>
                                        <div className="col-3">
                                            <label className="label" for='City'>City :</label>
                                            <p className='City1 fw-medium'>{allValue.city}</p>
                                        </div>
                                        <div className="col-3">
                                            <label className="label" for='state'>State :</label>
                                            <p className='state1 fw-medium'>{allValue.state}</p>
                                        </div>
                                        <div className="col-2">
                                            <label className="label" for='Zip'>Zip :</label>
                                            <p className='zip1 fw-medium'>{allValue.zip}</p>
                                        </div>
                                    </div>
                                    <div className='col-5'>
                                        <div className='Country'>
                                            <label className="label" for='Country'>Country :</label>
                                            <p className='country1 fw-medium'>{Country}</p>
                                        </div>
                                    </div>
                                </div>
                                <div><hr></hr></div>
                                <div className="row">
                                    <h4 className="Educationdetails">Education Details</h4>
                                    <div className="col-3" >
                                        <label className='college' for='CollegeName' >College Name :</label>
                                        <p className='colleename1 fw-medium'>{allValue.collegeName}</p>
                                    </div>
                                    <div className="col-3">
                                        <label className="passOut " for='Passout'>Pass out :</label>
                                        <p className='passout1 fw-medium'>{allValue.passout}</p>
                                    </div>
                                    <div className="col-3">
                                        <label className="degree " for='Degree'>Degree :</label>
                                        <p className='degree1 fw-medium'>{allValue.degree}</p>
                                    </div>
                                    <div className='col-2'>
                                        <label className="Url" for='Url'>Photo :</label>
                                        <img className='image' src={allValue.url} alt='' ></img>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-3 skills">
                                        <label className="skills " for='skills'>Skills :</label>
                                        <p className='skills1 fw-medium '>{allValue.skills}</p>
                                    </div>
                                </div>
                                <div className="About">
                                    <div className="col-6 about">
                                        <label className="about1 " for='About'>About :</label>
                                        <p className='about1 fw-medium'>{allValue.about}</p>
                                    </div>
                                </div>

                                <hr></hr>

                                <div className=' text-end pb-2 pe-0'>
                                    <div className='col-12'>
                                        <button type="button " className="btn btn-danger button me-4" onClick={() => Navigate("/dashboard")}>Ok</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )   
}
export default Card;