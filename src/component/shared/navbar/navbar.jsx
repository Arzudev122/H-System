import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {Search ,Mails, Bell, Settings, ChevronDown } from "lucide-react"


const Navbar = () => {
   const [query, setQuery]= useState("")

   const handleSearch = (e) =>{
    setQuery(e.target.value);
    console.log("searching for", e.target.value)

   }

  return (
    <nav className='flex items-center justify-between gap-6 px-6 py-4 bg-white rounded-2xl'>
    <div className='relative w-1/2 mr-3'>
       <Search className='absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 '/> 
       <input
        type="search"
        placeholder=" Search here..."
        value={query}
        onChange={handleSearch}
        className='w-full pl-8 pr-4 rounded-3xl py-2 focus:outline-none border-gray-300 border'
        /> 
         </div>
           
           <div className='flex justify-between gap-3'>
           <div className='flex space-x-8 p-4 border-x-4 border-gray-100 py-1 mx-3'>
         <span className='flex justify-center items-center rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-300'><Mails className='text-black h-5 w-5'/></span> 
         <span className='flex justify-center items-center rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-300'> <Bell className='text-black h-5 w-5'/></span>
          <span className='flex justify-center items-center rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-300'><Settings className='text-black h-5 w-5'/> </span>
            </div>

            <div className='flex justify-between items-center ml-6 gap-4'>
                <img 
                src="./src/assets/img/profile.jpg"
                alt="profile picture"
                className='h-14 w-14 rounded-full '
                />
                <span className='ml-3'>
                  <h2 className='font-bold text-lg'>Jackie Chain</h2>
                  <p className='font-medium'>Super admin</p>
                </span>
                <ChevronDown/>
            </div>
           </div>
     </nav>
  )
}

export default Navbar