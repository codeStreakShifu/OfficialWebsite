import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { FaPalette, FaChartLine, FaCode, FaBook, FaAward, FaRocket, FaUsers } from "react-icons/fa";
import bgImage from "../assets/images/bg2.jpg"; // Adjust path to where you save the image
import ParticlesBackground from "../components/ParticlesBackground";
import frankfurt from "../assets/images/logofull.jpg"; // Adjust path to your Frankfurt Book Fair image
import globe from "../assets/images/ball.png"; // Adjust path to your globe image
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import gif from "../assets/images/robot.gif"
import messageGif from "../assets/images/message.gif"
import heroAsset from "../assets/images/hero-asset1.png"
import { p } from "framer-motion/client";
import Particle from "../components/Particle"

gsap.registerPlugin(ScrollTrigger);

// Static data for services and stats




// // Parent animation control
// const containerVariant1 = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2, // delay between each letter
//       repeat: Infinity,
//     },
//   },
// };

// // Child animation for each letter
// const letterVariant = {
//   hidden: { y: 0 },
//   visible: {
//     y: [0, -20, 0], // move up, then down (wave motion)
//     transition: {
//       duration: 1.2,     // wave speed
//       ease: "back.out(1.7)",
//       repeat: Infinity,  // loop
//     },
//   },
// };
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
  {
    icon: "🗽",
    title: "Billboard at Times Square",
    description:
      "Showcase your brand in the heart of New York City with our premium billboard services. Gain unmatched exposure and captivate millions of viewers daily.",
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
  // const text = "";
  const globeRef = useRef();
  const butLeftRef = useRef();
  const butRightRef = useRef();
  const h1Ref = useRef();
  const robotRef = useRef();
  const pRef = useRef();
  const heroAssetRef = useRef();
  const leftSideRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      h1Ref.current.querySelectorAll("span"),
      {
        opacity: 0,
        y: 20,
        x: 10,
        color: "#984aafff"
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        letterSpacing: "0.05em",
        delay: 0.2,       // small delay only at the start
        color: "#c4d4ffff",
        stagger: 0.05,
        ease: "back.out(0)",
        scale: 1,
        repeat: -1,       // or any number of repeats you want
        repeatDelay: 3,   // ⬅️ delay ONLY between repeats
      }
    );


    gsap.fromTo(
      pRef.current.querySelectorAll("span"),
      { opacity: 0, y: -20, x: 10, color: "#984aafff", },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        duration: 0.1,
        color: "#ccccccff",
        stagger: 0.06,
        ease: "back.out(0)",
        scale: 1,
        repeat: -1,
        repeatDelay: 5,

      }
    );
  }, []);



  useGSAP(() => {

    // if (!h1Ref.current) return;

    // gsap.to(h1Ref.current, {
    //   y: 10,
    //   borderRadius: "100%",
    //   opacity: 0,
    //   scale: 0.5,
    //   scrollTrigger: {
    //     trigger: h1Ref.current,
    //     start: "top 20%", // ✅ smoother start
    //     end: "bottom 10%",
    //     scrub: true,
    //   },
    //   ease: "power1.inOut",
    // });

    // if (!pRef.current) return;

    // gsap.to(pRef.current, {
    //   y: 10,
    //   borderRadius: "100%",
    //   opacity: 0,
    //   scale: 0.5,
    //   scrollTrigger: {
    //     trigger: pRef.current,
    //     start: "top 20%", // ✅ smoother start
    //     end: "bottom 10%",
    //     scrub: true,
    //   },
    //   ease: "power1.inOut",
    // });

    // if (!butLeftRef.current) return;

    // gsap.to(butLeftRef.current, {

    //   y: 150,
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: butLeftRef.current,
    //     start: "top 30%", // ✅ smoother start
    //     end: "bottom 25%",
    //     scrub: true,
    //   },
    //   ease: "power1.inOut",
    // });

    // if (!butRightRef.current) return;

    // gsap.to(butRightRef.current, {

    //   y: 150,
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: butRightRef.current,
    //     start: "top 30%", // ✅ smoother start
    //     end: "bottom 25%",
    //     scrub: true,
    //   },
    //   ease: "power1.inOut",
    // });


  }, []);



  useGSAP(() => {
    if (!heroAssetRef.current) return;

    gsap.to(heroAssetRef.current, {
      y: -200,
      x: 500,
      rotate: 90,
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: pRef.current,
        start: "bottom 30%", // ✅ smoother start
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });

    if (!leftSideRef.current) return;

    gsap.to(leftSideRef.current, {
      y: -200,
      x: -500,
      rotate: -90,
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: leftSideRef.current,
        start: "bottom 40%", // ✅ smoother start
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });
  }, []);

  useGSAP(() => {
    if (!robotRef.current) return;

    gsap.from(robotRef.current, {
      x: 250,
      rotation: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: robotRef.current,
        start: "top 160%", // ✅ smoother start
        end: "bottom 10%",
        scrub: true,
      },
      ease: "power1.inOut",
    });
  }, []);

  useGSAP(() => {

  }, []);

  useGSAP(() => {

  }, []);

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
        className="min-h-screen relative bg-gradient-to-b from-gray-900/10 via-gray-800/20 to-gray-900/30 text-white flex items-center justify-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <div className="absolute inset-0 z-20">
          <Particle />
        </div>

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
          className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-800/50 to-gray-900/95 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Content */}
        <div className="w-full relative z-20 lg:px-20 px-10 ">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 z-30"
          >
            {/* Left: Text */}
            <div ref={leftSideRef} className="flex-1 text-center lg:text-left lg:mt-20">
              <h1
                ref={h1Ref}
                className="sm:text-[8vw] text-[7vw] md:text-[8vw] lg:text-[3vw] font-retro font-extrabold mb-6
    bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-500 
    hover:from-pink-500 hover:via-purple-400 hover:to-indigo-400 leading-tight
    drop-shadow-[3px_3px_4px_rgba(0,0,0,1)] drop-shadow-[0_0_1.2px_rgba(255,255,255,1)]"
              >
                {["Inspiring Creators", "Scaling Brands"].map((line, lineIndex) => (
                  <div key={lineIndex}>
                    {line.split("").map((char, index) => (
                      <span key={index} className="inline-block py-2 ">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </div>
                ))}
              </h1>

              <p
                ref={pRef}
                className="text-lg md:text-xl mb-8 font-montserrat font-bold text-gray-300"
              >

                {["We help brands stand out through sleek design", "and smart marketing strategy."].map((line, lineIndex) => (
                  <div key={lineIndex}>
                    {line.split("").map((char, index) => (
                      <span key={index} className="hidden sm:inline-block py-2">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </div>
                ))}

                {"We help brands stand out through sleek design and smart marketing strategy.".split("").map((char, index) => (
                  <span key={index} className="sm:hidden inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}

              </p>

              <motion.div variants={itemVariant} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact">
                  <motion.button
                    id="butLeft"
                    ref={butLeftRef}
                    className="animate-float px-7 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
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
                    id="butRight"
                    ref={butRightRef}
                    className="animate-float px-7 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
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
            </div>

            {/* Right: Hero Image */}
            <div className="flex-1 flex justify-center lg:justify-end w-[150%] z-30" ref={heroAssetRef}>
              <img

                src={heroAsset}
                alt="Hero Asset"
                className="w-full max-w-[80vw] md:max-w-md lg:max-w-xl h-auto object-contain bg-transparent opacity-8s0 animate-float-header"
              />
            </div>

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
      <section className="bg-gray-900 min-h-fit py-[10%] w-[100vw]">
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

          <img ref={robotRef} src={gif} alt="" className="lg:w-[20%] md:w-[25%] w-[35%] h-auto absolute lg:right-[-8%] right-[-15%] md:right-[-12%] rotate-[-45deg] top-[20%] md:top-[24%] lg:top-[23%] xl:top-[22%] mix-blend-screen z-1000 opacity-60" />
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
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/50 hover:text-white transition-all duration-300"
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
