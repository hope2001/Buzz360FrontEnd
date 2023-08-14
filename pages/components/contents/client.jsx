import React from 'react';
import SwiperCore, { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';

// Configure Swiper to use the required modules
SwiperCore.use([Navigation, EffectFade]);

const ClientsCarousel = () => {
  const clientImages = [
    "client-01.svg",
    "client-02.svg",
    "client-03.svg",
    "client-04.svg",
    "client-05.svg",
    "client-06.svg",
    "client-07.svg",
  ];

  return (
    <section className="py-19">
      <div className="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-10">
          <span className="max-w-[128px] w-full h-[37px] block inset-0 pointer-events-none absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-dark/0 to-dark/100"></span>
          <span className="max-w-[128px] w-full h-[37px] block inset-0 pointer-events-none absolute z-10 left-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-dark/0 to-dark/100"></span>
          <div className="swiper clients-carousel">
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              navigation
              loop={true}
            >
              {clientImages.map((image, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <a href="/#">
                    <img src={`images/${image}`} alt={`client-${index + 1}`} />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
