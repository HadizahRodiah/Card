import React, { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle the mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='w-screen bg-black'>
      <nav className='bg-black pt-5 flex flex-row justify-between text-white font-bold mx-10 relative z-50'>
        {/* Logo */}
        <div className='text-yellow-200 mx-15 m-5 text-3xl'>
          <h1 className='font-bold'>LOGO</h1>
        </div> 

        {/* Desktop Menu */}
        <div className='hidden md:flex mx-5 flex-row justify-between'>
          <a href="" className='m-4'>Home</a>
          <a href="" className='m-4'>Experience</a>
          <a href="" className='m-4'>Service</a>
          <a href="" className='m-4'>Product</a>
          <a href="" className='m-4'>Review</a>
        </div>

        {/* Contact Button */}
        <div className='hidden md:block mx-15 mt-5'>
          <a href="#" className='bg-yellow-200 text-black p-3 m-5 font-bold shadow-sm shadow-white rounded-full'>Contact</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden flex flex-col items-center bg-black ${isOpen ? 'block' : 'hidden'}`}>
        <a href="" className='m-4 text-white'>Home</a>
        <a href="" className='m-4 text-white'>Experience</a>
        <a href="" className='m-4 text-white'>Service</a>
        <a href="" className='m-4 text-white'>Product</a>
        <a href="" className='m-4 text-white'>Review</a>
        <a href="#" className='bg-yellow-200 text-black p-3 m-5 font-bold shadow-sm shadow-white rounded-full'>Contact</a>
      </div>
    </div>
  )
}

export default Nav;
