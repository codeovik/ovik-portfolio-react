import Contact from '../components/Contact'
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <>
      <header className='overflow-hidden h-400 relative top-0 flex items-center justify-center flex-col gap-10'>
        <h1 className='text-6xl md:text-8xl font-medium dark:text-white'>Contact Me</h1>
        <p className="dark:text-white text-xl font-medium flex gap-5 items-center">
            <Link to='/' className='flex items-center flex-row fill-primary gap-2'>
              Home
            </Link>
            <svg className='scale-60 fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
            <Link to='/portfolio' className='text-primary'>Contact</Link>
        </p>
        <div className="h-600 aspect-1/1 rounded-full bg-green-300 dark:bg-green-950 absolute bottom-0 opacity-50 blur-[200px] -z-1"></div>
        <div className="h-600 aspect-1/1 rounded-full bg-violet-300 dark:bg-yellow-950 absolute bottom-0 opacity-50 right-0 blur-[200px] -z-1"></div>
      </header>

      {/* email, loaction and phone */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-[1400px] mx-auto pt-100 px-20 md:px-40">

        {/* address */}
        <div className='flex flex-col items-center justify-center bg-lightbox dark:bg-darkbox rounded-2xl md:rounded-3xl border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 dark:text-white transition-all p-40'>
          <div className='h-100 aspect-square bg-primary/20 rounded-full flex justify-center items-center'>
            <svg className='h-50 fill-primary rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
          </div>
          <h4 className='text-4xl font-semibold my-10'>Address</h4>
          <p className=''>Lorem ipsum dolor sit amet.</p>
          <p className="">Lorem, ipsum dolor.</p>
        </div>

        {/* email */}
        <div className='flex flex-col items-center justify-center bg-lightbox dark:bg-darkbox rounded-2xl md:rounded-3xl border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 dark:text-white transition-all p-40'>
          <div className='h-100 aspect-square bg-primary/20 rounded-full flex justify-center items-center'>
            <svg className='h-50 fill-primary rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>
          </div>
          <h4 className='text-4xl font-semibold my-10'>Email</h4>
          <p className=''>Lorem ipsum dolor sit amet.</p>
          <p className="">Lorem, ipsum dolor.</p>
        </div>

        {/* phone */}
        <div className='flex flex-col items-center justify-center bg-lightbox dark:bg-darkbox rounded-2xl md:rounded-3xl border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 dark:text-white transition-all p-40'>
          <div className='h-100 aspect-square bg-primary/20 rounded-full flex justify-center items-center'>
            <svg className='h-50 fill-primary rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
          </div>
          <h4 className='text-4xl font-semibold my-10'>Call me</h4>
          <p className=''>Lorem ipsum dolor sit amet.</p>
          <p className="">Lorem, ipsum dolor.</p>
        </div>

      </section>

      <Contact />
    </>
  )
}
