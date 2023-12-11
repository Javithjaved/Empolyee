import { useNavigate } from "react-router-dom";
import "../asset/css/App.css"
import Photo from "../asset/image/logo2.png"
import { useState } from "react";
import axios from "axios";
const LoginPage = () => {
    const Navigate = useNavigate();
    
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const handleChangeLoginData = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const handleLoginSubmit = () => {
        axios({
            method: "post",
            url: "https://fts-backend.onrender.com/admin/login",
            data: loginData,
        })
            .then(response => {
                localStorage.setItem("accessToken", JSON.stringify(response.data.accesstoken));
                localStorage.setItem("refreshToken", response.data.refreshtoken);     
            })
            .catch(err => {
                console.log(err);
            })
            .then(response =>{console.log(response)})
            .catch(err =>{console.log(err)})
        Navigate("/employee");
    }
    axios.interceptors.request.use(
        (config) => {
            const accessToken = localStorage.getItem('accessToken');
            console.log(accessToken,"verer");
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
                // console.log(accessToken,"accessToken...");
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    // axios.interceptors.request.use(
    //     (config) => {
    //         const refreshToken = localStorage.getItem('refreshToken');
    //         if (refreshToken) {
    //             config.headers.Authorization = `Bearer ${refreshToken}`;
    //             console.log(refreshToken,"refreshToken...");
    //         }
    //         return config;
    //     },
    //     (error) => {
    //         return Promise.reject(error);
    //     }
    // );  
    axios.interceptors.response.use(
        (response) => {
            // if (response.status === 200) {
            //  axios({
            //     method :'post',
            //     url :" https://fts-backend.onrender.com/admin/refreshToken",
            //     data :localStorage.getItem("accessToken")
            //  })
            // }
            return response;
        },
        (error) => {
            if (error.response.status === 400) {
                axios({
                    method : "post",
                    url :"https://fts-backend.onrender.com/admin/refreshToken",
                    data : localStorage.getItem('refreshToken'),
                })
                .then(response =>{console.log(response)})
                .catch(err=>{console.log(err);})
                console.log('Redirect to login page.');
                Navigate("/");
            }   
            return Promise.reject(error);
        }
    );
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
                            <div className=" col-12 loginpage text-center mb-2 ">
                                <img className="logoimg2" src={Photo} alt="Logo" height="50" class="logoimg2" />
                            </div>
                            <div className="col-12 input p-5 pt-0">
                                <div className="row">
                                    <div className="col mt-2">
                                        <label>Email Address </label>
                                        <div class="col  mt-2 ">
                                            <input type="email" className="form-control  rounded" id="inputEmail2" name="email" value={loginData.email} onChange={(e) => handleChangeLoginData(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-4">
                                        <label>Password </label>
                                        <div class="col mt-2">
                                            <input type="password" className="form-control  rounded " id="inputEmail3" name="password" value={loginData.password} onChange={(e) => handleChangeLoginData(e)} />
                                        </div>

                                    </div>
                                </div>
                                <div className="col mt-3">
                                    <div className="Fpassword text-end">
                                        <p className="text2" >Forget Password?</p>
                                    </div>
                                </div>
                                <div className=" col-10 btn1 mt-4" >
                                    <button type="button" className="btn btn-danger btn1" onClick={(e) => handleLoginSubmit(e)}>Sign In</button>
                                </div>
                                <div className="row">
                                    <div className="col mt-4 text-center">
                                        <p className="label1 mt-2">Don't have an account?</p>
                                        <div>
                                            <p className="text2 mt-2" >Create account</p>
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