import React from 'react'
import Navbar from '../shared/navbar/navbar'
import Sidebar from '../shared/sidebar/sidebar'

const Dashboard = () => {
  return (
    <div className='flex h-screen'>
    <Sidebar />

    <div className='flex flex-col  flex-1'>
      <Navbar/>

      <main className='p-4 overflow-auto flex-1'>

        </main>
    </div>
    </div>
  )
}

export default Dashboard