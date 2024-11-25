import { useState, useEffect } from "react"

function InputPInfo() {
    const [stdID, setStdID] = useState('');
    const [department, setDepartment] = useState('');
    
    useEffect(()=>{
        console.log('렌더링됨');
        
    }, [stdID, department]);

    const onChangeStdID = e => {
        setStdID(e.target.value);
    }
    const onChangeDepartment = e => {
        setDepartment(e.target.value);
    }

    return  (
        <>
            <form>
                <label for="stdID">학번</label>
                <input type="text" value={stdID} onChange={onChangeStdID}></input>
                <label for="department">학과</label>
                <input type="text" value={department} onChange={onChangeDepartment}></input>
                {
                    
                }
            </form>
        </>
    )
}

export default InputPInfo;
