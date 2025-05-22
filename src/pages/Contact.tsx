import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with us for any queries or information"
        backgroundImage="/lovable-uploads/about.png"
      />

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-school-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-school-navy">Phone</h3>
              <p className="text-gray-600">+91-98824-00110</p>
              <p className="text-gray-600">+91-70187-83021</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-school-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-school-navy">Email</h3>
              <p className="text-gray-600">Principaldaroh@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-school-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-school-navy">Address</h3>
              <p className="text-gray-600">Village Daroh, Tehsil Palampur, District Kangra, Himachal Pradesh - 176092</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0404865825784!2d76.13844827640815!3d32.041955921945894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4f6f69c41c19%3A0x4b0262dd26839ddf!2sGovt.%20Senior%20Secondary%20School%20Daroh!5e0!3m2!1sen!2sin!4v1703435398321!5m2!1sen!2sin"
                className="w-full h-[450px] rounded-lg shadow-md"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {/* Direct Link to Google Maps */}
              <a 
                href="https://goo.gl/maps/QZsX8Z9Y8Z9Z9Z9Z9"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-md shadow-md text-school-navy hover:bg-gray-50 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
