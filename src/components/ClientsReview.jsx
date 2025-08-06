import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function ClientsReview() {
  const [clientReviews, setClientReviews] = useState([]);

  useEffect(() => {
    fetch('/assets/data/clientReviews.json')
      .then(res => res.json())
      .then(data => setClientReviews(data));
  }, []);

  return (
    <section className="lg:mt-150 mt-100 text-black dark:text-white max-w-[1400px] overflow-hidden mx-auto md:grid grid-cols-2 px-20 md:px-40">
      <div className="font-myfont">
        <h2 className="font-medium lg:text-[105px] md:text-6xl font-myfont hidden md:block transition-all">
          What our<br />Clients<br />Says?
        </h2>
        <h2 className="text-center font-medium md:hidden text-5xl mb-10">
          What our Clients Says?
        </h2>
      </div>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-full h-max"
      >
        {clientReviews.map((client, index) => (
          <SwiperSlide
            key={index}
            className="md:rounded-3xl rounded-2xl dark:bg-darkbox bg-lightbox transition-all p-20 lg:p-40 border-white/15 border-2 md:border-3"
          >
            <div className="flex gap-10 items-center">
              <img
              loading='lazy'
                src={client.imageLink}
                alt={`client: ${client.name}'s image`}
                className="rounded-full lg:h-100 md:h-80 h-50"
              />
              <div>
                <h3 className="font-bold text-xl md:text-2xl lg:text-4xl font-myfont">
                  {client.name}
                </h3>
                <p className="text-base lg:text-xl font-myfont text-black/80 dark:text-white/80">
                  {client.company}
                </p>
                <div className="flex lg:gap-3 gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`lg:h-15 h-12 transition-all ${
                        i < client.rating
                          ? 'fill-primary'
                          : 'dark:fill-white/30 fill-black/30'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4
                      l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5
                      l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0
                      287.9 0z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-10 lg:gap-20 mt-10">
                <div>
                    <svg className="fill-primary transition-all lg:h-50 h-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/></svg>
                </div>
                <p className="text-xs md:text-sm lg:text-lg transition-all font-myfont">
                    {client.review}
                </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
