import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Smith",
    role: "Author",
    company: "TechCorp Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
    text: "Working with VoxEdition Works has been transformative for our brand. Their dedication to excellence and creative approach brought our vision to life.",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    role: "CEO",
    company: "Digital Solutions",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    text: "The team's expertise in web development and design is exceptional. They delivered beyond our expectations and within the timeline.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    company: "CreativeMinds",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    text: "Their marketing strategies helped us reach new audiences and increase our engagement significantly. Highly recommended!",
    rating: 5,
  },
];

const authors = [
  {
    name: "Emily Carter",
    book: "The Dawn of Tomorrow",
    image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3",
    // 🟢 Add a dedicated book cover
    bookCoverURL: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3",

    description:
      "Emily Carter’s *The Dawn of Tomorrow* is a thought-provoking journey through resilience, hope, and transformation. Her work has inspired thousands worldwide.",
    fullDescription: `In *The Dawn of Tomorrow*, Emily Carter weaves a tale of courage and self-discovery. 
Blending fiction with real-world themes of change, her book has become a staple in modern literature. 
Emily speaks frequently about empowerment and storytelling, and her collaboration with VoxEdition Works 
helped elevate her book’s reach to international audiences.`,
  },
  {
    name: "Daniel Ruiz",
    book: "Shadows of the Mind",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3",

    bookCoverURL: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3",
    description:
      "Daniel Ruiz’s *Shadows of the Mind* explores the intricacies of human thought and emotion in a compelling narrative.",
    fullDescription: `*Shadows of the Mind* dives into the depths of psychology and philosophy, 
reflecting Daniel’s deep understanding of human complexity. 
His book has received accolades for its authenticity and depth, and through our support, 
Daniel has reached major retailers and expanded his readership globally.`,
  },
];

const Testimonials = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  return (
    <div className="min-h-100 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-[10%]">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3"
            alt="Testimonials Hero"
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
            Client Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Hear what our clients have to say about their experience with us
          </p>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                    <p className="text-indigo-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Authors Section */}
      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Featured Authors & Books
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <motion.div
              key={author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedAuthor(author)}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 relative cursor-pointer group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">
                {author.name}
              </h3>
              <p className="text-indigo-400 mb-2 italic">{author.book}</p>
              <p className="text-gray-300 text-sm">{author.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div className="container mx-auto px-4 pb-[35%]">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-yellow-500 bg-clip-text text-transparent">
          Video Testimonials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl flex items-center justify-center relative">
            <span className="text-gray-400">Sample Video Placeholder</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                ▶
              </div>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl flex items-center justify-center relative">
            <span className="text-gray-400">Sample Video Placeholder</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                ▶
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Author Modal */}
      {/* Modal for Author Details */}
      {selectedAuthor && (
        <div
          className="fixed inset-0 bg-black/70 flex  items-center justify-center z-50"
          onClick={() => {
            // When clicking outside modal, close it
            setSelectedAuthor(null);
          }}
        >
          <div
            className="bg-white/10 backdrop-blur-lg rounded-xl max-w-lg w-full pb-8 text-center relative"
            onClick={(e) => {
              e.stopPropagation(); // Prevent close when clicking inside modal

              // 🔄 Toggle between AUTHOR IMAGE and BOOK COVER
              // 👉 Replace `authorImageURL` and `bookCoverURL` with actual URLs
              setSelectedAuthor((prev) => ({
                ...prev,
                image:
                  prev.image === prev.bookCoverURL
                    ? prev.authorImageURL
                    : prev.bookCoverURL
              }));
            }}
          >
            {/* 📌 By default show BOOK COVER inside modal */}
            <img
              src={selectedAuthor.bookCoverURL} // <- 🟢 This should be the BOOK COVER URL
              alt={`${selectedAuthor.name} Book Cover`}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            {/* Author details */}
            <h3 className="text-2xl font-bold mb-2">{selectedAuthor.name}</h3>
            <p className="text-indigo-400 italic mb-4">{selectedAuthor.book}</p>
            <p className="text-gray-300">{selectedAuthor.description}</p>
          </div>
        </div>
      )}


    </div>
  );
};

export default Testimonials;
