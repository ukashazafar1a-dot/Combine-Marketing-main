import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const destinations = [
  {
    id: "turkey",
    name: "Turkey",
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Turkey offers diverse work opportunities across various sectors, from manufacturing and technology to tourism and services.",
    requirements: [
      "Valid job offer from a Turkish company",
      "Minimum salary requirement (varies by sector)",
      "Valid passport with sufficient validity",
      "Clean criminal record",
      "Health insurance coverage",
      "Professional qualifications and experience"
    ]
  },
  {
    id: "belarus",
    name: "Belarus",
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Belarus offers unique work opportunities in various sectors, including IT, manufacturing, and research.",
    requirements: [
      "Valid job offer from a Belarusian company",
      "Special permit from the Department of Citizenship and Migration",
      "Valid passport with sufficient validity",
      "Clean criminal record",
      "Health insurance coverage",
      "Professional qualifications"
    ]
  }
]

const benefits = [
  {
    title: "Expert Guidance",
    description: "Our specialists provide personalized advice based on your specific situation and requirements."
  },
  {
    title: "Higher Success Rate",
    description: "Our thorough approach to application preparation significantly increases your chances of approval."
  },
  {
    title: "Time Efficiency",
    description: "We streamline the process, saving you valuable time through our efficient procedures."
  },
  {
    title: "Stress Reduction",
    description: "Leave the complex documentation and requirements to us while you focus on your career plans."
  }
]

const processSteps = [
  {
    title: "Initial Assessment",
    description: "We evaluate your qualifications, work experience, and eligibility for work visas in Turkey and Belarus."
  },
  {
    title: "Document Preparation",
    description: "Our team helps you prepare and organize all necessary documentation according to country-specific requirements."
  },
  {
    title: "Application Submission",
    description: "We handle the submission process, ensuring all forms and supporting documents are properly filed."
  },
  {
    title: "Work Permit Approval",
    description: "After approval, we guide you through the next steps for obtaining your residency permit."
  }
]

export default function WorkVisaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Modern office with city view"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
              Work Visa Services
            </h1>
            <p className="text-2xl text-white/90 mb-10">
              Expert guidance for professionals seeking employment opportunities in Turkey and Belarus.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8">Work Visa Opportunities</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Turkey and Belarus offer unique opportunities for international professionals. Turkey's strategic location between Europe and Asia makes it an attractive destination, while Belarus provides opportunities in IT, manufacturing, and research sectors.
              </p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Our specialized work visa services focus on navigating the unique immigration systems of both countries to help professionals secure legal employment. Whether you're an IT specialist, engineer, educator, or business professional, we provide comprehensive support throughout the visa application process.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                With our deep understanding of work permit regulations and procedures in both countries, we ensure a smooth and efficient application process tailored to your specific circumstances.
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Destination Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Visa Destinations</h2>
            <p className="text-xl text-gray-600">
              Explore visa requirements for Turkey and Belarus.
            </p>
          </div>
          
          <Tabs defaultValue="turkey" className="max-w-4xl mx-auto">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Visa Process</h2>
            <p className="text-xl text-gray-600">
              We follow a structured approach to ensure your work visa application is processed efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Work Visa Application?
            </h2>
            <p className="text-xl mb-8">
              Contact our expert consultants today for personalized guidance and support throughout your visa journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg hover:border-white/80 transition-all duration-300">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}