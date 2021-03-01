import React, { useState} from 'react';

const HookForm =(props)=>{
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError ] = useState("");
    const [emailError, setEmailError] = useState("");
    const handleFisrtName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name  must be 3 characters or longer!");
        }
    }
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name  must be 3 characters or longer!");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email  must be 5 characters or longer!");
        }
    }
    return(
        <div>
            <form>
                <div>
                    <label>First Name :</label>
                    <input type="text" onChange={handleFisrtName}/>
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{ firstNameError }</p> : null
                    }
                </div>
                <div>
                    <label>Last Name :</label>
                    <input type="text" onChange={handleLastName}/>
                    {
                        lastNameError ?
                        <p style={{color: 'red'}}>{lastNameError}</p> : null
                    }
                </div>
                <div>
                    <label>Email Address :</label>
                    <input type="text" onChange={handleEmail}/>
                    {
                        emailError ?
                        <p style={{color: 'red'}} > {emailError}</p> : " "
                    }
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