// import React from "react";

// const About = () => {
//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header with gradient background */}
//         <div className="text-center mb-16 bg-gradient-to-r from-purple-800 to-blue-800 p-8 rounded-2xl shadow-2xl">
//           <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
//             10 Years of Astrological Legacy
//           </h1>
//           <p className="text-xl text-purple-100 mb-6">
//             Combining ancient wisdom with modern insights to guide your life's journey
//           </p>
//           <div className="flex justify-center gap-4 flex-wrap mt-6">
//             <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">Gold Medalist</span>
//             <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">Certified Astrologist</span>
//             <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">Numerologist</span>
//             <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">Palmist</span>
//             <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">Vastu Expert</span>
//           </div>
//         </div>

//         {/* Our Team Section */}
//         <div className="mb-16 bg-gradient-to-br from-purple-800/80 to-blue-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
//           <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
//             Our Expert Astrologers
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <TeamMember 
//               name="Praveen Garg" 
//               role="Gold Medalist Astrologer" 
//               phone="+91 8302650986" 
//               image="/maleasto.png"
//               specialties={["Vedic Astrology", "Numerology", "Career Guidance"]}
//             />
//             <TeamMember 
//               name="Madhulika " 
//               role="palm reading Astrologer" 
//               phone="+91  9588240592" 
//               image="/ladyasto.png"
//               specialties={["kundli making", "tarrot", "Palmistry"]}
//             />
//             <TeamMember 
//               name="Neha Ranawat" 
//               role="Vastu & Healing Expert" 
//               phone="+91  8302650986" 
//               image="/femaleastro2.png"
//               specialties={["Vastu Shastra", "Energy Healing", "Health Astrology"]}
//             />
//           </div>
//         </div>

//         {/* About Us */}
//         <div className="mb-16 bg-gradient-to-br from-purple-800/80 to-blue-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
//           <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
//             About Our Astrological Practice
//           </h2>
//           <div className="space-y-6 text-lg">
//             <p className="text-gray-100 leading-relaxed">
//               The good, the bad, the wrong - all are meant to pass. No situation lasts forever. While you can't control every circumstance in your world, astrology provides the wisdom to navigate life's challenges with grace and understanding.
//             </p>
//             <p className="text-gray-100 leading-relaxed">
//               Our team of expert astrologers combines traditional Vedic techniques with modern psychological insights to provide guidance that's both spiritually profound and practically applicable to your daily life.
//             </p>
//             <p className="text-gray-100 leading-relaxed">
//               Modern skepticism often dismisses astrology, but this stems from ignorance of its profound scientific basis. For millennia, across civilizations, astrology has guided humanity through its most challenging moments.
//             </p>
//           </div>
//         </div>

//         {/* Services */}
//         <div className="mb-16 bg-gradient-to-br from-purple-800/80 to-blue-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
//           <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
//             Life Challenges We Can Help With
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <ServiceCard 
//               title="Love & Relationships" 
//               icon="❤️" 
//               description="Resolve conflicts and find compatible partners through astrological insights." 
//               gradient="from-pink-500 to-rose-500"
//             />
//             <ServiceCard 
//               title="Health & Wellbeing" 
//               icon="💊" 
//               description="Identify planetary influences affecting your health and vitality." 
//               gradient="from-emerald-500 to-teal-500"
//             />
//             <ServiceCard 
//               title="Wealth & Prosperity" 
//               icon="💰" 
//               description="Overcome financial obstacles with planetary guidance and remedies." 
//               gradient="from-amber-500 to-yellow-500"
//             />
//             <ServiceCard 
//               title="Career & Success" 
//               icon="💼" 
//               description="Make better career choices and find ideal timing for important moves." 
//               gradient="from-blue-500 to-indigo-500"
//             />
//           </div>
//         </div>

//         {/* Motto */}
//         <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 p-8 rounded-2xl shadow-2xl">
//           <h2 className="text-3xl font-bold mb-6">Our Guiding Principle</h2>
//           <blockquote className="text-2xl italic font-medium mb-6">
//             "To reach your highest potential, you must first understand your cosmic blueprint."
//           </blockquote>
//           <p className="text-lg leading-relaxed">
//             Astrology is a profound science backed by millennia of observation and practice. Our team brings this ancient wisdom to help you navigate modern challenges with clarity and confidence.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ServiceCard = ({ title, icon, description, gradient }) => {
//   return (
//     <div className={`bg-gradient-to-br ${gradient} hover:scale-105 transition-all p-6 rounded-xl shadow-lg h-full flex flex-col`}>
//       <div className="text-4xl mb-4">{icon}</div>
//       <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
//       <p className="text-gray-100 flex-grow">{description}</p>
//     </div>
//   );
// };

