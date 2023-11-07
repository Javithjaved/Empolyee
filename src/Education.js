import { useNavigate } from "react-router-dom";import Address from "./Address";
const Education = (props) => {
    const handleChangeCollegeName = (e) => {
        { props.setCollegeName(e.target.value) }
    }
    const handleChangepassout = (e) => {
        { props.setPassout(e.target.value) }
    }
    const handleChangeDegree = (e) => {
        { props.setDegree(e.target.value) }
    }
    const handleChangeSkills = (e) => {
        { props.setSkills(e.target.value) }
    }
    const handleChangeurl = (e) => {
        { props.setUrl(e.target.value) }
    }
    const handleChangeAbout = (e) => {
        { props.setAbout(e.target.value) }
    }
    const Navigate = useNavigate();
    const passoutyear = ["", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]
    const degreedepartment = ["", "BE-CSE", "BTech-IT", "BE-ECE", "BE-EEE", "BE-MECH"]
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row">
                  <div className=" col-2"></div>
                    <div className="col-10 bg3 ">
                        <div className="personal rounded-bottom-4 ms-3 me-3 p-3 pb-0">
                            <div className="row"><h5 className="header1">Education Details</h5></div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-3">
                                    <label className='label' for='CollegeName' >College Name :</label>
                                    <input type="text" className="form-control mt-2" value={props.collegeName} onChange={handleChangeCollegeName} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id='CollegeName' name='CollegeName' required ></input>
                                </div>
                                <div className="col-3">
                                    <label className="label " for='Passout'>Pass out :</label>
                                    <select value={props.passout} onChange={handleChangepassout} id="Passout" className="form-control mt-2" name="passout" required >
                                        {passoutyear.map((passout) => {
                                            return <option value={passout}>{passout}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-2">
                                    <label className="label" for='Degree'>Degree :</label>
                                    <select name="Degree" value={props.degree} onChange={handleChangeDegree} id="Degree" className="form-control mt-2" required>
                                        {degreedepartment.map((degree) => {
                                            return <option value={degree}>{degree}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-4 ">
                                    <label className="label " for='skills'>Skills :</label>
                                    <input type="text" className="form-control mt-2" value={props.skills} onChange={handleChangeSkills} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id="skills" name='Skills' required></input>
                                </div>
                                <div className='col-4'>
                                    <label className="label" for='Url'>Enter Photo URL:</label>
                                    <input type="img" name="Url" value={props.url} onChange={handleChangeurl} id="Url" className="form-control mt-2" placeholder="https://example.com" pattern="src/" required />
                                </div>
                            </div>
                            <div className="About">
                                <div className="col-8">
                                    <label className="label" for='About'>About :</label>
                                    <textarea className="form-control mt-2" value={props.about} onChange={handleChangeAbout} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} id="About" placeholder='Intro about Yourself' name='About ' required></textarea>
                                </div>
                            </div>
                           
                                <hr></hr>
                        
                            <div className="button text-end">
                                <div className="col-12">
                                <button type="button " onClick={() =>Navigate("/DashBoard")} className="btn btn-danger submit me-3">Cancel</button>
                                    <button type="button " value={props.show} onClick={() => props.setShow(!props.show)} className="btn btn-danger submit ">Submit</button>
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