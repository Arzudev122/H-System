import React from 'react'
import { useAuth } from '../../hooks/context/authcontext'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const { login, error, loading, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };


   useEffect(()=>{
    if (user){
      navigator("/dashboard", {replace:true});
      navigator("/appointment", {replace:true});
    }
   },[user, navigator])


  return (
    <div className=' min-h-screen flex items-center justify-center bg-cyan-100'>
      <div className='w-full  max-w-6xl md:flex-row flex justify-between items-center rounded-xl bg-white'>
        <img 
        src="./src/assets/img/health-team.png" 
        className='w-1/2 h-auto p-8 rounded-2xl'
        alt="background"/>
      <form
        onSubmit={handleSubmit}
        className='p-8 rounded-xl shadow-2xl bg-white mr-12'
      >

        <h2 className='flex items-center justify-center font-bold text-3xl mb-3'>Welcome !</h2>
        <p className='flex justify-center items-center text-xl font-semibold mb-5'>Please enter your credentials.</p>

        {error && (
          <p className='text-red-600 text-center mb-4 font-medium'>{error}</p>
        )}

        <div className='m-2 p-1'>
          <label className='font-bold'>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" Enter your email"
            required
            className='mt-2 h-8 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200'
          />
        </div>

        <div className=' m-2 p-1'>
          <label className='font-bold'>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" Enter your password"
            required
            className='mt-2 h-8 mb-5 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200'

          />
        </div>

        <div className='flex items-center justify-between mb-4'>
          <div className='ml-3'>
            <input type="checkbox" id="rememberMe" classname="" />
            <label htmlFor='rememberMe'className='text-gray-600 ml-2' >Remember me</label>
          </div>
         <div>
          <Link to="/forgot-password" className='text-blue-500 curser-pointer'>
            Forgot password?
          </Link>
        </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-medium transition ${loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

       

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>

      </form>
        

      </div>
    </div>

  )
}

export default Login