// const TeamMember = ({ name, role, phone, image, specialties }) => {
//   return (
//     <div className="bg-purple-900/50 hover:bg-purple-800/70 transition-all p-6 rounded-xl shadow-lg backdrop-blur-sm border border-purple-700/30">
//       <div className="flex flex-col items-center mb-4">
//         <img 
//           src={image} 
//           alt={name} 
//           className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400/80 shadow-md mb-4"
//         />
//         <h3 className="text-2xl font-bold text-yellow-300">{name}</h3>
//         <p className="text-purple-200">{role}</p>
//         <a href={`tel:${phone.replace(/\s+/g, '')}`} className="mt-2 text-white hover:text-yellow-300 transition-colors">
//           {phone}
//         </a>
//       </div>
//       <div className="mt-4">
//         <h4 className="font-semibold text-yellow-200 mb-2">Specialties:</h4>
//         <ul className="space-y-2">
//           {specialties.map((item, index) => (
//             <li key={index} className="flex items-center">
//               <span className="text-yellow-400 mr-2">✦</span>
//               <span className="text-purple-100">{item}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default About;

"use client"

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const ServiceCard = ({ title, icon, description, gradient }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform"
          />
        </div>
        <h3 className="text-2xl font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">{name}</h3>
        <p className="text-purple-200 group-hover:text-white">{role}</p>
        <a 
          href={`tel:${phone.replace(/\s+/g, '')}`} 
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
            <motion.li 
              key={index} 
              className="flex items-center"
              whileHover={{ x: 5 }}
            >
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
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Starry background effect
  useEffect(() => {
    const container = document.querySelector('.starry-bg');
    if (!container) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white/30';
      
      // Random size between 1-3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random animation
      const duration = Math.random() * 10 + 5;
      star.style.animation = `twinkle ${duration}s infinite alternate`;
      
      container.appendChild(star);
    };

    // Create 100 stars
    for (let i = 0; i < 100; i++) {
      createStar();
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 px-4 overflow-hidden">
      {/* Starry background */}
      <div className="starry-bg absolute inset-0 overflow-hidden"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-purple-600/20 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-20 w-60 h-60 rounded-full bg-blue-600/20 filter blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with gradient background */}
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
          <motion.p 
            className="text-xl text-purple-100 mb-6"
            variants={itemVariants}
          >
            Combining ancient wisdom with modern insights to guide your life's journey
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4 flex-wrap mt-6"
            variants={containerVariants}
          >
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

        {/* Our Team Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 bg-gradient-to-br from-purple-800/80 to-blue-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/cosmic-pattern.png')] opacity-10"></div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
          >
            Our Expert Astrologers
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
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

        {/* About Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 bg-gradient-to-br from-purple-800/80 to-blue-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/mystic-pattern.png')] opacity-10"></div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
          >
            About Our Astrological Practice
          </motion.h2>
          <motion.div 
            className="space-y-6 text-lg"
            variants={containerVariants}
          >
            {[
              "The good, the bad, the wrong - all are meant to pass. No situation lasts forever. While you can't control every circumstance in your world, astrology provides the wisdom to navigate life's challenges with grace and understanding.",
              "Our team of expert astrologers combines traditional Vedic techniques with modern psychological insights to provide guidance that's both spiritually profound and practically applicable to your daily life.",
              "Modern skepticism often dismisses astrology, but this stems from ignorance of its profound scientific basis. For millennia, across civilizations, astrology has guided humanity through its most challenging moments."
            ].map((text, index) => (
              <motion.p 
                key={index}
                variants={itemVariants}
                className="text-gray-100 leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 bg-gradient-to-br from-purple-800/80 to-blue-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/constellation-pattern.png')] opacity-10"></div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
          >
            Life Challenges We Can Help With
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            <ServiceCard 
              title="Love & Relationships" 
              icon="❤️" 
              description="Resolve conflicts and find compatible partners through astrological insights." 
              gradient="from-pink-500 to-rose-500"
            />
            <ServiceCard 
              title="Health & Wellbeing" 
              icon="💊" 
              description="Identify planetary influences affecting your health and vitality." 
              gradient="from-emerald-500 to-teal-500"
            />
            <ServiceCard 
              title="Wealth & Prosperity" 
              icon="💰" 
              description="Overcome financial obstacles with planetary guidance and remedies." 
              gradient="from-amber-500 to-yellow-500"
            />
            <ServiceCard 
              title="Career & Success" 
              icon="💼" 
              description="Make better career choices and find ideal timing for important moves." 
              gradient="from-blue-500 to-indigo-500"
            />
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
          <motion.h2 
            className="text-3xl font-bold mb-6"
            whileHover={{ x: 5 }}
          >
            Our Guiding Principle
          </motion.h2>
          <motion.blockquote 
            className="text-2xl italic font-medium mb-6 relative"
            whileHover={{ scale: 1.02 }}
          >
            <span className="absolute -left-6 text-yellow-700 text-4xl">"</span>
            To reach your highest potential, you must first understand your cosmic blueprint.
            <span className="absolute -right-6 bottom-0 text-yellow-700 text-4xl">"</span>
          </motion.blockquote>
          <motion.p 
            className="text-lg leading-relaxed"
            whileHover={{ x: 3 }}
          >
            Astrology is a profound science backed by millennia of observation and practice. Our team brings this ancient wisdom to help you navigate modern challenges with clarity and confidence.
          </motion.p>
          <div className="absolute bottom-4 right-4 text-6xl opacity-20">☀️</div>
        </motion.div>
      </div>

      {/* Add some global styles for animations */}
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        .starry-bg div {
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default About;