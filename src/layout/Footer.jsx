const Footer = () => (
  <footer className="bg-gray-900 text-white py-6 mt-8">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Agency. All rights reserved.</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
        <a href="#" className="hover:text-indigo-400">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;