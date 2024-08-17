import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full h-14 border px-5 flex items-center' >
      <Link to={"/"} >Home</Link>
      <ul className='flex gap-4 ml-auto' >
        <li><Link to={"/gsap"} >Gsap</Link></li>
        <li><Link to={"/framer-motion"} >Framer Motion</Link></li>
      </ul> 
    </header>
  )
}

export default Header