import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    const moveFollower = (e) => {
      gsap.to(follower, {
        duration: 0.3,
        x: e.clientX - follower.clientWidth / 2,
        y: e.clientY - follower.clientHeight / 2,
        opacity: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveFollower);

    return () => {
      window.removeEventListener("mousemove", moveFollower);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.5)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(0,0)",
          opacity: 0,
        }}
      />
    </>
  );
};

export default CursorFollower;