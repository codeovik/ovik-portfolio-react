export default function Contact() {

  const email = 'ovikbiswas01@gmail.com';
  const googleMapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2955.097803019077!2d89.8351224416059!3d23.603694549300005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1752849927608!5m2!1sen!2sbd';

  return (
    <section className="lg:mt-150 mt-100 text-black dark:text-white max-w-[1400px] mx-auto px-20 md:px-40">
      <h2 className="text-center font-semibold lg:text-7xl md:text-6xl text-4xl mb-10">Get in Touch</h2>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-40">
        <form action={`https://formsubmit.co/${email}`} method="POST" className="dark:bg-darkbox transition-all bg-lightbox md:p-40 p-20 rounded-2xl md:rounded-3xl md:grid flex flex-col md:grid-cols-2 gap-20 border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_autoresponse" value="Your message submited successfully." />
          <input type="hidden" name="_subject" value="Someone send a message from your portfolio website" />

          <input type="text" placeholder="Your name" name="name" required className="md:outline-3 outline-2 outline-black/15 dark:outline-white/15 md:p-20 p-10 dark:text-white rounded-xl md:rounded-2xl focus:outline-primary transition-all" />
          <input type="email" placeholder="Your email" name="email" required className=" md:outline-3 outline-2 outline-black/15 dark:outline-white/15 md:p-20 p-10 dark:text-white rounded-xl md:rounded-2xl focus:outline-primary transition-all" />
          <input type="text" placeholder="Your subject" name="subject" required className="col-span-2 md:outline-3 outline-2 outline-black/15 dark:outline-white/15 md:p-20 p-10 dark:text-white rounded-xl md:rounded-2xl focus:outline-primary transition-all" />
          <textarea placeholder="Your message" name="message" required rows="4" className=" md:outline-3 outline-2 outline-black/15 dark:outline-white/15 md:p-20 p-10 dark:text-white rounded-xl md:rounded-2xl col-span-2 h-auto focus:outline-primary transition-all"></textarea>
          <div className="col-span-2 flex justify-end">
            <button type="submit" className="btn-primary text-black font-myfont"><span></span><span>Let's Contact</span><span></span></button>
          </div>
        </form>
        <iframe src={googleMapEmbedUrl} className="lg:h-full transition-all md:aspect-video aspect-square w-full rounded-lg lg:rounded-2xl border-1 lg:border-2 border-black/5 dark:border-white/5 hover:border-primary/50" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
}