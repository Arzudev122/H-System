import React from 'react'
import Navbar from '../shared/navbar/navbar'
import Sidebar from '../shared/sidebar/sidebar'
import { Bed, CalendarCheck2, Ellipsis, Users } from 'lucide-react'

const Dashboard = () => {
   const cards=[
    {
      tittle:"Total Patients",
      subtittle:"150 more than Yesterday",
      iconLeft:<Users/>,
      bg: 'bg-violet-200',
    },
     {
      tittle:"Appointments",
      subtittle:"15 more than Yesterday",
      iconLeft:<CalendarCheck2/>,
      bg: 'bg-gray-300',
    },
     {
      tittle:"Bed Room",
      subtittle:"260 more than Yesterday",
      iconLeft:<Bed/>,
      bg: 'bg-yellow-200',
    },
     {
      tittle:"Total Invoice",
      subtittle:"1050 more than Yesterday",
      iconLeft:<Users/>,
      bg: 'bg-violet-200',
    },
   ]

  return (
    <div className='flex h-screen'>
      <Sidebar />

      <div className='flex flex-col  flex-1'>
        <Navbar />

        <main className='p-4 overflow-auto flex-1'>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {cards.map((card,i)=>(
              <div
              key={i}
              className="">
            </div>))}

          </div>

          {/* <div className='min-h-screen shadow-xl rounded-4xl bg-violet-50'>
            <div className='flex justify-between gap-2 p-5'>
              <div className='flex justify-between bg-violet-200 shadow-md rounded-3xl h-57 w-86'>
                <span className='m-4 flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 hover:bg-white'>
                  <Users className=' h-6 w-6' />
                </span>
                 <h2 className='flex justify-center items-center'>Total Patients</h2>
                <p>150 more than Yesterday</p>
                <span className='m-4 flex justify-center items-center w-12 h-12 rounded-full bg-violet-100 hover:bg-violet-300'>
                  <Ellipsis className='h-6 w-6' />
                </span>
               
              </div>

              <div className='flex justify-between bg-gray-300 shadow-md rounded-3xl h-57 w-86'>
                <span className='m-4 flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-400'>
                  <CalendarCheck2 className='h-6 w-6' />
                </span>
                <span className='m-4 flex justify-center items-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-400'>
                  <Ellipsis className='h-6 w-6' />
                </span>
              </div>
              <div className='flex justify-between bg-yellow-200 shadow-md rounded-3xl h-57 w-86'>
                <span className='m-4 flex justify-center items-center w-12 h-12 rounded-full bg-black '>
                  <Bed className='h-6 w-6 text-white' />
                </span>
                <span className='m-4 flex justify-center items-center w-12 h-12 rounded-full bg-yellow-100 hover:bg-white'>
                  <Ellipsis className='h-6 w-6' />
                </span>
              </div>
              <div className='flex justify-between bg-gray-200 shadow-md rounded-3xl h-57 w-86'>
                <span className='m-4 flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 hover:bg-white'>
                  <Users className='h-6 w-6' />
                </span>
                <span className='m-4 flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 hover:bg-white'>
                  <Ellipsis className='h-6 w-6' />
                </span>
              </div>
            </div>

          </div> */}


        </main>
      </div>
    </div>
  )
}

export default Dashboard