import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const SkillSection = () => {
  const [skills, setSkills] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("/assets/data/skill.json")
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);

  useEffect(() => {
    if (skills.length === 0) return;

    const bars = containerRef.current.querySelectorAll(".skill-bar-inner");

    bars.forEach((bar, i) => {
      const percent = skills[i].percent;
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${percent}%`,
          duration: 5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, [skills]);

  return (
    <section className="lg:mt-150 mt-100 text-black dark:text-white max-w-[1400px] mx-auto md:px-40 px-20 lg:px-40">
      <h2 className="text-center font-semibold lg:text-7xl md:text-6xl text-4xl skillTitle">
        What I’m Good At?
      </h2>

      <div
        className="grid md:grid-cols-2 gap-[30px] lg:gap-[50px] my-[30px] skill-container transition-all"
        ref={containerRef}
      >
        {skills.map((skill, i) => (
          <div className="w-full" key={i}>
            <div className="w-full bg-lightbox dark:bg-darkbox transition-all rounded-full p-3">
              <div className="skill-bar-inner block lg:h-8 h-5 bg-primary rounded-full relative w-0">
                <div className="absolute flex justify-between w-full bottom-5 lg:bottom-8 px-4">
                  <p className="lg:text-xl text-sm font-myfont transition-all">{skill.name}</p>
                  <p className="lg:text-xl text-sm font-myfont transition-all">{skill.percent}%</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;