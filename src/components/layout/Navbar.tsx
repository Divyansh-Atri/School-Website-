import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Faculty", href: "/faculty" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white shadow-lg py-2" 
        : "bg-school-navy/80 backdrop-blur-md py-4 shadow-lg"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and School Name */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-school-gold p-2 rounded-full shadow-md">
            <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
              <span className="text-school-navy font-bold text-xl">U</span>
            </div>
          </div>
          <div>
            <h1 className={`font-bold text-lg md:text-xl leading-tight ${
              isScrolled ? "text-school-navy" : "text-white"
            }`}>
              <span className={`block text-xs md:text-sm ${
                isScrolled ? "text-gray-600" : "text-school-gold"
              }`}>PM SHRI Government</span>
              Utkrisht Sr. Sec. School
              <span className={`block text-xs md:text-sm ${
                isScrolled ? "text-gray-600" : "text-school-gold"
              }`}>Daroh</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navigation.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.href
                  ? isScrolled 
                    ? "text-white bg-school-navy shadow-md" 
                    : "text-school-navy bg-school-gold shadow-md"
                  : isScrolled 
                    ? "text-school-navy hover:bg-gray-100" 
                    : "text-white hover:bg-white/20"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-md ${
            isScrolled ? "text-school-navy" : "text-white bg-white/20"
          }`} 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 border-t border-gray-200">
          <div className="container mx-auto px-4 flex flex-col gap-2">
            {navigation.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-3 rounded-md transition-colors font-medium ${
                  location.pathname === link.href
                    ? "text-white bg-school-navy"
                    : "text-school-navy hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
