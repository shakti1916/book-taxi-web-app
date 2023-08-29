import Image from 'next/image'
import Booking from './components/Booking/Booking'

export default function Home() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>

      <div className=''>
        <Booking/>
      </div>
      <div className='bg-blue-400 col-span-2 flex-grow'>
        Map
      </div>
    </div>
  )
}
