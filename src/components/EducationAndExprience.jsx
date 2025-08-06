import { useEffect, useState } from "react";

const EduExpSection = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    // fetch from JSON files
    fetch("/assets/data/education.json")
      .then(res => res.json())
      .then(data => setEducation(data));

    fetch("/assets/data/experience.json")
      .then(res => res.json())
      .then(data => setExperience(data));
  }, []);

  return (
    <section className="lg:mt-150 mt-100 text-black font-myfont dark:text-white max-w-[1400px] mx-auto grid md:grid-cols-[1fr_2px_1fr] lg:grid-cols-[1fr_3px_1fr] gap-40 md:gap-20 lg:gap-40 px-20 md:px-40 lg:px-40">
      
      {/* Education Section */}
      <div className="flex flex-col gap-10 lg:gap-20 transition-all" id="education-container">
        <h2 className="font-medium lg:text-7xl md:text-6xl text-5xl">Education</h2>
        {education.map((edu, i) => (
          <div
            key={i}
            className="bg-lightbox border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 dark:bg-darkbox rounded-2xl md:rounded-3xl p-20 lg:p-40 transition-all"
          >
            <h2 className="lg:text-3xl text-xl font-extrabold transition-all">{edu.degree}</h2>
            <div className="flex justify-between mb-10 opacity-70 lg:mb-15 font-medium text-white/80">
              <p className="lg:text-2xl text-lg transition-all text-black dark:text-white">{edu.institution}</p>
              <p className="border-2 md:px-10 px-5 h-max rounded-full lg:text-lg text-xs transition-all text-black dark:text-white">{edu.year}</p>
            </div>
            <p className="text-xs lg:text-sm transition-all">{edu.description}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="dark:bg-white/15 bg-black/15 transition-all rounded-full hidden md:block"></div>

      {/* Experience Section */}
      <div className="flex flex-col gap-10 lg:gap-20 transition-all" id="exprience-container">
        <h2 className="font-medium lg:text-7xl md:text-6xl text-5xl">Experience</h2>
        {experience.map((exp, i) => (
          <div
            key={i}
            className="bg-lightbox border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 dark:bg-darkbox rounded-2xl md:rounded-3xl p-20 lg:p-40 transition-all"
          >
            <h2 className="lg:text-3xl text-xl font-extrabold transition-all">{exp.position}</h2>
            <div className="flex justify-between font-medium mb-10 opacity-70 lg:mb-15 text-white/80 text-xl">
              <p className="lg:text-2xl text-lg transition-all text-black dark:text-white">{exp.company}</p>
              <p className="border-2 md:px-10 px-5 h-max rounded-full lg:text-lg text-xs transition-all text-black dark:text-white">{exp.year}</p>
            </div>
            <p className="text-xs lg:text-sm transition-all">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EduExpSection;
