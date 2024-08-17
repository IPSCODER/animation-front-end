import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import "./timer.css"

const GsapTimer = () => {

    const container = useRef();
    const circle = useRef();

    
  
    useGSAP(() => {
        // use selectors...
        gsap.to(".box", { rotation: "+=360", duration: 3 });
  
        // or refs...
        gsap.to(circle.current, { rotation: "-=360", duration: 3 });
      },
      { scope: container }
    ); 

    // for second animation

    const Box = ({ children, className, anim }) => {
      return (
        <div className={"box " + className} data-animate={anim}>
          {children}
        </div>
      );
    };

    const container2= useRef();

    useGSAP(() => {
      // Target the two specific elements we have asigned the animate class
      gsap.to("[data-animate='rotate']", {
        rotation: 360,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });
  
      gsap.to("[data-animate='move']", {
        x: 50,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });
  
     }, {scope: container2}); 
  return (
    <section className='w-full h-full flex flex-col gap-2 bg-blue-400/50 p-2 rounded-md shadow-md' >
        <h1 className='text-2xl font-bold' >Gsap Animation (Timer)</h1>

        <div className="App">
        <div ref={container} className="container">
          <div className="box gradient-blue">selector</div>
          <div className="circle gradient-green" ref={circle}>
            Ref
          </div>
        </div>
        <div className="box gradient-blue">selector</div>
      </div>

      <div className="app" ref={container2}>
      <Box anim="rotate" className="bg-red-950">Box</Box>
      <Box className="dont-animate bg-green-600">Don't Animate</Box>
      <Box anim="move" className="bg-blue-700">Box</Box>
    </div>
    </section>
  )
}

export default GsapTimer

