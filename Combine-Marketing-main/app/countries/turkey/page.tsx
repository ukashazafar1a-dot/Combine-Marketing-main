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
    description: "Various routes for professionals seeking employment in Turkey.",
    options: [
      {
        name: "Work Permit",
        description: "For foreign nationals with a job offer from a Turkish employer.",
        requirements: [
          "Valid job offer from a Turkish company",
          "Minimum salary requirement (varies by sector)",
          "Valid passport with sufficient validity",
          "Clean criminal record",
          "Health insurance coverage"
        ],
        processing: "4-8 weeks",
        duration: "1-2 years, renewable"
      },
      {
        name: "Independent Work Permit",
        description: "For entrepreneurs and self-employed professionals.",
        requirements: [
          "Business plan and financial projections",
          "Minimum capital investment",
          "Job creation potential",
          "Professional qualifications",
          "Health insurance coverage"
        ],
        processing: "6-12 weeks",
        duration: "1-2 years, renewable"
      }
    ]
  },
  {
    id: "business",
    title: "Business Visas",
    description: "Options for business owners and investors in Turkey.",
    options: [
      {
        name: "Investor Visa",
        description: "For foreign investors making significant investments in Turkey.",
        requirements: [
          "Minimum investment amount (varies by type)",
          "Business registration documents",
          "Investment project details",
          "Financial statements",
          "Employment creation plan"
        ],
        processing: "3-6 months",
        duration: "Up to 5 years, renewable"
      }
    ]
  }
]

export default function TurkeyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2bgjx2gb489de.cloudfront.net%2Fgbb-blogs%2Fwp-content%2Fuploads%2F2017%2F04%2F17145258%2Fshutterstock_395147326.jpg&f=1&nofb=1&ipt=49f76d7b934b0a81e8d649b5a6add4d304dcb9689633879b228389d95110e992"
            alt="Turkey"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Turkey Work Visa Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert guidance for professionals and entrepreneurs seeking work
              opportunities in Turkey.
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
                Turkey Work Opportunities
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Turkey offers diverse work opportunities across various sectors,
                from manufacturing and technology to tourism and services. The
                country's strategic location and growing economy make it an
                attractive destination for professionals and entrepreneurs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our specialized Turkey work visa consultancy services provide
                comprehensive guidance for navigating the country's work permit
                and business visa requirements. We help you understand the
                specific criteria for your chosen path.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're a skilled professional seeking employment, an
                entrepreneur looking to start a business, or an investor
                interested in Turkey's growing market, our experts will guide
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
                      Turkish Work Environment
                    </h3>
                    <p className="text-gray-700">
                      Turkey's work environment combines traditional business
                      practices with modern corporate culture. The country
                      offers competitive salaries, a favorable tax system for
                      businesses, and a growing market for various industries.
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
                      Schedule a free consultation with our Turkey work visa
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
                      with Turkish requirements.
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
              Turkish Visa Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore different visa options for working and doing business in
              Turkey.
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