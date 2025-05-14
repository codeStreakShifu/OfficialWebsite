import { Link } from "react-router-dom";

const services = [
  { name: "Graphic Design", path: "/services/graphic-design", desc: "Branding, print, and digital design." },
  { name: "Marketing & Strategy", path: "/services/marketing", desc: "Campaigns, social, and growth." },
  { name: "Web Development", path: "/services/web-development", desc: "Modern, responsive websites." },
  { name: "Book Publishing", path: "/services/book-publishing", desc: "Editing, layout, and distribution." },
];

const Services = () => (
  <section className="container mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-8">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {services.map((service) => (
        <Link to={service.path} key={service.name}>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Services;