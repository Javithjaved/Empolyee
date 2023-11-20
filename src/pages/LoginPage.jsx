import { useNavigate } from "react-router-dom";
import "../asset/css/App.css"
import Photo from "../asset/image/logo2.png"
const LoginPage = () => {
    const Navigate = useNavigate();
    return (
        <>
            <div className="background">
                <nav className="navbar ">
                    <div className="container mt-3">
                        <p className="navbar-brand" >
                            <img className="logoimg" src={Photo} alt="Logo" height="50" />
                        </p>
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
                                <img className="logoimg2" src={Photo} alt="Logo" height="50" class="logoimg2" />
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
                                        <p className="text2" >Forget Password?</p>
                                    </div>
                                </div>
                                <div className=" col-10 btn1 mt-4" >
                                    <button type="button" onClick={() => Navigate('/Employee')} className="btn btn-danger btn1">Sign In</button>
                                </div>
                                <div className="row">
                                    <div className="col mt-4 text-center">
                                        <p  className="label1 mt-2">Don't have an account?</p>
                                        <div>
                                            <p  className="text2 mt-2" >Create account</p>
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