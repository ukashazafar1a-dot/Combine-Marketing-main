import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const visaCategories = [
  {
    id: "study",
    title: "Study Visas",
    description: "Options for international students pursuing education in European countries.",
    options: [
      {
        name: "Schengen Student Visa",
        description: "For students accepted into educational institutions in Schengen countries.",
        requirements: [
          "Letter of acceptance from a recognized European institution",
          "Proof of sufficient financial means",
          "Health insurance coverage",
          "Valid passport with sufficient validity",
          "Proof of accommodation arrangements"
        ],
        processing: "2-4 weeks",
        duration: "Duration of study program"
      },
      {
        name: "Erasmus+ Program",
        description: "EU's flagship education and training program for international students.",
        requirements: [
          "Enrollment in a participating higher education institution",
          "Selection by home institution",
          "Language proficiency requirements",
          "Academic performance criteria",
          "Valid travel documents"
        ],
        processing: "1-2 months",
        duration: "3-12 months"
      }
    ]
  },
  {
    id: "research",
    title: "Research Visas",
    description: "Specialized visas for researchers and academics in European institutions.",
    options: [
      {
        name: "European Research Visa",
        description: "For researchers conducting studies at European research institutions.",
        requirements: [
          "Hosting agreement from a research institution",
          "Research project documentation",
          "Academic qualifications",
          "Proof of funding",
          "Health insurance coverage"
        ],
        processing: "4-8 weeks",
        duration: "Up to 2 years, renewable"
      }
    ]
  }
]

export default function EuropePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.f1RfxMPRZcXYMzQ5uLdS2wHaDt%26cb%3Diwc2%26pid%3DApi&f=1&ipt=8aecca1a316554c25482cdeb968042f5fc967fbc488234271701f0683ab22f78"
            alt="Europe"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              European Study Visa Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive guidance for international students seeking
              education opportunities across Europe.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get Expert Guidance</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                European Education Overview
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Europe offers world-class education opportunities with diverse
                programs, cultural experiences, and excellent research
                facilities. The continent is home to some of the oldest and most
                prestigious universities in the world.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our specialized European study visa consultancy services provide
                comprehensive guidance for navigating the various educational
                opportunities across different European countries. We help you
                understand the specific requirements of your chosen destination.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're interested in undergraduate studies, postgraduate
                programs, or research opportunities, our experts will guide you
                through the application process and help you secure the
                appropriate visa for your educational journey.
              </p>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <AlertCircle className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      European Education System
                    </h3>
                    <p className="text-gray-700">
                      Europe's education system is known for its high quality
                      and diversity. Many countries offer programs in English,
                      and the Bologna Process ensures compatibility between
                      different European higher education systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">
                      Free Initial Consultation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Schedule a free consultation with our European education
                      specialists to explore your options.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">
                      Document Preparation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Expert guidance on preparing all required documents for
                      your chosen European country.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">
                      Application Review
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Thorough review of your application to ensure compliance
                      with European visa requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">
                      Post-Approval Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Guidance on next steps after visa approval, including
                      pre-departure preparation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              European Visa Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore different visa options for studying and researching in
              Europe.
            </p>
          </div>

          <Tabs defaultValue="study" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              {visaCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {visaCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-8"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-8">{category.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.options.map((option, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md"
                    >
                      <h4 className="text-xl font-semibold mb-3">
                        {option.name}
                      </h4>
                      <p className="text-gray-700 mb-4">{option.description}</p>

                      <div className="mb-4">
                        <h5 className="font-medium mb-2">Key Requirements:</h5>
                        <ul className="space-y-2">
                          {option.requirements.map((requirement, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Processing Time:</p>
                          <p className="text-gray-600">{option.processing}</p>
                        </div>
                        <div>
                          <p className="font-medium">Duration:</p>
                          <p className="text-gray-600">{option.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
} 