import { motion } from "framer-motion";
import { useState } from "react";
import messageGif from "../assets/images/message.gif";
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Design",
    category: "design",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    excerpt: "Exploring emerging trends in web design and user experience",
    author: {
      name: "Robert Brooks",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
    }
  },
  {
    id: 2,
    title: "Marketing Strategies for 2024",
    category: "marketing",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    excerpt: "Effective digital marketing techniques for the modern age",
    author: {
      name: "Sarah Smith",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
    }
  },
  {
    id: 3,
    title: "Publishing in the Digital Era",
    category: "publishing",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3",
    excerpt: "How technology is transforming the publishing industry",
    author: {
      name: "Mike Williams",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3"
    }
  }
];

const categories = ["all", "design", "marketing", "publishing"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = blogPosts.filter(
    post => selectedCategory === "all" || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-10">
      {/* Hero Section */}
      <div className="relative h-[35vh] mb-16 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3"
            alt="Blog Hero"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-3">
            Blog & Insights
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Explore our latest thoughts, ideas, and discoveries
          </p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-30 pb-10">
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
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
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

      {/* Blog Posts Grid */}
      <motion.div
        className="container mx-auto px-4"
        layout
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-400">{post.date}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-400">{post.author.name}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Section - Updated padding/margin */}
      <section className="bg-gray-900 min-h-fit py-[10%] w-[100vw] pb-[30%]">
        <div className="w-screen px-4 max-w-7xl mx-auto ">

          <motion.div
            className="relative max-w-4xl mx-auto bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 md:p-12 rounded-3xl backdrop-blur-xl z-10 flex flex-col justify-center items-center overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* GIF above heading */}
            <img
              src={messageGif}
              alt="Message GIF"
              className="w-20 h-20 mb-4 mix-blend-overlay"
            />

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
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full md:rounded-l-none font-semibold hover:shadow-lg hover:shadow-indigo-500/50 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>

          {/* <img ref={robotRef} src={gif} alt="" className="w-[30%] h-auto absolute right-[-12%] rotate-[-38deg] top-[5%] mix-blend-screen z-1000 opacity-50" /> */}
        </div>

      </section>
    </div>
  );
};

export default Blog;
