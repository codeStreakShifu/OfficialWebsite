import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "branding",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3",
    description: "Complete brand identity redesign for a tech startup",
    fullDescription: `We craft unique and memorable brand identities tailored to each client’s vision and audience. 
    From logos and typography to color systems and style guides, our branding process ensures consistency and recognition. 
    This service includes:
    
    • Logo design and visual identity system  
    • Brand guidelines for consistent application  
    • Print and digital collateral designs  
    • Strategy sessions to align brand voice and story`
  },
  {
    id: 2,
    title: "Advance Websites",
    category: "web",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3",
    description: "Design and develop professional websites tailored for you, showcasing your work with style and functionality.",
    fullDescription: `Our website solutions are designed to showcase your work and engage your audience. 
    We build responsive, secure, and visually compelling websites that reflect your goals and identity. 
    Key features include:
    
    • Custom layouts tailored to your needs  
    • Mobile-first, responsive design  
    • SEO-friendly structure  
    • Ongoing maintenance and support`
  },
  {
    id: 3,
    title: "Marketing Campaign",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3",
    description: "Successful digital marketing campaign for product launch",
    fullDescription: `We create and execute powerful marketing campaigns that amplify your message and deliver measurable results. 
    Using digital channels, storytelling, and data-driven strategies, we ensure every launch makes an impact. 
    Campaign highlights include:
    
    • Multi-channel strategy (social media, ads, email)  
    • Targeted content and creative assets  
    • Performance tracking and optimization  
    • Tailored messaging for your audience`
  },
  {
    id: 4,
    title: "Billboard",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3",
    description: "Showcase your brand in the heart of New York City with our premium Times Square billboard service.",
    fullDescription: `Our Times Square billboard service places your brand in one of the most iconic advertising locations in the world. 
    With millions of daily impressions, your message gains maximum visibility and cultural impact. This premium marketing service allows you to:
    
    • Reach a diverse, global audience in the busiest district of New York City  
    • Strengthen brand prestige by appearing alongside leading international companies  
    • Create powerful visuals that dominate a world-renowned commercial hub  
    • Elevate campaigns with unmatched exposure, 24/7 visibility, and high foot traffic`
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
  },
  {
    id: 6,
    title: "Global Distribution",
    category: "publishing",
    image: "https://images.unsplash.com/photo-?ixlib=rb-4.0.3", // use a placeholder or find a better image from Unsplash
    description: "Worldwide distribution to major online and physical retailers.",
    fullDescription: `Our global distribution service ensures your work reaches audiences everywhere by partnering with major online and offline retailers. 
  We simplify the process of making your books available worldwide and accessible to readers across markets. 
  With our network, you can:
  
  • Distribute to Amazon, Barnes & Noble, Apple Books, and other major platforms  
  • Access global print-on-demand and eBook markets  
  • Manage inventory efficiently with seamless logistics  
  • Expand your reach and maximize sales potential through trusted retail channels`
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