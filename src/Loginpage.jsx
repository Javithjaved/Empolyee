import photo from "../src/Image/back.jpg"
// import Photo from "../src/Image/logo2.png"
import "../src/App.css"
const LoginPage=()=>{
    return(
        <>
        <div className="container-fluid ">
            <div className="row">
                <div className="col ps-0 pe-0">
                    <img className="background " src={photo} alt="photo"></img>
                    
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default LoginPage;