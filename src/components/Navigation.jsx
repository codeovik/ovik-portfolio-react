import { useState, useEffect } from "react";
import DarkLogo from "/assets/images/logo-dark.png";
import LightLogo from "/assets/images/logo-light.png";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full top-0 left-0 lg:h-80 md:h-90 h-70 flex items-center justify-between z-100 lg:px-60 px-30 transition-all duration-300 ${
          isScrolled
            ? "bg-white/30 dark:bg-black/60 backdrop-blur-3xl shadow-md fixed"
            : "bg-opacity-100 absolute"
        }`}
      >
        <Link to="/">
          <img
            src={LightLogo}
            alt="logo"
            className="lg:h-40 h-30 dark:hidden hover:sepia transition-all cursor-pointer"
          />
          <img
            src={DarkLogo}
            alt="logo"
            className="lg:h-40 h-30 hidden dark:block hover:sepia transition-all cursor-pointer"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="lg:flex gap-10 md:gap-15 hidden">
          <li>
            <NavLink
              className="dark:text-white font-bold after:content-[''] after:w-0 hover:after:w-full after:transition-all after:rounded-full after:left-0 after:h-2 after:absolute relative after:bottom-0 after:bg-primary"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="dark:text-white font-bold after:content-[''] after:w-0 hover:after:w-full after:transition-all after:rounded-full after:left-0 after:h-2 after:absolute relative after:bottom-0 after:bg-primary"
              to="/about"
            >
              About me
            </NavLink>
          </li>
          <li>
            <NavLink
              className="dark:text-white font-bold after:content-[''] after:w-0 hover:after:w-full after:transition-all after:rounded-full after:left-0 after:h-2 after:absolute relative after:bottom-0 after:bg-primary"
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className="dark:text-white font-bold after:content-[''] after:w-0 hover:after:w-full after:transition-all after:rounded-full after:left-0 after:h-2 after:absolute relative after:bottom-0 after:bg-primary"
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className="dark:text-white font-bold after:content-[''] after:w-0 hover:after:w-full after:transition-all after:rounded-full after:left-0 after:h-2 after:absolute relative after:bottom-0 after:bg-primary"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Theme toggle & mobile menu button */}
        <div className="flex gap-15">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="h-50 border-2 border-black/5 dark:border-white/5 hover:border-primary/50 cursor-pointer aspect-square hover:scale-90 transition-all bg-black/10 dark:bg-white/10 flex hover:dark:bg-white/30 hover:bg-black/10 justify-center items-center rounded-full"
          >
            {darkMode ? (
              <svg class='scale-130' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
            )}
          </button>

          <button
            onClick={() => setOpen(true)}
            className="h-50 border-2 border-black/5 dark:border-white/5 hover:border-primary/50 cursor-pointer aspect-square hover:scale-90 transition-all bg-black/10 dark:bg-white/10 flex hover:dark:bg-white/30 hover:bg-black/10 justify-center items-center rounded-full lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="dark:fill-white h-25"
            >
              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer + Overlay */}
      <div
        className={`fixed inset-0 z-100 flex transition-all duration-300 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay - full screen but fixed behind the drawer */}
        <div
          className={`fixed inset-0 w-full h-full transition-all duration-300 ${
            open ? "opacity-100 pointer-events-auto bg-black/40 backdrop-blur-md" : "opacity-0 pointer-events-none"
          } z-100`}
          onClick={() => setOpen(false)}
        ></div>

        {/* Drawer - fixed 2/3 on right, on top of overlay */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white/80 dark:bg-black/80 shadow-lg px-20 py-40 transition-transform duration-500 z-[1000] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-between">
            <div></div>
            <button
              onClick={() => setOpen(false)}
              className="h-60 md:h-90 border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 cursor-pointer aspect-square hover:scale-90 transition-all bg-black/10 dark:bg-white/10 flex hover:dark:bg-white/30 hover:bg-black/10 justify-center items-center rounded-full"
            >
              <svg className='md:scale-230 scale-150 fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
          </div>

          {/* Drawer content */}
          <ul className="md:space-y-40 space-y-20 mt-10 text-lg dark:text-white">
            <li><NavLink to="/" className="text-3xl md:text-7xl font-semibold" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className="text-3xl md:text-7xl font-semibold" onClick={() => setOpen(false)}>About me</NavLink></li>
            <li><NavLink to="/blog" className="text-3xl md:text-7xl font-semibold" onClick={() => setOpen(false)}>Blog</NavLink></li>
            <li><NavLink to="/portfolio" className="text-3xl md:text-7xl font-semibold" onClick={() => setOpen(false)}>Portfolio</NavLink></li>
            <li><NavLink to="/contact" className="text-3xl md:text-7xl font-semibold" onClick={() => setOpen(false)}>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
}
