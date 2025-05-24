import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Annual Day Celebration",
      date: "December 12, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "School Premises",
      image: "/school/ann1.png",
      description: "A day filled with cultural performances, awards, and recognition of student achievements.",
      category: "academic"
    },
    {
      id: 2,
      title: "Sports Competition",
      date: "september 20-23, 2023",
      time: "8:30 AM - 3:30 PM",
      location: "School Sports Ground",
      image: "/school/ann3.png",
      description: "Annual sports meet featuring athletics, team sports, and individual competitions among the four houses.",
      category: "sports"
    },
    {
      id: 3,
      title: "Deputy Director Visit",
      date: " March 20, 2025",
      time: "8:30 AM - 3:30 PM",
      location: "School Premises",
      image: "/school/award.png",
      description: "Heads Meeting - Block Bhawarna , Dheera & Thural",
      category: "sports"
    },
    {
      id: 4,
      title: "Yoga Olympiad",
      date: " May 24, 2025",
      time: "9:30 AM - 11:30 AM",
      location: "School Premises",
      image: "/school/yoga.png",
      description: "Block Level (Bhawarna) Yoga olympiad being organised in our school where students participated actively and selected at district level",
      category: "sports"
    }
    // Add more events as needed
  ];

  // Annual calendar data remains the same
  const annualEvents = [
    { month: "April", events: ["New Academic Session Begins", "World Health Day Activities", "Earth Day Celebration"] },
    { month: "May", events: ["Career Counseling Workshop", "Inter-House Sports Competitions", "Parent-Teacher Meeting", "Anti-Tobacco Day"] },
    { month: "June", events: ["World Environment Day", "Cultural Talent Show", "Annual Science Exhibition"] },
    { month: "July", events: ["Alumni Meet", "Tree Plantation Drive", "Mathematics Quiz Competition"] },
    { month: "August", events: ["Independence Day Celebration", "Inter-School Debate Competition", "Teachers' Workshop"] },
    { month: "September", events: ["Teachers' Day Celebration", "Hindi Diwas", "Science Quiz"] },
    { month: "October", events: ["Gandhi Jayanti Celebration", "Educational Excursion", "Dussehra Break"] },
    { month: "November", events: ["Children's Day Celebration", "Annual Day", "Inter-House Sports Finals"] },
    { month: "December", events: ["Children Science Congress", "Art & Craft Exhibition", "Winter Break"] },
    { month: "January", events: ["School Reopens", "Annual Sports Day", "Republic Day Celebration"] },
    { month: "February", events: ["Science Exhibition", "National Science Day", "Farewell for Class 12"] },
    { month: "March", events: ["Annual Examinations", "Parent-Teacher Meeting", "Result Preparation"] }
  ];

  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Events & Activities" 
        subtitle="Stay updated with school events, activities, and important dates"
        backgroundImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-school-navy mb-4">School Events</h2>
            <p className="text-gray-600">
              Government Utkrisht Senior Secondary School Daroh organizes various academic, cultural, and sports events throughout the year to provide students with holistic development opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-school-navy text-white px-3 py-1 text-sm rounded-full">
                    {event.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-school-accent mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date} | {event.time}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-school-navy">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-navy mb-12">Annual Calendar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {annualEvents.map((month, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-school-navy text-white p-4">
                  <h3 className="text-xl font-bold">{month.month}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {month.events.map((event, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-school-accent flex-shrink-0"></div>
                        <span className="text-gray-700">{event}</span>
                      </li>
                    ))}
                  </ul>
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

export default Events;
