
import { Book, Users, School, Image } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: <Book className="h-10 w-10 text-school-accent" />,
      title: "Academic Excellence",
      description: "Our curriculum is designed to foster critical thinking, problem-solving, and academic mastery across all subjects.",
      link: "/academics"
    },
    {
      icon: <Users className="h-10 w-10 text-school-accent" />,
      title: "Experienced Faculty",
      description: "Our dedicated teachers bring expertise and passion, mentoring students to achieve their full potential.",
      link: "/faculty"
    },
    {
      icon: <School className="h-10 w-10 text-school-accent" />,
      title: "Modern Facilities",
      description: "Students benefit from well-equipped labs, sports fields, library, and technology-enabled classrooms.",
      link: "/about"
    },
    {
      icon: <Image className="h-10 w-10 text-school-accent" />,
      title: "Diverse Activities",
      description: "Beyond academics, we offer sports, cultural programs, and extracurricular activities for holistic development.",
      link: "/events"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-school-navy mb-4">Why Choose Our School?</h2>
          <p className="text-gray-600">At Government Utkrisht Senior Secondary School Daroh, we believe in providing a supportive environment where students can thrive academically and personally.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-school-navy">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link 
                to={feature.link} 
                className="text-school-accent font-medium hover:text-school-navy inline-flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
