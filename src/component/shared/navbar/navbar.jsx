import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {Search ,Mails, Bell} from "lucide-react"


const Navbar = () => {
   const [query, setQuery]= useState("")

   const handleSearch = (e) =>{
    setQuery(e.target.value);
    console.log("searching for", e.target.value)

   }

  return (
    <nav className='flex items-center gap-6 px-6 py-4 bg-white rounded-2xl'>
    <div className='relative w-1/2'>
       <Search className='absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5'/> 
       <input
        type="search"
        placeholder=" Search here..."
        value={query}
        onChange={handleSearch}
        className='w-full pl-8 pr-4 rounded-3xl py-2 focus:outline-none border-gray-300 border'
        /> 
         </div>
           
           <div className='flex space-x-8 p-6'>
         <Mails className='text-black h-5 w-5'/>
         <Bell className='text-black h-5 w-5'/>
            </div>

     </nav>
  )
}

export default Navbar