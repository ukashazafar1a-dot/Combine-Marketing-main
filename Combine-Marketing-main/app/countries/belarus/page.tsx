import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const visaCategories = [
  {
    id: "work",
    title: "Work Visas",
    description: "Various routes for professionals seeking employment in Belarus.",
    options: [
      {
        name: "Work Permit",
        description: "For foreign nationals with a job offer from a Belarusian employer.",
        requirements: [
          "Valid job offer from a Belarusian company",
          "Special permit from the Department of Citizenship and Migration",
          "Valid passport with sufficient validity",
          "Clean criminal record",
          "Health insurance coverage"
        ],
        processing: "3-6 weeks",
        duration: "1 year, renewable"
      },
      {
        name: "Specialist Work Permit",
        description: "For highly qualified specialists in specific industries.",
        requirements: [
          "Advanced professional qualifications",
          "Job offer in a priority sector",
          "Minimum salary requirements",
          "Professional experience",
          "Health insurance coverage"
        ],
        processing: "4-8 weeks",
        duration: "2 years, renewable"
      }
    ]
  },
  {
    id: "business",
    title: "Business Visas",
    description: "Options for business owners and investors in Belarus.",
    options: [
      {
        name: "Business Visa",
        description: "For entrepreneurs and business owners establishing operations in Belarus.",
        requirements: [
          "Business registration documents",
          "Investment plan",
          "Financial statements",
          "Employment creation plan",
          "Local business partner (recommended)"
        ],
        processing: "2-4 months",
        duration: "Up to 3 years, renewable"
      }
    ]
  }
]

export default function BelarusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbelarusfacts.org%2Fimg%2Fmain-bg.jpg&f=1&nofb=1&ipt=565c11421eda9e95eb717689d8f5aa50bd58015593d0ed50fabe6b1ee8d569b7"
            alt="Minsk cityscape, Belarus"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Belarus Work Visa Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert guidance for professionals and entrepreneurs seeking work
              opportunities in Belarus.
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
                Belarus Work Opportunities
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Belarus offers unique work opportunities in various sectors,
                including IT, manufacturing, and research. The country's
                strategic location and growing economy make it an attractive
                destination for professionals and entrepreneurs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our specialized Belarus work visa consultancy services provide
                comprehensive guidance for navigating the country's work permit
                and business visa requirements. We help you understand the
                specific criteria for your chosen path.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're a skilled professional seeking employment, an
                entrepreneur looking to start a business, or an investor
                interested in Belarus's growing market, our experts will guide
                you through every step of the application process.
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
                      Belarusian Work Environment
                    </h3>
                    <p className="text-gray-700">
                      Belarus offers a stable work environment with a focus on
                      industrial development and technological innovation. The
                      country provides competitive advantages for businesses,
                      including a skilled workforce and strategic location.
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
                      Schedule a free consultation with our Belarus work visa
                      specialists to assess your options.
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
                      your work permit application.
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
                      with Belarusian requirements.
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
                      relocation assistance.
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
              Belarusian Visa Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore different visa options for working and doing business in
              Belarus.
            </p>
          </div>

          <Tabs defaultValue="work" className="max-w-5xl mx-auto">
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