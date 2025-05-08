import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './Hero.css';

const Hero = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "./assets/images/slide-1.jpg",
      alt: "Video editing showcase 1"
    },
    {
      id: 2,
      image: "./assets/images/slide-video.jpg",
      alt: "Video editing showcase 2"
    },
    {
      id: 3,
      image: "./assets/images/slide-graphic.jpg",
      alt: "Graphic design showcase"
    },
    {
      id: 4,
      image: "./assets/images/slide-thumbnail.jpg",
      alt: "Thumbnail design showcase"
    },
    {
      id: 5,
      image: "./assets/images/slide-quote.jpg",
      alt: "Motivation quote showcase"
    }
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Video Editing, Graphic & Thumbnail Design
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming raw footage into captivating visual stories with perfect color grading and seamless editing
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-buttons"
        >
          <a href="#work" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </motion.div>
      </div>
      
      <div className="hero-media">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="swiper-container"
        >
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1} // Show only one slide at a time
            centeredSlides={false} // Disable centered slides
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="hero-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="slide-content">
                  <img 
                    src={slide.image} 
                    alt={slide.alt}
                    className="swiper-slide-image"
                  />
                  <div className="swiper-overlay"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
