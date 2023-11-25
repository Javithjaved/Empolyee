import { useNavigate } from "react-router-dom";
import "../asset/css/App.css"
import Photo from "../asset/image/logo2.png"
import { Formik, Form } from 'formik';
import * as yup from "yup";
const LoginPage = () => {
    const Navigate = useNavigate();
    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required(),
    });
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
                                <Formik
                                    validationSchema={schema}
                                    initialValues={{
                                        email: "",
                                        password: "",
                                    }}
                                >
                                    {({ handleSubmit, handleChange, values, errors }) => (
                                        <Form onValidate onSubmit={handleSubmit} >
                                            <div className="row">
                                                <div className="col mt-2">
                                                    <label>Email Address </label>
                                                    <div class="col  mt-2 ">
                                                        <input type="email" className="form-control  rounded" id="inputEmail3" name="email" value={values.email} onChange={handleChange} isInvalid={!!errors.email} />
                                                    </div>
                                                    <p type="invalid" className="text-danger">
                                                        {errors.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col mt-4">
                                                    <label>Password </label>
                                                    <div class="col mt-2">
                                                        <input type="password" className="form-control  rounded " id="inputEmail3" name="password" value={values.password} onChange={handleChange} />
                                                    </div>
                                                    <p type="invalid" className="text-danger">
                                                        {errors.password}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col mt-3">
                                                <div className="Fpassword text-end">
                                                    <p className="text2" >Forget Password?</p>
                                                </div>
                                            </div>
                                            <div className=" col-10 btn1 mt-4" >
                                                <button type="submit" className="btn btn-danger btn1" onClick={() => Navigate("/employee")} >Sign In</button>
                                            </div>
                                            <div className="row">
                                                <div className="col mt-4 text-center">
                                                    <p className="label1 mt-2">Don't have an account?</p>
                                                    <div>
                                                        <p className="text2 mt-2" >Create account</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage;