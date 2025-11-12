import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        gender: "",
        dateOfBirth: ""
    });
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!formData.password) {
            setError("Password is required");
            return;
        }
console.log("FormData", formData)
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/user/register`,formData, {
               headers: {
                   'Content-Type': 'application/json'
                }
        });
            console.log("Server Response:",res.data)
            setMessage(res.data.message);
            setError("");
            setTimeout(() => navigate("/login"), 2000);
        } catch (error) {
            setError(error.response?.data?.message || "Registration failed");
            setMessage("");
        }
    };


    return (
        <div className='min-h-screen flex justify-center items-center bg-cyan-100'>
            <div className='flex justify-center items-center p-1 bg-white w-full max-w-6xl md:flex-row rounded-xl shadow-2xl'>
                 
                  <img src="./src/assets/img/hospital-reception.png" className=' p-1 h-auto w-1/2 ' /> 

                <form
                    onSubmit={handleSubmit}
                    className='bg-white p-5 m-4 '
                >
                    <h2 className='text-3xl font-bold flex justify-center items-center text-blue-600 p-2'>Create Account</h2>
                    <div>
                        <div className='font-normal m-2'>
                            <label>UserName</label>
                            <input
                                name="userName"
                                type="text"
                                placeholder="  Full Name"
                                value={formData.userName}
                                onChange={handleChange}
                                className='w-full rounded-lg p-2 focus:outline-none border focus:border-2 focus:border-cyan-500 border-cyan-300'
                            />
                        </div>

                        <div className='font-normal m-2'>
                            <label>Email</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                placeholder=' Enter email'
                                onChange={handleChange}
                                className='w-full rounded-lg border border-cyan-300 focus:outline-none focus:border-2 focus:border-cyan-500 p-2'
                            />
                        </div>

                        <div className='font-normal m-2'>
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder=' Enter your password'
                                onChange={handleChange}
                                value={formData.password}
                                className='w-full rounded-lg border border-cyan-300 focus:outline-none focus:border-2 focus:border-cyan-500 p-2'
                            />
                        </div>

                        {/* <div className='font-normal m-2'>
                            <label>Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                placeholder=" Confirm password"
                                onChange={handleChange}
                                className='w-full rounded-lg border border-cyan-300 focus:outline-none focus:border-2 focus:border-cyan-500 p-1'
                            />
                        </div> */}

                        <div className='font-normal m-2'>
                            <label>Address</label>
                            <input
                                name="address"
                                type="text"
                                value={formData.address}
                                placeholder=" Enter your address"
                                onChange={handleChange}
                                className='w-full rounded-lg border border-cyan-300 focus:outline-none focus:border-2 focus:border-cyan-500 p-2'
                            />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                            <div className='w-1/2 m-1'>
                                <label className='font-normal'>Gender</label>
                                <select
                                    name="gender"
                                    type="radiobutton"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className='rounded-lg border border-cyan-300 focus:border-2 focus:border-cyan-500 focus:ouline-none p-2'
                                >
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div className='w-1/2 m-1'>
                                <label className='font-normal'>DOB</label>
                                <input
                                    name="dateOfBirth"
                                    type="date"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    className='rounded-lg border border-cyan-300 focus:outline-none focus:border-2 focus:border-cyan-500 p-2 mb-2 '
                                />
                            </div>
                        </div>


                        <button className={`m-2 w-full rounded-lg text-white font-medium bg-blue-600 py-1 my-3 `}
                            type="submit"
                        >Register
                        </button>

                        {message && <p>{message}</p>}
                        {error && <p className='text-red-600'>{error}</p>}

                        <p className="text-center mt-4 text-gray-600">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-500 hover:underline">
                                Log in
                            </a>
                        </p>

                    </div>
                </form>

                
            </div>

        </div>
    )
}

export default Register