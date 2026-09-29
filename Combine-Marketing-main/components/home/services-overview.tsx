import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Work Visa Services",
    description: "Our specialized work visa services focus on Turkey's growing economy, offering opportunities for professionals across various sectors. We handle all aspects of the application process.",
    image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/work-visa",
    features: [
      "Personal consultation with visa experts",
      "Document verification and preparation",
      "Application filing and follow-up",
      "Interview preparation assistance"
    ]
  },
  {
    title: "Study Visa Services",
    description: "Pursue education at prestigious institutions worldwide with our comprehensive study visa services. We help students navigate the complex application process for various countries.",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/study-visa",
    features: [
      "University and course selection guidance",
      "Application preparation and submission",
      "SOP and documentation support",
      "Pre-departure orientation"
    ]
  },
  {
    title: "Immigration Consulting",
    description: "Comprehensive immigration consulting for individuals and families looking to relocate permanently. Our experts provide personalized guidance based on your specific circumstances.",
    image: "https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/immigration",
    features: [
      "Immigration pathway assessment",
      "Documentation and compliance review",
      "Administrative processing support",
      "Post-landing services"
    ]
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600">
            We provide end-to-end visa and immigration solutions tailored to your specific needs and destinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase text-gray-500 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-5 w-5 mr-2 mt-0.5"><path d="m5 12 5 5L20 7"/></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild className="w-full">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}