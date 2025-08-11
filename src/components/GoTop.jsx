import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function GoTopButton() {
  const [scrollProgressHeight, setScrollProgressHeight] = useState("0%");
  const [visible, setVisible] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Lenis ইনিশিয়ালাইজ করা
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => t * (2 - t), // easeOutQuad
      smooth: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Scroll ইভেন্ট হ্যান্ডলার (Lenis এর scrollY থেকে পড়ব)
    function handleScroll() {
      const scrollTop = lenisRef.current.scroll;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgressHeight(`${scrolled}%`);

      if (scrollTop > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    lenisRef.current.on("scroll", handleScroll);

    return () => {
      lenisRef.current.destroy();
      lenisRef.current = null;
    };
  }, []);

  function scrollToTop() {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2, easing: (t) => t * (2 - t) });
    }
  }

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Go to top"
      className={`singlePageLink fixed z-9 cursor-pointer hover:scale-90 transition-all flex items-end bg-white/50 dark:bg-black/50 h-60 aspect-square bottom-40 right-40 rounded-full overflow-hidden gotop
      ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <span
        id="scrollProgress"
        className="bg-primary w-full"
        style={{ height: scrollProgressHeight }}
      ></span>
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-black dark:fill-white transition-all"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        width="24px"
        viewBox="0 -960 960 960"
      >
        <path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z" />
      </svg>
    </button>
  );
}