import React from "react";
import Crousel from "./Crousel";
import { useNavigate } from "react-router-dom";
import OurClient from "./OurClient";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs";
import { FiTarget, FiUsers, FiTrendingUp, FiAward } from "react-icons/fi";
import bg from "../assets/bg.jpeg";
import exc from "../assets/exc.jpeg";
import per from "../assets/per.webp";
import excp from "../assets/expertise.jpeg";
import cli from "../assets/client.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const navigateToServices = () => {
    navigate("/services");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Text Content */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-1/2 space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full"
            >
              <span className="text-amber-500 font-medium">Welcome to Brainy Troves</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Where Talent <span className="text-amber-500">Meets</span> Opportunity
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
            Unlock your career potential with our bespoke consultancy services.
            At Brainy Troves Consultancy, we don't just find jobs – we craft
              success stories that transform careers and businesses.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 items-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#d97706" }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToServices}
                className="group flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-semibold rounded-full transition-all duration-300"
              >
                Explore Services
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05, borderColor: "#f59e0b" }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919620996689"
                target="_blank"
                className="px-8 py-4 border-2 border-white/30 hover:border-amber-500 text-white hover:text-amber-500 font-semibold rounded-full transition-colors duration-300"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stats/Features */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 grid grid-cols-2 gap-6"
          >
            {[
              { icon: FiTarget, number: "500+", label: "Successful Placements" },
              { icon: FiUsers, number: "50+", label: "Corporate Partners" },
              { icon: FiAward, number: "95%", label: "Client Satisfaction" },
              { icon: FiTrendingUp, number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "#f59e0b" 
                }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <stat.icon className="text-amber-500 w-8 h-8 mb-3" />
                <motion.h3 
                  className="text-3xl font-bold text-amber-500 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-300 text-center">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" 
        />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="text-amber-500 font-medium mb-4 block">What We Offer</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of consultancy services designed to elevate your career and business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Executive Placement",
                icon: "👔",
                description: "Strategic placement of top-tier executives in leading organizations."
              },
              { 
                title: "Graduate Recruitment",
                icon: "🎓",
                description: "Connecting fresh talent with promising career opportunities."
              },
              { 
                title: "Career Transition",
                icon: "🔄",
                description: "Guiding professionals through successful career transitions."
              },
              { 
                title: "Talent Acquisition",
                icon: "🎯",
                description: "Comprehensive recruitment solutions for businesses."
              },
              { 
                title: "Market Analysis",
                icon: "📊",
                description: "In-depth market research and industry trend analysis."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0px 8px 30px rgba(0,0,0,0.12)",
                  backgroundColor: "#fffbeb" 
                }}
                whileTap={{ scale: 0.98 }}
                onClick={navigateToServices}
                className="bg-white p-8 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group hover:border-amber-500 border-2 border-transparent"
              >
                <span className="text-4xl mb-4">{service.icon}</span>
                <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-500">
                  {service.title}
                </h4>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="text-amber-500 font-medium mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Strengths
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At Brainy Troves, we stand out by offering unparalleled expertise,
              personalized solutions, and a commitment to excellence. Our team of
              seasoned professionals brings a wealth of experience to every
              project, ensuring that you receive the best advice and support
              tailored to your unique needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
                title: "Expertise You Can Trust",
                description: "With years of industry experience, our consultants bring deep knowledge and proven strategies to help you succeed.",
              },
              {
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
                title: "Personalized Approach",
                description: "We believe in a personalized approach to every project, crafting customized plans that align perfectly with your vision.",
              },
              {
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
                title: "Commitment to Excellence",
                description: "Excellence is at the core of everything we do, ensuring the highest standards of professionalism and integrity.",
              },
              {
                image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
                title: "Client-Centric Focus",
                description: "Your success is our priority. We build strong relationships with our clients, offering continuous support.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
                }}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300 group"
              >
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <OurClient />
      </motion.div>
    </div>
  );
};

export default Home;
