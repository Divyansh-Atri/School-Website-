import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react"; // Import the Download icon

const Admissions = () => {
  const requirements = [
    {
      title: "Admission Process",
      items: [
        "Forms available in February 2024",
        "Last date: March 15, 2024",
        "Results: March 25, 2024",
        "Academic Session: April 2024 - March 2025",
        "School Timings: 9:00 AM - 3:00 PM (Mon-Sat)"
      ]
    },
    {
      title: "Required Documents",
      items: [
        "Birth Certificate",
        "Transfer Certificate from previous school",
        "Report Cards from previous years",
        "Passport size photographs",
        "Residence proof",
        "Aadhar Card copy"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Admissions" 
        subtitle="Join our community of learners"
        backgroundImage="/lovable-uploads/admission.png"
      />

      {/* Requirements Section with Background */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/patternbg.png"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {requirements.map((section, index) => (
              <Card key={index} className="p-6 backdrop-blur-sm bg-white/90">
                <h3 className="text-xl font-bold mb-4 text-school-navy">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-school-accent">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Fee Information Notice */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm border border-school-accent rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Info className="h-5 w-5 text-school-accent" />
                <h3 className="text-lg font-semibold text-school-navy">Fee Structure</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Being a Government Senior Secondary School, there is no tuition fee for girls. Other charges are nominal and as per Himachal Pradesh Government norms.
              </p>
            </div>
          </div>
        </div>
      </section>
    
      {/* Scholarship Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-school-navy mb-8">Scholarships Available</h2>
            
            <div className="overflow-x-auto rounded-lg shadow-lg">
              <table className="w-full border-collapse bg-white">
                <thead className="bg-school-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Sr. No.</th>
                    <th className="px-4 py-3 text-left">Scholarship Scheme</th>
                    <th className="px-4 py-3 text-left">Amount (per annum)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, name: "Swami Vivekanand Utkrishth Chhatravritti Yojna (Gen)", amount: "₹18,000" },
                    { id: 2, name: "Dr. Ambedkar Medhavi Chhatravritti Yojna (SC)", amount: "₹18,000" },
                    { id: 3, name: "Dr. Ambedkar Medhavi Chhatravritti Yojna (OBC)", amount: "₹18,000" },
                    { id: 4, name: "T.S. Negi Medhavi Chhatravritti Yojna (ST)", amount: "₹11,000" },
                    { id: 5, name: "Mukhya Mantri Vidyarthi Kalyan Yojna (IRDP)", amount: "Boys: ₹1,500\nGirls: ₹2,000" },
                    { id: 6, name: "Centrally Sponsored Post Matric Scheme for SC", amount: "+1: ₹2,660 - ₹2,840\n+2: ₹3,910 - ₹4,090" },
                    { id: 7, name: "Centrally Sponsored Post Matric Scheme for ST", amount: "+1: ₹2,460 - ₹2,660\n+2: ₹3,710 - ₹3,890" },
                    { id: 8, name: "PM YASASVI Post Matric (OBC)", amount: "₹5,000" },
                    { id: 9, name: "PM YASASVI Post Matric (EBC)", amount: "₹5,000" },
                    { id: 10, name: "PM YASASVI Pre Matric (OBC/EBC)", amount: "₹4,000" },
                    { id: 11, name: "Pre Matric Scholarship (SC)", amount: "₹3,500" },
                    { id: 12, name: "Pre Matric Scholarship (ST)", amount: "₹3,000" },
                    { id: 13, name: "Begum Hazrat Mahal Scholarship", amount: "9th-10th: ₹5,000\n11th-12th: ₹6,000" },
                    { id: 14, name: "NMMS Scholarship", amount: "₹12,000" }
                  ].map((scheme) => (
                    <tr key={scheme.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-600">{scheme.id}</td>
                      <td className="px-4 py-3 text-gray-800 font-medium">{scheme.name}</td>
                      <td className="px-4 py-3 text-gray-600 whitespace-pre-line">{scheme.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-white/90 backdrop-blur-sm border border-school-accent rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Info className="h-5 w-5 text-school-accent" />
                <h3 className="text-lg font-semibold text-school-navy">Important Notes</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>All scholarships are subject to government guidelines and eligibility criteria</li>
                <li>Applications must be submitted through respective online portals within deadlines</li>
                <li>School staff will assist eligible students in the application process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Download Admission Form Button */}
      <div className="flex justify-center my-8">
        <Button 
          asChild
          className="bg-school-accent hover:bg-school-accent/90 text-white flex items-center gap-2"
        >
          <a href="/School_Form.pdf" download>
            <Download className="h-4 w-4" />
            Download Admission Form
          </a>
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default Admissions;
