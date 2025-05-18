import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-20 ">
      {/* Hero Section with Parallax */}
      <div className="relative h-[40vh] mb-20 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
        </motion.div>

        {/* Added About Us Text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider">
            ABOUT US
          </h1>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Company Introduction */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-300 tracking-wider text-center pb-8"
            style={{
              background: "linear-gradient(to right,rgb(248, 182, 0),rgb(180, 121, 42))",
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              fontFamily: "serif",
              fontWeight: 1050,
            }}
          >
            About VoxEdition Works Inc.
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                Voxedition Works is a full-service creative and digital agency dedicated to empowering brands, creators, and entrepreneurs through innovative design, strategic marketing, and impactful storytelling.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Founded with a passion for visual excellence and purposeful communication, Voxedition Works transforms ideas into powerful digital and print experiences. From brand identity and web design to publishing, marketing campaigns, and multimedia production, we deliver tailor-made solutions that drive visibility, engagement, and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                At our core, we believe creativity should be smart, strategy should be bold, and execution should be flawless. That's why we work hand-in-hand with each client to understand their vision and develop a customized roadmap to bring it to life.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                With a team of designers, developers, marketers, writers, and branding experts — all fueled by innovation — Voxedition Works is the go-to partner for businesses ready to make an unforgettable impression in the market.
              </p>
            </motion.div>
          </div>

          {/* Decorative Line */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-16"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="mb-20 text-center relative"
          {...fadeIn}
        >
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
            alt="Vision"
            className="w-full h-64 object-cover rounded-2xl mb-8 opacity-75"
          />
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            🌟 Our Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To be the leading creative force empowering brands to communicate boldly, grow strategically, and inspire their audiences through innovative design and storytelling.
          </p>
        </motion.div>

        {/* Mission Section with Side Image */}
        <motion.div
          className="mb-20 grid md:grid-cols-2 gap-8 items-center"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              🎯 Our Mission
            </h2>
            <p className="text-xl text-gray-300">
              At Voxedition Works, our mission is to help creators, businesses, and brands scale with purpose and impact. Through tailored strategies, sleek design, compelling content, and cutting-edge digital experiences, we bring ideas to life and turn visions into reality.
            </p>
          </div>
          <motion.div
            className="order-1 md:order-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"
              alt="Mission"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Core Goals Section */}
        <motion.div
          className="max-w-screen mb-16 min-h-[100vh] bg-gradient-to-b from-gray-900/70 to-gray-900/90 px-8 pt-[4%] rounded-5% lg:pb-[30%] md:pb-[15%] sm:pb-[30%] pb-[20%]"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent pt-[4%]">
            🏆 Core Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Empower Brands",
                description: "Provide comprehensive branding solutions that resonate with target audiences and reflect each client's unique identity.",
                icon: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&w=200"
              },
              {
                title: "Deliver Excellence",
                description: "Maintain high standards of design, development, and creative execution across all platforms.",
                icon: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&w=200"
              },
              {
                title: "Drive Growth",
                description: "Use smart strategy, digital marketing, and storytelling to help clients expand their reach and revenue.",
                icon: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&w=200"
              },
              {
                title: "Foster Innovation",
                description: "Continuously evolve by adopting emerging technologies, trends, and creative techniques.",
                icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&w=200"
              },
              {
                title: "Build Relationships",
                description: "Cultivate long-term partnerships based on trust, transparency, and measurable success.",
                icon: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&w=200"
              },
              {
                title: "Promote Inclusivity",
                description: "Champion diversity, inclusivity, and ethical practices in our work and collaborations.",
                icon: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&w=200"
              }
            ].map((goal, index) => (
              <motion.div
                key={goal.title}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-xl overflow-hidden group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-4 items-start">
                  <img
                    src={goal.icon}
                    alt={goal.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{goal.title}</h3>
                    <p className="text-gray-300">{goal.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;