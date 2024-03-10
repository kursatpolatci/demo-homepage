import React from 'react'
import aboutImg from '../assets/image/pana.png'
import Maecenas from '../assets/image/image 9.png'

const Products = () => {
  return (
    <div>
      {/* About text */}
      <div className=' px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
                <img src={aboutImg} alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ea culpa, quia voluptates libero similique cum fuga quas autem doloremque cumque totam nulla? Excepturi mollitia sunt ipsam perferendis provident nobis tempora officia repudiandae omnis, repellendus, aspernatur ratione cupiditate eligendi, debitis temporibus ut? Laboriosam, quo repellat.</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
      </div>

      {/* company stats */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/3'>
                <img src={Maecenas} alt="" />
            </div>

            {/* stats */}
            <div className='md:w-2/3 max-auto'>
                <div>
                    <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur laboriosam, harum illum minus ullam repellat dolor odio quod impedit molestiae ipsum reiciendis beatae, quis facilis corporis molestias tenetur! Perferendis delectus at repudiandae architecto excepturi fugiat quas officiis dolorem accusantium magnam dignissimos corporis obcaecati repellat, vel earum illo id ullam porro numquam eos tempore esse. Delectus dolore, cupiditate fugiat, esse eos natus minima unde eveniet ipsam commodi laborum minus assumenda repellat exercitationem architecto vitae eius iste tenetur! Veniam sequi dolores fugit incidunt magni soluta quas nulla in tempora quis quia odio eveniet voluptatum voluptate, tempore dolorem consequatur. Neque dolore dolor eveniet?</p>
                    <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Kürşat Polatcı</h5>
                    <p className='text-base text-neutralGrey mb-8'>Turkish Dragon Boat Racing Association</p>
                    <div>
                        <div className='flex items-center gap-8 flex-wrap'>
                            <img src="/src/assets/image/coreal-logo.png" alt="" className='cursor-pointer object-contain w-32 h-16'/>
                            <img src="/src/assets/image/fiber.png" alt="" className='cursor-pointer object-contain w-32 h-16'/>
                            <img src="/src/assets/image/logo.png" alt="" className='cursor-pointer object-contain w-32 h-16'/>
                            <img src="/src/assets/image/halat-logo.png" alt="" className='cursor-pointer object-contain w-32 h-16'/>
                            <img src="/src/assets/image/demiryaka2.png" alt="" className='cursor-pointer object-contain w-32 h-16'/>
                            <img src="/src/assets/image/metalmatris-logo.png" alt="" className='cursor-pointer object-contain w-32 h-16'/>
                            <div className='flex items-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all custormers</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
