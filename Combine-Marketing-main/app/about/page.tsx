import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, Globe } from "lucide-react"

const teamMembers = [
  {
    name: "Tayyab Anwar Rao",
    role: "Chief Executive Officer",
    image: "/tayyabrao.jpeg",
    bio: "Tayyab Anwar Rao founded Combine International Consultants with a vision to provide expert visa consultancy services to individuals seeking international opportunities. With years of experience in immigration law and visa processing, he leads our team with a commitment to excellence and client satisfaction.",
    education: "Master's in English Literature and Master's in Business Administration, Superior University",
    certifications: [
      "Certified Immigration Consultant",
      "UK agent and counsellor Training"
    ]
  },
  {
    name: "Rao Mubasher Anwar",
    role: "Director",
    image: "/mubasherrao.png",
    bio: "As Director, Muhammad Mubasher Anwar oversees the strategic direction and operational excellence of our consultancy. His background in business administration and extensive knowledge of international visa regulations has been instrumental in building our reputation for reliability and success.",
    education: "Bachelor's in Business Administration, University of South Asia",
    
}
]

const values = [
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our dealings, providing honest advice and transparent processes."
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, delivering results that exceed client expectations."
  },
  {
    title: "Client-Centered",
    description: "Our clients' needs and goals are at the center of everything we do, with personalized solutions for each individual."
  },
  {
    title: "Expertise",
    description: "We continuously enhance our knowledge of immigration policies and procedures to provide expert guidance."
  }
]

const milestones = [
  {
    year: "2010",
    title: "Company Foundation",
    description: "Combine International Consultants was established to provide specialized visa and immigration services."
  },
  {
    year: "2013",
    title: "Expansion of Services",
    description: "Added specialized study visa services for international students seeking education opportunities abroad."
  },
  {
    year: "2016",
    title: "Regional Recognition",
    description: "Received industry recognition for excellence in visa consultancy services."
  },
  {
    year: "2019",
    title: "Digital Transformation",
    description: "Implemented advanced digital solutions to streamline the application process for clients."
  },
  {
    year: "2022",
    title: "Global Network",
    description: "Established partnerships with international institutions and businesses to enhance service offerings."
  }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Combine International Consultants"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              About Combine International Consultants
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your trusted partner for visa and immigration services. Dedicated to turning your international aspirations into reality.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Combine International Consultants was founded with a clear mission: to provide expert visa and immigration consultancy services that simplify the complex journey of international relocation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a small team of immigration specialists has grown into a respected consultancy with a track record of thousands of successful visa applications across various categories and destinations.
              </p>
              <p className="text-lg text-gray-600">
                Our journey has been defined by a commitment to understanding each client's unique circumstances and providing tailored solutions that address their specific needs. This client-centered approach, combined with our in-depth knowledge of international immigration systems, has established us as a trusted partner for individuals and families pursuing global opportunities.
              </p>
            </div>
            
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600">
              Guided by core principles that shape our service approach and commitment to clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-block bg-blue-100 p-3 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m22 17-8.5 4-10-4.5v-10L13 3l9 4.5V17Z"/><path d="M7 7.5v4"/><path d="M12 6v7"/><path d="M17 7.5v4"/></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
              To facilitate smooth and successful international transitions for individuals by offering expert visa guidance, personalized immigration solutions, and dedicated support throughout every stage of the application process. We aim to eliminate the complexities of immigration by providing clear, accurate, and up-to-date information, ensuring our clients feel confident and well-prepared as they pursue opportunities abroad.
              </p>
              <p className="text-gray-600 mt-4">
              We are especially committed to empowering Pakistani students by providing them with trusted guidance and access to world-class international education opportunities. Through transparent consultancy, individualized support, and strong partnerships with globally recognized universities, we help students achieve their academic and professional aspirations, fostering a brighter future through global learning.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-block bg-blue-100 p-3 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="2" y2="4"/><line x1="12" x2="12" y1="20" y2="22"/><line x1="4.93" x2="6.34" y1="4.93" y2="6.34"/><line x1="17.66" x2="19.07" y1="17.66" y2="19.07"/><line x1="2" x2="4" y1="12" y2="12"/><line x1="20" x2="22" y1="12" y2="12"/><line x1="4.93" x2="6.34" y1="19.07" y2="17.66"/><line x1="17.66" x2="19.07" y1="6.34" y2="4.93"/></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the premier global visa consultancy, recognized for our expertise, integrity, and exceptional success rate in helping individuals and families achieve their international goals.
              </p>
              <p className="text-gray-600 mt-4">
                We envision a world where geographical boundaries do not limit personal and professional growth, and where our consultancy serves as a trusted bridge to global opportunities.
              </p>
            </div>
          </div>
          
          {/* Values */}
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide our approach and commitment to our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts who guide our consultancy with vision and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-[400px] w-full">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Education:</h4>
                    <p className="text-gray-700">{member.education}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Certifications:</h4>
                    <ul className="space-y-1">
                      {member.certifications?.map((cert, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-primary h-4 w-4 mr-2 mt-1" />
                          <span className="text-gray-700">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100</div>
              <p className="text-blue-100">Satisfied Clients</p>
            </div>
            
            <div className="p-4">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Success Rate</p>
            </div>
            
            {/* <div className="p-4">
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Years Experience</p>
            </div> */}
            
            <div className="p-4">
              <div className="flex justify-center mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Countries Covered</p>
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
                  Working with Combine International Consultants was a game-changer for my career. Their expert guidance throughout my work visa application for Turkey made what seemed like a complex process surprisingly manageable. Their attention to detail and knowledge of the latest immigration requirements ensured my application was successful on the first attempt.
                </p>
                
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Ahmed Khalid"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ahmed Khalid</h4>
                    <p className="text-gray-600 text-sm">Software Engineer, Istanbul</p>
                  </div>
                </div>
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
              Ready to Start Your International Journey?
            </h2>
            <p className="text-xl mb-8">
              Contact our expert consultants today for personalized guidance on your visa application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}