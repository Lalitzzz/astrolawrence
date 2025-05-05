// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Generate stars
// function Starfield({ count = 50 }) {
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     const generated = Array.from({ length: count }).map((_, i) => ({
//       id: i,
//       top: Math.random() * 100,
//       left: Math.random() * 100,
//       size: Math.random() * 2 + 1,
//       delay: Math.random() * 5,
//     }));
//     setStars(generated);
//   }, [count]);

//   return (
//     <div className="absolute inset-0 overflow-hidden z-0">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="absolute bg-white rounded-full opacity-80 animate-star-glow"
//           style={{
//             top: `${star.top}%`,
//             left: `${star.left}%`,
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             animationDelay: `${star.delay}s`,
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// }

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const whatsappMessage = `New Contact Form Submission:%0A%0A
//         Name: ${formData.name}%0A
//         Email: ${formData.email}%0A
//         Service: ${formData.service}%0A
//         Message: ${formData.message}`;

//       try {
//         const emailResponse = await fetch("https://formspree.io/f/myyqjqjq", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             ...formData,
//             _subject: `New Contact from ${formData.name} - Service: ${formData.service}`,
//           }),
//         });

//         if (!emailResponse.ok) {
//           throw new Error("Formspree submission failed");
//         }
//       } catch (emailError) {
//         console.log("Email submission failed, fallback to WhatsApp", emailError);
//       }

//       window.open(`https://wa.me/918302650986?text=${whatsappMessage}`, "_blank");
//       alert("Your message has been sent via WhatsApp!");
//       setFormData({ name: "", email: "", service: "", message: "" });
//     } catch (error) {
//       console.error("Error:", error);
//       alert("There was an error. Try contacting us directly on WhatsApp.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="relative py-20 bg-gradient-to-br from-[#0a0e3b] via-[#0f1d45] to-[#1b2a5d] min-h-screen text-white overflow-hidden">
//       <Starfield />
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-6xl mx-auto"
//         >
//           <h1 className="font-serif text-5xl text-center text-blue-300 mb-4 font-bold">
//             Contact Cosmic Wisdom
//           </h1>
//           <p className="text-xl text-center text-blue-100 mb-12">
//             Have questions or ready to book a session? Reach out to us below.
//           </p>

//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Left Section - Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="bg-[#1f2a4a]/80 rounded-3xl shadow-2xl p-10 backdrop-blur-md"
//             >
//               <h2 className="font-serif text-3xl text-blue-200 mb-8 text-center">
//                 Send Us a Message
//               </h2>
//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 {["name", "email", "service", "message"].map((field, idx) => (
//                   <div key={idx}>
//                     <label
//                       htmlFor={field}
//                       className="block text-blue-100 mb-2 font-semibold capitalize"
//                     >
//                       {field === "service" ? "Service Interested In" : `Your ${field}`}
//                     </label>
//                     {field === "service" ? (
//                       <select
//                         id="service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className="w-full px-5 py-3 bg-[#1f2a4a] border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white appearance-none"
//                         required
//                         style={{
//                           maxWidth: '100%',
//                           minHeight: '48px',
//                           overflow: 'hidden',
//                           textOverflow: 'ellipsis',
//                           whiteSpace: 'nowrap'
//                         }}
//                       >
//                         <option value="" disabled className="text-gray-700 bg-white">
//                           Select a service
//                         </option>
//                         <option value="birth-chart" className="text-gray-700 bg-white">
//                           Birth Chart Reading
//                         </option>
//                         <option value="relationship" className="text-gray-700 bg-white">
//                           Relationship Analysis
//                         </option>
//                         <option value="career" className="text-gray-700 bg-white">
//                           Career Guidance
//                         </option>
//                         <option value="other" className="text-gray-700 bg-white">
//                           Other
//                         </option>
//                       </select>
//                     ) : field === "message" ? (
//                       <textarea
//                         id={field}
//                         name={field}
//                         rows="5"
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="w-full px-5 py-3 bg-transparent border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
//                         placeholder="Enter your message"
//                         required
//                       ></textarea>
//                     ) : (
//                       <input
//                         type={field === "email" ? "email" : "text"}
//                         id={field}
//                         name={field}
//                         value={formData[field]}
//                         onChange={handleChange}
//                         className="w-full px-5 py-3 bg-transparent border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
//                         placeholder={`Enter your ${field}`}
//                         required
//                       />
//                     )}
//                   </div>
//                 ))}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//                     }`}
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </button>
//               </form>
//             </motion.div>

//             {/* Right Section - Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="space-y-10"
//             >
//               <div className="bg-[#1f2a4a]/80 rounded-3xl shadow-2xl p-10">
//                 <h2 className="font-serif text-3xl text-blue-200 mb-8 text-center">
//                   Contact Information
//                 </h2>
//                 <div className="space-y-6 text-blue-100">
//                   <InfoItem icon="📍" title="Location" desc="Jaipur" />
//                   <InfoItem icon="📞" title="Phone" desc="918302650986" />
//                   <InfoItem icon="✉️" title="Email" desc="phalodipraveengarg@gmail.com" />
//                 </div>
//               </div>

//               <div className="bg-blue-700 text-white rounded-3xl shadow-2xl p-10">
//                 <h2 className="font-serif text-3xl mb-8 text-center">Business Hours</h2>
//                 <div className="space-y-4 text-sm">
//                   <TimeRow day="Monday - Friday" time="9:00 AM - 9:00 PM" />
//                   <TimeRow day="Saturday" time="10:00 AM - 9:00 PM" />
//                   <TimeRow day="Sunday" time="10:00 AM - 9:00 PM" />
//                 </div>
//                 <div className="mt-6 text-sm text-center">
//                   <h3 className="text-lg font-semibold mb-2">Emergency Readings</h3>
//                   <p>For urgent matters, please call on : <br /> 918302650986</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* WhatsApp Floating Button */}
//         <div className="fixed bottom-6 right-6 z-50">
//           <a
//             href="https://wa.me/918302650986?text=Hello%20Cosmic%20Wisdom,%20I%20would%20like%20to%20inquire%20about%20your%20services"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300"
//           >
//             <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//               <path d="M16.004 3C9.374 3 3.996 8.375 3.996 15.004c0 2.648.977 5.078 2.59 6.969l-1.7 6.222 6.368-1.671a11.975 11.975 0 0 0 4.75.963h.002c6.629 0 12.007-5.376 12.007-12.007S22.633 3 16.004 3zm0 21.844a9.788 9.788 0 0 1-4.991-1.37l-.355-.21-3.779.99 1.01-3.688-.23-.379a9.754 9.754 0 0 1-1.531-5.2c0-5.406 4.396-9.803 9.803-9.803s9.803 4.397 9.803 9.803c-.002 5.408-4.398 9.803-9.803 9.803zm5.365-7.397c-.293-.148-1.73-.859-2.002-.956-.27-.098-.469-.148-.667.148s-.766.957-.939 1.153c-.172.195-.344.222-.637.074s-1.24-.457-2.361-1.457c-.873-.778-1.461-1.74-1.635-2.034-.172-.297-.018-.457.13-.604.134-.134.297-.346.445-.519.15-.172.199-.296.298-.494.098-.197.05-.37-.025-.519-.074-.148-.667-1.611-.915-2.211-.24-.578-.486-.5-.667-.508l-.571-.01c-.196 0-.519.074-.791.37s-1.04 1.016-1.04 2.48 1.064 2.875 1.213 3.074c.148.197 2.096 3.201 5.08 4.49.71.306 1.263.488 1.694.625.713.227 1.36.195 1.872.118.571-.086 1.73-.707 1.975-1.392.244-.684.244-1.27.172-1.393-.074-.122-.267-.197-.56-.344z" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// function InfoItem({ icon, title, desc }) {
//   return (
//     <div className="flex items-center gap-4">
//       <div className="text-2xl">{icon}</div>
//       <div>
//         <h3 className="font-semibold">{title}</h3>
//         <p className="text-blue-100">{desc}</p>
//       </div>
//     </div>
//   );
// }

// function TimeRow({ day, time }) {
//   return (
//     <div className="flex justify-between border-b border-blue-400 pb-2">
//       <span>{day}</span>
//       <span>{time}</span>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Generate stars
function Starfield({ count = 50 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setStars(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full opacity-80 animate-star-glow"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const whatsappMessage = `New Contact Form Submission:%0A%0A
        Name: ${formData.name}%0A
        Email: ${formData.email}%0A
        Service: ${formData.service}%0A
        Message: ${formData.message}`;

      try {
        const emailResponse = await fetch("https://formspree.io/f/myyqjqjq", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Contact from ${formData.name} - Service: ${formData.service}`,
          }),
        });

        if (!emailResponse.ok) {
          throw new Error("Formspree submission failed");
        }
      } catch (emailError) {
        console.log("Email submission failed, fallback to WhatsApp", emailError);
      }

      window.open(`https://wa.me/918302650986?text=${whatsappMessage}`, "_blank");
      alert("Your message has been sent via WhatsApp!");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error. Try contacting us directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative py-10 md:py-20 bg-gradient-to-br from-[#0a0e3b] via-[#0f1d45] to-[#1b2a5d] min-h-screen text-white overflow-hidden">
      <Starfield />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 px-4">
            <h1 className="font-serif text-4xl md:text-5xl text-blue-300 mb-4 font-bold">
              Contact Cosmic Wisdom
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Have questions or ready to book a session? Reach out to us below.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Section - Contact Form */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="bg-[#1f2a4a]/80 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 backdrop-blur-md"
                >
                  <h2 className="font-serif text-2xl md:text-3xl text-blue-200 mb-6 text-center">
                    Send Us a Message
                  </h2>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    {["name", "email", "service", "message"].map((field, idx) => (
                      <div key={idx}>
                        <label
                          htmlFor={field}
                          className="block text-blue-100 mb-2 font-medium capitalize"
                        >
                          {field === "service" ? "Service Interested In" : `Your ${field}`}
                        </label>
                        {field === "service" ? (
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-[#1f2a4a] border border-blue-300/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white appearance-none"
                            required
                          >
                            <option value="" disabled className="text-gray-700 bg-white">
                              Select a service
                            </option>
                            <option value="birth-chart" className="text-gray-700 bg-white">
                              Birth Chart Reading
                            </option>
                            <option value="relationship" className="text-gray-700 bg-white">
                              Relationship Analysis
                            </option>
                            <option value="career" className="text-gray-700 bg-white">
                              Career Guidance
                            </option>
                            <option value="other" className="text-gray-700 bg-white">
                              Other
                            </option>
                          </select>
                        ) : field === "message" ? (
                          <textarea
                            id={field}
                            name={field}
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-[#1f2a4a]/50 border border-blue-300/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200/50"
                            placeholder="Enter your message"
                            required
                          ></textarea>
                        ) : (
                          <input
                            type={field === "email" ? "email" : "text"}
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-[#1f2a4a]/50 border border-blue-300/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200/50"
                            placeholder={`Enter your ${field}`}
                            required
                          />
                        )}
                      </div>
                    ))}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </motion.div>

                {/* Right Section - Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="bg-[#1f2a4a]/80 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 backdrop-blur-md">
                    <h2 className="font-serif text-2xl md:text-3xl text-blue-200 mb-6 text-center">
                      Contact Information
                    </h2>
                    <div className="space-y-5 text-blue-100">
                      <InfoItem icon="📍" title="Location" desc="Jaipur, India" />
                      <InfoItem icon="📞" title="Phone" desc="+91 8302650986" />
                      <InfoItem icon="✉️" title="Email" desc="phalodipraveengarg@gmail.com" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10">
                    <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center">Business Hours</h2>
                    <div className="space-y-3 text-sm md:text-base">
                      <TimeRow day="Monday - Friday" time="9:00 AM - 9:00 PM" />
                      <TimeRow day="Saturday" time="10:00 AM - 9:00 PM" />
                      <TimeRow day="Sunday" time="10:00 AM - 9:00 PM" />
                    </div>
                    <div className="mt-6 text-sm text-center bg-blue-800/30 rounded-lg p-3">
                      <h3 className="text-base md:text-lg font-semibold mb-1 text-blue-100">Emergency Readings</h3>
                      <p className="text-blue-100">For urgent matters, please call:<br /> +91 8302650986</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/918302650986?text=Hello%20Cosmic%20Wisdom,%20I%20would%20like%20to%20inquire%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
            aria-label="Contact via WhatsApp"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.004 3C9.374 3 3.996 8.375 3.996 15.004c0 2.648.977 5.078 2.59 6.969l-1.7 6.222 6.368-1.671a11.975 11.975 0 0 0 4.75.963h.002c6.629 0 12.007-5.376 12.007-12.007S22.633 3 16.004 3zm0 21.844a9.788 9.788 0 0 1-4.991-1.37l-.355-.21-3.779.99 1.01-3.688-.23-.379a9.754 9.754 0 0 1-1.531-5.2c0-5.406 4.396-9.803 9.803-9.803s9.803 4.397 9.803 9.803c-.002 5.408-4.398 9.803-9.803 9.803zm5.365-7.397c-.293-.148-1.73-.859-2.002-.956-.27-.098-.469-.148-.667.148s-.766.957-.939 1.153c-.172.195-.344.222-.637.074s-1.24-.457-2.361-1.457c-.873-.778-1.461-1.74-1.635-2.034-.172-.297-.018-.457.13-.604.134-.134.297-.346.445-.519.15-.172.199-.296.298-.494.098-.197.05-.37-.025-.519-.074-.148-.667-1.611-.915-2.211-.24-.578-.486-.5-.667-.508l-.571-.01c-.196 0-.519.074-.791.37s-1.04 1.016-1.04 2.48 1.064 2.875 1.213 3.074c.148.197 2.096 3.201 5.08 4.49.71.306 1.263.488 1.694.625.713.227 1.36.195 1.872.118.571-.086 1.73-.707 1.975-1.392.244-.684.244-1.27.172-1.393-.074-.122-.267-.197-.56-.344z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-2xl mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-blue-50">{title}</h3>
        <p className="text-blue-100">{desc}</p>
      </div>
    </div>
  );
}

function TimeRow({ day, time }) {
  return (
    <div className="flex justify-between border-b border-blue-400/50 pb-2">
      <span className="text-blue-100">{day}</span>
      <span className="font-medium text-blue-50">{time}</span>
    </div>
  );
}