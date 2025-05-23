
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";

const About = () => {
  const facilities = [
    {
      title: "Classrooms",
      description: "Spacious, well-lit classrooms equipped with smart boards and modern teaching aids.",
      image: "/lovable-uploads/classroom.png"
    },
    {
      title: "Science Laboratories",
      description: "State-of-the-art Physics, Chemistry, and Biology labs with up-to-date equipment.",
      image: "/lovable-uploads/lab.png"
    },
    {
      title: "Computer Lab",
      description: "Modern computer lab with high-speed internet and latest software for digital learning.",
      image: "/lovable-uploads/computer.png"
    },
    {
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources for research and reading.",
      image: "/lovable-uploads/lib.png"
    },
    {
      title: "Sports Facilities",
      description: "Outdoor playgrounds for cricket, football, and athletics, and indoor facilities for badminton and table tennis.",
      image: "/lovable-uploads/sports.png"
    },
    {
      title: "Cultural Hall",
      description: "Multi-purpose hall for cultural events, seminars, and assemblies with modern audio-visual equipment.",
      image: "/lovable-uploads/audi.png"
    }
  ];

  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="About Our School" 
        subtitle="Learn about our history, mission, and educational philosophy"
        backgroundImage="/lovable-uploads/about.png"
      />
      
      {/* History Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-school-navy mb-6">Our History</h2>
              <p className="text-gray-600 mb-4">
              Our school has a rich legacy of educational excellence, with its foundation laid as a primary school in 1869. It evolved into a middle school in 1956, achieved higher secondary status in 1962, and became a senior secondary school in 1986. In 2020, it was designated as an 'Utkrisht School', and in 2024, proudly attained the prestigious status of a PM SHRI School. For over four decades, we have remained steadfast in our commitment to delivering quality education that fosters intellectual growth, physical development, and strong ethical values.
              </p>
              <p className="text-gray-600 mb-4">
                
                Government Utkrisht Senior Secondary School Daroh was established with a vision to provide quality education to the students of Daroh and surrounding areas. Starting with just a handful of classrooms and a small group of dedicated teachers, the school has grown into a premier educational institution.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, the school has continuously evolved, introducing new teaching methodologies, expanding its infrastructure, and adapting to changing educational needs. In 2020, the school was upgraded to Utkrisht (Excellence) status by the Government of Himachal Pradesh in recognition of its academic achievements and overall excellence.
              </p>
              <p className="text-gray-600">
                Today, with over four decades of educational service, the school stands as a testament to the power of quality education in transforming lives and communities.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/saras.png" 
                alt="School History" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 bg-school-gold py-3 px-6 rounded-md shadow-md hidden md:block">
                <p className="text-school-dark font-bold">Since 1975</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-50 p-3 w-16 h-16 rounded-full mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-school-navy mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality education that develops intellectual abilities, character, and physical well-being of students, preparing them to be responsible citizens and lifelong learners who contribute positively to society.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-50 p-3 w-16 h-16 rounded-full mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-school-navy mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a center of educational excellence where students develop critical thinking, creativity, and values in a nurturing environment, becoming confident leaders and innovators capable of meeting the challenges of a rapidly changing world.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-school-navy mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border-t-4 border-school-accent bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mt-4 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84 50.657 50.657 0 0 0-2.658.814m-15.482 0A50.657 50.657 0 0 1 12 13.489a50.657 50.657 0 0 1 8.232-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-school-navy mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in all aspects of education, encouraging students to give their best in academics, sports, and personal development.</p>
            </div>
            
            <div className="text-center p-6 border-t-4 border-school-accent bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mt-4 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-school-navy mb-3">Integrity</h3>
              <p className="text-gray-600">We foster honesty, ethical behavior, and accountability in all interactions, building strong character and moral values in our students.</p>
            </div>
            
            <div className="text-center p-6 border-t-4 border-school-accent bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mt-4 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-school-navy mb-3">Growth Mindset</h3>
              <p className="text-gray-600">We embrace challenges as opportunities for learning and improvement, encouraging innovation, creativity, and continuous personal development.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-school-navy mb-12">Our Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-school-navy">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
