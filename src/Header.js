import Photo from "../src/Image/logo2.png"
import Photo1 from "../src/Image/Photo1.jpg"
const Header = () => {
    return (
        <>
            <div className="box1">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg p-0">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className=" box container-fluid p-0 m-0">
                                <img className="img" src={Photo}></img>
                                <div className="col-4">
                                    <p className="nav-item">
                                        <p className="nav-link active empolyee ms-2 mt-3 fs-4 " aria-current="page" href="#">Red Hap Technology</p>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="nav-item">
                                        <p className="nav-link text-start empolyee mt-3 ms-3 fs-4 me-5" href="#">Empolyee Registration</p>
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-2 userphoto">
                                        <a className="navbar-brand" href="#">
                                            <img className="rounded-circle" src={Photo1} alt="Bootstrap" width="30" height="30"></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2 me-3">
                                        <p className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle loginname text-end mt-3 me-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Hai, Javith
                                            </a>
                                            <ul className="dropdown-menu drop mt-4 text-center">
                                                <li><a className="dropdown-item" href="#">Login out</a></li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;