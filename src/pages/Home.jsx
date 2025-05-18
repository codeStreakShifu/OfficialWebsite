import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { FaPalette, FaChartLine, FaCode, FaBook, FaAward, FaRocket, FaUsers } from "react-icons/fa";
import bgImage from "../assets/images/intro-bg.jpg"; // Adjust path to where you save the image
import ParticlesBackground from "../components/ParticlesBackground";

// Static data for services and stats
const services = [
  {
    icon: "🎨",
    title: "Design",
    description:
      "Crafting visually stunning and user-friendly interfaces that captivate your audience.",
  },
  {
    icon: "💻",
    title: "Development",
    description:
      "Building robust and scalable web solutions using cutting-edge technologies.",
  },
  {
    icon: "📱",
    title: "Mobile",
    description:
      "Creating seamless mobile experiences that engage users across all devices.",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "K+", label: "Lines of Code" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const features = [
  {
    icon: <FaRocket className="text-4xl text-indigo-500 mb-4 mx-auto" />,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality",
  },
  {
    icon: <FaAward className="text-4xl text-purple-500 mb-4 mx-auto" />,
    title: "Award Winning",
    description: "Recognized for excellence in design and innovation",
  },
  {
    icon: <FaUsers className="text-4xl text-pink-500 mb-4 mx-auto" />,
    title: "Expert Team",
    description: "Seasoned professionals in their respective fields",
  },
];

const clients = [
  {
    name: "Google",
    logo: "https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png",
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
  },
  {
    name: "Adobe",
    logo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
  },
  {
    name: "Amazon",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
  },
];

const benefits = [
  {
    icon: '🚀',
    title: 'Fast Delivery',
    description: 'Quick turnaround time without compromising on quality.'
  },
  {
    icon: '💡',
    title: 'Innovative Solutions',
    description: 'Cutting-edge approaches to solve complex challenges.'
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    description: '24/7 support and maintenance for your peace of mind.'
  },
  {
    icon: '⚡',
    title: 'Performance First',
    description: 'Optimized solutions that deliver blazing-fast results.'
  },
  {
    icon: '🎯',
    title: 'Target-Oriented',
    description: 'Focused approach to achieve your business goals.'
  },
  {
    icon: '🛡️',
    title: 'Secure & Reliable',
    description: 'Built with security and reliability at its core.'
  }
];

const sectionVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Home = () => {
  // Add a custom animation variant for staggered children
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-5, 5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <ParticlesBackground />
      {/* Hero Section */}
      <motion.section
        className="min-h-screen relative bg-gradient-to-b from-gray-900/50 via-gray-800/50 to-gray-900/90 text-white flex items-center justify-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        {/* Background Image with parallax effect */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Overlay with gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/80 to-gray-900/80 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Content */}
        <div className="w-full px-4 relative z-20">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="max-w-screen mx-2xl flex flex-col justify-center items-center text-center"
          >            <motion.h1
              variants={itemVariant}
              className="min-w-fit text-[5.3vw] lg:text-6xl font-bold mb-0 lg:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-400 to-pink-500 hover:from-pink-500 hover:via-purple-400 hover:to-indigo-400 leading-normal py-2 drop-shadow-[3px_3px_4px_rgba(0,0,0,1)] drop-shadow-[0_0_1.2px_rgba(255,255,255,1)]"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              Inspiring Creators • Scaling Brands
            </motion.h1>
            <motion.p
              variants={itemVariant}
              className="text-[3.5vw] md:text-2xl mb-8 text-center max-w-2xl mx-auto text-white-300"
            >
              We help brands stand out through sleek design and smart strategy.
            </motion.p>
            <motion.div variants={itemVariant} className="space-x-4 mb-10">
              <Link to="/contact">
                <motion.button
                  className="px-7 py-3 bg-gradient-to-r from-indigo-600 sm:text-[2.5vw] lg:text-2xl to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  className="px-7 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 sm:text-[2vw] lg:text-2xl transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    color: "#111827",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
                variants={itemVariant}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="text-3xl text-indigo-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features/Benefits Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(31, 41, 55, 0.4)",
                }}
              >
                <motion.div 
                  className="text-4xl text-indigo-400 mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-gradient-to-b from-gray-800 to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariant}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={floatingAnimation}
                  className="text-4xl md:text-5xl font-bold text-indigo-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.2
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=", "
                    suffix={stat.suffix}
                  />
                </motion.div>
                <motion.p
                  className="text-gray-400 mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-800">
        <div className="w-full px-4 max-w-7xl mx-auto">
          <h3 className="text-center text-xl text-gray-400 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clients.map((client) => (
              <motion.div key={client.name} whileHover={{ scale: 1.1 }}>
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-8 w-auto filter brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Updated padding/margin */}
      <section className="bg-gray-900 min-h-fit py-[10%]">
        <div className="w-screen px-4 max-w-7xl mx-auto">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 md:p-12 rounded-3xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl md:text-2xl font-semibold mb-3 md:mb-4 text-center">
              Stay Updated
            </h4>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 text-center px-2">
              Subscribe to our newsletter for the latest insights and trends.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-0 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-auto flex-grow px-4 md:px-6 py-3 rounded-full md:rounded-r-none bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.button
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full md:rounded-l-none font-semibold hover:shadow-lg hover:shadow-indigo-500/50 whitespace-nowrap mb-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            background: [
              "linear-gradient(45deg, #4f46e5 0%, #7c3aed 100%)",
              "linear-gradient(45deg, #7c3aed 0%, #4f46e5 100%)"
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <div className="container mx-auto px-4 relative z-10 sm:min-h-[50vh] lg:h-[70vh] md:min-h-[45vh] min-h-[45vh]">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Vision?</h2>
            <p className="text-xl text-gray-300 mb-8">Let's create something extraordinary together.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
