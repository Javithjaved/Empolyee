import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import Sidebar from "./Sidebar";
import Headers from "./Header";
const DashBoard = () => {
    const Navigate = useNavigate();
    return (
        <div>
            {/* <div className="bg3">
                <div className="table">
                    <Headers />
                    <div className="row p-0">
                        <div className="col-2 sidebar "><Sidebar /></div>
                    </div>
                    <div className="col-10 table1   p-3 pe-4 ps-4 ">
                                <h5 className="label">Dashboard</h5>
                                <hr></hr>
                                <div className="box7">
                                <table class="table table-hover">
                                    <thead>
                                        <tr className="table">
                                            <th scope="col">S.No</th>
                                            <th scope="col">Email_Id</th>
                                            <th scope="col">User-ID</th>
                                            <th scope="col">Mobile No</th>
                                            <th scope="col">Actions</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Javith708@gmail.com</td>
                                            <td>Javith-45</td>
                                            <td>8248741455</td>
                                            <td><Icon onClick={Navigate("/")} className='i' icon="pajamas:remove" /><span className='vr bg-dark py-2  ms-1'> </span> <Icon className='i' icon="mdi:note-edit" /><span className='vr bg-dark py-2 ms-1 '> </span> <Icon className='i ms-1' icon="zondicons:view-show" /></td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Kumar45@gmail.com</td>
                                            <td>Kumar-12</td>
                                            <td>8248741455</td>
                                            <td><Icon className='i' icon="pajamas:remove" /><span className='vr bg-dark py-2  ms-1'> </span> <Icon className='i' icon="mdi:note-edit" /><span className='vr bg-dark py-2 ms-1 '> </span> <Icon className='i ms-1' icon="zondicons:view-show" /></td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>kavin007@gmail.com</td>
                                            <td>kavin-37</td>
                                            <td>8248741455</td>
                                            <td><Icon className='i' icon="pajamas:remove" /><span className='vr bg-dark py-2  ms-1'> </span> <Icon className='i' icon="mdi:note-edit" /><span className='vr bg-dark py-2 ms-1 '> </span> <Icon className='i ms-1' icon="zondicons:view-show" /></td>
                                        </tr>
                                    </tbody>
                                </table>             
                                    <nav aria-label="Page1 navigation example">
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
                             
                               
                            </div>

                        </div>
                </div>
            </div> */}
            <div className="bg4">
                <Headers />
                <div className="row">
                    <div className="col-2 sidebar"><Sidebar /></div>
                    <div className="col-10 mt-2">
                        <h5 className="label2">Dashboard</h5>
                        <hr></hr>
                        <div className="tabel p-3">
                            <div className="add ">
                 
                            </div>
                            <div className="row">
                                <div className="col"><span className="fs-4 mt-4">Empolyee Data</span></div>
                                <div className="col text-end"><span><Icon className="i " icon="zondicons:add-solid" /></span><span className="add ms-4" >Add</span></div>                         
                            </div>
                            <table class="table border-5">
                                <thead>
                                    <tr>
                                        <th scope="col label ">Name</th>
                                        <th scope="col label">Details</th>
                                        <th scope="col label">Actions</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr className="table-active ">
                                        <td className="name ">Javith</td>
                                        <td ><span className="i">Javith708@gmail.com <span className='vr bg-dark py-2 ms-1 '> </span><span className="Lastname ms-2">8248741459</span><span className='vr bg-dark py-2 ms-1 '> </span> <span>15A1/7, kamaraj Nagar</span></span></td>
                                        <td> <Icon className="i mx-1" icon="mdi:file-edit" /><span className='vr bg-dark py-2 mx-1 '> </span> <Icon className="i mx-1" icon="ph:copy-light" /><span className='vr bg-dark py-2 mx-1 '></span><Icon className='i mx-1' icon="pajamas:remove" /> <span className='vr bg-dark py-2 mx-1 '> </span><Icon className='i mx-1' icon="zondicons:view-show" /></td>
                                    </tr>
                                </tbody>
                            </table>
                           <div className="table">
                           <div className="row">
                                <div className="col"><span className="fs-4 mt-4">Empolyee Data</span></div>
                                <div className="col text-end"><span><Icon className="i " icon="zondicons:add-solid" /></span><span className="add3 " >Add</span></div>                         
                            </div>
                               <table class="table border-5">
                                <thead>
                                    <tr>
                                        <th scope="col ">Name</th>
                                        <th scope="col">Details</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr className="table-active">
     
                                        <td className="name ">Javith</td>
                                        <td ><span className="i">Javith708@gmail.com <span className='vr bg-dark py-2 ms-1 '> </span><span className="Lastname ms-2">8248741459</span><span className='vr bg-dark py-2 ms-1 '> </span> <span>15A1/7, kamaraj Nagar</span></span></td>
                                        <td> <Icon className="i mx-1" icon="mdi:file-edit" /><span className='vr bg-dark py-2 mx-1 '> </span> <Icon className="i mx-1" icon="ph:copy-light" /><span className='vr bg-dark py-2 mx-1 '></span><Icon className='i mx-1' icon="pajamas:remove" /> <span className='vr bg-dark py-2 mx-1 '> </span><Icon className='i mx-1' icon="zondicons:view-show" /></td>
                                    </tr>
                                </tbody><br></br>
                                <tbody className="tx">
                                    <tr className="table-active"> 
                                        <td className="name ">Javith</td>
                                        <td ><span className="i">Javith708@gmail.com <span className='vr bg-dark py-2 ms-1 '> </span><span className="Lastname ms-2">8248741459</span><span className='vr bg-dark py-2 ms-1 '> </span> <span>15A1/7, kamaraj Nagar</span></span></td>
                                        <td> <Icon className="i mx-1" icon="mdi:file-edit" /><span className='vr bg-dark py-2 mx-1 '> </span> <Icon className="i mx-1" icon="ph:copy-light" /><span className='vr bg-dark py-2 mx-1 '></span><Icon className='i mx-1' icon="pajamas:remove" /> <span className='vr bg-dark py-2 mx-1 '> </span><Icon className='i mx-1' icon="zondicons:view-show" /></td>
                                    </tr>
                                </tbody>
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