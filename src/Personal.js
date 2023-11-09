import Sidebar from "./Sidebar";
import Header from "./Header";
const Personal = ({allValue ,setAllValue}) => {
    const handleChangeInput=(e)=>{
        setAllValue({...allValue,[e.target.name]: e.target.value });
        console.log(allValue);
        
    }
    return (
        <>
            <div className='container-fluid p-0'>
                <Header />
                <div className='row'>
                <div className="col-2"><Sidebar /></div>
                    <div className="col-10 bg3">
                        <div className="row mx-2 mt-3"><h5 className="label2 "> User Profile &#10095; <span className="text ">Add User Profile</span></h5></div>
                        <hr className="hr3 ms-3 me-3" ></hr>
                        <div className="col personal rounded-top-4 p-3 ms-3 me-3 mt-4 pb-0">
                            <div className="row"><h5 className="header1  ">Personal Information</h5></div>
                            
                            <div className="row">
                                <div className="col-4">
                                    <label className='label' for='FirstName'>First Name : </label>
                                    <input type="text" className="form-control mt-2" value={allValue.firstName} onChange={(e) =>handleChangeInput(e)} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id='FirstName' name='firstName' required></input>
                                </div>
                                <div className="col-4">
                                    <label className='label' for='LastName'>Last Name :</label>
                                    <input type="text" className="form-control lastname mt-2" value={allValue.lastName} onChange={(e)=>handleChangeInput(e)} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id='LastName' name='lastName' required ></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label className='label' for='EmailId'>Email-ID :</label>
                                    <input type="text" className="form-control mt-2" value={allValue.emailId} onChange={(e)=>handleChangeInput(e)} id='EmailId' name='emailId' required></input>
                                </div>
                                <div className="col-4">
                                    <label className='label' for='Mobile'>Mobile No :</label>
                                    <input type="number" className="form-control mobileno mt-2" value={allValue.mobile} onChange={(e)=>handleChangeInput(e)} onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} id='Mobile' name='mobile' required ></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-4'>
                                    <div className="gender">
                                        <div className="gendername">
                                            <label className='label' for='Gender'>Gender :</label>
                                        </div>
                                        <input type="radio" value="Male" name="Male" id='Gender' className='form-check-input' onChange={(e)=>handleChangeInput(e)} required />
                                        <label className='Male ms-2'>Male</label>
                                        <input type="radio" value="Female" name="Female" id='Gender' className='form-check-input ms-2' onChange={(e)=>handleChangeInput(e)} required />
                                        <label className='Female ms-2'>Female</label>
                                        <input type="radio" value="Other" name="Other" id='Gender' className='form-check-input ms-2' onChange={(e)=>handleChangeInput(e)} required />
                                        <label className='other ms-2'>Other</label>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="Dob">
                                        <label className="label" for='Dob'>Date of birth :</label>
                                        <div className="date">
                                            <input type="date" id="Dob" className='form-control' value={allValue.dob} onChange={(e)=>handleChangeInput(e)} name='dob' min="1945-01-01" max="2003-12-31"></input>
                                        </div>
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
export default Personal;