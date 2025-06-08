import { motion } from "framer-motion";
import { FaBullhorn, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";

// Updated benefits with new imagery
const benefits = [
  {
    icon: <FaBullhorn className="text-3xl text-indigo-600" />,
    title: "Brand Awareness",
    desc: "Boost your brand's visibility with targeted campaigns and creative storytelling.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&w=400"
  },
  {
    icon: <FaChartLine className="text-3xl text-green-500" />,
    title: "Growth Strategy",
    desc: "Data-driven strategies to accelerate your business growth and ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=400"
  },
  {
    icon: <FaUsers className="text-3xl text-pink-500" />,
    title: "Audience Engagement",
    desc: "Build lasting relationships with your audience through engaging content.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=400"
  },
  {
    icon: <FaLightbulb className="text-3xl text-yellow-400" />,
    title: "Creative Solutions",
    desc: "Innovative marketing ideas tailored to your unique business needs.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&w=400"
  },
];

const gallery = [
  "/images/marketing1.jpg",
  "/images/marketing2.jpg",
  "/images/marketing3.jpg",
  "/images/marketing4.jpg",
];

const testimonials = [
  {
    name: "Jane Doe",
    text: "The marketing team elevated our brand and delivered amazing results!",
    company: "Acme Corp",
  },
  {
    name: "John Smith",
    text: "Creative, strategic, and always on time. Highly recommended.",
    company: "StartupX",
  },
];

const Marketing = () => (
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
          src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3"
          alt="Marketing Hero"
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent pb-6">
          Marketing & Strategy
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
          Transform your brand's presence with data-driven strategies and creative solutions
        </p>
      </motion.div>
    </div>

    {/* Benefits Grid */}
    <div className="container mx-auto px-4 mb-20">
      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden group"
          >
            <div className="relative h-48">
              <img 
                src={benefit.image}
                alt={benefit.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300">{benefit.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Stats Section */}
    <motion.div 
      className="container mx-auto px-4 py-16 bg-white/5 backdrop-blur-lg rounded-2xl mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { number: "500+", label: "Successful Campaigns" },
          { number: "95%", label: "Client Satisfaction" },
          { number: "150%", label: "Average ROI" },
          { number: "24/7", label: "Support" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              {stat.number}
            </h3>
            <p className="text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Testimonials with updated styling */}
    <div className="container mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl relative"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl text-gray-300 mb-4">❝</div>
            <p className="text-gray-300 mb-4 italic">{t.text}</p>
            <div className="text-sm font-semibold text-indigo-400">{t.name}</div>
            <div className="text-sm text-gray-500">{t.company}</div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Enhanced CTA Section */}
    <motion.div 
      className="container mx-auto px-4 text-center pb-[30%]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-lg font-semibold group relative overflow-hidden"
      >
        <span className="relative z-10">Start Your Marketing Journey</span>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 transform transition-transform group-hover:scale-x-[2] group-hover:scale-y-[2.5]"/>
      </motion.button>
    </motion.div>
  </div>
);

export default Marketing;