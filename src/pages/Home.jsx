import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPalette, FaChartLine, FaCode, FaBook, FaAward, FaRocket, FaUsers } from "react-icons/fa";

const services = [
  { 
    name: "Graphic Design", 
    path: "/services/graphic-design", 
    color: "bg-pink-500",
    icon: <FaPalette className="text-3xl mb-4" />,
    description: "Brand identity, print & digital design"
  },
  { 
    name: "Marketing & Strategy", 
    path: "/services/marketing", 
    color: "bg-green-500",
    icon: <FaChartLine className="text-3xl mb-4" />,
    description: "Growth-focused marketing solutions"
  },
  { 
    name: "Web Development", 
    path: "/services/web-development", 
    color: "bg-blue-500",
    icon: <FaCode className="text-3xl mb-4" />,
    description: "Modern, responsive websites"
  },
  { 
    name: "Book Publishing", 
    path: "/services/book-publishing", 
    color: "bg-yellow-500",
    icon: <FaBook className="text-3xl mb-4" />,
    description: "End-to-end publishing services"
  },
];

const stats = [
  { number: "150+", label: "Happy Clients" },
  { number: "200+", label: "Projects Done" },
  { number: "10+", label: "Years Experience" },
  { number: "15", label: "Team Members" },
];

const features = [
  {
    icon: <FaRocket className="text-4xl text-indigo-500 mb-4" />,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality"
  },
  {
    icon: <FaAward className="text-4xl text-purple-500 mb-4" />,
    title: "Award Winning",
    description: "Recognized for excellence in design and innovation"
  },
  {
    icon: <FaUsers className="text-4xl text-pink-500 mb-4" />,
    title: "Expert Team",
    description: "Seasoned professionals in their respective fields"
  }
];

const clients = [
  "Google", "Microsoft", "Adobe", "Amazon", "Meta", "Apple"
];

const Home = () => (
  <div className="max-w-[100vw] overflow-x-hidden">
    {/* Hero Section */}
    <motion.section
      className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 leading-normal py-2">
            Creative & Digital Agency
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center max-w-2xl mx-auto text-gray-300">
            We help brands stand out through sleek design and smart strategy.
          </p>
          <div className="space-x-4 mb-10">
            <Link to="/contact">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button 
                className="px-8 py-4 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>

    {/* Services Section */}
    <section className="py-20 bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions tailored to your needs</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              key={service.name}
            >
              <Link to={service.path}>
                <motion.div 
                  className={`${service.color} rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition duration-300 transform cursor-pointer backdrop-blur-lg bg-opacity-90`}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-gray-800">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-8 bg-gray-900 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {feature.icon}
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats Section with Gradient Border */}
    <section className="py-20 bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-[1px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-gray-900 p-6 rounded-xl h-full">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trusted By Section */}
    <section className="py-16 bg-gray-800">
      <div className="max-w-[1400px] mx-auto px-4">
        <h3 className="text-center text-xl text-gray-400 mb-8">Trusted by Industry Leaders</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client) => (
            <motion.div
              key={client}
              className="text-gray-500 text-xl font-semibold"
              whileHover={{ scale: 1.1, color: "#fff" }}
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter Section with Enhanced Design */}
    <section className="py-20 bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-12 rounded-3xl backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-semibold mb-4 text-center">Stay Updated</h4>
          <p className="text-gray-300 mb-6 text-center">Subscribe to our newsletter for the latest insights and trends.</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-3 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
            <motion.button 
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-r-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Home;
