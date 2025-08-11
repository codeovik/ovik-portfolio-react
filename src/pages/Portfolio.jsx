import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const PortfolioPage = () => {

  // fetch all portfolio
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch("/assets/data/portfolio.json")
      .then(res => res.json())
      .then(data => setPortfolio(data));
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

  // loading portfolio
  // if (!portfolio) return (
  //   <div className="h-dvh flex items-center justify-center flex-col">
  //     <svg className="animate-spin scale-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>
  //     <h2 className='text-4xl font-medium mt-50 dark:text-white'>Loading. Please wait.</h2>
  //   </div>
  // );

  return (
    <>
      <header className='overflow-hidden h-400 relative top-0 flex items-center justify-center flex-col gap-10'>
        <h1 className='text-6xl md:text-8xl font-bold dark:text-white'>My Portfolio</h1>
        <p className="dark:text-white text-xl font-bold flex gap-5 items-center">
            <Link to='/' className='flex items-center flex-row fill-primary gap-2'>
              Home
            </Link>
            <svg className='scale-60 fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
            <Link to='' className='text-primary'>Portfolio</Link>
        </p>
        <div className="h-600 aspect-1/1 rounded-full bg-green-300 dark:bg-green-950 absolute bottom-0 opacity-50 blur-[200px] -z-1"></div>
        <div className="h-600 aspect-1/1 rounded-full bg-violet-300 dark:bg-yellow-950 absolute bottom-0 opacity-50 right-0 blur-[200px] -z-1"></div>
      </header>
      <div className="h-70 md-h-90 lg:h-80"></div>
      <section className="max-w-[1400px] mx-auto px-20 mt-20 lg:px-40 text-black dark:text-white">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {portfolio.map((e, index) => (
            <Link
              to={`/portfolio/${e.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="lg:p-20 p-10 rounded-lg group lg:rounded-2xl bg-lightbox dark:bg-darkbox border-2 lg:border-3 border-white/5 cursor-pointer hover:border-primary/50 transition-all"
            >
              <div className="overflow-hidden md:rounded-2xl rounded-lg aspect-4/3">
                <img
                  loading="lazy"
                  src={e.imageLink}
                  alt={e.title}
                  className="mb-4 w-full aspect-4/3 object-cover group-hover:scale-105 transition-all"
                />
              </div>
              <h2 className="text-xl lg:text-2xl my-10 font-semibold group-hover:text-primary transition">{e.title}</h2>
              <div className="flex justify-between">
                <p className="text-lg text-black/70 dark:text-white/70 mt-5">{e.category}</p>
                <p className="text-lg text-black/70 dark:text-white/70 mt-5">{getRelativeTime(e.details.date)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </>
  );
};

export default PortfolioPage;