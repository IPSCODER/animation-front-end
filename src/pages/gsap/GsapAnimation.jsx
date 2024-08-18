import React from 'react'
import GsapTimer from './timer/GsapTimer'
import GsapScroll from './scroll/GsapScroll'
import TextReveal from './text-reveal/TextReval'
import ScrollAnimation from './scroll/ScrollAnimation'

const GsapAnimation = () => {
  return (
    <>
    <GsapTimer/>
    <GsapScroll/>
    <TextReveal/>
    <ScrollAnimation/>
    </>
  )
}

export default GsapAnimation