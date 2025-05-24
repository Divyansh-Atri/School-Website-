import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { User } from "lucide-react";

const Faculty = () => {
  // Sample faculty data
  const administration = [
    {
      name: "Sh. Rajneesh Kumar Atri",
      position: "Principal",
      image: "/slideshow/sl1.png",
      education: "M.Ed. (Education), M.Sc. (Mathematics)",
      experience: "15+ years in educational leadership",
      quote: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character — that is the goal of true education."
    },
    {
      name: "Sh. Pradeep Kumar Patial",
      position: "Vice Principal",
      image: "/faculty/pintu.png",
      education: "M.Sc. (Botany), B.Ed. (Education)",
      experience: "20+ years in education",
      quote: "Teachers can change lives with just the right mix of chalk and challenges."
    }
  ];

  const administrativeStaff = [
    {
      name: "Sh. Neeraj Dhiman",
      position: "Superintendent Grade II",
      image: "/faculty/neeraj.png",
      education: "B.Com",
      experience: "15+ years in administration",
      quote: "Efficient administration is the backbone of successful education."
    },
    {
      name: "Sh. Jai Chand",
      position: "Clerk",
      image: "/faculty/jai.png",
      quote: "Supporting education through dedicated service."
    }
  ];

  const class4Staff = [
    {
      name: "Sh. Sahib Singh",
      image: "/faculty/sahib.png",
    },
    {
      name: "Smt. Krishna Devi",
      image: "/faculty/kri.jpeg",
    },
    {
      name: "Smt. Binta Devi",
      image: "/faculty/bi.jpeg",
    }
  ];

  const departments = [
    {
      name: "Science Department",
      faculty: [
        {
          name: "Sh. Pradeep Kumar Patial",
          subject: "Biology",
          image: "/faculty/pintu.png",
          education: "M.Sc. (Botany), B.Ed. (Education)",
          experience: "20+ years"
        },
        {
          name: "Sh. Sanjay Sood ",
          subject: "Chemistry",
          image: "/faculty/chem.png",
          education: "M.Sc. (Chemistry), B.Ed. (Education)",
          experience: "25+ years"
        },
        {
          name: "Sh.Sunil Kumar",
          subject: "Physics",
          image: "/faculty/sunil.png.jpg",
          education: "M.Sc. (Physics), B.Ed. (Education)",
          experience: "15 years"
        },
        {
          name: "Smt. Renu Bala",
          subject: "T.G.T. (Medical)",
          image: "/faculty/renu.png",
          education: "M.Sc. M.Phill, B.Ed. (Education) ",
          experience: "15 years"
        },
        {
          name: "Sh.Gulwant Singh",
          subject: "Lab Assistant (Chemistry & Secondary)",
          image: "/faculty/gul.png",
          experience: "10+ years"
        },
        {
          name: "Smt. Lata Devi ",
          subject: "Lab Assitant (Physics & Biology) ",
          image: "/faculty/lata.png",
          experience: "15+ years"
        }
      ]
    },
    {
      name: "Mathematics Department",
      faculty: [
        {
          name: "Smt. Sharmila Parmar",
          subject: "Mathematics",
          image: "/faculty/sharmila.png",
          education: "M.Sc. (Mathematics), B.Ed. (Education)",
          experience: "25+ years"
        },
        {
          name: "Smt. Naveen Lata",
          subject: "Mathematics",
          image: "/faculty/naveen.png",
          education: "B.Sc. (Mathematics), B.Ed. (Education)",
          experience: "15+ years"
        }
      ]
    },
    {
      name: "Commerce Department",
      faculty: [
        {
          name: "Sh. Akaash Deep Sharma",
          subject: "Accountancy & Business Studies",
          image: "/faculty/akash.png",
          education: "Master of Commerce (M.Com)",
          experience: "25+ years"
        },
        {
          name: "Sh. Vinod Sharma ",
          subject: "Accountancy & Business Studies",
          image: "/faculty/vinod.png",
          education: "Master of Commerce (M.Com)",
          experience: "20+ years"
        }
      ]
    },
    {
      name: "Languages Department",
      faculty: [
        {
          name: "Sh. Dharam Pal",
          subject: "English",
          image: "/faculty/dharam.png",
          education: "M.A.M.Ed.M.Phil (English & Education) NET &SLET (English) Pursuing Ph.D in Education",
          experience: "20+ years"
        },
        {
          name: "Sh. Ravinder Singh",
          subject: "English",
          image: "/faculty/rav.png",
          education: "M.A. (English), B.Ed.",
          experience: "20+ years"
        },
        {
          name: "Smt. Alka Kaistha",
          subject: "Hindi",
          image: "/faculty/alka.png",
          education: "M.A. (Hindi), B.Ed.",
          experience: "30+ years"
        },
        {
          name: "Smt. Archana",
          subject: "Hindi (L.T.)",
          image: "/faculty/arch.png",
          education: "M.A. (Hindi), B.Ed.",
          experience: "20+ years"
        },
        {
          name: "Mr. Amit Sharma",
          subject: "Sanskrit",
          image: "/faculty/amit.png",
          education: "Acharya , B.Ed.",
          experience: "7+ years"
        }
      ]
    },
    {
      name: "Social Sciences Department",
      faculty: [
        {
          name: "Sh. Rakesh Kumar Guleria",
          subject: "Political Science",
          image: "/faculty/guleria.png",
          education: "M.A. (Political Science), B.Ed.",
          experience: "25+ years"
        },
        {
          name: "Sh. Ashok Kumar Rana ",
          subject: "History",
          image: "/faculty/ashok.jpeg",
          education: "M.A. (History), B.Ed.",
          experience: "20+ years"
        },
        {
          name: "Smt. Champa Rani ",
          subject: "T.G.T. (Arts)",
          image: "/faculty/champa.png",
          education: "M.A. (History), M.Ed.",
          experience: "15+ years"
        },
        {
          name: "Smt. Poonam ",
          subject: "T.G.T. Arts",
          image: "/faculty/poonam.png",
          education: "M.A. (Public Administration), B.Ed.",
          experience: "10+ years"
        },
        {
          name: "Smt. Laxmi Barjatia",
          subject: "T.G.T. (Arts)",
          image: "/faculty/laxmi.png",
          education: "M.A. (English), B.Ed.",
          experience: "10+ years"
        }
      ]
    },
    {
      name: "Department of Vocational and Applied Sciences",
      faculty: [
        {
          name: "Sh. Ajay Sood",
          subject: "Physical Education",
          image: "/faculty/ajay.png",
          education: "Diploma in Physical Education",
          experience: "20+ years"
        },
        {
          name: "Smt. Neena Devi",
          subject: "Arts & Crafts",
          image: "/faculty/neena.png",
          education: "M.A. (English), B.Ed & Diploma in Arts and Crafts",
          experience: "15+ years"
        },
        {
          name: "Smt. Minakshi Chambial ",
          subject: "Computer Science",
          image: "/faculty/min.jpeg",
          education: "MSC. (Computer Science) / IT",
          experience: "15+ years"
        },
        {
          name: "Sh. Naresh Kumar Sharma ",
          subject: "Computer Science",
          image: "/faculty/naresh.png",
          education: "MSC. (Computer Science) / IT",
          experience: "15+ years"
        },
        {
          name: "Ms. Sakshi Sharma ",
          subject: "Agriculture ",
          image: "/faculty/sak.jpeg",
          education: "M.Sc. (Agriculture)",
          experience: "15+ years"
        },
        {
          name: "Sh. Rajinder Kumar",
          subject: "Private Security",
          image: "/faculty/raj.jpeg",
          education: "Ex Service Man with desired qualification",
          experience: "15+ years"
        },
         {
          name: "Sh. Rajesh Guleria",
          subject: "Assistant Librarian",
          image: "/faculty/rajesh.png",
          experience: "15+ years"
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <PageHeader 
        title="Our Faculty" 
        subtitle="Meet our dedicated team of educators committed to academic excellence"
        backgroundImage="/lovable-uploads/school.png"
      />

      {/* Faculty Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-school-navy mb-4">Dedicated to Excellence</h2>
            <p className="text-gray-600">
              Our faculty members are the backbone of our institution. Each educator brings a wealth of knowledge, experience, and passion to the classroom. They are committed to nurturing young minds and helping each student achieve their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-school-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-school-navy">Qualified Educators</h3>
              <p className="text-gray-600">All our teachers hold advanced degrees in their respective fields with proper teaching certifications.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-school-navy">Continuous Learning</h3>
              <p className="text-gray-600">Our teachers regularly attend professional development programs to enhance their teaching methodologies.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-school-navy">Student Mentorship</h3>
              <p className="text-gray-600">Teachers serve as mentors, guiding students in academics and personal development beyond the classroom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-navy mb-12">School Administration</h2>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Principal and Vice Principal */}
            {administration.map((admin, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-[400px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                    <img 
                      src={admin.image} 
                      alt={admin.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        aspectRatio: '3/4'
                      }}
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-2xl font-bold text-school-navy mb-2">{admin.name}</h3>
                    <p className="text-school-accent font-medium text-lg mb-4">{admin.position}</p>
                    <div className="space-y-2 mb-6">
                      <p><span className="font-medium">Education:</span> {admin.education}</p>
                      <p><span className="font-medium">Experience:</span> {admin.experience}</p>
                    </div>
                    <blockquote className="border-l-4 border-school-gold pl-4 italic text-gray-600">
                      "{admin.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}

            {/* Administrative Staff */}
            {administrativeStaff.map((staff, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-[400px] relative overflow-hidden">
                    {staff.image ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                        <img 
                          src={staff.image} 
                          alt={staff.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          style={{
                            objectFit: 'cover',
                            objectPosition: 'center 20%',
                            aspectRatio: '3/4'
                          }}
                        />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                        <User className="h-20 w-20 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-2xl font-bold text-school-navy mb-2">{staff.name}</h3>
                    <p className="text-school-accent font-medium text-lg mb-4">{staff.position}</p>
                    <blockquote className="border-l-4 border-school-gold pl-4 italic text-gray-600">
                      "{staff.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-navy mb-12">Academic Departments</h2>

          {departments.map((department, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl font-bold text-school-navy mb-8">{department.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {department.faculty.map((member, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <div className="aspect-[4/5] relative overflow-hidden rounded-t-lg group">
                      {member.image ? (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            style={{ 
                              objectFit: 'cover',
                              objectPosition: 'center 15%',
                            }}
                          />
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                          <User className="h-20 w-20 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="p-6 border-t border-gray-100">
                      <h4 className="text-xl font-bold text-school-navy mb-2">{member.name}</h4>
                      <p className="text-school-accent font-medium mb-2">{member.subject}</p>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{member.education}</p>
                        <p>{member.experience}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Class 4th Staff */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-navy mb-12">Class IV Staff</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {class4Staff.map((staff, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[4/5] relative overflow-hidden rounded-t-lg group">
                  {staff.image ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img 
                        src={staff.image} 
                        alt={staff.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center 15%',
                        }}
                      />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                      <User className="h-20 w-20 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-6 border-t border-gray-100">
                  <h4 className="text-xl font-bold text-school-navy mb-2">{staff.name}</h4>
                  <p className="text-school-accent font-medium mb-2">Class IV Staff</p>
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

export default Faculty;
