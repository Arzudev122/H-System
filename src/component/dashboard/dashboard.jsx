import React from 'react'
import Navbar from '../shared/navbar/navbar'
import Sidebar from '../shared/sidebar/sidebar'
import { Bed, CalendarCheck2, Ellipsis, Users,File } from 'lucide-react'
import MainLayout from '../shared/MainLayout/mainLayout'

const Dashboard = () => {
  const cards = [
    {
      tittle: "Total Patients",
      subtittle: "150 more than Yesterday",
      iconLeft: <Users />,
      bg: 'bg-violet-200',
    },
    {
      tittle: "Appointments",
      subtittle: "15 more than Yesterday",
      iconLeft: <CalendarCheck2 />,
      bg: 'bg-gray-300',
    },
    {
      tittle: "Bed Room",
      subtittle: "260 more than Yesterday",
      iconLeft: <Bed />,
      bg: 'bg-yellow-200',
    },
    {
      tittle: "Total Invoice",
      subtittle: "1050 more than Yesterday",
      iconLeft: <Users />,
      bg: 'bg-violet-200',
    },
  ]

  const boxes = [
    {
      title: "Patient Health",
      subtitle: 'From Patient',
      iconLeft: <Users />,
    },
    {
      title: 'Total Revenue',
      subtitle: '01.07.2025',
      iconLeft: <File />
    }
  ]

  return (
    <>
      <MainLayout>
        <div>
        <main className='p-2 bg-violet-50 rounded-4xl'>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2 mb-4 mx-3'>
            {cards.map((card, i) => (
              <div
                key={i}
                className={`flex flex-col justify-between p-3 h-48 rounded-3xl shadow-md hover:shadow-2xl ${card.bg}`}
              >

                <div className='flex justify-between '>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gray-100'>
                    {card.iconLeft}
                  </div>
                  <div className='flex items-center justify-center h-12 w-12 rounded-full bg-white '>
                    <Ellipsis className='h-6 w-6 ' />
                  </div>
                </div>
                <div className='mt-4'>
                  <h2 className='font-bold text-2xl'>{card.tittle}</h2>
                  <p className='text-lg mt-1 mb-2'>{card.subtittle}</p>
                </div>

              </div>
            ))}

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

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid cols-2 gap-3 m-2 '>
            {boxes.map((box, j) => (
              <div
                key={j}
                className='relative justify-between overflow-hidden'>
                <img
                  src="./src/assets/img/lungs.png"
                  alt="lungs img"
                  className=' rounded-3xl shadow-md opacity-66'
                  />
                <div className='flex justify-between '>
                  <div className='absolute top-3 left-3 flex items-center justify-center w-12 h-12 rounded-full bg-gray-300'>
                    {box.iconLeft}
                  </div>
                  <div className='absolute top-3 right-3 flex items-center justify-center h-12 w-12 rounded-full bg-gray-300 '>
                    <Ellipsis className='h-6 w-6 ' />
                  </div>
               
                <div className='m-1 absolute top-3 left-18'>
                  <h2 className='font-semibold text-xl'>{box.title}</h2>
                  <p className='text-sm'>{box.subtitle}</p>
                </div>
                 </div>
              </div>



            ))}
          </div>


        </main>
        </div>
      </MainLayout>
    </>
  )
}

export default Dashboard