import { motion } from "framer-motion";
import { FaBook, FaPencilAlt, FaRocket, FaPrint } from "react-icons/fa";

const services = [
  {
    icon: <FaBook className="text-3xl text-amber-500" />,
    title: "Editorial Services",
    description: "Professional editing, proofreading, and manuscript development",
    image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3"
  },
  {
    icon: <FaPencilAlt className="text-3xl text-emerald-500" />,
    title: "Cover Design",
    description: "Eye-catching book covers that capture readers' attention",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3"
  },
  {
    icon: <FaPrint className="text-3xl text-blue-500" />,
    title: "Print & Distribution",
    description: "Global distribution networks for both print and digital formats",
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3"
  },
  {
    icon: <FaRocket className="text-3xl text-purple-500" />,
    title: "Marketing Support",
    description: "Strategic book promotion and author platform development",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3"
  }
];

const BookPublishing = () => (
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
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3"
          alt="Book Publishing Hero"
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent pb-3">
          Book Publishing
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
          Transform your manuscript into a professionally published book
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
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
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

    {/* Process Timeline */}
    <motion.div 
      className="container mx-auto px-4 mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Publishing Journey</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { step: "1", title: "Manuscript Review", color: "amber" },
          { step: "2", title: "Editorial Process", color: "emerald" },
          { step: "3", title: "Design & Layout", color: "blue" },
          { step: "4", title: "Publication", color: "purple" }
        ].map((phase, index) => (
          <motion.div
            key={phase.step}
            className={`p-6 rounded-xl bg-white/5 border border-${phase.color}-500/30`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`text-4xl font-bold text-${phase.color}-500 mb-2`}>
              {phase.step}
            </div>
            <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* CTA Section */}
    <motion.div 
      className="container mx-auto px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-lg font-semibold group relative overflow-hidden"
      >
        <span className="relative z-10">Start Your Publishing Journey</span>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 transform transition-transform group-hover:scale-x-[2] group-hover:scale-y-[2.5]"/>
      </motion.button>
    </motion.div>
  </div>
);

export default BookPublishing;