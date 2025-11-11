import React from 'react'
import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar'

const MainLayout = ({children}) => {
  return (
    <>
    <div className='flex h-screen'>
         <Sidebar/>  

         <div className='flex flex-col flex-1'>
            <Navbar/>

            <main className='p-4 overflow-auto flex-1'>
                {children}
            </main>
         </div>
    </div>
    
    </>
  )
}

export default MainLayout