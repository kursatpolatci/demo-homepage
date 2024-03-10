import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Newsletter = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
}, [])
  return (
    <div data-aos="fade-up" className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
      <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
        <div className='text-center'>
            <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>How to Design your site footer like we did
            </h2>
            <div className='flex items-center justify-center gap-8'>
                <button className='btn-primary text-white'>Get a Demo</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
