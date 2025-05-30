import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";

const servicesHero =
	"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1920";

const services = [
	{
		name: "Graphic Design",
		path: "/services/graphic-design",
		desc: "Elevate your brand with stunning visuals. We create compelling designs that captivate your audience across all platforms.",
		icon: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&w=400",
		color: "from-purple-500 to-pink-500",
		gradient: "from-purple-600/20 via-transparent to-transparent",
	},
	{
		name: "Marketing & Strategy",
		path: "/services/marketing",
		desc: "Drive growth with data-driven strategies. Our marketing expertise helps you reach and engage your target audience effectively.",
		icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=400",
		color: "from-blue-500 to-cyan-500",
		gradient: "from-blue-600/20 via-transparent to-transparent",
	},
	{
		name: "Web Development",
		path: "/services/web-development",
		desc: "Build your digital presence with modern, responsive websites that deliver exceptional user experiences.",
		icon: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&w=400",
		color: "from-green-500 to-emerald-500",
		gradient: "from-green-600/20 via-transparent to-transparent",
	},
	{
		name: "Book Publishing",
		path: "/services/book-publishing",
		desc: "Transform your manuscript into a professionally published book with our comprehensive publishing services.",
		icon: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&w=400",
		color: "from-orange-500 to-yellow-500",
		gradient: "from-orange-600/20 via-transparent to-transparent",
	},
];

const cardVariants = {
	initial: {
		y: 20,
		opacity: 0,
		scale: 0.95,
	},
	animate: {
		y: 0,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
	hover: {
		scale: 1.03,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 10,
		},
	},
};

const Services = () => (
	<div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-20">
		<ParticlesBackground />

		{/* Hero Section */}
		<div className="relative h-[40vh] mb-16 overflow-hidden">
			<motion.div
				initial={{ scale: 1.2 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.5 }}
				className="absolute inset-0"
			>
				<img
					src={servicesHero}
					alt="Services Hero"
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
					Our Services
				</h1>
				<p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
					Discover how we can help transform your vision into reality with our
					comprehensive range of creative and technical services.
				</p>
			</motion.div>
		</div>

		{/* Enhanced Services Grid */}
		<motion.div className="container mx-auto px-4 py-12" layout>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{services.map((service, index) => (
					<motion.div
						key={index}
						layoutId={`service-${index}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						whileHover={{ y: -10 }}
						className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-white/20 transition-colors"
					>
						<Link to={service.path}>
							<div className="relative h-80">
								<img
									src={service.icon}
									alt={service.name}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900" />

								{/* Content Overlay */}
								<div className="absolute inset-0 flex flex-col justify-end p-8">
									<h3
										className={`text-3xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
									>
										{service.name}
									</h3>

									<p className="text-gray-300 text-lg mb-6 opacity-90 leading-relaxed">
										{service.desc}
									</p>

									{/* Enhanced Learn More Button */}
									<motion.div
										className="flex items-center space-x-2 group/button"
										whileHover={{ x: 5 }}
									>
										<span
											className={`text-base font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
										>
											Learn more
										</span>
										<svg
											className={`w-5 h-5 transform transition-transform group-hover/button:translate-x-1 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</motion.div>

									{/* Service Icon */}
									<div
										className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}
									>
										<span className="text-2xl text-white">
											{index === 0 && "🎨"}
											{index === 1 && "📈"}
											{index === 2 && "💻"}
											{index === 3 && "📚"}
										</span>
									</div>
								</div>
							</div>
						</Link>
					</motion.div>
				))}
			</div>
		</motion.div>

		{/* Call to Action */}
		<motion.div
			className="container mx-auto px-4 mt-20 text-center pb-[32%]"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.8 }}
		>
			<Link to="/contact">
				<motion.button
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.95 }}
					className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-xl text-lg 
          shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
				>
					Get Started Today
				</motion.button>
			</Link>
		</motion.div>
	</div>
);

export default Services;