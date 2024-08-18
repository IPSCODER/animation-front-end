import React, { useRef } from 'react';
import { gsap } from 'gsap';

const GsapHover = () => {
  const linkRef = useRef(null);
  const pinkRef = useRef(null);

  React.useEffect(() => {
    const link = linkRef.current;
    const pink = pinkRef.current;

    const hoverTL = gsap.timeline({ paused: true });

    hoverTL.to(pink, {
      width: "calc(100% + 1.3em)",
      ease: "elastic.out(0.25)",
      duration: 0.4
    });
    hoverTL.to(pink, {
      width: "2em",
      left: "calc(100% - 1.45em)",
      ease: "elastic.out(0.4)",
      duration: 0.6
    });

    link.addEventListener("mouseenter", () => {
      hoverTL.play();
    });

    link.addEventListener("mouseleave", () => {
      hoverTL.reverse();
    });

    return () => {
      link.removeEventListener("mouseenter", () => {
        hoverTL.play();
      });
      link.removeEventListener("mouseleave", () => {
        hoverTL.reverse();
      });
    };
  }, []);

  return (
    <section className='w-full h-full flex flex-col gap-2 bg-blue-400/50 p-2 rounded-md shadow-md' >
        <h1 className='text-2xl font-bold' >Gsap Animation (Hover)</h1>
    <div className="bg-black w-full h-screen px-5 flex items-center justify-center">
      <a
        ref={linkRef}
        className="relative text-white text-2xl font-bold no-underline flex items-center"
        href="https://www.twitter.com/kvncnls"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          ref={pinkRef}
          className="absolute w-8 h-8 bg-pink-500 rounded-full transform -translate-y-1/2 left-[-0.65em]"
        ></div>
        <span className="relative">SEE PORTFOLIO</span>
        <i className="relative ml-2 fa-solid fa-arrow-right"></i>
      </a>
    </div>
        </section>
  );
};

export default GsapHover;
