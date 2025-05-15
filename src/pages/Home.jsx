import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPalette, FaChartLine, FaCode, FaBook, FaAward, FaRocket, FaUsers } from "react-icons/fa";

// Updated services with better images
const services = [
  {
    name: "Graphic Design",
    path: "/services/graphic-design",
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
    icon: <FaPalette className="text-3xl mb-4" />,
    description: "Brand identity, print & digital design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3"
  },
  {
    name: "Marketing & Strategy",
    path: "/services/marketing",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    icon: <FaChartLine className="text-3xl mb-4" />,
    description: "Growth-focused marketing solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
  },
  {
    name: "Web Development",
    path: "/services/web-development",
    color: "bg-gradient-to-br from-blue-500 to-indigo-500",
    icon: <FaCode className="text-3xl mb-4" />,
    description: "Modern and Interactive responsive websites",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3"
  },
  {
    name: "Book Publishing",
    path: "/services/book-publishing",
    color: "bg-gradient-to-br from-yellow-500 to-amber-500",
    icon: <FaBook className="text-3xl mb-4" />,
    description: "Write. Publish. Own. with your own branding.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3"
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
    icon: <FaRocket className="text-4xl text-indigo-500 mb-4 mx-auto" />,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality"
  },
  {
    icon: <FaAward className="text-4xl text-purple-500 mb-4 mx-auto" />,
    title: "Award Winning",
    description: "Recognized for excellence in design and innovation"
  },
  {
    icon: <FaUsers className="text-4xl text-pink-500 mb-4 mx-auto" />,
    title: "Expert Team",
    description: "Seasoned professionals in their respective fields"
  }
];

const clients = [
  {
    name: "Google",
    logo: "https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
  },
  {
    name: "Adobe",
    logo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg"
  },
  {
    name: "Amazon",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png"
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
  }
];

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section - Enhanced */}
      <motion.section
        className="min-h-screen relative bg-gradient-to-b from-gray-900/90 via-gray-800/90 to-gray-900/90 text-white flex items-center justify-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ y: y1 }}
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3"
              alt="Tech Background"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/95 z-10"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute inset-0 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        </motion.div>

        {/* Enhanced Content */}
        <div className="w-full px-4 relative z-30">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-8 text-center leading-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Inspiring Creators
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400">
                Scaling Brands
              </span>
            </motion.h1>
            
            <p className="text-lg md:text-xl mb-8 text-center max-w-2xl mx-auto text-gray-300">
              We help brands stand out through sleek design and smart strategy.
            </p>
            <div className="space-x-4 mb-10">
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition duration-300"
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

      {/* Services Section - Enhanced */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ y: y2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 w-full px-4 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions tailored to your needs</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={service.path}>
                  <motion.div
                    className="relative group overflow-hidden rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform text-black duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 ${service.color} opacity-90 transition-opacity duration-300 group-hover:opacity-95`}></div>
                    </div>
                    <div className="relative p-8">
                      {service.icon}
                      <h3 className="text-xl font-semibold text-black mb-2">{service.name}</h3>
                      <p className="text-sm text-black opacity-90">{service.description}</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="w-full px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="w-full px-4 max-w-7xl mx-auto">
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
        <div className="w-full px-4 max-w-7xl mx-auto">
          <h3 className="text-center text-xl text-gray-400 mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                whileHover={{ scale: 1.1 }}
              >
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

      {/* Newsletter Section */}
      <section className="py-40 bg-gray-900">
        <div className="w-full px-4 max-w-7xl mx-auto">
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
};

export default Home;
