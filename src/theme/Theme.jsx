import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'

const Theme = () => {
  return (
    <>
   <Header/>
   <main className='w-full h-[calc(100vh_-_56px)] px-5 py-2 ' >
   <Outlet/> 
    </main> 
    </>
  )
}

export default Theme