// import { useState } from "react";

// const DashBoard = () => {
//     const handleChangeFirst=(props)=>{
//         {props.setFirstname.e.target.value}
//     }
//     const [rowData,setRowData]=useState([])
//     const TableAdd=()=>{
//         const InputRowData={
//             Name :'',
//             Email :'',
//             Mobile :'',
//         }
//         setRowData([...rowData,InputRowData])
//     }
//     const deleteTableRows =(index)=>{
//         const rows = [...rowData];
//         rows.splice(index, 1);
//         setRowData(rows);
//     }
//     const handleChange = (index, e)=>{
//         const { name, value } = e.target;
//         const rowsInput = [...rowData];
//         rowsInput[index][name] = value;
//         setRowData(rowsInput)
//     }
//     const Navigate = useNavigate();
//     return (
//         <div>
//             <div className="bg6">            
//                     <Headers />
//                     <div className="row">
//                         <div className="col-2 sidebar  "><Sidebar /></div>
//                         <div className="col-10 mt-2">
//                             <div className="row">
//                             <div className="col-12 "><h5 className="label2 ms-4 mt-2">Dashboard</h5>
//                             <hr className=" hr9 ms-2 me-3"></hr>
//                             </div>                          
//                             </div>
//                             <div className="bg4 me-3">
//                             <div className="row">
//                                 <div className="col-10 p-3 pb-0"><p className="User p-2 pt-0 m-0 fs-4 ms-3">User-Data</p></div>
//                                 <div className="col-2 pt-3 pe-5  text-end  " href=""><span  className="add" ><Icon onClick={()=>Navigate('/Profile')}  icon="zondicons:add-solid" /></span><span className="add"> Add</span></div>
//                             </div>  
//                             <div className="tb">
//                                 <div className="row">
//                                     <div className="col p-4 pe-0 pt-0 me-2 ms-2">
//                                         <table class="table table-borderless table-spacing p-2 pt-0">
//                                             <thead>
//                                                 <tr className="tablebox" >                                                                                               
//                                                     <th scope="col ">Name</th>
//                                                     <th scope="col ">Email-ID</th>
//                                                     <th scope="col ">Mobile NO</th>
//                                                     <th scope="col ">Actions</th>
//                                                     <th scope="col "></th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody  >
//                                                 <tr className="tablebox">

//                                              {/* <TableAdd rowData={rowData} deleteTableRows={deleteTableRows} handleChange={handleChange}/> */}
//                                               </tr>
//                                                 <tr className="tablebox">

//                                                     <td className="name primary">javitih</td>
//                                                     <td>Thornton@gmail.com</td>
//                                                     <td>9454843546</td>                                                   
//                                                 <td><span><Icon className="i" href="" onClick={()=>Navigate('/Employe')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
//                                                 </tr>
//                                                 <tr className="tablebox">

//                                                     <td className="name primary" >Larry the Bird</td>
//                                                     <td>twitter@gmail.com</td>
//                                                     <td >8654852655</td>                                              
//                                                     <td><span className="i"><Icon className="i" href="" onClick={()=>Navigate('/DashBoard')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>                                              
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>                    
//                             <div className="tb">
//                                 <div className="row">
//                                     <div className="col p-4 pt-0 me-2 ms-2">
//                                         <table class="table table-borderless table-spacing p-2 pt-0">
//                                             <thead>
//                                                 <tr className> 

//                                                     <th scope="col ">Name</th>
//                                                     <th scope="col ">Email-ID</th>
//                                                     <th scope="col ">Mobile NO</th>
//                                                     <th scope="col ">Actions</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody  >
//                                                 <tr className="tablebox">

//                                                     <td className="name primary">otto</td>
//                                                     <td>Otto@gmail.com</td>
//                                                     <td>8658565657</td>                                                 
//                                                     <td><span><Icon className="i" href="" onClick={()=>Navigate('/Table')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
//                                                 </tr>
//                                                 <tr className="tablebox">

//                                                     <td className="name primary">Jacob</td>
//                                                     <td>Thornton@gmail.com</td>
//                                                     <td>9454843546</td>                                                   
//                                                 <td><span><Icon className="i" href="" onClick={()=>Navigate('/Table')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
//                                                 </tr>
//                                                 <tr className="tablebox">

//                                                     <td className="name primary" >Larry the Bird</td>
//                                                     <td>twitter@gmail.com</td>
//                                                     <td >8654852655</td>                                              
//                                                     <td><span className="i"><Icon className="i" href="" onClick={()=>Navigate('/Table')} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>                                              
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div> 
//     )
// }
// export default DashBoard;
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
 import Sidebar from "./Sidebar";
import Header from "./Header";

const DashBoard=()=>{
    const Navigate=useNavigate()
    return(
        <>  
        <div className='bg8'>
          <Header/>
          <div className='bg3'>
            <div className='row'>
              <div className='sidebar1 col-2'>
                <Sidebar />
              </div>
              <div className="col-10 mt-2">
                <div className="row">
                  <div className="col-12 "><h5 className="label2 ms-4 mt-2">Dashboard</h5>
                    <hr className=" hr9 ms-2 me-3"></hr>
                  </div>
                </div>
                <div className="bg4 me-3">
                  <div className="row">
                    <div className="col-10 p-3 pb-0"><p className="User p-2 pt-0 m-0 fs-4 ms-3">User-Data</p></div>
                    <div className="col-2 pt-3 pe-5  text-end  " href=""><span className="add" ><Icon onClick={() => Navigate('/Employee')} icon="zondicons:add-solid" /></span><span className="add"> Add</span></div>
                  </div>
                  <div className="tb">
                    <div className="row">
                      <div className="col p-4 pe-0 pt-0 me-2 ms-2">
                        <table class="table table-borderless table-spacing p-2 pt-0">
                          <thead>
                            <tr className="tablebox" >
                              <th scope="col ">Name</th>
                              <th scope="col ">Email-ID</th>
                              <th scope="col ">Mobile NO</th>
                              <th scope="col ">Actions</th>

                            </tr>
                          </thead>
                          <tbody  >
                            <tr className="tablebox">
                            </tr>
                            <tr className="tablebox">

                              <td className="name primary" ></td>
                              <td></td>
                              <td></td>
                              <td><span><Icon className="i" href="" onClick={() => Navigate()} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
                            </tr>
                            <tr className="tablebox">

                              <td className="name primary" >Larry the Bird</td>
                              <td>twitter@gmail.com</td>
                              <td >8654852655</td>
                              <td><span className="i"><Icon className="i" href="" onClick={() => Navigate()} icon="nimbus:edit" /></span><span className="vr ms-1"></span><span><Icon className="i ms-1" icon="pajamas:remove" /></span><span className="vr ms-1"></span><Icon className="i ms-1" icon="bxs:show" /></td>
                            </tr>
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
        </>
    )
}

export default DashBoard;
