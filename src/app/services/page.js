


"use client"

import Link from "next/link";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-full group"
      whileHover={{ y: -5 }}
    >
      <div className={`h-full rounded-2xl overflow-hidden border border-blue-700/30 bg-gradient-to-b from-blue-950/80 to-blue-900/90 backdrop-blur-sm
        ${service.popular ? 'shadow-lg shadow-blue-500/20 ring-1 ring-blue-500/30' : 'shadow-md shadow-blue-500/10'} 
        transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/30 group-hover:border-blue-500/50`}>

        {/* Enhanced floating orb background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-700/10 blur-[80px] group-hover:blur-[100px] transition-all duration-500"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-600/10 blur-[80px] group-hover:blur-[100px] transition-all duration-700"></div>
          {service.popular && (
            <div className="absolute inset-0 bg-[url('https://svgur.com/i/upG.svg')] bg-repeat opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500"></div>
          )}
        </div>

        {/* Card header with enhanced decorative elements */}
        <div className={`relative pt-8 px-6 pb-4 ${service.popular ? 'border-b border-blue-500/30' : 'border-b border-blue-500/20'}`}>
          {service.popular && (
            <motion.div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
              }}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              MOST POPULAR
            </motion.div>
          )}

          <div className="flex items-start justify-between">
            <motion.div
              className="text-5xl mb-4 w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-800/40 to-blue-900/60 shadow-inner border border-blue-700/50 group-hover:bg-gradient-to-br group-hover:from-blue-700/50 group-hover:to-blue-800/70"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.icon}
            </motion.div>

            <div className="text-right">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent">
                {service.price}
              </span>
              <span className="block text-blue-400/60 text-sm mt-1">/ {service.duration}</span>
            </div>
          </div>

          <h2 className="font-sans text-xl font-bold text-blue-100 mb-2 group-hover:text-white transition-colors duration-300">
            {service.title}
          </h2>
        </div>

        {/* Enhanced card body */}
        <div className="p-6">
          <p className="text-blue-300/80 mb-6 text-sm leading-relaxed group-hover:text-blue-200/90 transition-colors duration-300">
            {service.description}
          </p>

          <ul className="space-y-3 mb-8">
            {service.features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative mt-0.5 mr-3 flex-shrink-0">
                  <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
                  <svg className="relative w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-blue-200 text-sm group-hover:text-white transition-colors duration-300">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            onClick={() => {
              const message = `Hi, I want to book a session for ${service.title}.`;
              const phone = "918302650986"; // Add country code without + or spaces
              const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
              window.open(url, "_blank");
            }}
            className={`w-full py-3 px-4 rounded-xl font-medium transition duration-300 relative overflow-hidden group
    ${service.popular
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md shadow-blue-500/30'
                : 'bg-blue-900/60 hover:bg-blue-900/80 text-blue-100 border border-blue-700/50 hover:border-blue-500'}
    hover:shadow-lg`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Book Session
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      title: "Kundli Birth Chart Analysis",
      description: "An in-depth exploration of your natal chart covering personality traits, life purpose, strengths, challenges, and potential.",
      price: "₹1100",
      duration: "20 min session",
      features: [
        "Detailed personality analysis",
        "Life purpose indicators",
        "Strengths and challenges",
        "Yearly forecast included"
      ],
      popular: true,
      icon: "🌌"
    },
    {
      title: "Relationship Compatibility",
      description: "Analysis of synastry and composite charts to understand relationship dynamics, compatibility, and growth opportunities.",
      price: "₹500",
      duration: "Couple's session",
      features: [
        "Compatibility analysis",
        "Communication styles",
        "Growth opportunities",
        "Timing for important decisions"
      ],
      icon: "💑"
    },
    {
      title: "Marriage & Long-term Union",
      description: "Specialized analysis for couples considering marriage or in long-term commitments, examining timing and harmony factors.",
      price: "₹500",
      duration: "30 mins",
      features: [
        "Marriage timing analysis",
        "Long-term compatibility",
        "Potential challenges",
        "Remedial solutions"
      ],
      icon: "💍"
    },
    {
      title: "Career Path Guidance",
      description: "Identify your ideal career path, timing for changes, and how to maximize your professional potential.",
      price: "₹399",
      duration: "20mins",
      features: [
        "Career strengths analysis",
        "Ideal work environment",
        "Timing for changes",
        "Obstacles and solutions"
      ],
      icon: "💼"
    },
    {
      title: "Health & Wellness Reading",
      description: "Astrological insight into health predispositions and timing for optimal wellness and preventive care.",
      price: "₹500",
      duration: "20 mins",
      features: [
        "Health vulnerability areas",
        "Preventive care timing",
        "Diet & lifestyle recommendations",
        "Healing cycles analysis"
      ],
      icon: "🌿"
    },
    {
      title: "Business Success Analysis",
      description: "For entrepreneurs and business owners to identify optimal timing and strategies for success.",
      price: "₹500",
      duration: "20 min session",
      features: [
        "Business launch timing",
        "Partnership compatibility",
        "Financial cycles",
        "Growth opportunities"
      ],
      popular: true,
      icon: "📈"
    },
    {
      title: "Tarot Card Reading",
      description: "Tarot card reading is a form of cartomancy whereby practitioners use tarot cards to purportedly gain insight into the past, present or future.",
      price: "₹500",
      duration: "20 min session",
      features: [
        "Major transits analysis",
        "Key opportunity dates",
        "Challenging periods",
        "Personal growth areas"
      ],
      icon: "🗓️"
    },
    {
      title: "Parent-Child Compatibility",
      description: "Understand the dynamic between parent and child for better communication and relationship building.",
      price: "₹500",
      duration: "20 min session",
      features: [
        "Communication styles",
        "Learning approaches",
        "Emotional connection",
        "Conflict resolution"
      ],
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Reiki and Healing Session",
      description: "A holistic healing session using Reiki techniques to balance your energy, promote relaxation, and support overall well-being.",
      price: "₹1100",
      duration: "45 min session",
      features: [
        "Energy balancing",
        "Stress and anxiety relief",
        "Chakra alignment",
        "Emotional and physical healing"
      ],
      icon: "👐"
    },
    {
      title: "Vastu Consultation",
      description: "Expert advice on Vastu Shastra to harmonize your living or working space for positive energy and prosperity.",
      price: "₹500",
      duration: "30 min consultation",
      features: [
        "Home Vastu analysis",
        "Office Vastu recommendations",
        "Remedial solutions",
        "Enhancing positive energy"
      ],
      icon: "🏠"
    }
  ];

  const astrologers = [
    {
      name: "Praveen Garg",
      title: "Gold Medalist Astrologer",
      phone: "+91 8302650986",
      specialties: ["Vedic Astrology", "Numerology", "Career Guidance", "Vastu"],
      experience: "15+ years",
      rating: "4.9/5"
    },
    {
      name: "Madhulika",
      title: "Palm Reading Astrologer",
      phone: "+91 9588240592",
      specialties: ["Kundil Making", "Tarot", "Palm Reading"],
      experience: "10+ years",
      rating: "4.8/5"
    },
    {
      name: "Neha Ranawat",
      title: "Vastu & Healing Expert",
      phone: "+91 9588240592",
      specialties: ["Palm Reading", "Energy Healing", "Tarot reading"],
      experience: "8+ years",
      rating: "4.7/5"
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden">
      {/* Enhanced cosmic background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-700/30"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 10 + 5}s infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[url('https://svgur.com/i/upG.svg')] bg-repeat opacity-[0.02]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="font-sans text-4xl md:text-5xl font-bold text-blue-100 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent relative">
              Divine Guidance Services
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></span>
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-blue-300/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover your spiritual path with our professional guidance services, tailored to illuminate your unique journey.
          </motion.p>
        </motion.div>

        {/* Enhanced Astrologers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 mb-8 text-center relative inline-block">
            <span className="relative z-10">
              Our Expert Astrologers
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600/30 rounded-full"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {astrologers.map((astrologer, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-900/80 to-blue-950 rounded-xl p-6 shadow-lg border border-blue-800/50 relative overflow-hidden group hover:border-blue-600/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-700/10 blur-[60px] group-hover:blur-[80px] transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-100 group-hover:text-white transition-colors duration-300">{astrologer.name}</h3>
                      <p className="text-blue-400/80">{astrologer.title}</p>
                    </div>
                    <div className="bg-blue-900/50 text-blue-300 text-sm px-2 py-1 rounded-md">
                      {astrologer.rating}
                    </div>
                  </div>

                  <div className="flex items-center bg-blue-900/40 rounded-lg p-3 mb-6 group-hover:bg-blue-900/60 transition-colors duration-300">
                    <svg className="w-5 h-5 mr-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300">{astrologer.phone}</span>
                  </div>

                  <div className="flex items-center text-sm text-blue-400 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Experience: {astrologer.experience}
                  </div>

                  <div className="border-t border-blue-800/50 pt-4 group-hover:border-blue-700/50 transition-colors duration-300">
                    <h4 className="text-blue-300 font-semibold mb-3 group-hover:text-blue-200 transition-colors duration-300">Specialties:</h4>
                    <ul className="space-y-2">
                      {astrologer.specialties.map((specialty, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="relative mt-0.5 mr-2 flex-shrink-0">
                            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
                            <svg className="relative w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-blue-200 text-sm group-hover:text-white transition-colors duration-300">{specialty}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 mb-8 text-center relative inline-block">
            <span className="relative z-10">
              Our Spiritual Services
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600/30 rounded-full"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-2xl shadow-xl p-8 md:p-10 text-center relative overflow-hidden mb-16 border border-blue-700/50 group hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://svgur.com/i/upG.svg')] bg-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-800/20 blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-700/20 blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
          <div className="relative z-10">
            <motion.h2
              className="font-sans text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Personalized Spiritual Guidance
            </motion.h2>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-blue-100 group-hover:text-blue-50 transition-colors duration-300">
              Unsure which service is right for you? Let us guide you to the perfect reading.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-blue-900 font-medium py-3 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover/button:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Free 15-min Consultation
              </motion.button>
              <Link href="/contact" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-white hover:bg-opacity-10 border-2 border-white text-white font-medium py-3 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover/button:animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact Our Experts
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Gift Certificate Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-900/80 to-blue-950 rounded-xl shadow-lg p-8 md:p-10 text-center border border-blue-800/50 relative overflow-hidden group hover:border-blue-700/70 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-700/10 blur-[80px] group-hover:blur-[100px] transition-all duration-700"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-600/10 blur-[80px] group-hover:blur-[100px] transition-all duration-700"></div>
          <div className="relative z-10">
            <h3 className="font-sans text-2xl text-blue-100 mb-4 group-hover:text-white transition-colors duration-300">
              Gift Spiritual Wisdom
            </h3>
            <p className="text-blue-300/80 mb-6 max-w-2xl mx-auto group-hover:text-blue-200/90 transition-colors duration-300">
              Share divine guidance with loved ones through our gift certificate program.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 inline-flex items-center shadow-md hover:shadow-lg group/button"
            >
              <svg className="w-5 h-5 mr-2 group-hover/button:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z"></path>
              </svg>
              Purchase Gift Certificate
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.3; transform: scale(0.9); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}