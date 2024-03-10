import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
    const services = [
        {id: 1, title: "Membership Organizations", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum beatae fuga veritatis aspernatur quos!", image:"/src/assets/image/services_card1.png"},
        {id: 2, title: "National ASssociations", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum beatae fuga veritatis aspernatur quos!", image:"/src/assets/image/services_card2.png"},
        {id: 3, title: "Clubs and Groups", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum beatae fuga veritatis aspernatur quos!", image:"/src/assets/image/services_card3.png"},

    ]
    useEffect(() => {
      Aos.init({duration: 2000});
  }, [])
  return (
    <div  data-aos="fade-up" className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGrey '>We have been working with some Fortune 500+ clients</p>

        {/* company logo */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <img className='object-contain w-32 h-16' src="/src/assets/image/coreal-logo.png" alt="" />
            <img className='object-contain w-32 h-16' src="/src/assets/image/logo-hasc.png" alt="" />
            <img className='object-contain w-32 h-16' src="/src/assets/image/demiryaka2.png" alt="" />
            <img className='object-contain w-32 h-16' src="/src/assets/image/halat-logo.png" alt="" />
            <img className='object-contain w-32 h-16' src="/src/assets/image/fiber.png" alt="" />
            <img className='object-contain w-32 h-16' src="/src/assets/image/metalmatris-logo.png" alt="" />
        </div>
      </div>

      {/* Service Card */}
      <div className='mt-20 md:w-1/2 mx-auto text-center ' >
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your entire community in a single system</h2>
        <p className='text-neutralDGrey'>We have been working with some Fortune 500+ Clients</p>
      </div>

      {/*  Cards */}
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
            {
                services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 tranisition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" className='-ml-5' /></div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                        <p className='text-sm text-neutralDGrey'>{service.description}</p>
                    </div>
                    </div>)
            }
        </div>
    </div>
  )
}

export default Services
