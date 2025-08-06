import React, { useState, useRef, useEffect } from 'react';
import Tilt from "react-parallax-tilt";
import hero from '/assets/images/hero.png';
import { Typewriter } from "react-simple-typewriter";
import Social from '../components/Social';
import Milestone from '../components/Milestone';
import Skill from '../components/Skill';
import EducationAndExprience from '../components/EducationAndExprience';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import ClientsReview from '../components/ClientsReview';
import Plan from '../components/Plan';
import Faq from '../components/Faq';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { SplitText } from 'gsap/all';
// gsap.registerPlugin(SplitText);

export default function Home() {
  // text animation
  // useGSAP(() => {
  //   document.fonts.ready.then(() => {
  //     const heroSplitH1 = new SplitText("header h1 span", { type: "words" });
  //     gsap.from(heroSplitH1.words, {
  //       opacity: 0,
  //       y: 100,
  //       ease: "back.out(1.7)",
  //       stagger: 0.4,
  //       duration: 1,
  //     });
  //   });
  // }, []);

  // cv pop up
  const [cvModal, setCvModal] = useState(false);
  useEffect(() => {
    if (cvModal) {
      document.body.classList.add("overflow-hidden");
    }
    else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  // youtube video pop up
  const [ytModal, setYtModal] = useState(false);
  useEffect(() => {
    if (ytModal) {
      document.body.classList.add("overflow-hidden");
    }
    else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  // first 4 portfolio json fetch
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch("/assets/data/portfolio.json")
      .then(res => res.json())
      .then(data => setPortfolio(data.slice(0, 4)));
  }, []);

  // first 4 blog json fetch
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("/assets/data/blog.json")
      .then(res => res.json())
      .then(data => setBlog(data.slice(0, 4)));
  }, []);

  // relative time
  function getRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
    if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  }

  // toast
  const [showToast, setShowToast] = useState(false);
  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <>
      <div className="h-70 md:h-90 lg:h-80"></div>
      <header className="max-w-[1400px] mx-auto px-20 md:px-40 lg:grid lg:grid-cols-[40%_60%]">
        <Tilt scale={1} className="w-9/10 aspect-3/4 mx-auto rounded-2xl">
          <img className='rounded-2xl object-cover' src={hero} alt="hero image" />
        </Tilt>
        <div className='flex flex-col justify-center'>
          <h1 className="lg:text-7xl md:text-7xl text-5xl mt-20 lg:mt-0 dark:text-white text-black font-medium ">
            <span className="">Hello, I am </span>
            <span className="font-semibold text-primary">Avik</span>
          </h1>
          <h2 className="lg:text-5xl md:text-5xl flex gap-7 text-3xl w-max font-medium dark:text-white text-black mt-20 lg:mt-10 ">
            <span>I'm a </span>
            <p className="text-primary">
              <Typewriter
                words={["Developer", "Youtuber", "Student", "Freelancer", "UX Desiner"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </h2>
          <p className="subtitle text-sm md:text-xl lg:text-lg dark:text-white/80 text-black/80 my-15">
            A passionate web developer with a knack for creating stunning and functional websites. I love to explore new technologies and push the boundaries of web development.
          </p>
          <div className="flex gap-10 buttonContainer">
            <button onClick={() => setYtModal(true)} className="btn-primary"><span></span><span>Watch Demo</span><span></span></button>
            <button onClick={() => setCvModal(true)} className="btn-secondary"><span></span><span>Get CV</span><span></span></button>
          </div>
          <p className="socialTitle text-sm font-bold md:text-xl lg:text-lg mt-15 dark:text-white">Follow me on:</p>
          <div className="social">
            <Social />
          </div>
        </div>
      </header>

      {/* cv pop up */}
      {cvModal && (
        <div onClick={() => setCvModal(false)} className='fixed inset-0 bg-white/60 dark:bg-black/50 backdrop-blur-3xl z-200 flex items-center justify-center'>
          <div onClick={(e) => e.stopPropagation()} className="lg:w-2/3 w-[calc(100%-40px)] p-10 md:p-20 bg-lightbox dark:bg-darkbox rounded-2xl md:rounded-3xl border-black/15 dark:border-white/15 border-2 md:border-3">
            <div className='flex justify-between items-center mb-15'>
              <h3 className="md:text-4xl text-2xl font-semibold dark:text-white">Get my cv</h3>
              <button onClick={() => setCvModal(false)} className='h-50 md:h-50 outline-2 md:outline-3 outline-black/15 dark:outline-white/15 hover:outline-primary/50 cursor-pointer aspect-square hover:scale-90 transition-all bg-black/10 dark:bg-white/10 flex hover:dark:bg-white/30 hover:bg-black/10 justify-center items-center rounded-full'>
                <svg className='md:scale-150 scale-150 fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
              </button>
            </div>
            <p className="dark:text-white">My CV is available for download in PDF format, or you can view the online version to get a quick yet comprehensive overview of my professional journey. It outlines my technical skills, work experience, education, and selected projects that demonstrate my expertise and passion for development. Whether you’re a recruiter looking for proven abilities or a collaborator exploring potential partnerships, this CV provides detailed insight into who I am as a developer. From frontend technologies like HTML, CSS, JavaScript, and React, to real-world projects and milestones, you’ll find a clear picture of my growth, dedication, and potential. Feel free to explore, download, or reach out for any queries.</p>
            <div className="flex flex-col md:flex-row mt-20 gap-20 justify-center">
              <a onClick={handleDownload} href="/assets/files/cv.pdf" download className="bg-primary md:px-30 flex rounded-full py-15 justify-center font-bold text-white">Download<svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg></a>
              <a href="/assets/files/cv.pdf" target="_blank" className="border-3 md:px-30 border-primary text-black dark:text-white flex rounded-full py-15 justify-center font-bold">View Live<svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg></a>
            </div>
          </div>
        </div>
      )}

      {/* toast */}
      {showToast && (
        <div className="fixed right-40 bottom-40 bg-black text-white w-500 p-20 rounded-2xl shadow z-[9999] border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 transition-all fade-in-out">
          <h3 className="text-xl mb-10 font-semibold">CV download started. Thank you!</h3>
          <p className="text-xs">You’re one step closer to discovering more about my technical skills, experience, and projects. I appreciate your interest — feel free to reach out if you have any questions after reviewing it.</p>
        </div>
      )}

      {/* youtube pop up modal */}
      {ytModal && (
        <div onClick={() => setYtModal(false)} className="fixed inset-0 bg-white/60 dark:bg-black/50 backdrop-blur-3xl z-200 flex items-center justify-center">
          <div onClick={(e) => e.stopPropagation()} className="lg:w-2/3 w-[calc(100%-40px)] aspect-video p-10 md:p-20 bg-lightbox dark:bg-darkbox rounded-2xl md:rounded-3xl border-black/15 dark:border-white/15 border-2 md:border-3">
            <div className='flex justify-between items-center my-15'>
              <h3 className="md:text-4xl text-2xl font-semibold dark:text-white">My Intro</h3>
              <button onClick={() => setYtModal(false)} className='h-50 md:h-50 outline-2 md:outline-3 outline-black/15 dark:outline-white/15 hover:outline-primary/50 cursor-pointer aspect-square hover:scale-90 transition-all bg-black/10 dark:bg-white/10 flex hover:dark:bg-white/30 hover:bg-black/10 justify-center items-center rounded-full'>
                <svg className='md:scale-150 scale-150 fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
              </button>
            </div>
            <iframe className='aspect-video w-full rounded-2xl md:rounded-3xl' src="https://www.youtube.com/embed/H-rJIyfLtHg?si=Npq0PGO85PJXMnZm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      )}

      <Milestone />
      <Skill />
      <EducationAndExprience />

      {/* 4 Portfolio */}
      <section className="max-w-[1400px] mx-auto px-20 md:px-40 lg:mt-150 mt-100 lg:px-40 text-black dark:text-white">
        <h2 className="text-center font-medium lg:text-7xl md:text-6xl text-5xl mb-10">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {portfolio.map((e, index) => (
            <Link
              to={`/portfolio/${e.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="lg:p-20 p-10 rounded-2xl group md:rounded-3xl bg-lightbox dark:bg-darkbox border-2 md:border-3 border-white/5 cursor-pointer hover:border-primary/50 transition-all"
            >
              <div className="overflow-hidden md:rounded-3xl rounded-2xl aspect-4/3">
                <img
                  loading="lazy"
                  src={e.imageLink}
                  alt={e.title}
                  className="mb-4 w-full aspect-4/3 object-cover group-hover:scale-105 transition-all"
                />
              </div>
              <h2 className="lg:text-2xl text-xl my-10 font-semibold group-hover:text-primary transition">{e.title}</h2>
              <div className="flex justify-between">
                <p className="text-lg text-black/70 dark:text-white/70 mt-5">{e.category}</p>
                <p className="text-lg text-black/70 dark:text-white/70 mt-5">{getRelativeTime(e.details.date)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/portfolio" className="btn-secondary"><span></span><span>View All Projects</span><span></span></Link>
        </div>
      </section>
      
      <Contact />
      <div className='flex justify-center'><Link to='/contact' className='btn-secondary mt-10'><span></span><span>More ways to contact</span><span></span></Link></div>
      <ClientsReview />
      <Plan />

      {/* blog */}
      <section className="max-w-[1400px] mx-auto px-20 md:px-40 lg:mt-150 mt-100 lg:px-40 text-black dark:text-white">
        <h2 className="text-center font-medium lg:text-7xl md:text-6xl text-5xl mb-10">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {blog.map((e, index) => (
            <Link
              to={`/blog/${e.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="lg:p-20 p-10 rounded-2xl group md:rounded-3xl bg-lightbox dark:bg-darkbox border-2 md:border-3 border-white/5 cursor-pointer hover:border-primary/50 transition-all"
            >
              <div className="overflow-hidden md:rounded-2xl rounded-lg aspect-4/3">
                <img
                  loading="lazy"
                  src={e.imageLink}
                  alt={e.title}
                  className="mb-4 w-full aspect-4/3 object-cover group-hover:scale-105 transition-all"
                />
              </div>
              <h2 className="lg:text-2xl text-xl my-10 font-semibold group-hover:text-primary transition">{e.title}</h2>
              <div className="flex justify-between">
                <p className="text-lg text-black/70 dark:text-white/70 mt-5">{e.category}</p>
                <p className="text-lg text-black/70 dark:text-white/70 mt-5">{getRelativeTime(e.details.date)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/blog" className="btn-secondary"><span></span><span className="font-bold">View All Blogs</span><span></span></Link>
        </div>
      </section>

      <Faq />
    </>
  );
}