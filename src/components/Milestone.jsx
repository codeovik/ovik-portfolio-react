import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'odometer/themes/odometer-theme-default.css';
import Odometer from 'odometer';
gsap.registerPlugin(ScrollTrigger);

const Milestone = () => {
  const [stats, setStats] = useState([]);
  const staticRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/assets/data/milestone.json")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  useEffect(() => {
    if (stats.length === 0) return;

    const odometerStatic = new Odometer({
      el: staticRef.current,
      value: 0,
      format: '(,ddd)',
      duration: 2000
    });

    ScrollTrigger.create({
      trigger: staticRef.current,
      once: true,
      onEnter: () => {
        odometerStatic.update(25);
      }
    });

    const cards = sectionRef.current.querySelectorAll(".milestone-card");

    cards.forEach((card, i) => {
      const el = card.querySelector(".odometer");
      const cleanValue = stats[i].number.replace('+', '').replace(/\D/g, '');

      const odometer = new Odometer({
        el,
        value: 0,
        format: '(,ddd)',
        duration: 2000
      });

      ScrollTrigger.create({
        trigger: card,
        once: true,
        onEnter: () => {
          odometer.update(Number(cleanValue));
        }
      });
    });
  }, [stats]);

  return (
    <section
      id="skill"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-10 md:gap-20 lg:mt-150 mt-100 max-w-[1400px] px-20 md:px-40 mx-auto text-white stats-section"
      ref={sectionRef}
    >
      <h2 className="hidden">Milestone</h2>

      {/* Static Card */}
      <article className="transition-all flex flex-col border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 w-full col-span-2 row-span-2 grid-rows-2 md:rounded-3xl rounded-2xl lg:p-40 p-20 bg-lightbox text-black dark:text-white dark:bg-darkbox">
        <div className="flex gap-4 items-center">
          <h2
            ref={staticRef}
            className="md:text-[140px] whitespace-nowrap text-9xl font-bold leading-none tracking-widest odometer text-primary"
          >
            0
          </h2>
          <p className="lg:text-6xl md:text-5xl text-3xl font-semibold font-myfont">Years Of Experience</p>
        </div>
        <p className="text-sm md:text-lg lg:mt-8 mt-4 transition-all">
          Business consulting consultants provide expert advice and guide businesses to help improve their performance and efficiency.
        </p>
      </article>

      {/* Stat Cards */}
      {stats.map((e, i) => {
        const hasPlus = e.number.includes('+');
        return (
          <article
            key={i}
            className="milestone-card border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 dark:bg-darkbox transition-all bg-lightbox text-black flex items-center justify-center flex-col rounded-2xl md:rounded-3xl p-20 lg:p-20 dark:text-white"
          >
            <h1 className="md:text-5xl font-bold text-3xl">
              <span className="odometer">0</span>
              {hasPlus && (
                <span className="md:text-5xl pl-5 md:ml-0 font-normal transition-all lg:font-extrabold">
                  +
                </span>
              )}
            </h1>
            <p className="dark:text-white/80 md:text-lg text-black/80 mt-2 transition-all">
              {e.label}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Milestone;
