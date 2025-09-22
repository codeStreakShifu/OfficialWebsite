import { motion } from "framer-motion";
import { FaCode, FaMobile, FaRocket, FaCogs } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const services = [
  {
    icon: <FaCode />,
    title: "Custom Web Development",
    description: "Bespoke websites built with modern technologies and best practices",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3"
  },
  {
    icon: <FaMobile />,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring perfect display on all devices",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3"
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds and optimal user experience",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
  },
  {
    icon: <FaCogs />,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your website running smoothly",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3"
  }
];


const WebDevelopment = () => (
  


  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-20">
    {/* Hero Section */}
    <div className="relative h-[60vh] mb-16 overflow-hidden">
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
          alt="Web Development Hero"
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
        <h1 className="text-5xl animate-float md:text-7xl font-retro font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-100 bg-clip-text text-transparent drop-shadow-[3px_3px_4px_rgba(0,0,0,1)] drop-shadow-[0_0_1.2px_rgba(255,255,255,1)]">
          Web Development
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-montserrat font-bold">
          
           Creating powerful digital experiences with cutting-edge technology
        </p>
      </motion.div>
    </div>

    {/* Services Grid */}
    <div className="container mx-auto px-4 mb-20">
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden group"
          >
            <div className="relative h-48">
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="text-2xl text-emerald-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Technologies Section */}
    <motion.div 
      className="container mx-auto px-4 mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wordpress.svg"
        ].map((tech, index) => (
          <motion.div
            key={tech}
            className="flex items-center justify-center p-6 bg-white/5 rounded-xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={tech} alt="Technology" className="h-16 w-16" />
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* CTA Section */}
    <motion.div 
      className="container mx-auto px-4 text-center pb-[30%]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full text-lg font-semibold group relative overflow-hidden"
      >
        <span className="relative z-10">Start Your Project</span>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 transform transition-transform group-hover:scale-x-[2] group-hover:scale-y-[2.5]"/>
      </motion.button>
    </motion.div>
  </div>
);

export default WebDevelopment;