import { motion } from "framer-motion";
import { FaBullhorn, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";

const benefits = [
  {
    icon: <FaBullhorn className="text-3xl text-indigo-600" />,
    title: "Brand Awareness",
    desc: "Boost your brand’s visibility with targeted campaigns and creative storytelling.",
  },
  {
    icon: <FaChartLine className="text-3xl text-green-500" />,
    title: "Growth Strategy",
    desc: "Data-driven strategies to accelerate your business growth and ROI.",
  },
  {
    icon: <FaUsers className="text-3xl text-pink-500" />,
    title: "Audience Engagement",
    desc: "Build lasting relationships with your audience through engaging content.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-yellow-400" />,
    title: "Creative Solutions",
    desc: "Innovative marketing ideas tailored to your unique business needs.",
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
  <motion.section
    className="container mx-auto py-16 px-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    {/* Animated Header */}
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      Marketing & Strategy
    </motion.h2>
    <motion.p
      className="text-lg text-gray-700 mb-8 max-w-2xl"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      Unlock your brand’s full potential with our creative marketing and strategic expertise. We blend data, design, and storytelling to drive real results.
    </motion.p>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {benefits.map((b, i) => (
        <motion.div
          key={b.title}
          className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 hover:shadow-2xl hover:-translate-y-1 transition cursor-pointer group"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="p-3 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition">{b.icon}</div>
          <div>
            <h3 className="text-xl font-semibold mb-1 group-hover:text-indigo-600 transition">{b.title}</h3>
            <p className="text-gray-600">{b.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Gallery */}
    <div className="mb-12">
      <h4 className="text-2xl font-bold mb-4 text-gray-800">Work Samples</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map((src, idx) => (
          <motion.div
            key={src}
            className="rounded-lg overflow-hidden shadow hover:shadow-xl cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={src}
              alt={`Marketing sample ${idx + 1}`}
              className="w-full h-32 object-cover group-hover:opacity-80 transition"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>

    {/* Testimonials Slider Placeholder */}
    <div className="mb-12">
      <h4 className="text-2xl font-bold mb-4 text-gray-800">What Our Clients Say</h4>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            className="min-w-[300px] bg-white rounded-xl shadow p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <p className="text-gray-700 mb-2 italic">"{t.text}"</p>
            <div className="text-sm text-gray-500">{t.name}, {t.company}</div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Glowing CTA Button */}
    <div className="flex justify-center">
      <motion.button
        whileHover={{ scale: 1.07, boxShadow: "0 0 16px #6366f1" }}
        className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-indigo-700 transition relative"
      >
        Request This Service
        <span className="absolute inset-0 rounded-full ring-2 ring-indigo-400 animate-pulse pointer-events-none" style={{ zIndex: -1 }}></span>
      </motion.button>
    </div>
  </motion.section>
);

export default Marketing;