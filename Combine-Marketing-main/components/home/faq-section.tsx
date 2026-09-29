"use client"

import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What documents are typically required for a work visa application?",
    answer: "Work visa applications generally require a valid passport, job offer letter, employment contract, educational certificates, professional qualifications, resume/CV, photographs, and medical certificates. Specific requirements vary by country, so we provide detailed guidance based on your destination."
  },
  {
    question: "How long does the visa application process typically take?",
    answer: "Processing times vary by country and visa type. Work visas typically take 2-12 weeks, while study visas may take 2-8 weeks. Our consultants provide estimated timelines based on current processing times for your specific case."
  },
  {
    question: "Do you provide assistance with the entire visa application process?",
    answer: "Yes, we offer end-to-end support including initial consultation, documentation guidance, application preparation, submission assistance, interview preparation, and post-approval support. Our comprehensive service ensures you're supported at every stage."
  },
  {
    question: "What sets Combine International Consultants apart from other visa services?",
    answer: "We distinguish ourselves through our country-specific expertise, personalized service approach, high success rate, transparent processes, and ongoing support throughout your international journey. Our experienced consultants stay updated on the latest immigration policies."
  },
  {
    question: "What are the fees for your visa consultancy services?",
    answer: "Our fees vary based on the visa type, destination country, and specific services required. We provide transparent fee structures during the initial consultation, with no hidden charges. Contact us for a customized quote based on your requirements."
  }
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our visa and immigration services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}