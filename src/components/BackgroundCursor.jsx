import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../index.css'

const BgCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Set up the rotation animation
    gsap.to(cursorRef.current, {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });

    // Mouse move handler
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 200,
        y: e.clientY - 200,
        duration: 2,
        ease: "power2.out"
      });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cursorRef} className="bgCursor h-500 aspect-square -z-1 blur-[90px] rounded-[30%] top-0 left-0 fixed pointer-events-none dark:bg-primary/30 bg-primary/50" />
  );
};

export default BgCursor;