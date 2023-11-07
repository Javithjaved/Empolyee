function TableRows({ rowsData,handleChange }) {
    return (
        rowsData.map((data, index) => {
            const { Name, Email, Mobile } = data;
            return (
                <tr key={index}>
                    <td>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Name :</label>
                            <input type="text" class="form-control" id="Name" value={Name} onChange={(e)=>(handleChange(index, e))}  />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Email-Id :</label>
                            <input type="text" class="form-control" id="Email" value={Email} />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Mobile No :</label>
                            <input type="text" class="form-control" id="Mobile" value={Mobile} />
                        </div>
                    </td>
                </tr>
            )
        })

    )

}

export default TableRows;
