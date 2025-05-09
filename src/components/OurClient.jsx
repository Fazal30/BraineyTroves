import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import accentureLogo from "../assets/logo/Accenture.svg.png";
import hgsLogo from "../assets/logo/HGS.NS_BIG.png";
import infosysLogo from "../assets/logo/infosys-logo-jpeg.jpg";
import jpMorganLogo from "../assets/logo/JPM_logo.png";
import ai247Logo from "../assets/logo/(24)7.ai_Logo.svg.png";
import startekLogo from "../assets/logo/SRT_BIG.png";
import ackoLogo from "../assets/logo/acko-logo-png_seeklogo-456165.png";
import inTouchLogo from "../assets/logo/2023-24-7-intouch-new-logo-name-change-to-intouchcx.jpg";
import brickworkLogo from "../assets/logo/brickworkindia-logo.png";
import bigbasketLogo from "../assets/logo/bigbasket-logo.png";
import aloricaLogo from "../assets/logo/Alorica_logo.svg.png";
import techMahindraLogo from "../assets/logo/techmahindra-logo.png";
const OurClient = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    {
      name: "Accenture",
      logo: accentureLogo
    },
    {
      name: "HGS",
      logo: hgsLogo
    },
    {
      name: "Infosys",
      logo: infosysLogo
    },
    {
      name: "JP Morgan",
      logo: jpMorganLogo
    },
    {
      name: "247.ai",
      logo: ai247Logo
    },
    {
      name: "Startek",
      logo: startekLogo
    },
    {
      name: "Acko",
      logo: ackoLogo
    },
    {
      name: "24-7 Intouch",
      logo: inTouchLogo
    },
    {
      name: "Brickwork",
      logo: brickworkLogo
    },
    {
      name: "BigBasket",
      logo: bigbasketLogo
    },
    {
      name: "Alorica",
      logo: aloricaLogo
    },
    {
      name: "Tech Mahindra",
      logo: techMahindraLogo
    }
  ];

  const handleImageError = (e) => {
    // Enhanced error handler to create a styled placeholder
    const parent = e.target.parentElement;
    const companyName = e.target.alt.replace(' logo', '');
    parent.innerHTML = `
      <div class="flex flex-col items-center justify-center w-full h-full">
        <div class="text-lg font-bold text-gray-800">${companyName}</div>
        <div class="text-sm text-gray-500">(Logo Pending)</div>
      </div>
    `;
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-gray-600 text-lg">
            Trusted by Industry Leaders Worldwide
          </p>
        </motion.div>

        <div className="relative h-32 overflow-hidden">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 45,
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex gap-20 absolute whitespace-nowrap"
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="inline-flex w-48 h-28 items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  onError={handleImageError}
                  className="max-w-[140px] max-h-[60px] w-auto h-auto object-contain hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
