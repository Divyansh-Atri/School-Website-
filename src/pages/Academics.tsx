import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { Book } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Academics = () => {
  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Academic Programs" 
        subtitle="Discover our comprehensive curriculum across all grade levels"
        backgroundImage="/lovable-uploads/acadback.png"
      />
      
      {/* Academic Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-school-navy mb-4">Our Academic Approach</h2>
            <p className="text-gray-600">
              At PM SHRI Government Utkrisht Senior Secondary School Daroh, we offer comprehensive educational programs that focus on academic excellence while fostering critical thinking, creativity, and character development. Our curriculum follows the guidelines set by the Himachal Pradesh Board of School Education with additional enrichment activities to enhance learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-school-accent">
              <Book className="w-12 h-12 text-school-accent mb-4" />
              <h3 className="text-xl font-bold mb-3 text-school-navy">Student-Centered Learning</h3>
              <p className="text-gray-600">Our teaching methodologies focus on individual student needs and learning styles, ensuring personalized attention and development.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-school-accent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-school-accent mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              <h3 className="text-xl font-bold mb-3 text-school-navy">Holistic Development</h3>
              <p className="text-gray-600">We emphasize both academic and non-academic areas, including sports, arts, and life skills for well-rounded development.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-school-accent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-school-accent mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
              <h3 className="text-xl font-bold mb-3 text-school-navy">Technology Integration</h3>
              <p className="text-gray-600">Modern technology is integrated into our teaching methods to enhance learning experiences and prepare students for the digital age.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Educational Levels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-navy mb-12">Academic Levels</h2>
          
          <Tabs defaultValue="upper-primary" className="max-w-4xl mx-auto">
            <TabsList className="flex overflow-x-auto whitespace-nowrap mb-8">
              <TabsTrigger value="upper-primary">Upper Primary</TabsTrigger>
              <TabsTrigger value="secondary">Secondary</TabsTrigger>
              <TabsTrigger value="senior-secondary">Senior Secondary</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upper-primary" className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/primary.png" 
                    alt=" Primary Section" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-school-navy mb-4">Upper Primary Section (Classes 6-8)</h3>
                  <p className="text-gray-600 mb-4">
                    Our upper primary section focuses on building strong foundations in language, mathematics, environmental science, and creative arts. We use play-based and activity-oriented teaching methods to make learning enjoyable and effective.
                  </p>
                  <h4 className="font-bold text-school-accent mt-6 mb-2">Key Focus Areas:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Developing reading, writing, and numerical skills</li>
                    <li>Environmental awareness and basic science concepts</li>
                    <li>Creative expression through art, music, and dance</li>
                    <li>Physical education and motor skills development</li>
                    <li>Social skills and value education</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="secondary" className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/middle.png" 
                    alt="Middle Section" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-school-navy mb-4">Secondary Section (Classes 9-10)</h3>
                  <p className="text-gray-600 mb-4">
                    The middle school curriculum builds upon the primary foundation and introduces students to more advanced concepts across subjects. We emphasize analytical thinking, problem-solving skills, and the application of knowledge to real-world situations.
                  </p>
                  <h4 className="font-bold text-school-accent mt-6 mb-2">Key Focus Areas:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Advanced language skills in Hindi, English, and Sanskrit</li>
                    <li>Mathematics, Science, and Social Studies</li>
                    <li>Introduction to Information Technology</li>
                    <li>Environmental education and sustainability</li>
                    <li>Arts, crafts, and performing arts</li>
                    <li>Sports and physical education</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="senior-secondary" className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 space-y-4">
                  {/* Gallery column for senior section images */}
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/senior.png" 
                      alt="Senior Section - Science Lab" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                    <img 
                      src="/lovable-uploads/sencom.png" 
                      alt="Senior Section - Library" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                    <img 
                      src="/lovable-uploads/senarts.png" 
                      alt="Senior Section - Main Building" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-school-navy mb-4">Senior Secondary Section (Classes 11-12)</h3>
                  <p className="text-gray-600 mb-4">
                    Our senior secondary program prepares students for higher education and future careers with specialized streams and comprehensive academic preparation. Students can choose between Science, Commerce, and Arts streams based on their interests and aptitudes.
                  </p>
                  <h4 className="font-bold text-school-accent mt-6 mb-2">Available Streams:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-3">
                    <li><span className="font-medium">Science Stream:</span> English, Physics, Chemistry, Biology/Mathematics, and Optional Subjects</li>
                    <li><span className="font-medium">Commerce Stream:</span> English, Accountancy, Business Studies, Economics, and Optional Subjects</li>
                    <li><span className="font-medium">Arts Stream:</span> English,Political Science, History/Economics, Maths/Hindi, and Optional Subjects</li>
                    <li><span className="font-medium">Optional Subjects:</span> Computer Science  , Agriculture , Physical Education , Private Security , Hospitality and Tourism </li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    All senior students receive career guidance, exam preparation support, and opportunities for participation in academic competitions and workshops.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Curriculum Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-navy mb-12">Curriculum Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.695 50.695 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-school-navy">Board-Aligned Curriculum</h3>
                <p className="text-gray-600">Our curriculum follows the Himachal Pradesh Board of School Education guidelines, ensuring students are well-prepared for board exams.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-school-navy">Practical Learning</h3>
                <p className="text-gray-600">We emphasize hands-on experiences and practical applications of concepts through lab work, projects, and field trips.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-school-navy">Digital Literacy</h3>
                <p className="text-gray-600">Students learn essential digital skills, including computer literacy, internet research, and digital presentation tools.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0zm-13.5 0a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-school-navy">Remedial Support</h3>
                <p className="text-gray-600">We offer additional help for students who need extra support to succeed academically through specialized programs.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-school-navy">Advanced Learning</h3>
                <p className="text-gray-600">Gifted students are challenged with advanced material, competitive exams preparation, and special projects.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-school-navy">Value Education</h3>
                <p className="text-gray-600">Regular sessions on ethics, values, and character building help develop well-rounded individuals with strong moral foundations.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-school-navy">Digital Library </h3>
                <p className="text-gray-600">The digital library is accessible to all students from 10:00 AM to 5:00 PM, and is open to the public from 3:00 PM to 5:00 PM on all working days.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-school-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-school-navy">Test Series</h3>
                <p className="text-gray-600">Students are provided with free test series to support their preparation for competitive exams such as JEE, NEET, CUET, and others. These test series are thoughtfully designed by subject matter experts to ensure high-quality practice and effective exam readiness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-school-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Academic Community?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Discover how our academic programs can help your child excel and prepare for future success.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-school-gold text-school-dark hover:bg-opacity-90">
              <a href="https://pmgusssdaroh.netlify.app/admissions">Apply for Admission</a>
            </Button>
            <Button asChild variant="outline" className="bg-school-gold text-school-dark hover:bg-opacity-90">
              <a href="https://pmgusssdaroh.netlify.app/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Academics;
