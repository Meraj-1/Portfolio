const Footer = () => (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Built with ❤️ by{' '}
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
          >
            [MOHAMMAD MERAJ ANSARI]
          </a>
        </p>
      </div>
    </footer>
  );
  
  export default Footer;
  