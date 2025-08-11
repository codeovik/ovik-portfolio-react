import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Contact from '../components/Contact'

const PortfolioDetails = () => {
  const { id } = useParams();

  // all portfolio fetch
  const [portfolio, setPortfolio] = useState(null);
  useEffect(() => {
    fetch("/assets/data/portfolio.json")
      .then(res => res.json())
      .then(data => {
        const slug = id;
        const found = data.find(e => 
          e.title.toLowerCase().replace(/\s+/g, '-') === slug
        );
        setPortfolio(found);
      });
  }, [id]);

  // last 4 portfolio json fetch
  const [recentPortfolio, setRecentPortfolio] = useState([]);
  useEffect(() => {
    fetch("/assets/data/portfolio.json")
      .then(res => res.json())
      .then(data => setRecentPortfolio(data.slice(-4)));
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
  if (!portfolio) return (
    <div className="h-dvh flex items-center justify-center flex-col">
      <svg className="animate-spin scale-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>
      <h2 className='md:text-4xl text-2xl font-medium mt-50 dark:text-white'>Loading. Please wait.</h2>
    </div>
  );

  return (
    <>
      <header className='overflow-hidden h-400 relative top-0 flex items-center justify-center px-20 md:px-40 flex-col gap-20'>
        <h1 className='text-4xl md:text-8xl font-bold dark:text-white'>Portfolio Details</h1>
        <p className="dark:text-white md:text-xl text-xs font-bold flex gap-5 items-center">
          <Link to='/' className='flex items-center flex-row fill-primary gap-2'>
            Home
          </Link>
          <svg className='scale-60 fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
          <Link to='/portfolio'>portfolio</Link>
          <svg className='scale-60 fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
          <Link to='' className='text-primary'>{portfolio.title}</Link>
        </p>
        <div className="h-600 aspect-1/1 rounded-full bg-green-300 dark:bg-green-950 absolute bottom-0 opacity-50 blur-[200px] -z-1"></div>
        <div className="h-600 aspect-1/1 rounded-full bg-violet-300 dark:bg-yellow-950 absolute bottom-0 opacity-50 right-0 blur-[200px] -z-1"></div>
      </header>
      <div className="h-70 md-h-90 lg:h-80"></div>
      <section className="max-w-[1400px] mx-auto px-20 md:px-40 text-black dark:text-white">

        <img
          loading="lazy"
          src={portfolio.imageLink}
          alt={portfolio.title}
          className="mb-30 w-full lg:aspect-4/2 aspect-4/3 rounded-2xl md:rounded-3xl object-cover"
        />

        <div className="grid gap-30 lg:grid-cols-[1fr_400px]">
          <div>
              <div className="flex flex-col gap-40 rounded-2xl md:rounded-3xl bg-darkbox p-20">
                <h1 className="text-2xl md:text-4xl font-semibold">{portfolio.title}</h1>
                <div
                  className="text-base space-y-5"
                  dangerouslySetInnerHTML={{ __html: portfolio.description }}
                ></div>
                <iframe
                  className="w-full aspect-video mb-10 rounded-xl"
                  src={portfolio.videoLink}
                  title={portfolio.title}
                  allowFullScreen
                ></iframe>
            </div>
          </div>

          <div className="flex flex-col gap-30">

            <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-30">
              {/* portfolio details */}
              <div className="bg-lightbox dark:bg-darkbox p-20 rounded-2xl md:rounded-3xl">
                <h3 className="text-3xl font-medium mb-10">Details:</h3>
                <div className="grid gap-y-15">
                  {Object.entries(portfolio.details).map(([key, value]) => (
                    <div key={key} className="flex gap-x-10">
                      <span className="capitalize font-semibold whitespace-nowrap">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="break-words break-all min-w-0">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* portfolio tags */}
              {portfolio.tags && Array.isArray(portfolio.tags) && portfolio.tags.length > 0 && (
                <div className="bg-lightbox dark:bg-darkbox p-20 rounded-2xl md:rounded-3xl">
                  <h3 className="text-3xl font-medium mb-10">Tags:</h3>
                  <div className="flex gap-10 flex-wrap">
                    {portfolio.tags.map((tag, index) => (
                    <span key={index} className="text-base px-20 py-10 bg-primary/10 hover:bg-primary hover:text-white transition-all dark:bg-black rounded-full text-primary dark:text-white">{tag}</span>
                  ))}
                  </div>
                </div>
              )}
            </div>

            {/* recent */}
            <div className="bg-lightbox dark:bg-darkbox p-20 rounded-2xl">
              <h3 className="text-3xl font-medium mb-10">Recent Portfolios:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-10">
                {recentPortfolio.map((e, index) => (
                  <Link
                    to={`/portfolio/${e.title.toLowerCase().replace(/\s+/g, '-')}`}
                    key={index}
                    className="grid grid-cols-[30%_70%] gap-10 p-10 border-2 border-white/10 hover:border-primary/50 transition-all rounded-xl"
                  >
                    <img
                      loading="lazy"
                      src={e.imageLink}
                      alt={e.title}
                      className="w-full aspect-3/3 rounded-xl object-cover"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-sm md:text-base font-semibold group-hover:text-primary">{e.title}</p>
                      <div className="flex justify-between w-full pr-10">
                        <p className="text-xs text-black/70 dark:text-white/70 mt-5">{e.category}</p>
                        <p className="text-xs text-black/70 dark:text-white/70 mt-5">{getRelativeTime(e.details.date)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default PortfolioDetails;
