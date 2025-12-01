import React from 'react'
import { LayoutDashboard, CalendarCheck2, Users, Stethoscope, FileText, Wallet, Box, CalendarDays, CircleAlert, Cog, LogOut } from "lucide-react"
import { Link, useLocation,useNavigate } from "react-router-dom"
import { useAuth } from '../../../hooks/context/authcontext'


const Sidebar = () => {
   const  location =useLocation();
   const  navigate =useNavigate();
   const  {logout} =useAuth();

  const mainMenu=[
    {name:"Dashboard" , icon:LayoutDashboard , path:"/dashboard"},
    {name:"Appointments" , icon:CalendarCheck2 , path:"/appointment"},
    {name:"Patient" , icon:Users , path:"/patient"}
  ]

   const otherMenu=[
    {name:"Doctors" , icon:Stethoscope , path:"/doctors"},
    {name:"Department" , icon:FileText , path:"/department"},
    {name:"Doctor Schedule" , icon:CalendarCheck2 , path:"/doctorschedule"},
    {name:"Payments" , icon:Wallet , path:"/payments"},
    {name:"Calendar" , icon:CalendarDays , path:"/calendar"},
    {name:"Inventory" , icon:Box , path:"/inventory"}
   ]

   const helpMenu=[
    {name:"Help" , icon:CircleAlert , path:"/help"},
    {name:"Settings" ,icon: Cog , path:"/settings"},
    {name:"Logout" , icon:LogOut , path:"/login"}
   ]

   const renderMenu =(tittle , items)=>(
      <div>
        <p className='text-sm font-bold m-3 p-2 text-gray-600 mb-4'>{tittle}</p>
        {items.map(({name , icon: Icon , path})=>{
            const active =location.pathname === path;

            if(name === "Logout"){
                return(
                    <button
                    key={name}
                    onClick={()=>{
                        logout();
                        navigate("/login");
                    }}
                    className='flex items-center gap-3 m-3 mb-3 p-3 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-100 hover:text-red-500'
                >
                    <Icon className="w-6 h-6" />
                    <span>{name}</span>
                </button>
                );
            }
            return(
                <Link
                key={name}
                to={path}
                className={`flex items-center gap-3 m-3 mb-3 p-3 rounded-xl
                   ${ active 
                    ? "bg-red-300 text-red-500 font-medium"
                    : "text-gray-800 hover:bg-gray-100 hover:text-red-700 "
                }`}
                >
                    <Icon className ="w-6 h-6"/>
                    <span>{name}</span>
                
                </Link>
            );
        })}
      </div>
   );


    return (
        <div className='flex flex-col h-screen w-56 bg-white'>
              <div className='flex items-center p-3 m-1 gap-3 '>
                <img
                    src="./src/assets/img/sidebar hospital logo.svg"
                    alt="HavenMed Logo"
                    className='h-12 w-12'
                />
                <h2 className='font-bold text-xl'>
                    <span className='text-black'>Haven</span>
                    <span className='text-red-400'>Med</span>
                </h2>
            </div>

           <nav className='flex-1 overflow-y-auto'>
            {renderMenu("Main Menu", mainMenu)}
            {renderMenu("Other Menu", otherMenu)}
            {renderMenu("Help", helpMenu)}
            

           </nav>
            </div>
            )
}

            export default Sidebar




