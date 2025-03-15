import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-gradient-to-br from-gray-900 to-black text-white mt-8 md:mt-0 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="relative flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 gap-12">
        <motion.div
          variants={fadeInUp}
          className="w-full md:w-1/3 space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-amber-500">
            Brainy Troves
          </h1>
          <p className="text-gray-300 leading-relaxed">
            We provide expert consultancy services, helping businesses and individuals achieve their goals with personalized, professional advice.
          </p>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com"
              target="_blank"
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              <FaInstagram size={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="w-full md:w-1/4 space-y-6"
        >
          <h2 className="text-xl font-semibold text-amber-500">Services</h2>
          <nav className="flex flex-col gap-3">
            {[
              "Executive Placement",
              "Graduate Recruitment",
              "Career Transition Consulting",
              "Talent Acquisition",
              "Market Trend Analysis",
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="overflow-hidden"
              >
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-amber-500 transition-colors duration-300 block"
                >
                  {service}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="w-full md:w-1/4 space-y-6"
        >
          <h2 className="text-xl font-semibold text-amber-500">Contact Us</h2>
          <nav className="flex flex-col gap-4">
            <motion.a
              whileHover={{ x: 5 }}
              href="mailto:hr@brainytrovesconsultancy.com"
              className="flex items-center gap-2 text-gray-300 hover:text-amber-500 transition-colors duration-300"
            >
              <MdEmail size={20} />
              <span>hr@brainytrovesconsultancy.com</span>
            </motion.a>
            <motion.a
              whileHover={{ x: 5 }}
              href="tel:+919620996689"
              className="flex items-center gap-2 text-gray-300 hover:text-amber-500 transition-colors duration-300"
            >
              <MdPhone size={20} />
              <span>+91 96209 96689</span>
            </motion.a>
          </nav>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        className="relative border-t border-gray-800 mt-12 py-6 text-center text-gray-400"
      >
        <p>© 2024 Brainy Troves. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
