import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import Sidebar from "./Sidebar";
import Header from "./Header";
const DashBoard = ({inputArr,allValue}) => {
    const Navigate = useNavigate();
    console.log(inputArr);
    console.log(allValue);
    return (
        <div>
            <div className="bg3">
                <Header />
                <div className="row">
                    <div className="col-2 sidebar1  "><Sidebar /></div>
                    <div className="col-10 mt-2">
                        <div className="row">
                            <div className="col-12 "><h5 className="label2 ms-4 mt-2">Dashboard</h5>
                                <hr className=" hr9 ms-2 me-3"></hr>
                            </div>
                        </div>
                        <div className="bg4 me-3">
                            <div className="row">
                                <div className="col-10 p-3 pb-0"><p className="User p-2 pt-0 m-0 fs-4 ms-3">User-Data</p></div>
                                <div className="col-2 pt-3 pe-5  text-end  " href=""><span className="add"  ><Icon icon="zondicons:add-solid" onClick={() => Navigate("/Employee")} /></span><span className="add" > Add</span></div>
                            </div>
                            <div className="tb">
                                <div className="row">
                                    <div className="col p-4 pe-4 pt-0 me-2 ms-2">
                                        <table class="table table-borderless table-spacing p-2 pt-0">
                                            <thead>
                                                <tr className="tablebox" >
                                                    <th scope="col ">Name</th>
                                                    <th scope="col ">Email-Id</th>
                                                    <th scope="col ">Mobile No</th>
                                                    <th scope="col ">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody  >
                                                {
                                                   inputArr.map((val, i) => {
                                                        return (
                                                            <tr className="tablebox" key={i}>
                                                                <td className="name primary">{[val.firstName]}</td>
                                                                <td>{[val.emailId]}</td>
                                                               <td>{[val.mobile]}</td>
                                                                <td><span className="i"><Icon className="i" href="" onClick={() => Navigate('/DashBoard')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" onClick={()=>Navigate("/Card")} icon="bxs:show" /></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default DashBoard;
