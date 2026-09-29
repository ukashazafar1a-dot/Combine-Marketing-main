import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a detailed consultation to understand your goals, qualifications, and preferences to determine the best visa options for you.",
  },
  {
    number: "02",
    title: "Documentation Guidance",
    description: "Our experts provide comprehensive guidance on preparing and organizing all necessary documents according to specific visa requirements.",
  },
  {
    number: "03",
    title: "Application Preparation",
    description: "We meticulously prepare your application, ensuring all forms are correctly filled and supporting documents are properly arranged.",
  },
  {
    number: "04",
    title: "Submission & Follow-up",
    description: "We handle the submission process and maintain regular follow-ups with relevant authorities to track your application status.",
  },
  {
    number: "05",
    title: "Interview Preparation",
    description: "Comprehensive preparation for visa interviews through mock sessions and guidance on effectively addressing potential questions.",
  },
  {
    number: "06",
    title: "Post-Approval Support",
    description: "We provide guidance on next steps after visa approval, including pre-departure preparations and initial settlement assistance.",
  }
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Visa Process</h2>
          <p className="text-xl text-gray-700">
            We follow a systematic approach to ensure a smooth and efficient visa application process for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-5xl font-bold text-primary/80">{step.number}</span>
                <CheckCircle className="w-10 h-10 text-primary ml-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6">
            <Link href="/contact">Start Your Visa Process</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}