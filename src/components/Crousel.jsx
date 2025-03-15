import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion";
import infb from "../assets/Infosysb.jpg";
import kotakb from "../assets/Kotakb.png";
import exper from "../assets/expertise.jpeg";

const CustomCarousel = () => {
  const carouselItems = [
    {
      image: infb,
      alt: "Infosys Building",
      title: "Global Technology Partner",
      description: "Partnering with industry leaders to deliver exceptional talent solutions"
    },
    {
      image: kotakb,
      alt: "Kotak Building",
      title: "Financial Sector Excellence",
      description: "Supporting financial institutions with top-tier recruitment services"
    },
    {
      image: exper,
      alt: "Professional Expertise",
      title: "Professional Excellence",
      description: "Bringing expertise and innovation to every recruitment challenge"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-[1400px] mx-auto px-4 my-16"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/10 z-10 pointer-events-none rounded-2xl" />
      
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={1000}
        showArrows={true}
        className="carousel-container rounded-2xl overflow-hidden shadow-2xl"
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={clickHandler}
              className="absolute left-0 z-20 p-3 m-4 bg-white/30 hover:bg-white/60 backdrop-blur-sm rounded-full transition-all duration-300"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={clickHandler}
              className="absolute right-0 z-20 p-3 m-4 bg-white/30 hover:bg-white/60 backdrop-blur-sm rounded-full transition-all duration-300"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )
        }
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="relative aspect-[21/9] overflow-hidden">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white text-3xl md:text-4xl font-bold mb-3"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-200 text-lg md:text-xl"
              >
                {item.description}
              </motion.p>
            </div>
          </div>
        ))}
      </Carousel>

      <style jsx>{`
        .carousel-container {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .carousel .slide {
          background: transparent;
        }

        .carousel .control-dots {
          margin-bottom: 1.5rem;
        }

        .carousel .control-dots .dot {
          width: 10px;
          height: 10px;
          background: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          opacity: 0.6;
        }

        .carousel .control-dots .dot.selected {
          background: #f59e0b;
          opacity: 1;
        }
      `}</style>
    </motion.div>
  );
};

export default CustomCarousel;
