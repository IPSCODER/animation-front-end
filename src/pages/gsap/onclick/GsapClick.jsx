import gsap from 'gsap';
import React from 'react'

const GsapClick = () => {

    const handleClick = () => {
        let timeline = gsap.timeline();
          timeline.to(".flower_svg", {
            rotate: 45,
          });
      };

  return (
    <section className='w-full h-full flex flex-col gap-2 bg-blue-400/50 p-2 rounded-md shadow-md' >
        <h1 className='text-2xl font-bold' >Gsap Animation (onClick)</h1>

        <span className='w-12 h-12'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="flower_svg">
        <g transform="translate(55.5 193.5)">
          <path fill="#A65EC1" d="M-25.5-148.5v-15h-15c-8.3,0-15,6.7-15,15l0,0v15h15C-32.2-133.5-25.5-140.2-25.5-148.5L-25.5-148.5z"/>
          <path fill="#E3A6F1" d="M-10.5-163.5h-15v15c0,8.3,6.7,15,15,15h15v-15C4.5-156.8-2.2-163.5-10.5-163.5L-10.5-163.5z"/>
          <path fill="#A65EC1" d="M-10.5-193.5h15v15c0,8.3-6.7,15-15,15l0,0h-15v-15C-25.5-186.8-18.8-193.5-10.5-193.5L-10.5-193.5z"/>
          <path fill="#B7C6FD" d="M-40.5-193.5h-15v15c0,8.3,6.7,15,15,15l0,0h15v-15C-25.5-186.8-32.2-193.5-40.5-193.5L-40.5-193.5z"/>
        </g>
      </svg>
    </span>
      <button onClick={() => handleClick()}>Rotate</button>
    </section>
  )
}

export default GsapClick