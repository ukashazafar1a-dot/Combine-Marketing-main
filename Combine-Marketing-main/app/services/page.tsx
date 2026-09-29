import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ChevronRight } from "lucide-react"

const mainServices = [
  {
    title: "Work Visa Services",
    description: "Expert guidance for professionals seeking employment opportunities abroad, with special focus on Turkey's work permit system.",
    image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/work-visa",
    features: [
      "Personalized eligibility assessment",
      "Documentation preparation and verification",
      "Application submission and tracking",
      "Post-approval support and guidance"
    ]
  },
  {
    title: "Study Visa Services",
    description: "Comprehensive support for students pursuing educational opportunities worldwide at prestigious institutions.",
    image: "https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/study-visa",
    features: [
      "University and program selection assistance",
      "Application preparation for educational institutions",
      "Visa documentation and interview preparation",
      "Pre-departure orientation"
    ]
  }
]

const additionalServices = [
  {
    title: "Business Visa Services",
    description: "Facilitating international business travel for conferences, meetings, and business expansion opportunities.",
    icon: "💼"
  },
  {
    title: "Family Reunification",
    description: "Helping families reunite through dependent visa applications and family sponsorship programs.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Permanent Residency",
    description: "Long-term solutions for those seeking permanent settlement options in their destination countries.",
    icon: "🏠"
  },
  {
    title: "Document Authentication",
    description: "Professional verification and legalization services for educational and official documents.",
    icon: "📄"
  },
  {
    title: "Appeal Services",
    description: "Expert assistance with visa refusals, providing guidance on the appeal process.",
    icon: "⚖️"
  },
  {
    title: "Settlement Services",
    description: "Post-arrival support including accommodation, banking, and local registration assistance.",
    icon: "🌎"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Comprehensive Visa Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional guidance throughout your visa and immigration journey with personalized solutions for your specific needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-8 flex-grow">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-primary h-5 w-5 mr-3 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full">
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">
              Beyond our core offerings, we provide specialized services to address diverse immigration needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Link 
                    href="/contact" 
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    <span>Inquire About This Service</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Consulting Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Consulting Process
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We follow a structured approach to ensure every aspect of your visa application is handled with precision and care.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-primary mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">
                      We begin with understanding your specific needs, goals, and timeline to provide personalized guidance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-primary mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Documentation Guidance</h3>
                    <p className="text-gray-600">
                      Our experts help you prepare all necessary documents according to the specific requirements of your visa type.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-primary mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Application Submission</h3>
                    <p className="text-gray-600">
                      We manage the entire application process, ensuring all forms are correctly filled and submitted.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-primary mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Follow-up & Support</h3>
                    <p className="text-gray-600">
                      Throughout the processing period, we maintain communication with relevant authorities and provide regular updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Visa consultation process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Start Your Visa Application?
              </h2>
              <p className="text-lg text-white/90">
                Contact our experts today for personalized guidance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}