import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhone className="text-2xl text-blue-400" />,
    title: "Phone",
    details: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: <FaEnvelope className="text-2xl text-green-400" />,
    title: "Email",
    details: "hello@voxedition.com",
    link: "mailto:hello@voxedition.com"
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl text-red-400" />,
    title: "Location",
    details: "123 Creative Street, Design District",
    link: "https://maps.google.com"
  },
  {
    icon: <FaClock className="text-2xl text-purple-400" />,
    title: "Hours",
    details: "Mon-Fri: 9AM - 6PM",
    link: null
  }
];

const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({});

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Let's bring your vision to life
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
            <form className="space-y-6">
              {formStep === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFormStep(2)}
                    className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium"
                    type="button"
                  >
                    Next Step
                  </motion.button>
                </motion.div>
              )}

              {formStep === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed</label>
                    <select className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 outline-none">
                      <option>Web Development</option>
                      <option>Graphic Design</option>
                      <option>Marketing</option>
                      <option>Book Publishing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 outline-none"
                    ></textarea>
                  </div>
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormStep(1)}
                      className="flex-1 px-8 py-3 bg-gray-700 rounded-lg font-medium"
                      type="button"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium"
                      type="submit"
                    >
                      Send Message
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link ? "_blank" : undefined}
                rel={info.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="p-3 bg-white/5 rounded-lg">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                  <p className="text-gray-300">{info.details}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645756805974!5m2!1sen!2s"
            className="w-full h-96 rounded-xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;