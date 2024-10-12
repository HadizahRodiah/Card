import React from 'react'
import car from './assets/car.png'
import * as Icons from 'react-bootstrap-icons'

const Card = () => {
  return (
    <div className='bg-black w-screen overflow-x-hidden'> 
         <div className='flex bg-black flex-col justify-center '>
          <div className='text-center justify-center items-center flex flex-col relative'>
          <div className='justify-between gap-20 flex flex-row absolute '>
            <Icons.Circle width={30} height={30} className='text-white flex-end mr-10'/>
            <Icons.Circle width={20} height={20} className='text-black mr-10'/>
            <Icons.Circle width={30} height={30} className='ml-10 text-black'/>
            <Icons.Circle width={30} height={30} className='ml-10 text-yellow-400'/>
            </div>
          <div className='relative'>
          <h1 className='text-white font-bold text-2xl md:text-4xl'>AlmasTech</h1> 
            <span className='text-yellow-400 font-bold text-3xl md:text-5xl'>Social Networking</span>
            <h1 className='text-white font-bold  text-5xl md:text-6xl'>Website</h1>
          </div>
           </div>
         <div className='justify-center mt-20 flex-col  items-center flex'>
         <div className='justify-center flex items-center mb-10 mt-10'>
         <img src={car} className='w-30 h-50 mt-20 absolute  blur-lg '></img>
         <img src={car} width={350} className='mt-10 absolute '></img>
         </div>

         <div className='flex flex-col mt-20'>
          <div className='flex flex-row justify-center items-center bg-black  px-5 mt-20 rounded-full shadow-md shadow-white relative'>
           <a href=""><Icons.TwitterX width={20} height={20} className='text-white font-bold m-2'/></a>
           <a href=""><Icons.Whatsapp width={20} height={20} className='text-white font-bold m-2'/></a>
           <a href=""><Icons.Linkedin width={20} height={20} className='text-white font-bold m-2'/></a>
           <a href=""><Icons.Facebook width={20} height={20} className='text-white font-bold m-2'/></a>
           <a href=""><Icons.Instagram width={20} height={20} className='text-white font-bold m-2'/></a>
          </div>
          <div className='flex flex-row relative bg-transparent'>
            <a className='bg-white text-black p-2 m-3 font-bold shadow-lg shadow-black px-2 rounded-lg flex flex-row'><Icons.LightningChargeFill width={20} height={20}/>Get Started</a>
            <a className='bg-white text-black p-2 m-3 font-bold shadow-lg shadow-black px-2 rounded-lg'>reviews</a>
           </div>
          </div>
         </div>
         </div>
         <div className='flex bg-black flex-row bg-transparent mx-20 justify-center items-center relative'>
          <div className='text-white flex-shrink hidden md:inline bg-black border rounded-md shadow-md shadow-white border-yellow-400 mx-3 p-10'>
           <p>write alot about something</p>
           <p>write alot about something</p>
           <p>write alot about something</p>
           <p>write alot about something</p>
          </div>
          <div className='bg-black flex-shrink hidden md:inline text-white border rounded-md shadow-md shadow-white border-yellow-400 mx-3 p-10'>
           <p>write alot about something</p>
           <p>write alot about something</p>
           <p>write alot about something</p>
           <p>write alot about something</p>
          </div>

         </div>
       </div>
    
  )
}

export default Card