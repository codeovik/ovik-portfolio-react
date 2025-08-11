import { Link } from 'react-router-dom';
import Social from '../components/Social';
import DarkLogo from "/assets/images/logo-dark.png";
import LightLogo from "/assets/images/logo-light.png";

const Footer = () => {
  return (
    <footer className="lg:mt-150 mt-100 text-black font-myfont dark:text-white bg-lightbox dark:bg-darkbox transition-all">
      <div className="max-w-[1400px] mx-auto py-40 px-20 md:px-40">
        <div className="flex gap-20 lg:gap-0 justify-center flex-col lg:flex-row lg:justify-between items-center">
          <img src={LightLogo} alt="logo" className="lg:h-40 md:h-30 h-20 dark:hidden hover:sepia transition-all cursor-pointer logo" />
          <img src={DarkLogo} alt="logo" className="lg:h-40 md:h-30 h-20 hidden dark:block hover:sepia transition-all cursor-pointer logo" />
          <Social />
        </div>
        <div className="lg:h-2 h-1 bg-white/15 w-full rounded-full my-20"></div>
        <div className="grid lg:grid-cols-2 gap-40">
          <div className=''>

            {/* email, adress and location */}
            <h2 className="font-bold text-3xl text-center md:text-left lg:text-5xl">Contact</h2>
            <ul className="lg:mt-20 mt-5 flex flex-col gap-20">
              <li className="flex items-center gap-5 text-base md:text-xl">
                <div className="lg:h-50 h-40 aspect-square cursor-pointer flex items-center justify-center bg-black/5 hover:bg-black/15 dark:bg-white/5 dark:hover:bg-white/15 transition-all rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="scale-80 dark:fill-white fill-black" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z"/></svg>
                </div>
                <p>1234 Lake View Road,<br />Gulshan-2, Dhaka 1212, Bangladesh</p>
              </li>
              <li className="flex items-center gap-5 text-base md:text-xl">
                <div className="lg:h-50 h-40 aspect-square cursor-pointer flex items-center justify-center bg-black/5 hover:bg-black/15 dark:bg-white/5 dark:hover:bg-white/15 transition-all rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="scale-80 dark:fill-white fill-black" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                </div>
                <p>+01458954238</p>
              </li>
              <li className="flex items-center gap-5 text-base md:text-xl">
                <div className="lg:h-50 h-40 aspect-square cursor-pointer flex items-center justify-center bg-black/5 hover:bg-black/15 dark:bg-white/5 dark:hover:bg-white/15 transition-all rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="scale-80 dark:fill-white fill-black" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm280-188L280-663v303h560v-303L560-468Zm0-98 280-194H280l280 194ZM120-120q-33 0-56.5-23.5T40-200v-500h80v500h660v80H120Zm720-546v-94H280v94-94h560v94Z"/></svg>
                </div>
                <p>support@yourdomain.com</p>
              </li>
            </ul>
          </div>

          {/* links in footer */}
          <div>
            <h2 className="font-bold text-3xl lg:text-5xl text-center md:text-left">Site map</h2>
            <ul className="flex group gap-x-20 text-sm lg:mt-20 mt-5 md:text-xl md:gap-x-30 lg:flex-col md:gap-y-10 footer-nav">
              <li><Link to="/" className='hover:opacity-100 group-hover:opacity-40 opacity-100 transition-all'>Home</Link></li>
              <li><Link to="/about" className='hover:opacity-100 group-hover:opacity-40 opacity-100 transition-all'>About me</Link></li>
              <li><Link to="/blog" className='hover:opacity-100 group-hover:opacity-40 opacity-100 transition-all'>Blog</Link></li>
              <li><Link to="/portfolio" className='hover:opacity-100 group-hover:opacity-40 opacity-100 transition-all'>Portfolio</Link></li>
              <li><Link to="/conact" className='hover:opacity-100 group-hover:opacity-40 opacity-100 transition-all'>Contact</Link></li>
            </ul>
          </div>
        </div>
          {/* copyright */}
          <p className="text-center text-sm md:text-base mt-40">&copy; <span id="year">{new Date().getFullYear()}</span> OVIK. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;