import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

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
    </section>
  )
}

export default GsapTimer

