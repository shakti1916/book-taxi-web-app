import CarList from '@/data/CarList'
import Image from 'next/image'
import React, { useState } from 'react'

const Cars = () => {
    const [selector, setSelector] = useState<any>()
  return (
    <div>
        <h2 className='font-semibold mt-5'>

        Select Car
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 mt-2 lg:grid-cols-3'>
            {
                CarList.map((item,index)=>(
                    <div key={index} className={`border-[2px] w-full rounded-md p-2 m-4 hover:border-yellow-300 cursor-pointer hover:scale-110 transition-all ${index == selector ? 'border-yellow-400 border-[2px]':null }`} onClick={()=>setSelector(index)}>
                        <Image src={item.image} alt='car image ' width={90} height={100} className='w-full'/>

                        <h2 className='text-[12px] text-gray-400'>{item.name}</h2>
                        <span className='float-right font-semibold'>${item.charges}</span>
                    </div>
                ))
            }
        </div>
        
        </div>
  )
}

export default Cars