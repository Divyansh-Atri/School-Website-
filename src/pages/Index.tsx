import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Slideshow from "@/components/home/Slideshow";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Slideshow Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-school-navy mb-4">
              Life at PM SHRI GUSSS Daroh
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the vibrant learning environment and daily activities that shape our students' educational journey.
            </p>
          </div>
          <Slideshow />
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-school-navy mb-6">Welcome to PM SHRI Government Utkrisht Senior Secondary School Daroh</h2>
              <p className="text-gray-600 mb-6">
              Our school has a rich legacy of educational excellence, with its foundation laid as a primary school in 1869. It evolved into a middle school in 1956, achieved higher secondary status in 1962, and became a senior secondary school in 1986. In 2020, it was designated as an 'Utkrisht School', and in 2024, proudly attained the prestigious status of a PM SHRI School. For over four decades, we have remained steadfast in our commitment to delivering quality education that fosters intellectual growth, physical development, and strong ethical values. </p>
              <p className="text-gray-600 mb-6">
                Our vision is to create a learning environment where students develop critical thinking skills, creativity, and a passion for lifelong learning. We believe in holistic education that prepares students not just for examinations but for life's challenges.
              </p>
              <Button asChild className="bg-school-navy hover:bg-opacity-90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/school.png"
                alt="School Building"
                className="rounded-lg shadow-lg w-full h-auto"
              />

              <div className="absolute -bottom-6 -left-6 bg-school-gold p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-xl font-bold text-school-dark">Established 1869</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

     
      {/* CTA Section */}
     {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-navy mb-12">Quick Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <a 
              href="http://hpbose.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-school-navy mb-3">HP Board of School Education</h3>
              <p className="text-gray-600 mb-4">Access official board information, results, and notifications</p>
              <div className="text-school-accent flex items-center">
                Visit Website 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </a>

            <a 
              href="https://education.hp.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-school-navy mb-3">HP Education Department</h3>
              <p className="text-gray-600 mb-4">Stay updated with educational policies and announcements</p>
              <div className="text-school-accent flex items-center">
                Visit Website 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </a>

            <a 
              href="https://samagra.education.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-school-navy mb-3">Samagra Shiksha</h3>
              <p className="text-gray-600 mb-4">Learn about educational schemes and initiatives</p>
              <div className="text-school-accent flex items-center">
                Visit Website 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </a>

            <a 
              href="https://ncert.nic.in/textbook.php?fhbr1=6-12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-school-navy mb-3">NCERT E-Books</h3>
              <p className="text-gray-600 mb-4">Access free NCERT textbooks and educational resources</p>
              <div className="text-school-accent flex items-center">
                Visit Website 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Index;
