import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [newData, setNewData] = useState({
        Email: "",
        NewPassword: "",
        ConfirmPassword: "",
    });

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newData.NewPassword !== newData.ConfirmPassword) {
            setError('password doesnt match')
            return;
        }
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/user/forgetPassword`, newData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setMessage(res.data.message);
            setError("");
            setTimeout(() => navigate("/login"), 3000)
        } catch (err) {
            setError(err.response?.data?.message || "Not done");
            setMessage("");
        }
    }

    return (
        <>
            <div className='min-h-screen flex justify-center items-center bg-cyan-50'>
                <form
                    onSubmit={handleSubmit}
                    className=' p-6  bg-white shadow-xl rounded-2xl'
                >
                    <h2 className='flex justify-center font-bold text-2xl mb-2 text-blue-600 '>Forgot Password ?</h2>

                    <div className='mb-3'>
                        <label className='font-semibold'>Email</label>
                        <input
                            name='Email'
                            type="email"
                            placeholder='Enter email'
                            value={newData.Email}
                            onChange={handleChange}
                            className='w-full border border-cyan-200 rounded-xl p-2 focus:outline-none focus:border-gray-400'
                        />
                    </div>


                    <div className='mb-3'>
                        <label className='font-semibold'>New Password</label>
                        <input
                            name='NewPassword'
                            type="password"
                            placeholder='New password'
                            value={newData.NewPassword}
                            onChange={handleChange}
                            className='w-full border border-cyan-200 rounded-xl p-2 focus:outline-none focus:border-gray-400'
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='font-semibold'>Confirm Password</label>
                        <input
                            name='ConfirmPassword'
                            type="password"
                            placeholder='Confirm password'
                            value={newData.ConfirmPassword}
                            onChange={handleChange}
                            className='w-full border border-cyan-200 rounded-xl p-2 focus:outline-none focus:border-gray-400'
                        />
                    </div>
                    {error && <p>{error}</p>}
                    {message && <p>{message}</p>}

                    <button
                        type="submit"
                        className='w-full bg-blue-600 rounded-2xl p-1 my-4  text-white font-semibold'
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword


