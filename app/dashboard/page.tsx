import React from 'react'
import Booking from '../components/Booking/Booking'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>

      <div className=''>
        <Booking/>
      </div>
      <div className='bg-blue-400 col-span-2'>
        Map
      </div>
    </div>
  )
}

export default Dashboard