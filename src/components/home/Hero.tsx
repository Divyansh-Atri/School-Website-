import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] md:min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/lovable-uploads/main-gate.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-school-navy/60 to-school-navy/50 mix-blend-multiply" />
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-8 md:py-16">
        <div className="max-w-xl md:max-w-2xl text-white bg-school-navy/50 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-2xl border border-white/10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 leading-tight animate-fade-in">
            Welcome to <span className="text-school-gold">PM SHRI GUSSS</span> Daroh
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-10 font-light animate-fade-in">
            PM SHRI Government Utkrisht Senior Secondary School Daroh provides quality education fostering academic excellence, character development and community service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in">
            <Button asChild size="lg" className="bg-school-gold text-school-dark hover:bg-school-gold/90 text-lg font-medium shadow-lg px-8 py-6">
              <Link to="/admissions" className="flex items-center gap-2">
                Admission Process
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-school-navy text-lg font-medium shadow-lg px-8 py-6">
              <Link to="/about" className="flex items-center gap-2">
                Discover More
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
