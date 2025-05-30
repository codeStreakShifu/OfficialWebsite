import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../components/ParticlesBackground";

const packages = [
	{
		tier: "🌱 Starter Package",
		name: "Indie Launch",
		description:
			"For new authors who want to self-publish under their own name with a professional touch.",
		price: "949",
		turnaround: "2-4 weeks",
		idealFor: "First-time authors",
		features: [
			"Manuscript proofreading (grammar, punctuation)",
			"Three Book Formats (Paperback, Hardback, Kindle/eBook)",
			"Basic cover design (template-based)",
			"Publish it under your own imprint",
		],
		color: "from-green-400 to-emerald-500",
	},
	{
		tier: "🔥 Professional Package",
		name: "Brand Builder",
		description:
			"For authors who want to establish a credible brand and look professional online.",
		price: "1,799",
		turnaround: "3-4 weeks",
		idealFor: "Serious indie authors",
		features: [
			"Line editing (clarity, flow)",
			"eBook + paperback formatting (ePub + PDF interior layout)",
			"Custom cover design (2 initial concepts + 2 free revision)",
			"Personal imprint support + metadata setup",
			"Upload setup for Amazon and many other eCommerce platforms",
			"Branded logo for author or imprint",
			"Advance author website (with domain + contact form)",
			"Book mockups (2 versions for promo)",
		],
		color: "from-purple-400 to-indigo-500",
		popular: true,
	},
	{
		tier: "🚀 Premium Package",
		name: "Author Empire",
		description:
			"Full-service publishing + branding solution for thought leaders, experts, and pro indie authors.",
		price: "3,500",
		turnaround: "8-12 weeks",
		idealFor: "Professionals, coaches, or entrepreneurs",
		features: [
			"Full ebook + print interior formatting (ready for POD)",
			"Fully custom cover design (3 concepts + up to 3 revisions)",
			"Setup and optimization for author imprint + copyright registration",
			"Upload setup for Amazon and many other eCommerce platforms",
			"Custom author brand logo + brand style guide",
			"Advance Professional author website (with domain + maintenance)",
			"Marketing kit with 3D mockups, press release, launch checklist",
			"Email launch sequence (3-5 emails)",
			"1-hour publishing + branding strategy call",
		],
		color: "from-orange-400 to-pink-500",
	},
];

const BookPublishing = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 pb-8">
			<ParticlesBackground />

			{/* Hero Section */}
			<motion.div className="container mx-auto px-4 text-center mb-16">
				<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
					Book Publishing Services
				</h1>
				<p className="text-xl text-gray-300 max-w-3xl mx-auto">
					Transform your manuscript into a professionally published book with our
					comprehensive publishing packages.
				</p>
			</motion.div>

			{/* Packages Grid */}
			<div className="container mx-auto px-4 py-8 pb-[32%]">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{packages.map((pkg, index) => (
						<motion.div
							key={index}
							className={`relative rounded-2xl backdrop-blur-lg bg-white/5 border border-gray-700/50 overflow-hidden h-fit ${
								pkg.popular ? "lg:-mt-4" : ""
							}`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
						>
							{/* Popular badge */}
							{pkg.popular && (
								<div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
									Popular Choice
								</div>
							)}

							{/* Package Content */}
							<div className="p-6">
								<div className="text-2xl mb-2">{pkg.tier}</div>
								<h3
									className={`text-3xl font-bold mb-3 bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}
								>
									{pkg.name}
								</h3>
								<p className="text-gray-400 mb-4">{pkg.description}</p>

								{/* Price */}
								<div className="mb-4">
									<span className="text-4xl font-bold text-white">
										${pkg.price}
									</span>
									<span className="text-gray-400 ml-2">starting at</span>
								</div>

								{/* Features */}
								<div className="space-y-3 mb-4">
									{pkg.features.map((feature, i) => (
										<div key={i} className="flex items-start">
											<svg
												className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												/>
											</svg>
											<span className="text-gray-300 text-sm">
												{feature}
											</span>
										</div>
									))}
								</div>

								{/* Package Details */}
								<div className="space-y-1 text-sm text-gray-400 mb-4">
									<div>Turnaround: {pkg.turnaround}</div>
									<div>Ideal for: {pkg.idealFor}</div>
								</div>

								{/* CTA Button */}
								<Link to="/contact" className="block mt-4">
									<motion.button
										className={`w-full py-3 rounded-xl bg-gradient-to-r ${pkg.color} text-white font-semibold hover:shadow-lg transition-shadow`}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Get Started
									</motion.button>
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BookPublishing;