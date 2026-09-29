import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, GraduationCap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const destinations = [
  {
    id: "uk",
    name: "United Kingdom",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "The UK offers world-class education with globally recognized universities like Oxford, Cambridge, and Imperial College London.",
    requirements: [
      "Confirmation of Acceptance for Studies (CAS) from a licensed sponsor",
      "Proof of financial ability to support yourself during studies",
      "English language proficiency test results",
      "Valid passport",
      "Tuberculosis test results (for some countries)",
      "Academic transcripts and certificates"
    ]
  },
  {
    id: "europe",
    name: "Europe",
    image: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "European countries offer diverse educational opportunities with many programs taught in English and affordable tuition fees.",
    requirements: [
      "Acceptance letter from a recognized educational institution",
      "Proof of financial resources to cover tuition and living expenses",
      "Health insurance valid in the Schengen area",
      "Valid passport",
      "Proof of accommodation",
      "Language proficiency evidence (depending on program)"
    ]
  }
]

const services = [
  {
    title: "University Selection",
    description: "Personalized guidance to identify institutions and programs aligned with your academic goals and preferences.",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: "Application Assistance",
    description: "Comprehensive support throughout the university application process, ensuring all requirements are met.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
  },
  {
    title: "Visa Documentation",
    description: "Expert preparation and verification of all required documents for student visa applications.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
  },
  {
    title: "Interview Preparation",
    description: "Comprehensive training for visa interviews, including mock sessions and targeted guidance.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
  },
  {
    title: "Financial Planning",
    description: "Assistance with documenting financial resources and exploring scholarship opportunities.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
  },
  {
    title: "Pre-Departure Support",
    description: "Guidance on travel arrangements, accommodation, and cultural adaptation for a smooth transition.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="12 15 17 21 7 21 12 15"/></svg>
  }
]

export default function StudyVisaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Group of students studying abroad"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Study Visa Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert guidance for students pursuing international education opportunities at prestigious institutions worldwide.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Start Your Educational Journey</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">International Education Opportunities</h2>
              <p className="text-lg text-gray-600 mb-6">
                Studying abroad offers invaluable experiences that extend beyond academic knowledge. It provides exposure to diverse cultures, global networking opportunities, and personal growth that prepares you for an international career.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive study visa services are designed to navigate the complex application processes for educational institutions and student visas worldwide. We provide personalized guidance based on your academic background, career goals, and preferences.
              </p>
              <p className="text-lg text-gray-600">
                With our expertise in international education systems and visa requirements, we help you transform your educational aspirations into reality while ensuring a smooth transition to your chosen destination.
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.slice(0, 4).map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* More Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(4).map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
            
            <div className="bg-primary text-white p-6 rounded-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-4">Need Personalized Guidance?</h3>
              <p className="mb-6">
                Our education consultants provide customized advice based on your specific academic goals and circumstances.
              </p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Destination Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Study Destinations</h2>
            <p className="text-xl text-gray-600">
              Explore visa requirements for leading international education destinations.
            </p>
          </div>
          
          <Tabs defaultValue="uk" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              {destinations.map((destination) => (
                <TabsTrigger key={destination.id} value={destination.id}>
                  {destination.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {destinations.map((destination) => (
              <TabsContent key={destination.id} value={destination.id} className="mt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2 relative h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4">{destination.name}</h3>
                    <p className="text-gray-600 mb-6">{destination.description}</p>
                    
                    <h4 className="text-lg font-medium mb-3">Visa Requirements:</h4>
                    <ul className="space-y-2">
                      {destination.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-primary h-5 w-5 mr-3 mt-0.5" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Study Visa Process</h2>
            <p className="text-xl text-gray-600">
              We follow a comprehensive approach to ensure your study abroad journey is successful.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Process Steps */}
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-3">Educational Assessment</h3>
                  <p className="text-gray-600">
                    We evaluate your academic background, career aspirations, and preferences to recommend suitable educational institutions and programs.
                  </p>
                </div>
                
                <div className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 md:mb-0">
                  1
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                  <div className="md:hidden pt-4">
                    <h3 className="text-xl font-semibold mb-3">Educational Assessment</h3>
                    <p className="text-gray-600">
                      We evaluate your academic background, career aspirations, and preferences to recommend suitable educational institutions and programs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <div className="md:hidden pt-4">
                    <h3 className="text-xl font-semibold mb-3">University Applications</h3>
                    <p className="text-gray-600">
                      We assist with preparing and submitting applications to selected institutions, including personal statements, recommendation letters, and academic documentation.
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 md:mb-0">
                  2
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                  <h3 className="text-xl font-semibold mb-3">University Applications</h3>
                  <p className="text-gray-600">
                    We assist with preparing and submitting applications to selected institutions, including personal statements, recommendation letters, and academic documentation.
                  </p>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-3">Visa Preparation</h3>
                  <p className="text-gray-600">
                    Once you receive acceptance, we guide you through the student visa application process, including document preparation and financial requirements.
                  </p>
                </div>
                
                <div className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 md:mb-0">
                  3
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                  <div className="md:hidden pt-4">
                    <h3 className="text-xl font-semibold mb-3">Visa Preparation</h3>
                    <p className="text-gray-600">
                      Once you receive acceptance, we guide you through the student visa application process, including document preparation and financial requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <div className="md:hidden pt-4">
                    <h3 className="text-xl font-semibold mb-3">Pre-Departure Support</h3>
                    <p className="text-gray-600">
                      We provide comprehensive guidance on travel arrangements, accommodation options, cultural adaptation, and other practical aspects of studying abroad.
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 md:mb-0">
                  4
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                  <h3 className="text-xl font-semibold mb-3">Pre-Departure Support</h3>
                  <p className="text-gray-600">
                    We provide comprehensive guidance on travel arrangements, accommodation options, cultural adaptation, and other practical aspects of studying abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl relative">
              <div className="text-5xl text-primary opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-lg text-gray-700 mb-6 italic">
                  Combine International Consultants transformed my dream of studying at a UK university into reality. Their step-by-step guidance throughout the application process and their expertise in visa requirements were invaluable. I highly recommend their services to anyone considering international education.
                </p>
                
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Sarah Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-600 text-sm">MSc Student, University of Edinburgh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about study visas and our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3">When should I start the study visa application process?</h3>
                <p className="text-gray-600">
                  We recommend starting at least 12-18 months before your intended enrollment date. This allows sufficient time for university applications, acceptance, visa processing, and pre-departure arrangements.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3">What financial documents are required for study visa applications?</h3>
                <p className="text-gray-600">
                  Most countries require proof of sufficient funds to cover tuition fees and living expenses. This typically includes bank statements, sponsorship letters, scholarship award letters, or education loans. The specific requirements vary by destination.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3">Can I work while studying abroad?</h3>
                <p className="text-gray-600">
                  Work regulations for international students vary by country. Many destinations allow limited work hours during term time (typically 10-20 hours per week) and full-time during breaks. We provide detailed information based on your destination.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3">What happens if my visa application is rejected?</h3>
                <p className="text-gray-600">
                  If your visa application is rejected, we provide guidance on the appeals process or alternative options. We analyze the rejection reasons and work on strengthening your application for resubmission or exploring other study destinations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Are there any scholarship opportunities available?</h3>
                <p className="text-gray-600">
                  Yes, we assist in identifying and applying for relevant scholarships based on your academic profile, nationality, and chosen destination. This includes university-specific scholarships, government funds, and private organization grants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your International Education Journey
            </h2>
            <p className="text-xl mb-8">
              Contact our education consultants today for expert guidance on study visa applications and university admissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}