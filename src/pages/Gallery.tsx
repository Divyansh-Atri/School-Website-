
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Image gallery tabs and their content
const galleryContent = {
  campus: [
    {
      id: 1,
      title: "School Building",
      image: "/lovable-uploads/school.png",
      caption: "Our modern school building with state-of-the-art facilities"
    },
    {
      id: 2,
      title: "School Entrance",
      image: "/lovable-uploads/main-gate.png",
      caption: "The welcoming entrance to our school campus"
    },
    {
      id: 3,
      title: "School Ground",
      image: "/school/ground.png",
      caption: "Spacious playground for sports and outdoor activities"
    },
    {
      id: 4,
      title: "Arts and Commerce Block",
      image: "/school/campus.png",
      caption: "All the classes of Arts and Commerce stream are held here"
    },
    {
      id: 5,
      title: "Science Block",
      image: "/school/sci.png",
      caption: "Science block with well-equipped laboratories"
    },
    {
      id: 6,
      title: "School Garden",
      image: "/school/garden.png",
      caption: "Beautiful garden area for relaxation and environmental studies"
    }
  ],
  classrooms: [
    {
      id: 1,
      title: "Smart Classroom",
      image: "/school/class.png",
      caption: "Modern classroom equipped with interactive digital technologies"
    },
    {
      id: 2,
      title: "Chemistry Lab",
      image: "/school/lab.png",
      caption: "State-of-the-art Chemistry laboratory for practical learning"
    },
    {
      id: 3,
      title: "Computer Lab",
      image: "/school/comp.png",
      caption: "Computer lab with high-speed internet and modern equipment"
    },
    {
      id: 4,
      title: "Agriculture Room",
      image: "/school/agri.png",
      caption: "Creative space for agriculture activities"
    },
    {
      id: 5,
      title: "Biology Lab",
      image: "/school/bio.png",
      caption: "Music room with various instruments for musical training"
    },
    {
      id: 6,
      title: "Security Lab",
      image: "/school/security.png",
      caption: "Specialized lab for Security learning and practice"
    }
  ],
  events: [
    {
      id: 1,
      title: "Annual Day Celebration",
      image: "/school/ann1.png",
      caption: "The inauguration ceremony of a school's annual function, with dignitaries, staff, and students dressed in festive attire."
    },
    {
      id: 2,
      title: "Science Exhibition",
      image: "/school/ann2.png",
      caption: "Students showcasing innovative science projects on the annual science exhibition day."
    },
    {
      id: 3,
      title: "Sports Day",
      image: "/school/ann3.png",
      caption: "Annual sports meet with various athletic competitions"
    },
    {
      id: 4,
      title: "Morning Assembly",
      image: "/school/ass.png",
      caption: "The daily school assembly is a unifying ritual that cultivates discipline, reflection, and a shared sense of purpose to begin the day."
    },
    {
      id: 5,
      title: "Anticipation",
      image: "/school/die.png",
      caption: "The function staff awaits the arrival of the Deputy Director at the annual function inauguration."
    },
    {
      id: 6,
      title: "Educational Tour",
      image: "/school/vis.png",
      caption: "Students on an educational field trip"
    },
    {
      id: 7,
      title: "Award Ceremony",
      image: "/school/award.png",
      caption: "The Principal honors the Deputy Director with a ceremonial welcome at meeting of heads"
    },
    {
      id: 8,
      title: "Triumph",
      image: "/school/aw2.png",
      caption: "The team proudly celebrates their victory after winning all district-level sports trophies."
    },
    {
      id: 9,
      title: "Glimpse Of Annual Function",
      image: "/school/dance.png",
      caption: "Dance performance during the annual function"
    },
    {
      id: 10,
      title: "Group Photo",
      image: "/school/out.png",
      caption: "Group photo of passing students"
    },
    {
      id: 11,
      title: "Principal's Speech",
      image: "/school/pri.png",
      caption: "Principal addressing the audience during the annual function"
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Result Appreciation",
      image: "/school/stu.png",
      caption: "Students celebrating their outstanding results"
    },
    {
      id: 2,
      title: "Sports Trophy",
      image: "/school/tro.png",
      caption: "School team with district-level sports championship trophy"
    },
    {
      id: 3,
      title: "Science Competition",
      image: "/school/sciact.png",
      caption: "Winners of the regional science competition"
    },
    {
      id: 4,
      title: "Cultural Performance",
      image: "/school/dance2.ong",
      caption: "Cultural Dance performance"
    },
    {
      id: 5,
      title: "Deputy Director Programme at Daroh",
      image: "/school/ans.png",
      caption: "Group photo with the Deputy Director "
    },
    {
      id: 6,
      title: "Chess Insights",
      image: "/school/chess.png",
      caption: "Students engaged in a chess competition"
      
    }
  ]
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    image: string;
    title: string;
    caption: string;
  }>(null);

  const openLightbox = (image: string, title: string, caption: string) => {
    setSelectedImage({ image, title, caption });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Explore images of our campus, classrooms, events, and achievements"
        backgroundImage="/school/ann1.png"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-school-navy mb-4">School Memories</h2>
            <p className="text-gray-600">
              Browse through our collection of photographs showcasing the vibrant life at Government Utkrisht Senior Secondary School Daroh. From our beautiful campus to memorable events, explore our visual journey.
            </p>
          </div>
          
          <Tabs defaultValue="campus" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="campus">Campus</TabsTrigger>
              <TabsTrigger value="classrooms">Classrooms</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            {Object.entries(galleryContent).map(([category, images]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {images.map((item) => (
                    <div 
                      key={item.id} 
                      className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                      onClick={() => openLightbox(item.image, item.title, item.caption)}
                    >
                      <div className="relative h-64">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="text-white p-4">
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-sm text-gray-200">{item.caption}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto rounded-lg"
              />
              <div className="bg-black/50 p-4 text-white absolute bottom-0 left-0 right-0 rounded-b-lg">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/*  */}
      
      <Footer />
    </>
  );
};

export default Gallery;
