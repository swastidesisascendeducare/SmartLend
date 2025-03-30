import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  { icon: FaPhone, text: "+1 234 567 890", label: "Phone" },
  { icon: FaEnvelope, text: "support@smartlend.com", label: "Email" },
  { icon: FaMapMarkerAlt, text: "123 SmartLend Street, NY", label: "Location" },
];

const InputField = ({ type, placeholder, value, setValue }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
    aria-label={placeholder}
  />
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

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

        {/* Contact Email */}
        <p className="text-lg font-semibold mt-6">
          Email us at: <a href="mailto:smartlend25@gmail.com" className="text-accentHighlight underline">smartlend25@gmail.com</a>
        </p>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              type="text"
              placeholder="Your Name"
              value={formData.name}
              setValue={(value) => setFormData({ ...formData, name: value })}
            />
            <InputField
              type="email"
              placeholder="Your Email"
              value={formData.email}
              setValue={(value) => setFormData({ ...formData, email: value })}
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
              aria-label="Your Message"
            ></textarea>

            <motion.button
              type="submit"
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

