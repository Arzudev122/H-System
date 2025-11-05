import React from 'react'
import { Home,LayoutDashboard } from "lucide-react"
import {Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <>
    <div className='flex flex-row items-start m-3 gap-4'>
        <img 
          src="./src/assets/img/sidebar hospital logo.svg"
          className='h-12 w-12'
        />
        <h2 className='font-bold text-xl'><span className='text-black'>Haven</span><span className='text-red-400'>Med</span></h2>
    </div>

    <div className='m-2 p-2'>
        <p className='text-sm'>Main Menu</p>
        <div className='flex flex-row gap-2'>
        <LayoutDashboard/>
        <span>Dashboard</span>
        </div>


    </div>
    </>
    )
}

export default Sidebar