import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
 import Sidebar from "./Sidebar";
import Header from "./Header";

const DashBoard = ({allValue}) => {
//     const[inputArr,setInputArr]=useState([])
const data=[{
    firstName : '',
    emailId : '',
    mobile : '',
    
}]

//   const tableRowRemove = (index) => {
//     const dataRow = [...Rows];
//     dataRow.splice(index, 1);
//     initRow(dataRow);
//   };
    const Navigate = useNavigate();

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
                                <div className="col-2 pt-3 pe-5  text-end  " href=""><span  className="add"  ><Icon  icon="zondicons:add-solid" onClick={()=>Navigate("/Employee")} /></span><span className="add" > Add</span></div>
                            </div>  
                            <div className="tb">
                                <div className="row">
                                    <div className="col p-4 pe-0 pt-0 me-2 ms-2">
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
                                                 {/* <tr className="tablebox">
                                                    <td className="name primary" >{allValue.firstName}</td>
                                                    <td>{allValue.emailId}</td>
                                                    <td>{allValue.mobile}</td>                                                   
                                                <td><span><Icon className="i" href="" onClick={()=>Navigate('/Employee')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1"  icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
                                                </tr>
                                                <tr className="tablebox">

                                                    <td className="name primary" >Larry the Bird</td>
                                                    <td>twitter@gmail.com</td>
                                                    <td >8654852655</td>                                              
                                                    <td><span className="i"><Icon className="i" href="" onClick={()=>Navigate('/DashBoard')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>                                              
                                                </tr>  */}
                                                {
                                                    data.map((val,i)=>{
                                                        return(
                                                            <tr className="tablebox" key={i}>
                                                            <td className="name primary">{[val.firstName]}</td>
                                                            <td>{[val.emailId]}</td>
                                                            <td>{[val.mobile]}</td>
                                                            <td><span className="i"><Icon className="i" href="" onClick={()=>Navigate('/DashBoard')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>

                                                        </tr>
                                                        )
                                                        
                                                    })
                                                }
                                                </tbody>
                                                     {/* <tbody>
                                                       <DashBoard
                                                            rows={Rows}
                                                             tableRowRemove={tableRowRemove}
                                                              onValUpdate={onValUpdate}
                      />
                                            </tbody> */}
                                        </table>
                                    </div>
                                </div>
                            </div>                    
                            {/* <div className="tb">
                                <div className="row">
                                    <div className="col p-4 pt-0 me-2 ms-2">
                                        <table class="table table-borderless table-spacing p-2 pt-0">
                                            <thead>
                                                <tr className> 

                                                    <th scope="col ">Name</th>
                                                    <th scope="col ">Email-ID</th>
                                                    <th scope="col ">Mobile NO</th>
                                                    <th scope="col ">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody  >
                                                <tr className="tablebox">

                                                    <td className="name primary">otto</td>
                                                    <td>Otto@gmail.com</td>
                                                    <td>8658565657</td>                                                 
                                                    <td><span><Icon className="i" href="" onClick={()=>Navigate('/Table')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
                                                </tr>
                                                <tr className="tablebox">

                                                    <td className="name primary">Jacob</td>
                                                    <td>Thornton@gmail.com</td>
                                                    <td>9454843546</td>                                                   
                                                <td><span><Icon className="i" href="" onClick={()=>Navigate('/Table')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
                                                </tr>
                                                <tr className="tablebox">

                                                    <td className="name primary" >Larry the Bird</td>
                                                    <td>twitter@gmail.com</td>
                                                    <td >8654852655</td>                                              
                                                    <td><span className="i"><Icon className="i" href="" onClick={()=>Navigate('/Table')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>                                              
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
    )
}
export default DashBoard;
// import { useNavigate } from "react-router-dom";
// import { Icon } from '@iconify/react';
//  import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { useState } from "react";
// const DashBoard=({allValue ,setAllValue,Rows,tableRowsRemove,tableupdate})=>{
  // return Rows.map((Rowsdata,index)=>{
  //   const {firstName,emailId,mobile}=Rowsdata  

  // const handleChange=(e)=>{
  //   setAllValue({...allValue,[e.target.name]: e.target.value });
  //   e.preventDefault()

    // return(
    //     <>  
    //     <div className='bg8'>
    //       <Header/>
    //       <div className='bg3'>
    //         <div className='row'>
    //           <div className='sidebar1 col-2'>
    //             <Sidebar />
    //           </div>
    //           <div className="col-10 mt-2">
    //             <div className="row">
    //               <div className="col-12 "><h5 className="label2 ms-4 mt-2">Dashboard</h5>
    //                 <hr className=" hr9 ms-2 me-3"></hr>
    //               </div>
    //             </div>
    //             <div className="bg4 me-3">
    //               <div className="row">
    //                 <div className="col-10 p-3 pb-0"><p className="User p-2 pt-0 m-0 fs-4 ms-3">User-Data</p></div>
    //                 <div className="col-2 pt-3 pe-5  text-end  " href=""><span className="add" ><Icon  icon="zondicons:add-solid" /></span><span className="add"> Add</span></div>
    //               </div>
    //               <div className="tb">
    //                 <div className="row">
    //                   <div className="col p-4 pe-0 pt-0 me-2 ms-2">
    //                     <table class="table table-borderless table-spacing p-2 pt-0">
    //                       <thead>
    //                         <tr className="tablebox" >
    //                           <th scope="col ">Name</th>
    //                           <th scope="col ">Email-ID</th>
    //                           <th scope="col ">Mobile NO</th>
    //                           <th scope="col ">Actions</th>
    //                         </tr>
    //                       </thead>
    //                       <tbody  >
                          
    //                         <tr className="tablebox" >

    //                           <td className="name primary"  >{allValue.firstName}</td>
    //                           <td >{allValue.emailId}</td>
    //                           <td >{allValue.mobile}</td>
    //                           <td><span><Icon className="i" href=""      icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
    //                         </tr>
    //                         <tr className="tablebox">

    //                           <td className="name primary" >Larry the Bird</td>
    //                           <td>twitter@gmail.com</td>
    //                           <td >8654852655</td>
    //                           <td><span className="i"><Icon className="i" href=""  icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
    //                         </tr>
    //                       </tbody>
    //                     </table>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div> 
    //     </>
    //      )
    //     }


// export default DashBoard;
// import React, { lazy, useState } from "react";
// import { Icon } from '@iconify/react';
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Link, Navigate } from "react-router-dom";
// function TableRows({ rows, tableRowRemove, onValUpdate,allValue}) {
//   return rows.map((rowsData, index) => {
//     const {FirstName,email,mobile} = rowsData;
//     return (
//       <tr className="tablebox" key={index}>
//         <td>
//           <input
//             type="text"
//             value={FirstName}
//             onChange={(event) => onValUpdate(index, event)}
//             name="FirstName"
//             className="form-control"
//           />
//           <p className="text" onChange={(event)=>onValUpdate(index,event)} >{FirstName}</p>
//         </td>
//         <td>
//           <input
//             type="text"
//             value={email}
//             onChange={(event) => onValUpdate(index, event)}
//             name="email"
//             className="form-control"
//           />
//           <p className="text" onChange={(event)=>onValUpdate(index,event)} >{email}</p>
//         </td>
//         <td>
//           <input
//             type="text"
//             value={mobile}
//             onChange={(event) => onValUpdate(index, event)}
//             name="mobile"
//             className="form-control"
//           />
//           <p className="text" onChange={(event)=>onValUpdate(index,event)} >{mobile}</p>
//         </td>
//         <td>
//               <td><span><Icon className="i" href="" icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove"onClick={() => tableRowRemove(index)}  /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
//         </td>
//       </tr>
//     );
//   });
// }
// function Table() {
//   const [rows, initRow] = useState([]);
//   const addRowTable = () => {
//     const data = {
//       FirstName: "",
//       email: "",
//       mobile: "",
//     };
//     initRow([...rows, data]);
//   };
//   const tableRowRemove = (index) => {
//     const dataRow = [...rows];
//     dataRow.splice(index, 1);
//     initRow(dataRow);
//   };
//   const onValUpdate = (i, event) => {
//     const { name, value } = event.target;
//     const data = [...rows];
//     data[i][name] = value;
//     initRow(data);
//   };
//   return (
//     <>
//     <div className="bg4">
//       <Header />
//       <div className="row">
//         <div className="col-2"><Sidebar /></div>
//         <div className="col-10 p-3 pb-0">
//           <div className="row">
//             <div className="col-12">
//               <div className="row">
//                 <div className="col-10"><p className="User p-2 pt-0 m-0 fs-4 ms-3">User-Data</p></div>
//                 <div className="col-2 pt-3 pe-5  text-end " href=""><span className="add" ><Icon icon="zondicons:add-solid" onClick={addRowTable}  /></span><Link to={"/Employee"}><span className="add" > Add</span></Link></div>
//               </div>
//             </div>
//           </div>
          
//         {/* <div className="col-2 pt-3 pe-5  text-end  " href=""><span className="add" ><Icon icon="zondicons:add-solid" onClick={addRowTable}  /></span><span className="add"> Add</span></div> */}
//       <table className="table table-borderless table-spacing p-2 pt-0">
//         <thead>
//           <tr className="tablebox">
            
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <TableRows
//             rows={rows}
//             tableRowRemove={tableRowRemove}
//             onValUpdate={onValUpdate}
//           />
//         </tbody>
//       </table>
//       </div>
//       </div>
//     </div>
//     </>
//   );
// }
// export default Table;