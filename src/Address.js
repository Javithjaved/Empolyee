const Address = ({allValue ,setAllValue}) => {
    const handleChangeInput=(e)=>{
        e.preventDefault();
        setAllValue({...allValue,[e.target.name]: e.target.value });
    }
    // setInput([...input,allValue])

    const stateName = ["",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"]
        const Country = ["India"]
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row ">
                    <div className="col-2 "></div>
                    <div className="col-10 bg3 ">
                        <div className="col personal ms-3 me-3 p-3 pb-0">
                            <div className="row"><h5 className="header1">Address Details</h5></div>                          
                            <hr></hr>
                            <div className='details col-6'>
                                <label className="label " for="street" >Street :</label>
                                <input type="text" className="form-control mt-2" value={allValue.address} onChange={(e)=>handleChangeInput(e)} id="street" placeholder="1234 Main St" name='address' required ></input>
                            </div>
                            <div className='row'>
                                <div className="col-3">
                                    <label className="label" for='City'>City :</label>
                                    <input type="text" className="form-control mt-2" name="city" value={allValue.city} onChange={(e)=>handleChangeInput(e)} id="City"  onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.preventDefault()} required ></input>
                                </div>
                                <div className="col-3">
                                    <label className="label" for='state'>State :</label>
                                    <select name="state" value={allValue.state }  onChange={(e)=>handleChangeInput(e)} id="state" className="form-control mt-2" required>
                                        {stateName.map((state) => {
                                            return <option value={state}>{state}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-2">
                                    <label className="label" for='Zip'>Zip :</label>
                                    <input type="text" className="form-control mt-2" value={allValue.zip} onChange={(e)=>handleChangeInput(e)} id="Zip" name='zip' required ></input>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='Country'>
                                    <label className="label" for='Country'>Country :</label>
                                    <input type="text" className="form-control Country mt-2" id='Country' name="Country" placeholder="India" value={Country} required disabled ></input>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </>
    )
}
export default Address;