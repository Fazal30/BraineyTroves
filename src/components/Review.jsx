import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaHandshake, FaChartLine, FaAward, FaLightbulb, FaRocket } from "react-icons/fa";
import teamImage from '../assets/info.jpeg';

const Review = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-black">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-amber-500">Brainy Troves</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Empowering careers and transforming businesses through innovative solutions and strategic partnerships
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Brainy Troves, we are dedicated to bridging the gap between exceptional talent and outstanding opportunities. Our mission is to empower individuals and organizations by providing innovative solutions and expert guidance that drive success and growth.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: FaLightbulb,
                    title: "Strategic Vision",
                    description: "Developing comprehensive career and recruitment strategies"
                  },
                  {
                    icon: FaRocket,
                    title: "Growth Focus",
                    description: "Enabling continuous professional development and success"
                  },
                  {
                    icon: FaHandshake,
                    title: "Partnership Approach",
                    description: "Building lasting relationships with clients and candidates"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                  >
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <item.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={teamImage}
                alt="Our Mission"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These principles guide our actions and define our commitment to excellence in everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaUsers,
                title: "Client Focus",
                description: "We put our clients first, always striving to exceed their expectations and deliver exceptional value."
              },
              {
                icon: FaHandshake,
                title: "Integrity",
                description: "We maintain the highest standards of professional ethics, transparency, and accountability."
              },
              {
                icon: FaChartLine,
                title: "Excellence",
                description: "We pursue excellence in everything we do, consistently delivering outstanding results for our clients."
              },
              {
                icon: FaAward,
                title: "Innovation",
                description: "We embrace innovation and creative solutions to address complex challenges effectively."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:text-amber-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We combine expertise, technology, and personal touch to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Solutions",
                description: "We tailor our services to meet your specific needs and goals, ensuring the perfect fit for your requirements."
              },
              {
                title: "Industry Expertise",
                description: "Our team brings deep knowledge and experience across various sectors, providing valuable insights and guidance."
              },
              {
                title: "Continuous Support",
                description: "We provide ongoing guidance and support throughout your journey, ensuring long-term success and growth."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
