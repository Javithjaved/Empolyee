import Sidebar from "./Sidebar";
import Headers from "./Header";
const DashBoard = () => {
    return (
        <div>
            <div className="bg3">
                <div className="table">
                    <Headers />
                    <div className="row">
                        <div className="col-2 sidebar "><Sidebar /></div>
                        
                            <div className="col-10 table1   p-3 pe-4 ps-4 ">
                                <h5 className="label">Dashborad &#10095; <span className="text "> Edit Dashborad</span></h5>
                                <hr></hr>
                                <div className="box7">
                                <table class="table table-hover">
                                    <thead>
                                        <tr className="table">
                                            <th scope="col">S.No</th>
                                            <th scope="col">Email_Id</th>
                                            <th scope="col">Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Javith708@gamil.com</td>
                                            <td>Javith@545</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Kumar45@gamil.com</td>
                                            <td>Kumar@12</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>kavin007@gamil.com</td>
                                            <td>kavin@867</td>
                                        </tr>
                                    </tbody>
                                {/* </table>
                                <div className="page1">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination justify-content-end">
                                            <li class="page-item disabled">
                                                <a class="page-link">Previous</a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div> */}
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashBoard;