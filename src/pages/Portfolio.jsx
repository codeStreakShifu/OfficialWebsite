import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "branding",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3",
    description: "Complete brand identity redesign for a tech startup"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3",
    description: "Modern e-commerce solution with seamless user experience"
  },
  {
    id: 3,
    title: "Marketing Campaign",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3",
    description: "Successful digital marketing campaign for product launch"
  },
  {
    id: 4,
    title: "Mobile App Design",
    category: "web",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3",
    description: "Intuitive mobile application for fitness tracking"
  },
  {
    id: 5,
    title: "Frankfurt Book Fair",
    category: "publishing",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3",
    description: "Our showcase at the world's largest trade fair for books, connecting authors to global opportunities.",
    fullDescription: `As active participants at the Frankfurt Book Fair (Frankfurter Buchmesse), we maintain a strong 
    presence at the world's most significant trading place for content and stories. This prestigious event allows us to:
    
    • Connect our authors with international publishers
    • Stay current with global publishing trends
    • Network with industry leaders
    • Showcase our latest publications
    • Explore rights and licensing opportunities`
  }
];

const categories = ["all", "branding", "web", "marketing", "publishing"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    project => selectedCategory === "all" || project.category === selectedCategory
  );

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
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
            alt="Portfolio Hero"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Showcasing our creative solutions and successful projects
          </p>
        </motion.div>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${selectedCategory === category 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="container mx-auto px-4"
        layout
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-[35%]">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            layoutId={`project-${selectedProject.id}`}
            className="bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {selectedProject.fullDescription || selectedProject.description}
              </p>
              {selectedProject.category === 'publishing' && (
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Frankfurter_Buchmesse_Logo.svg/1280px-Frankfurter_Buchmesse_Logo.svg.png"
                    alt="Frankfurt Book Fair Logo"
                    className="h-12 bg-white/90 rounded-lg p-2"
                  />
                  <span className="text-sm text-gray-400">
                    Official Fair Participant
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;