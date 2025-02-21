import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-darkBlue text-white">
      <div className="container mx-auto text-center px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold"
        >
          Get in <span className="text-accentHighlight">Touch</span>
        </motion.h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-200">
          Have questions? Reach out to us anytime. We're here to help!
        </p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg"
        >
          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <FaPhone className="text-3xl text-accentHighlight" />
              <p className="text-lg mt-2">+1 234 567 890</p>
            </div>
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-3xl text-accentHighlight" />
              <p className="text-lg mt-2">support@smartlend.com</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-3xl text-accentHighlight" />
              <p className="text-lg mt-2">123 SmartLend Street, NY</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="mt-8 space-y-4">
            <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold shadow-md hover:bg-darkBlue transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
