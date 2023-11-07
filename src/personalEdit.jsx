// import { useState } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

// const PersonalEdit = (props) => {
//     {props.e.target.value}

//     return (
//         <>
//         <div className="bg3">
//             <Header />
//             <div className="personalEdit">
//                 <div className="row">
                
//                     <div className="col-2 "><Sidebar /></div>       
//                     <div className="col-6 bg4">
//                     <div className="row mx-3 mt-3"><h5 className="label2 ">Empolyee Details &#10095; <span className="text ">Confirm Empolyee Details</span></h5></div>
//                 <hr className='hr0  ms-4 me-5'></hr>
//                 <div className="row">
//                         <div class="mb-3">
//                             <label for="formGroupExampleInput" class="form-label">First Name :</label>
//                             <input type="text" class="form-control" id="formGroupExampleInput" value={FName1} onChange={handleChangeFirstName} placeholder="Example input placeholder" />
//                         </div>
//                         <div class="mb-3">
//                             <label for="formGroupExampleInput2" class="form-label">Last Name :</label>
//                             <input type="text" class="form-control" id="formGroupExampleInput2" value={LName1} onChange={handleChangeLastName} placeholder="Another input placeholder" />
//                         </div>
//                         <div class="mb-3">
//                             <label for="formGroupExampleInput2" class="form-label">Mobile No:</label>
//                             <input type="text" class="form-control" id="formGroupExampleInput2" value={Mobile1} onChange={handleChangeMobile} placeholder="Another input placeholder" />
//                         </div>
//                         <div class="mb-3">
//                             <label for="formGroupExampleInput2" class="form-label">Email-Id</label>
//                             <input type="text" class="form-control" id="formGroupExampleInput2" value={Email1} onChange={handleChangeEmailId} placeholder="Another input placeholder" />
//                         </div>
//                         <div className="btn2">
//                         <button type="button" onClick={handleChangeDisplay} class="btn btn-danger">Danger</button>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default PersonalEdit;