

"use client"

import { motion } from 'framer-motion'
import { Star, Sparkles, Heart, Briefcase } from 'lucide-react'
import Testimonials from '@/components/Testimonial'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const services = [
    {
      title: "Birth Chart Reading",
      description: "Detailed analysis of your natal chart to understand your life path and potential.",
      icon: <Star className="w-10 h-10 text-amber-400" />,
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Love & Relationship",
      description: "Insights into your love life, compatibility with partners, and relationship timing.",
      icon: <Heart className="w-10 h-10 text-pink-500" />,
      color: "from-rose-600 to-pink-600"
    },
    {
      title: "Career Guidance",
      description: "Astrological guidance for career choices, timing for changes, and professional growth.",
      icon: <Briefcase className="w-10 h-10 text-blue-400" />,
      color: "from-blue-600 to-cyan-600"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  // Generate random stars data
  const stars = Array.from({ length: 30 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    delay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.5 + 0.1
  }));

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Head>
        <title>Cosmic Insights Astrology</title>
        <meta name="description" content="Professional astrological guidance to help you navigate life's challenges and opportunities" />
      </Head>

      {/* Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              opacity: star.opacity
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/cosmic-texture.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-amber-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" /> Cosmic Guidance Since 2017
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-pink-300 to-violet-300">
            Unlock Your Cosmic Blueprint
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Professional astrological guidance to help you navigate life&rsquo;s challenges and opportunities.
          </motion.p>



          <motion.div variants={itemVariants}>
            <Link href="/contact" className="relative overflow-hidden group bg-gradient-to-r from-amber-400 to-pink-500 hover:from-amber-500 hover:to-pink-600 text-gray-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-amber-500/20">
              <span className="relative z-10">Book a Consultation</span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl text-center text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">Discover how the stars influence your life path with our specialized readings</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden h-full border border-gray-700/50 hover:border-amber-400/30 transition-colors duration-300">
                  <div className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className={`bg-gradient-to-br ${service.color} p-4 rounded-full`}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                    <button className="mt-6 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors duration-200">
                      Learn more →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/galaxy-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-pink-500 mr-4"></div>
                <span className="text-amber-400 font-medium">About Us</span>
              </div>
              <h2 className="font-serif text-4xl text-white mb-6">Meet Our Master Astrologer</h2>
              <p className="text-lg text-gray-300 mb-4">With over 10 years of experience in Vedic and Western astrology, our lead astrologer has helped thousands of clients find clarity and direction.</p>
              <p className="text-lg text-gray-300 mb-6">Certified by PG in Vedic astrology and Gold medalist, we combine traditional techniques with modern psychological insights for accurate readings.</p>
              <div className="flex space-x-4">
                {/* <button className="bg-gradient-to-r from-amber-400 to-pink-500 text-gray-900 font-bold py-3 px-6 rounded-full transition duration-300 hover:shadow-lg hover:shadow-amber-500/30">
                  View Full Profile
                </button>
                <button className="border border-amber-400/30 text-amber-400 font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-amber-400/10">
                  See Certificates
                </button> */}
              </div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.6 }
                }}
                viewport={{ once: true }}
                className="relative mx-auto w-3/4 md:w-full max-w-md"
              >
                {/* Glowing Border Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-pink-500 rounded-xl blur opacity-0"
                />

                {/* Main Image Container */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700/50"
                >
                  {/* Floating Animation */}
                  <motion.img
                    src="/santh.png"
                    alt="Astrologer"
                    initial={{ y: 0 }}
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-auto transform hover:scale-105 transition duration-700"
                  />

                  {/* Name Tag with Pulsing Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
                    initial={{ opacity: 0.9 }}
                    animate={{ opacity: [0.9, 1, 0.9] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  >
                    <h3 className="text-white font-serif text-xl">Praveen Garg</h3>
                    <motion.p
                      className="text-amber-400"
                      animate={{
                        textShadow: [
                          "0 0 8px rgba(251, 191, 36, 0.5)",
                          "0 0 12px rgba(251, 191, 36, 0.8)",
                          "0 0 8px rgba(251, 191, 36, 0.5)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity
                      }}
                    >
                      Master Astrologer
                    </motion.p>
                  </motion.div>
                </motion.div>

                {/* Floating Stars Around Image */}
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-amber-400"
                    initial={{
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    style={{
                      width: `${Math.random() * 6 + 3}px`,
                      height: `${Math.random() * 6 + 3}px`,
                      left: `${50 + (Math.random() * 20 - 10)}%`,
                      top: `${50 + (Math.random() * 20 - 10)}%`,
                      filter: "blur(1px)"
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/cosmic-spiral.png')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl mb-6 text-white">Ready to Discover Your Cosmic Path?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Schedule a consultation today and gain valuable insights into your life&rsquo;s journey.
            </p>


            <div className="flex justify-center space-x-4">

              <Link href="/contact" className="relative overflow-hidden group bg-gradient-to-r from-amber-400 to-pink-500 hover:from-amber-500 hover:to-pink-600 text-gray-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-amber-500/20">
                <span className="relative z-10">Book Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </Link>
              {/* <button className="border border-gray-600 hover:border-amber-400/50 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-gray-800/30">
                Free Compatibility Check
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      /

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
        .animate-twinkle {
          animation: twinkle 4s infinite;
        }
      `}</style>
    </div>
  )
}