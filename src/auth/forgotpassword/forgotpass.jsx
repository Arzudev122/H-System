import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [newData,setNewData]=useState({
        Email:"",
        NewPassword:"",
        confirmPassword:"",
    });

    const [Error,setError]=useState("");
    const [message,setMessage]=useState("");
    const navigate=useNavigate("");

    const handleChange =(e)=>{
        setNewData({...newData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();

        if(!newPassword===confirmPassword){
            setError('password doesnt match')
            return;
        }
        try{
             const res= await axios.post(
                `{import.meta.env.VITE_API_URL}/user/forgetPassword` ,newData,{
                    headers:{
                        'Content-Type':'application/json'
                    }
                });
                setMessage(res.data.message);
                setError("");
                setTimeout(()=>navigate("/login"),3000)
        }catch(error){
           setError(error.response?.data?.message ||"Not done");
           setMessage("")
        }
    }

  return (
    <>
    <div>
             <div>
            <label>Email</label>
            <input
              name='Email'
              type="email"
              placeholder='Enter email'
              value={email}
              handle={onChange}
              className=''
            />
        </div>

       
         <div>
            <label>New Password:</label>
            <input
              name='NewPassword'
              type="password"
              placeholder='New password'
              value={newPassword}
              handle={onChange}
              className=''
            />
        </div>

         <div>
            <label>Confirm Password:</label>
            <input
              name='ConfirmPassword'
              type="password"
              placeholder='Confirm password'
              value={confirmPassword}
              handle={onChange}
              className=''
            />
        </div>
    </div>
    </>
  )
}

export default ForgotPassword