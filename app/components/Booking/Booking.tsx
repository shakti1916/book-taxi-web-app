"use client"
import React from 'react'
import AutoComplete from './AutoComplete'

const Booking = () => {
  const screenHight=window.innerHeight*0.72;
  return (
    <div className='p-5'>
        <h2 className='font-semibold mb-2'>
            Booking
        </h2>
        <div className='border-[1px] p-5 rounded-md'>

      
        <AutoComplete/>
        </div>
    </div>
  )
}

export default Booking