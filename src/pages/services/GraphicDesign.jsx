import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Brand Identity",
    description: "Create a memorable brand with custom logos, color palettes, and design systems.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&w=400",
  },
  {
    title: "Digital Design",
    description: "Engage your audience with social media graphics, digital ads, and web assets.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&w=400",
  },
  {
    title: "Print Design",
    description: "Stand out with professional brochures, business cards, and marketing materials.",
    image: "https://images.unsplash.com/photo-1611532736597-8bc042c48f84?ixlib=rb-4.0.3&w=400",
  }
];

const GraphicDesign = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-20">
    {/* Hero Section */}
    <div className="relative h-[50vh] mb-16 overflow-hidden">
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3"
          alt="Graphic Design Hero"
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent pb-4">
          Graphic Design Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mt-2">
          Transform your brand with stunning visuals that capture attention and inspire action
        </p>
      </motion.div>
    </div>

    {/* Services Grid */}
    <div className="container mx-auto px-4 mb-20">
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-purple-400">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Portfolio Section */}
    <motion.div 
      className="container mx-auto px-4 mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <img 
              src={`https://picsum.photos/400?random=${item}`}
              alt={`Portfolio item ${item}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* CTA Section */}
    <motion.div 
      className="container mx-auto px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Link to="/contact" className="">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold text-white hover:shadow-lg transition-shadow"
        >
          Start Your Design Project
        </motion.button>
      </Link>
    </motion.div>
  </div>
);

export default GraphicDesign;