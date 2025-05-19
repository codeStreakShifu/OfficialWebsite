import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";

const services = [
	{
		name: "Graphic Design",
		path: "/services/graphic-design",
		desc: "Elevate your brand with stunning visuals. We create compelling designs that captivate your audience across all platforms.",
		icon: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&w=400",
		color: "from-purple-500 to-pink-500",
	},
	{
		name: "Marketing & Strategy",
		path: "/services/marketing",
		desc: "Drive growth with data-driven strategies. Our marketing expertise helps you reach and engage your target audience effectively.",
		icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=400",
		color: "from-blue-500 to-cyan-500",
	},
	{
		name: "Web Development",
		path: "/services/web-development",
		desc: "Build your digital presence with modern, responsive websites that deliver exceptional user experiences.",
		icon: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&w=400",
		color: "from-green-500 to-emerald-500",
	},
	{
		name: "Book Publishing",
		path: "/services/book-publishing",
		desc: "Transform your manuscript into a professionally published book with our comprehensive publishing services.",
		icon: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&w=400",
		color: "from-orange-500 to-yellow-500",
	},
];

const cardVariants = {
	initial: {
		scale: 1,
		boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
	},
	hover: {
		scale: 1.05,
		boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20,
		},
	},
};

const Services = () => (
	<div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-48 pb-20 pb-[35%]">
		<ParticlesBackground />
		{/* Hero Section */}
		<motion.div
			className="container mx-auto px-4 text-center mb-16"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
				Our Services
			</h1>
			<p className="text-xl text-gray-300 max-w-3xl mx-auto">
				Discover how we can help transform your vision into reality with our
				comprehensive range of creative and technical services.
			</p>
		</motion.div>

		{/* Services Grid */}
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{services.map((service, index) => (
					<motion.div
						key={index}
						className="service-card p-6 rounded-lg bg-white/80 backdrop-blur-sm"
						variants={cardVariants}
						initial="initial"
						whileHover="hover"
						whileTap={{ scale: 0.98 }}
					>
						<Link to={service.path}>
							<div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
								<div className="relative h-48">
									<img
										src={service.icon}
										alt={service.name}
										className="w-full h-full object-cover"
									/>
									<div
										className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-80 transition-opacity`}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-2xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors">
										{service.name}
									</h3>
									<p className="text-gray-300 group-hover:text-white transition-colors">
										{service.desc}
									</p>
									<motion.div
										className="mt-4 inline-flex items-center text-yellow-400 group-hover:text-yellow-300"
										whileHover={{ x: 5 }}
									>
										Learn more →
									</motion.div>
								</div>
							</div>
						</Link>
					</motion.div>
				))}
			</div>
		</div>

		{/* Call to Action */}
		<motion.div
			className="container mx-auto px-4 mt-20 text-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1, duration: 0.8 }}
		>
			<Link to="/contact">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold px-8 py-3 rounded-full text-lg hover:shadow-lg transition-shadow"
				>
					Get Started Today
				</motion.button>
			</Link>
		</motion.div>
	</div>
);

export default Services;