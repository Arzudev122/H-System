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
            <div className='min-h-screen flex justify-center items-center bg-cyan-100'>
                <form
                    onSubmit={handleSubmit}
                    className=' p-6  bg-white shadow-2xl rounded-2xl'
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


// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ForgotPassword = () => {
//   const [newData, setNewData] = useState({
//     email: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setNewData({ ...newData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newData.newPassword !== newData.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_URL}/user/forgetPassword`,
//         newData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setMessage(res.data.message);
//       setError("");
//       setTimeout(() => navigate("/login"), 3000);
//     } catch (error) {
//       setError(error.response?.data?.message || "Something went wrong");
//       setMessage("");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Forgot Password
//         </h2>

//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             value={newData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 font-medium">New Password</label>
//           <input
//             name="newPassword"
//             type="password"
//             placeholder="Enter new password"
//             value={newData.newPassword}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Confirm Password</label>
//           <input
//             name="confirmPassword"
//             type="password"
//             placeholder="Confirm password"
//             value={newData.confirmPassword}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {error && <p className="text-red-500 text-center mb-3">{error}</p>}
//         {message && <p className="text-green-500 text-center mb-3">{message}</p>}

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//         >
//           Reset Password
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;
