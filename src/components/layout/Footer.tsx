import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-school-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-1 rounded-full">
                <div className="bg-school-gold rounded-full h-7 w-7 flex items-center justify-center">
                  <span className="text-school-navy font-bold text-sm">U</span>
                </div>
              </div>
              <h3 className="font-bold text-xl text-school-gold">GUSSS Daroh</h3>
            </div>
            <p className="mb-4 text-gray-200 text-sm">
              Government Utkrisht Senior Secondary School Daroh is committed to providing quality education and shaping the future of our students.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-school-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-school-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-school-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-school-gold transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-school-gold mb-4 pb-2 border-b border-school-navy/30">Quick Links</h3>
            <ul className="space-y-2">
              {["about", "academics", "faculty", "admissions", "gallery", "events"].map(link => (
                <li key={link}>
                  <Link to={`/${link}`} className="text-gray-200 hover:text-school-gold transition-colors capitalize">
                    {link.replace(/^\w/, c => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg text-school-gold mb-4 pb-2 border-b border-school-navy/30">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-school-gold" />
                <span className="text-gray-200">Government Utkrisht Senior Secondary School, Daroh, District Kangra, Himachal Pradesh</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="flex-shrink-0 text-school-gold" />
                <span className="text-gray-200">+91 98824 00110</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="flex-shrink-0 text-school-gold" />
                <span className="text-gray-200">Principaldaroh@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h3 className="font-bold text-lg text-school-gold mb-4 pb-2 border-b border-school-navy/30">School Hours</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Clock size={18} className="flex-shrink-0 text-school-gold" />
                <div>
                  <p className="font-medium text-white">Monday - Saturday</p>
                  <p className="text-gray-200 text-sm">9:00 AM - 3:00 PM</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="flex-shrink-0 text-school-gold" />
                <div>
                  <p className="font-medium text-white">Office Hours</p>
                  <p className="text-gray-200 text-sm">10:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-school-navy/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>© {currentYear} GSSS Daroh. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Website designed and developed by{" "}
              <a
                href="https://github.com/divyanshatri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-school-gold hover:text-school-gold/90 font-medium transition-colors"
              >
                Divyansh Atri
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
