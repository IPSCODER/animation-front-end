import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css';

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  useEffect(() => {
    const setScrollText = () => {
      gsap.to('#heading1', {
        scrollTrigger: {
          trigger: '#heading1',
          toggleActions: 'play reverse play reverse',
          start: 'top center',
          end: '+=1000',
        },
        opacity: 1,
      });

      gsap.to('#heading2', {
        scrollTrigger: {
          trigger: '#heading2',
          toggleActions: 'play reverse play reverse',
          start: 'top center+=1000',
          end: '+=1000',
        },
        opacity: 1,
      });

      gsap.to('#heading3', {
        scrollTrigger: {
          trigger: '#heading3',
          toggleActions: 'play reverse play reverse',
          start: 'top center+=2000',
          end: '+=1000',
        },
        opacity: 1,
      });

      gsap.to('#heading4', {
        scrollTrigger: {
          trigger: '#heading4',
          toggleActions: 'play reverse play reverse',
          start: 'top center+=3000',
          end: '+=1000',
        },
        opacity: 1,
      });

      gsap.to('#heading5', {
        scrollTrigger: {
          trigger: '#heading5',
          toggleActions: 'play reverse play reverse',
          start: 'top center+=4000',
          end: '+=1000',
        },
        opacity: 1,
      });
    };

    const setScrollImages = () => {
      gsap.from('#img1', {
        scrollTrigger: {
          trigger: '#img1',
          toggleActions: 'play reverse play reverse',
          start: 'top center',
          end: '+=1000',
        },
        opacity: 0,
      });

      gsap.to('#img2', {
        scrollTrigger: {
          trigger: '#img2',
          toggleActions: 'play reverse play reverse',
          start: 'top center+=1000',
          end: '+=1000',
          pin:true
        },
        opacity: 1,
      });

      gsap.to('#img3', {
        scrollTrigger: {
          trigger: '#img3',
          toggleActions: 'play reverse play reverse',
          start: 'top center+=2000',
          end: '+=1000',
        },
        opacity: 1,
      });

      gsap.to('#img4', {
        scrollTrigger: {
          trigger: '#img4',
          toggleActions: 'play reverse play reverse',
          start: 'top center+=3000',
          end: '+=1000',
        },
        opacity: 1,
      });

      gsap.to('#img5', {
        scrollTrigger: {
          trigger: '#img5',
          toggleActions: 'play reverse play reverse',
          start: 'top center+=4000',
          end: '+=1000',
        },
        opacity: 1,
      });
    };

    gsap.to('.head', {
      scrollTrigger: {
        pin: '.head',
        pinSpacing: true,
        start: 'top top',
        end: '+=5000',
        onUpdate: (self) => {
          // Adjust pinning behavior based on scroll position
          if (self.isActive) {
            gsap.set('.head', { clearProps: 'all' }); // Ensures that the pinning is disabled when animation is active
          }
        },
      },
    });

    setScrollText();
    setScrollImages();
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="min-h-screen bg-gray-800 flex justify-around items-center text-5xl">
        <h1>🤕 Header Content</h1>
      </div>

      <div className="flex flex-row h-screen justify-around items-start pt-16">
        <div className="relative flex items-center justify-start h-80 w-1/2 text-3xl pl-20">
          <h2 className="opacity-0 absolute top-8" id="heading1">This is our <br />Idea Stack</h2>
          <h2 className="opacity-0 absolute top-8" id="heading2">AWS, Azure, <br />Google Cloud</h2>
          <h2 className="opacity-0 absolute top-8" id="heading3">APIs Fully Secure <br />on Intranet</h2>
          <h2 className="opacity-0 absolute top-8" id="heading4">Event Based <br />Surveillance</h2>
          <h2 className="opacity-0 absolute top-8" id="heading5">Better UI/UX <br />for Users</h2>
        </div>
        <div className="relative flex flex-col items-center justify-center w-1/2">
          <img id="img1" src="https://www.hashicorp.com/img/home/stack.png" alt="stack" className="w-1/3 opacity-0 absolute top-20" />
          <img id="img2" src="https://www.hashicorp.com/img/home/stack-terraform.png" alt="stack" className="w-1/3 opacity-0 absolute top-20" />
          <img id="img3" src="https://www.hashicorp.com/img/home/stack-vault.png" alt="stack" className="w-1/3 opacity-0 absolute top-20" />
          <img id="img4" src="https://www.hashicorp.com/img/home/stack-consul.png" alt="stack" className="w-1/3 opacity-0 absolute top-20" />
          <img id="img5" src="https://www.hashicorp.com/img/home/stack-nomad.png" alt="stack" className="w-1/3 opacity-0 absolute top-20" />
        </div>
      </div>

      <div className="min-h-screen bg-gray-800 flex justify-around items-center text-2xl">
        <h1>Footer Content🦶</h1>
      </div>
    </div>
  );
};

export default MainPage;
