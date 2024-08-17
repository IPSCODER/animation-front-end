import React from 'react'
import GsapTimer from './timer/GsapTimer'
import Scrollgsap from './scroll/Scrollgsap'
import GsapClick from './onclick/GsapClick'

const GsapAnimation = () => {
  return (
    <span className='w-full flex flex-col gap-2 h-full'>
    <GsapTimer/>
    <Scrollgsap/>
    <GsapClick/>
    </span>
  )
}

export default GsapAnimation