import Sidebar from "./Sidebar";
import Header from "./Header";
const Personal = (props) => {
    const handleChangeFname = (e) => {
        { props.setFirstName(e.target.value) }
    }
    const handleChangeLname = (e) => {
        { props.setLastName(e.target.value) }
    }
    const handleChangeEmail = (e) => {
        { props.setEmailId(e.target.value) }
    }
    const handleChangeMobile = (e) => {
        { props.setMobile(e.target.value) }
    }
    const handleChangeGender = (e) => {
        { props.setGender(e.target.value) }
    }
    const handleChangeDOB = (e) => {
        { props.setDob(e.target.value) }
    }
    return (
        <>
            <div className='container-fluid p-0'>
                <Header />
                <div className='row'>
                    <div className="col-2"><Sidebar /></div>
                    <div className="col-10 bg3">
                        <div className="row mx-2 mt-3"><h5 className="label ">Personal Information &#10095; <span className="text "> Add Personal Information</span></h5></div>
                        <hr className="hr2 ms-4 me-4" ></hr>
                        <div className="col personal rounded-top-4 p-3 ms-3 me-3 mt-4 pb-0">
                            <div className="row"><h5 className="header1  ">Personal Information</h5></div>
                            
                            <div className="row">
                                <div className="col-4">
                                    <label className='label' for='FirstName'>First Name : </label>
                                    <input type="text" className="form-control mt-2" value={props.firstName} onChange={handleChangeFname} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id='FirstName' name='firstname' required></input>
                                </div>
                                <div className="col-4">
                                    <label className='label' for='LastName'>Last Name :</label>
                                    <input type="text" className="form-control lastname mt-2" value={props.lastName} onChange={handleChangeLname} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id='LastName' name='lastname' required ></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label className='label' for='EmailId'>Email-ID :</label>
                                    <input type="text" className="form-control mt-2" value={props.emailId} onChange={handleChangeEmail} id='EmailId' name='EmailID ' required></input>
                                </div>
                                <div className="col-4">
                                    <label className='label' for='Mobile'>Mobile No :</label>
                                    <input type="number" className="form-control mobileno mt-2" value={props.mobile} onChange={handleChangeMobile} onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} id='Mobile' name='Mobile' required ></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-4'>
                                    <div className="gender">
                                        <div className="gendername">
                                            <label className='label' for='Gender'>Gender :</label>
                                        </div>
                                        <input type="radio" value="Male" name="radio" id='Gender' className='form-check-input' onClick={handleChangeGender} required />
                                        <label className='Male ms-2'>Male</label>
                                        <input type="radio" value="Female" name="radio" id='Gender' className='form-check-input ms-2' onClick={handleChangeGender} required />
                                        <label className='Female ms-2'>Female</label>
                                        <input type="radio" value="Other" name="radio" id='Gender' className='form-check-input ms-2' onClick={handleChangeGender} required />
                                        <label className='other ms-2'>Other</label>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="Dob">
                                        <label className="label" for='Dob'>Date of birth :</label>
                                        <div className="date">
                                            <input type="date" id="Dob" className='form-control' value={props.dob} onChange={handleChangeDOB} name="dob" min="1945-01-01" max="2003-12-31"></input>
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