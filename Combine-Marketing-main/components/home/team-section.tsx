import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Phone } from "lucide-react"

const teamMembers = [
  {
    name: "Tayyab Anwar Rao",
    role: "Chief Executive Officer",
    image: "/tayyabrao.jpeg",
    bio: "With over 15 years of experience in businesss, Tayyab Anwar Rao leads our team with expertise and dedication to client success.",
    linkedin: "https://www.linkedin.com/in/muhammad-tayyab-anwar-rao-51b24431?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "rao.tayyab1@gmail.com"

  },
  {
    name: "Rao Mubasher Anwar",
    role: "Director",
    image: "/mubasherrao.png",
    bio: "Rao Mubasher Anwar oversees our strategic operations and ensures that our consultancy services meet the highest standards of excellence.",
    linkedin: "#",
    email: "rao.mubasher123@gmail.com"
  }
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600">
            Meet the experts behind Combine International Consultants who make your visa journey successful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
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
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="flex items-center space-x-4">
                    <Link href={member.linkedin} className="text-gray-500 hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn profile</span>
                    </Link>
                    <Link href={`mailto:${member.email}`} className="text-gray-500 hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/about" 
            className="text-primary font-medium hover:underline"
          >
            Learn more about our team and company
          </Link>
        </div>
      </div>
    </section>
  )
}