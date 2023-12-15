import Photo from "../asset/image/logo2.png"
import Photo1 from "../asset/image/Photo1.jpg"
import Sidebar from "./Sidebar";
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg box">
                <div className="container-fluid ">
                    <button className="navbar-toggler bg-light d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <p className="navbar-brand p-0 mt-2" >
                        <img src={Photo} alt="Bootstrap" height="50" />
                    </p>

                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <div className="siz d-sm-block d-md-block d-lg-none d-xxl-none" >
                            <Sidebar />
                        </div>
                    </div>
                    <div>
                        <div className="btn-group dropdown  d-block d-sm-block d-md-none ">
                            <button type="button" className="btn  dropdown-toggle border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={Photo1} className="rounded-pill" alt="Userphoto" width="30" height="30" />
                            </button>
                            <ul className="dropdown-menu">
                                <li><p className="dropdown-item "><span className="textcolor1">Action</span></p></li>
                                <li><p className="dropdown-item" ><span className="textcolor1">Another Action</span></p></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><p className="dropdown-item a2" ><span className="textcolor1 text-decoration-none" onClick={() =>{window.location.href="/";localStorage.removeItem('accessToken');localStorage.removeItem("refreshToken");}}>Sign Out</span></p></li>
                            </ul>
                        </div>
                        <div className="btn-group dropstart d-none d-sm-none d-md-block ">
                            <button type="button" className="btn  dropdown-toggle border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={Photo1} className="rounded-pill" alt="adminPhoto" width="30" height="30" />
                                <span className="cname ms-2">   Admin</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><p className="dropdown-item "><span className="textcolor1">Action</span></p></li>
                                <li><p className="dropdown-item"><span className="textcolor1">Another Action</span></p></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><p className="dropdown-item a2" ><span className="textcolor1 text-decoration-none" onClick={() =>{window.location.href="/";localStorage.removeItem('accessToken');localStorage.removeItem("refreshToken");}}>Sign Out</span></p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;