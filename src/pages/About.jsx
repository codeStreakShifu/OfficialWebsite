import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import logoxibpa from "../assets/images/logoxibpa.png";
const GOALS = [
  {
    title: "Empower Brands",
    description: "Provide comprehensive branding solutions that resonate with target audiences and reflect each client's unique identity.",
    icon: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&w=200",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Deliver Excellence",
    description: "Maintain high standards of design, development, and creative execution across all platforms.",
    icon: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&w=200",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Drive Growth",
    description: "Use smart strategy, digital marketing, and storytelling to help clients expand their reach and revenue.",
    icon: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&w=200",
    gradient: "from-pink-500/20 to-red-500/20"
  },
  {
    title: "Foster Innovation",
    description: "Continuously evolve by adopting emerging technologies, trends, and creative techniques.",
    icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&w=200",
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "Build Relationships",
    description: "Cultivate long-term partnerships based on trust, transparency, and measurable success.",
    icon: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&w=200",
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "Promote Inclusivity",
    description: "Champion diversity, inclusivity, and ethical practices in our work and collaborations.",
    icon: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&w=200",
    gradient: "from-yellow-500/20 to-green-500/20"
  }
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-20">
      <ParticlesBackground />
      {/* Enhanced Hero Section with Parallax */}
      <div ref={ref} className="h-[40vh] mb-20 ">
        <motion.div
          style={{ y, opacity }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-1000"
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background: "linear-gradient(to bottom, rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.9))"
            }}
          />
        </motion.div>

        {/* Enhanced About Us Text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="text-center">
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white tracking-wider mb-4 -mt-[45%]"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }}
            >
              ABOUT US
            </motion.h1>
            <motion.div
              className="h-0.5 w-100% bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              opacity={0.3}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        </motion.div>


      </div>



      <div className="container mx-auto px-4 max-w-screen">
        {/* Enhanced Company Introduction */}
        <motion.div
          className="mb-24 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="max-w-screen text-5xl md:text-7xl font-bold tracking-wider text-center pb-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg, rgb(248, 182, 0), rgb(180, 121, 42), rgb(255, 168, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "serif",
              fontWeight: 1050,
            }}
          >
            About VoxEdition Works Inc.
          </motion.h1>

          {/* Animated background shapes */}
          <motion.div
            className="absolute -z-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
              x: [-50, 0, -50],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              top: "0%",
              left: "0%",
            }}
          />



          <div className="grid md:grid-cols-2 gap-12 items-start relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                VoxEdition Works is a full-service information technology products and services company specializing in creative and digital solutions, dedicated to empowering brands, creators, and entrepreneurs through innovative design and strategic marketing.
              </motion.p>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Founded with a passion for visual excellence and purposeful communication, Voxedition Works transforms ideas into powerful digital experiences and the creation of your legacy. From brand identity and web design to worldwide distribution, marketing campaigns, and multimedia production, we deliver tailor-made solutions that drive visibility, engagement, and growth.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                At our core, we believe creativity should be smart, strategy should be bold, and execution should be flawless. That's why we work hand-in-hand with each client to understand their vision and develop a customized roadmap to bring it to life.
              </motion.p>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                With a team of designers, developers, marketers, and branding experts — all fueled by innovation — Voxedition Works is the go-to partner for businesses ready to make an unforgettable impression in the market.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-indigo-500/20 my-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={logoxibpa}
                  alt="IBPA Logo"
                  className="w-32 h-auto object-contain rounded-lg"
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Proud Member of IBPA
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We're proud to announce our official membership with the Independent Book Publishers Association (IBPA),
                  the largest publishing trade association in the United States. This partnership reflects our commitment
                  to excellence in publishing and adherence to the highest industry standards.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Enhanced Decorative Line */}
          <motion.div
            className="w-full h-px my-16 relative overflow-hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Vision Section */}
        <motion.div
          className="mb-20 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative h-64 mb-8 overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
              alt="Vision"
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-6"
              style={{
                background: "linear-gradient(135deg, #60a5fa, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🌟 Our Vision
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              To be the leading creative force empowering brands to communicate boldly, grow strategically, and inspire their audiences through innovative design and immersive experiences.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Enhanced Mission Section */}
        <motion.div
          className="mb-20 grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="order-2 md:order-1 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-6"
              style={{
                background: "linear-gradient(135deg, #34d399, #0d9488)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🎯 Our Mission
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              At Voxedition Works, our mission is to help creators, businesses, and brands scale with purpose and impact. Through tailored strategies, sleek design, compelling content, and cutting-edge digital experiences, we bring ideas to life and turn visions into reality.
            </motion.p>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative overflow-hidden rounded-2xl"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"
                alt="Mission"
                className="w-full rounded-2xl shadow-2xl"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Core Goals Section */}
        <motion.div
          className="mb-16 relative pb-[40%]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              background: [
                "radial-gradient(circle at 30% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <motion.h2
            className="text-4xl font-bold mb-12 text-center pt-[4%] max-w-screen"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg, #fbbf24, #d97706)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🏆 Core Goals
          </motion.h2>          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-8 max-w-screen mx-auto">
            {GOALS.map((goal, index) => (
              <motion.div key={goal.title}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-xl overflow-hidden group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: "transform" }}
              >
                <motion.div
                  className={"absolute w-full inset-0 bg-gradient-to-br " + goal.gradient + " opacity-0 group-hover:opacity-100 transition-opacity duration-1000"}
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ rotate: 720, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex-shrink-0"
                  >
                    <img
                      src={goal.icon}
                      alt={goal.title}
                      className="w-[100%] h-[100%] sm:w-16 sm:h-16 rounded-lg object-cover shadow-lg"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/20 rounded-lg"
                      whileHover={{ opacity: 0 }}
                    />
                  </motion.div>
                  <div className="text-center sm:text-left">
                    <motion.h3
                      className="text-xl font-semibold mb-3 text-white"
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {goal.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {goal.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;