import { useNavigate } from "react-router-dom";
const Education = ({ allValue, setAllValue, setInputArr, inputArr }) => {
    const handleChangeInput = (e) => {
        e.preventDefault();
        setAllValue({ ...allValue, [e.target.name]: e.target.value });
    }
    const Navigate = useNavigate();
    const passoutyear = ["", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]
    const degreedepartment = ["", "BE-CSE", "BTech-IT", "BE-ECE", "BE-EEE", "BE-MECH"]
    const handleChangeSubmit = (e) => {
        e.preventDefault()
        setInputArr([...inputArr, allValue]);
        Navigate("/DashBoard");
        console.log(allValue);
    }
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className=" col-2 sidebar"></div>
                    <div className="col-10 bg1 ">
                        <div className="personal rounded-bottom-4 ms-3 me-3 p-3 pb-0">
                            <div className="row"><h5 className="header1">Education Details</h5></div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-3">
                                    <label className='label' for='CollegeName' >College Name :</label>
                                    <input type="text" className="form-control mt-2" value={allValue.collegeName} onChange={(e) => handleChangeInput(e)} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id='CollegeName' name='collegeName' required ></input>
                                </div>
                                <div className="col-3">
                                    <label className="label " for='Passout'>Pass out :</label>
                                    <select value={allValue.passout} id="Passout" className="form-control mt-2" onChange={(e) => handleChangeInput(e)} name="passout" required >
                                        {passoutyear.map((passout) => {
                                            return <option value={passout}>{passout}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-2">
                                    <label className="label" for='Degree'>Degree :</label>
                                    <select name="degree" value={allValue.degree} id="Degree" onChange={(e) => handleChangeInput(e)} className="form-control mt-2" required>
                                        {degreedepartment.map((degree) => {
                                            return <option value={degree}>{degree}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-4 ">
                                    <label className="label " for='skills'>Skills :</label>
                                    <input type="text" className="form-control mt-2" value={allValue.skills} onChange={(e) => handleChangeInput(e)} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id="skills" name='skills' required></input>
                                </div>
                                <div className='col-4'>
                                    <label className="label" for='Url'>Enter Photo URL:</label>
                                    <input type="text" name="url" value={allValue.url} onChange={(e) => handleChangeInput(e)} id="Url" className="form-control mt-2" pattern="src/" required />
                                </div>
                            </div>
                            <div className="About">
                                <div className="col-8">
                                    <label className="label" for='About'>About :</label>
                                    <textarea className="form-control mt-2" value={allValue.about} onChange={(e) => handleChangeInput(e)} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id="About" name='about' required></textarea>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="button text-end">
                                <div className="col-12 ">
                                    <button type="button " onClick={() => Navigate('/Employee')} className="btn btn-danger submit me-3">Cancel</button>
                                    <button type="button " className="btn btn-danger submit  " onClick={(e) => handleChangeSubmit(e)}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Education;