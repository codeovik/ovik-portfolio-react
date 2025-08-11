import Milestone from '../components/Milestone';
import Skill from '../components/Skill';
import EducationAndExprience from '../components/EducationAndExprience';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

export default function AboutMe() {
  return (
    <>
        <header className='overflow-hidden h-400 relative top-0 flex items-center justify-center flex-col gap-10'>
            <h1 className='text-6xl md:text-8xl font-bold dark:text-white'>About Me</h1>
            <p className="dark:text-white text-xl font-bold flex gap-5 items-center">
                <Link to='/' className='flex items-center flex-row fill-primary gap-2'>
                  Home
                </Link>
                <svg className='scale-60 fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                <Link to='' className='text-primary'>About</Link>
            </p>
            <div className="h-600 aspect-1/1 rounded-full bg-green-300 dark:bg-green-950 absolute bottom-0 opacity-50 blur-[200px] -z-1"></div>
            <div className="h-600 aspect-1/1 rounded-full bg-violet-300 dark:bg-yellow-950 absolute bottom-0 opacity-50 right-0 blur-[200px] -z-1"></div>
        </header>
        <Milestone />
        <Skill />
        <EducationAndExprience />
        <Contact />
    </>
  )
}
