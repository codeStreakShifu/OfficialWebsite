import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { FaPalette, FaChartLine, FaCode, FaBook, FaAward, FaRocket, FaUsers } from "react-icons/fa";
import bgImage from "../assets/images/intro-bg.jpg"; // Adjust path to where you save the image
import ParticlesBackground from "../components/ParticlesBackground";
import frankfurt from "../assets/images/logofull.jpg"; // Adjust path to your Frankfurt Book Fair image

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
  {
    icon: "📚",
    title: "IBPA Member",
    description:
      "As an Independent Book Publishers Association member, we ensure industry-standard publishing practices.",
  },
  {
    icon: "🌎",
    title: "Book Fairs",
    description:
      "Representing authors at major international book fairs including Frankfurt and London.",
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

const FAIR_IMAGES = {
  hero: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000",
  exhibit: "https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?w=1200",
  business: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=1200",
  display: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200",
  meeting: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200",
  networking: "https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=1200"
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



      {/* Join Us Section - Frankfurt Book Fair 2025 */}
      <motion.section
        className="py-16 relative overflow-hidden w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${FAIR_IMAGES.hero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.3)',
            }}
          />
        </div>

       

        <div className="container mx-auto px-4 relative z-10 w-full">
          <motion.div
            className="max-w-full mx-auto "
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div className="text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-72 h-72 mx-auto transform hover:rotate-2 transition-transform"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 2,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="relative">
                  <img
                    src={frankfurt}
                    alt="Frankfurt Book Fair Logo"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-purple-500/20 border-2 border-purple-500/20"
                  />
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl shadow-lg transform rotate-12">
                    <span className="text-white font-bold text-sm">Official IBPA Member</span>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-4 mt-8">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-medium text-indigo-400 tracking-wider">OFFICIAL EVENT ANNOUNCEMENT</span>
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-2 tracking-tight leading-tight">
                    <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent font-sans">
                      VoxEdition Works Presents
                    </span>
                    <span className="block text-3xl md:text-5xl mt-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent font-serif italic">
                      Frankfurt Book Fair 2025
                    </span>
                  </h2>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-500/20">Official IBPA Member</span>
                    <span className="px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500/20">Authorized Representative</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-gray-300 font-light tracking-wide mt-6">
                  <span className="flex items-center gap-2">
                    <span className="text-pink-400">📍</span>
                    Frankfurt, Germany
                  </span>
                  <span className="text-purple-400">•</span>
                  <span className="flex items-center gap-2">
                    <span className="text-indigo-400">📅</span>
                    October 2025
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="prose prose-invert max-w-none mb-8 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-300 mb-6 leading-relaxed">
                VoxEdition Works is proud to announce our participation in the Frankfurt Book Fair 2025 — where literary innovation meets global opportunity! As the world's most significant gathering for the publishing industry, this event attracts over 7,000 exhibitors from 100+ countries.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our dedicated team will showcase your books to an elite network of industry leaders, including major bookstore chains, educational institutions, film producers, and international publishing houses. This premier event is your gateway to multiple revenue streams — from retail distribution and academic adoption to potential film/TV adaptations and foreign language rights. Turn your book into a global brand with unprecedented exposure to decision-makers who can take your work to new heights.
              </p>

              {/* Benefits Grid with updated icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[{
                  icon: "🚀",
                  text: "Global Visibility for Your Book",
                  subtext: "Present to thousands of professionals from 100+ countries—booksellers, distributors, translators, and media representatives"
                },
                {
                  icon: "🤝",
                  text: "Direct Access to Global Opportunities",
                  subtext: "Connect with rights buyers, translation agencies, audiobook producers, and film scouts"
                },
                {
                  icon: "🧠",
                  text: "Professional Representation",
                  subtext: "Expert team handling pitch materials, one-sheets, and rights catalogue inclusion"
                },
                {
                  icon: "📚",
                  text: "Feature in Rights Catalogue",
                  subtext: "Showcase your title to vetted contacts across global publishing and multimedia platforms"
                },
                {
                  icon: "🎤",
                  text: "Spotlight Opportunities",
                  subtext: "Potential inclusion in featured showcases, live readings, and key fair events"
                },
                {
                  icon: "💼",
                  text: "Added Professional Prestige",
                  subtext: "Signal international publishing standards and global market positioning"
                },
                {
                  icon: "🌐",
                  text: "Extended Global Reach",
                  subtext: "Digital showcase presence before, during, and after the fair"
                },
                {
                  icon: "✈️",
                  text: "All-Inclusive Representation",
                  subtext: "Complete management of logistics, promotion, and rights pitching"
                }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-indigo-900/20 hover:from-purple-900/30 hover:to-indigo-900/30 transition-all border border-purple-500/10 hover:border-purple-500/20"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="text-3xl">{benefit.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-gray-100 font-bold mb-2 tracking-wide">{benefit.text}</span>
                      <span className="text-gray-400 text-sm leading-relaxed">{benefit.subtext}</span>
                    </div>
                  </motion.div>
                ))}

              </div>

              <div className="space-y-8 mb-12">
                <p className="text-gradient-blue-purple font-medium text-lg leading-relaxed">
                  🌟 As your dedicated representative at the world's largest book fair, we're offering an exclusive opportunity to showcase your work to over <span className="text-pink-400 font-bold">300,000+ visitors</span> and <span className="text-indigo-400 font-bold">7,000+ industry professionals</span>!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-6 rounded-xl border border-purple-500/20 h-full flex flex-col justify-between relative group overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      <img
                        src={FAIR_IMAGES.display}
                        alt="Book Display Area"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content remains the same */}
                    <h4 className="text-xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                      🎯 Your VIP Success Package
                    </h4>
                    <ul className="space-y-3 text-gray-300 flex-grow">
                      <li className="flex items-center space-x-2 hover:text-purple-400 transition-colors text-lg font-medium">
                        <span className="text-pink-500">✦</span>
                        <span className="tracking-wide">Premium Book Display in VIP Zone</span>
                      </li>
                      <li className="flex items-center space-x-2 hover:text-purple-400 transition-colors text-lg font-medium">
                        <span className="text-indigo-500">✦</span>
                        <span className="tracking-wide">Custom Rights Catalog Design</span>
                      </li>
                      <li className="flex items-center space-x-2 hover:text-purple-400 transition-colors text-lg font-medium">
                        <span className="text-pink-500">✦</span>
                        <span className="tracking-wide">Exclusive Publisher Meetings</span>
                      </li>
                      <li className="flex items-center space-x-2 hover:text-purple-400 transition-colors text-lg font-medium">
                        <span className="text-indigo-500">✦</span>
                        <span className="tracking-wide">Live Fair Updates & Insights</span>
                      </li>
                      <li className="flex items-center space-x-2 hover:text-purple-400 transition-colors text-lg font-medium">
                        <span className="text-pink-500">✦</span>
                        <span className="tracking-wide">Professional Media Package</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 p-8 rounded-xl border border-pink-500/20 relative group overflow-hidden">
                      {/* Background Image with Overlay */}
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <img
                          src={FAIR_IMAGES.business}
                          alt="Business Meeting"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content remains the same */}
                      <span className="text-pink-400 font-bold text-2xl block mb-4">📢 Exclusive Early-Bird Offer</span>
                      <p className="text-lg leading-relaxed">
                        <span className="text-gray-200 font-medium tracking-wide">Secure your spot early and receive </span>
                        <span className="text-indigo-400 font-bold">premium booth positioning</span>
                        <span className="text-gray-200 font-medium tracking-wide"> plus </span>
                        <span className="text-pink-400 font-bold">VIP networking event access</span>
                        <span className="text-gray-200 font-medium tracking-wide">!</span>
                      </p>
                    </div>

                    <motion.div 
                      className="relative group overflow-hidden text-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 rounded-xl border border-indigo-500/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <img
                          src={FAIR_IMAGES.networking}
                          alt="Networking Event"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content remains the same */}
                      <p className="text-xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent font-bold mb-2">
                        🚀 Ready to Take Your Book to the World Stage?
                      </p>
                      <p className="text-gray-400">Spaces are filling up fast - secure your spot today!</p>
                    </motion.div>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                ✅ Ready to Make an Impact?
              </h3>
              <Link to="/contact">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us About the Fair
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
          </motion.div>
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
      </motion.section>      {/* Trusted By Section */}
      <section className="py-16 bg-gray-800 overflow-hidden">
        <div className="w-full max-w-[90vw] mx-auto">
          <h3 className="text-center text-2xl text-gray-400 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="relative">
            <motion.div
              className="flex space-x-12"
              animate={{
                x: [0, -50 * clients.length * 16], // Adjust based on logo width
              }}
              transition={{
                x: {
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{
                width: "fit-content"
              }}
            >
              {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-[200px]"
                  whileHover={{ scale: 1.1, zIndex: 1 }}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-8 w-auto filter brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
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
          className="absolute inset-0 -z-15 opacity-25"
          animate={{
            background: [
              "linear-gradient(45deg, #4f46e5 0%, #7c3aed 50%)",
              "linear-gradient(45deg, #7c3aed 0%, #4f46e5 50%)"
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <div className="container mx-auto px-4 relative z-1 sm:min-h-[50vh] lg:h-[70vh] md:min-h-[45vh] min-h-[45vh]">
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
