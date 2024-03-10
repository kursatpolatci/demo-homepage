import React, { useEffect } from 'react'
import aboutImg from '../assets/image/rafiki.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
  return (
    <div data-aos="fade-up">
      {/* About text */}
      <div className=' px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
                <img src={aboutImg} alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at PixelGrade</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus culpa tempora ipsam reprehenderit aliquam unde! Accusamus ullam, cum doloremque nemo blanditiis molestias dolores, fugit a corrupti mollitia labore non neque quibusdam consequuntur soluta nobis at laboriosam necessitatibus sint aliquid possimus placeat! Minus libero recusandae nisi. Dicta ad vero iusto!</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
      </div>

      {/* company stats */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local <br/> <span className='text-brandPrimary'>business reinvent itself</span></h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </div>

            {/* stats */}
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/image/events.png" alt="" />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,567,123</h4>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/image/events.png" alt="" />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,567,123</h4>
                            <p>Members</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/image/events.png" alt="" />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,567,123</h4>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/image/events.png" alt="" />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,567,123</h4>
                            <p>Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
