"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const ServiceCard = ({ title, icon, description, gradient }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-gradient-to-br ${gradient} p-6 rounded-xl shadow-lg h-full flex flex-col relative overflow-hidden group`}
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-100 flex-grow">{description}</p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 group-hover:bg-white/50 transition-all"></div>
    </motion.div>
  );
};

const TeamMember = ({ name, role, phone, image, specialties }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="bg-purple-900/50 hover:bg-purple-800/70 transition-all p-6 rounded-xl shadow-lg backdrop-blur-sm border border-purple-700/30 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex flex-col items-center mb-4 relative z-10">
        <div className="w-32 h-32 rounded-full border-4 border-yellow-400/80 shadow-md mb-4 overflow-hidden group-hover:border-yellow-300 transition-all">
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform"
          />
        </div>
        <h3 className="text-2xl font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">{name}</h3>
        <p className="text-purple-200 group-hover:text-white">{role}</p>
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="mt-2 text-white hover:text-yellow-300 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          {phone}
        </a>
      </div>
      <div className="mt-4 relative z-10">
        <h4 className="font-semibold text-yellow-200 mb-2">Specialties:</h4>
        <ul className="space-y-2">
          {specialties.map((item, index) => (
            <motion.li key={index} className="flex items-center" whileHover={{ x: 5 }}>
              <span className="text-yellow-400 mr-2">✦</span>
              <span className="text-purple-100 group-hover:text-white transition-colors">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const container = document.querySelector(".starry-bg");
    if (!container) return;

    const createStar = () => {
      const star = document.createElement("div");
      star.className = "absolute rounded-full bg-white/30";
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      const duration = Math.random() * 10 + 5;
      star.style.animation = `twinkle ${duration}s infinite alternate`;
      container.appendChild(star);
    };

    for (let i = 0; i < 100; i++) createStar();

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 px-4 overflow-hidden">
      <div className="starry-bg absolute inset-0 overflow-hidden"></div>
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-purple-600/20 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-20 w-60 h-60 rounded-full bg-blue-600/20 filter blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16 bg-gradient-to-r from-purple-800 to-blue-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/star-pattern.png')] opacity-10"></div>
          <motion.h1
            className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
            whileHover={{ scale: 1.02 }}
          >
            10 Years of Astrological Legacy
          </motion.h1>
          <motion.p className="text-xl text-purple-100 mb-6" variants={itemVariants}>
            Combining ancient wisdom with modern insights to guide your life&apos;s journey
          </motion.p>
          <motion.div className="flex justify-center gap-4 flex-wrap mt-6" variants={containerVariants}>
            {["Gold Medalist", "Certified Astrologist", "Numerologist", "Palmist", "Vastu Expert"].map((badge, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -3 }}
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg hover:shadow-yellow-300/30 transition-all"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 bg-gradient-to-br from-purple-800/80 to-blue-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/cosmic-pattern.png')] opacity-10"></div>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            Our Expert Astrologers
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            <TeamMember
              name="Praveen Garg"
              role="Gold Medalist Astrologer"
              phone="+91 8302650986"
              image="/maleasto.png"
              specialties={["Vedic Astrology", "Numerology", "Vastu"]}
            />
            <TeamMember
              name="Madhulika"
              role="Palm Reading Astrologer"
              phone="+91 9588240592"
              image="/ladyasto.png"
              specialties={["Kundli Making", "Palm Reading", "Tarot Reading"]}
            />
            <TeamMember
              name="Neha Ranawat"
              role="Palm Reading"
              phone="+91 9588240592"
              image="/femaleastro2.png"
              specialties={["Palm Reading", "Energy Healing", "Tarot Reading"]}
            />
          </motion.div>
        </motion.div>

        {/* About */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 bg-gradient-to-br from-purple-800/80 to-blue-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/mystic-pattern.png')] opacity-10"></div>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            About Our Astrological Practice
          </motion.h2>
          <motion.div className="space-y-6 text-lg" variants={containerVariants}>
            {[
              "The good, the bad, the wrong - all are meant to pass. No situation lasts forever. While you can&apos;t control every circumstance in your world, astrology provides the wisdom to navigate life&apos;s challenges with grace and understanding.",
              "Our team of expert astrologers combines traditional Vedic techniques with modern psychological insights to provide guidance that&apos;s both spiritually profound and practically applicable to your daily life.",
              "Modern skepticism often dismisses astrology, but this stems from ignorance of its profound scientific basis. For millennia, across civilizations, astrology has guided humanity through its most challenging moments.",
            ].map((text, index) => (
              <motion.p key={index} variants={itemVariants} className="text-gray-100 leading-relaxed">
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Motto */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 p-8 rounded-2xl shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('/gold-pattern.png')] opacity-10"></div>
          <motion.h2 className="text-3xl font-bold mb-6" whileHover={{ x: 5 }}>
            Our Guiding Principle
          </motion.h2>
          <motion.blockquote className="text-2xl italic font-medium mb-6 relative" whileHover={{ scale: 1.02 }}>
            <span className="absolute -left-6 text-yellow-700 text-4xl">&quot;</span>
            To reach your highest potential, you must first understand your cosmic blueprint.
            <span className="absolute -right-6 bottom-0 text-yellow-700 text-4xl">&quot;</span>
          </motion.blockquote>
          <motion.p className="text-lg leading-relaxed" whileHover={{ x: 3 }}>
            Astrology is a profound science backed by millennia of observation and practice. Our team brings this ancient wisdom to help you navigate modern challenges with clarity and confidence.
          </motion.p>
          <div className="absolute bottom-4 right-4 text-6xl opacity-20">☀️</div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }
        .starry-bg div {
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default About;
