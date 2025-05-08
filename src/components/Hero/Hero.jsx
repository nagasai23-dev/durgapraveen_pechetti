import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const slides = [
    {
      id: 1,
      image: "/assets/images/slide-1.jpg", // updated path
      alt: "Video editing showcase 1"
    },
    {
      id: 2,
      image: "/assets/images/slide-video.jpg", // updated path
      alt: "Video editing showcase 2"
    },
    {
      id: 3,
      image: "/assets/images/slide-graphic.jpg", // updated path
      alt: "Graphic design showcase"
    },
    {
      id: 4,
      image: "/assets/images/slide-thumbnail.jpg", // updated path
      alt: "Thumbnail design showcase"
    },
    {
      id: 5,
      image: "/assets/images/slide-quote.jpg", // updated path
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
          <a href="#contact" className="btn-secondary">Get in Touch</a> {/* ✅ Fixed comma issue */}
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
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="hero-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="slide-content">
                  <img 
                    src={slide.image} 
                    alt={slide.alt}
                    loading="lazy" // 
                    className="swiper-slide-image"
                  />
                  <div className="swiper-overlay"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Carousel controls moved outside of Swiper */}
          <div className="carousel-controls">
            <button className="custom-prev" aria-label="Previous slide">
              <FaChevronLeft />
            </button>
            
            <button 
              className="play-pause-btn"
              onClick={toggleAutoplay}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            
            <button className="custom-next" aria-label="Next slide">
              <FaChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
};

export default Hero;
