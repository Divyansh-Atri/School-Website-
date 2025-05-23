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
