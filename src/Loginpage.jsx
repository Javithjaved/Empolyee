import { useNavigate } from "react-router-dom";
import "../src/App.css"
import Photo from "../src/Image/logo2.png"
const LoginPage = () => {        
            const Navigate=useNavigate();     
    return (
        <>
            <div className="background">
                <nav className="navbar ">
                    <div className="container mt-3">
                        <a className="navbar-brand" href="#">
                            <img className="logoimg" src={Photo} alt="Logo" width="40" />
                            <span className="cname mx-3 fs-4 ">Red Hap Technology</span>
                        </a>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            <div className="col text4 text-center ">
                                <p className="text3">Share, Learn, Connect &</p>
                                <div className="row">
                                    <div className="col-1 hr"></div>
                                </div>
                                <p className="text3 mt-1">Explore Career options with </p>
                                <div className="row">
                                    <div className="col-1 hr"></div>
                                </div>
                                <p className="text3  mt-1">Campus Commune</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="loginbox ">
                            <div className=" col-12 loginpage text-center  ">
                                <img className="logoimg2" src={Photo} alt="Logo" width="40" class="logoimg2" />
                                <div className="companyname">
                                    <p className="companyname fs-4 mt-3">Red Hap Technology</p>
                                </div>
                            </div>
                            <div className="col-12 input p-5 pt-0">
                                <div className="row">
                                    <div className="col mt-2">
                                        <label>Email Address </label>
                                        <div class="col  mt-2 ">
                                            <input type="email" className="form-control  rounded" id="inputEmail3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-4">
                                        <label>Password </label>
                                        <div class="col mt-2">
                                            <input type="password" className="form-control  rounded " id="inputEmail3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-3">
                                    <div className="Fpassword text-end">
                                        <a className="text2" href="#">Forget Password?</a>
                                    </div>
                                </div>
                                <div className=" col-10 btn1 mt-4" >
                                    <button type="button" onClick={()=>Navigate("/Component")} className="btn btn-danger btn1">Sign In</button>
                                </div>
                                <div className="row">
                                    <div className="col mt-4 text-center">
                                        <a href="#" className="label1 mt-2">Don't have an account?</a>
                                        <div>
                                            <a href="#" className="text2 mt-2" >Create account</a>
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
export default LoginPage;