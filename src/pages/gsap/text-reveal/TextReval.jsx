import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function TextReveal() {
    const [lettersRef, setLettersRef] = useArrayRef();
    const triggerRef = useRef(null);

    function useArrayRef() {
        const refs = useRef([]);
        refs.current = [];
        return [refs, (ref) => ref && refs.current.push(ref)];
    }

    const text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.";

    useEffect(() => {
        const anim = gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top center",
                    end: "bottom 85%",
                },
                color: "#2A2A2A",
                duration: 5,
                stagger: 0.1, // Adjust the stagger to your preference
            }
        );

        return () => {
            anim.kill();
        };
    }, [lettersRef]);

    return (
        <div className="flex flex-col items-center bg-background">
            <div className="h-[50vh]"></div> {/* Spacing-small */}
            <div className="relative overflow-hidden pt-[30%] pr-[10%] bg-background">
                <div ref={triggerRef}>
                    {text.split("").map((letter, index) => (
                        <span
                            className="inline-block font-extrabold text-headlineBig text-background drop-shadow-custom"
                            key={index}
                            ref={setLettersRef}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
            <div className="h-[100vh]"></div> {/* Spacing */}
        </div>
    );
}

export default TextReveal;
