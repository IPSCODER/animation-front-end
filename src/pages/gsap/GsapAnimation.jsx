import React from 'react'
import GsapTimer from './timer/GsapTimer'
import GsapScroll from './scroll/GsapScroll'
import GsapClick from './onclick/GsapClick'
import GsapHover from './hover/GsapHover'
import TextReveal from './text-reveal/TextReval'

const GsapAnimation = () => {
  return (
    <>
    <span className='w-full flex flex-col gap-2 h-full'>
    <GsapTimer/>
    <GsapClick/>
    <GsapHover/>
    <GsapScroll/>
    <TextReveal/>
    </span>
    </>
  )
}

export default GsapAnimation