import React, { useState} from 'react';

const HookForm =(props)=>{
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    return(
        <div>
            <form>
                <div>
                    <label>First Name :</label>
                    <input type="text" onChange={(e)=>setFirstname(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name :</label>
                    <input type="text" onChange={(e)=>setLastname(e.target.value)}/>
                </div>
                <div>
                    <label>Email Address :</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password :</label>
                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <p >Your form data</p>
            <p style={{textAlign:"left"}}>First Name : {firstName}</p>
            <p style={{textAlign:"left"}}>Last Name : {lastName}</p>
            <p style={{textAlign:"left"}}>Email Address : {email}</p>
            <p style={{textAlign:"left"}}>Password: : {password}</p>
            <p style={{textAlign:"left"}}>Confirm Password: : {confirmPassword}</p>

        </div>
        
        
        )
}

export default HookForm;