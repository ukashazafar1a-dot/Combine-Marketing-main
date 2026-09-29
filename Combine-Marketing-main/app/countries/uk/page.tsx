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
    description: "Various routes for professionals seeking employment in the UK.",
    options: [
      {
        name: "Skilled Worker Visa",
        description: "For qualified workers with a job offer from a UK employer with a valid sponsor license.",
        requirements: [
          "Valid Certificate of Sponsorship from an approved UK employer",
          "Appropriate skill level (usually RQF level 3 or above)",
          "Required English language proficiency",
          "Minimum salary threshold (typically £25,600 or the going rate for the job)",
          "Sufficient funds for self-support (unless exempted)"
        ],
        processing: "3-12 weeks",
        duration: "Up to 5 years, with possibility of extension and settlement"
      },
      {
        name: "Global Talent Visa",
        description: "For leaders or potential leaders in academia, research, arts and culture, or digital technology.",
        requirements: [
          "Endorsement from a recognized UK body in your field",
          "Evidence of achievements and recognition in your sector",
          "Proof of continued work in your specialized field"
        ],
        processing: "3-8 weeks",
        duration: "Up to 5 years, with possibility of settlement after 3-5 years"
      }
    ]
  },
  {
    id: "study",
    title: "Study Visas",
    description: "Options for international students pursuing education in the UK.",
    options: [
      {
        name: "Student Visa",
        description: "For students accepted into a course at a UK licensed student sponsor institution.",
        requirements: [
          "Confirmation of Acceptance for Studies (CAS) from a licensed sponsor",
          "Proof of funds for course fees and living costs",
          "English language proficiency at required level",
          "Consent from parents/guardians (for under 18s)",
          "Tuberculosis test results (if from certain countries)"
        ],
        processing: "3-8 weeks",
        duration: "Duration of course plus additional months"
      },
      {
        name: "Child Student Visa",
        description: "For children aged 4-17 coming to study at an independent school in the UK.",
        requirements: [
          "Confirmation of Acceptance for Studies from a licensed independent school",
          "Proof of funds for course fees and living costs",
          "Parental consent",
          "Suitable care arrangements in the UK"
        ],
        processing: "3-8 weeks",
        duration: "Duration of course plus additional months"
      }
    ]
  },
  {
    id: "family",
    title: "Family Visas",
    description: "Routes for joining family members who are UK citizens or settled individuals.",
    options: [
      {
        name: "Family Visa (Spouse/Partner)",
        description: "For those joining a partner who is a British citizen or settled in the UK.",
        requirements: [
          "Genuine and subsisting relationship proof",
          "English language requirement (A1 or higher)",
          "Financial requirement (usually minimum income of £18,600)",
          "Adequate accommodation evidence",
          "Relationship must be legally recognized"
        ],
        processing: "2-3 months",
        duration: "2.5 years initially, renewable, with possibility of settlement after 5 years"
      },
      {
        name: "UK Ancestry Visa",
        description: "For Commonwealth citizens with a UK-born grandparent.",
        requirements: [
          "Proof of Commonwealth citizenship",
          "Evidence that one grandparent was born in the UK",
          "Ability and intention to work in the UK",
          "Sufficient funds for support without public funds"
        ],
        processing: "3-8 weeks",
        duration: "5 years, with possibility of settlement"
      }
    ]
  }
]

export default function UKPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Finvent.studyabroad.pk%2Fckfinder%2Fuserfiles%2Fimages%2Fwhy-uk(1).jpg&f=1&nofb=1&ipt=5a7fb1350b1b970ed387fb7ffdbf38b5b63cc9f39b3d9a48bf4c4269e1413e82"
            alt="United Kingdom"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              United Kingdom Visa Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert guidance for navigating the UK's immigration system with
              updated requirements and processes.
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
                UK Immigration Overview
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The United Kingdom offers various visa pathways for work, study,
                family reunion, and business purposes. Since Brexit, the
                immigration system has undergone significant changes,
                introducing a points-based system for skilled workers and new
                routes for global talent.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our specialized UK visa consultancy services offer comprehensive
                guidance for navigating these complex requirements. We stay
                updated with the latest changes to provide accurate advice
                tailored to your specific circumstances.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're a professional seeking work opportunities, a
                student aiming for prestigious UK universities, or looking to
                join family members, our experts will guide you through every
                step of the application process.
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
                      Post-Brexit Immigration System
                    </h3>
                    <p className="text-gray-700">
                      The UK's points-based immigration system applies to EU and
                      non-EU citizens alike. Most immigration routes require
                      applicants to speak English and have a job offer from an
                      approved employer at an appropriate skill and salary
                      level.
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
                      Schedule a free consultation with our UK visa specialists
                      to assess your eligibility and options.
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
                      Expert guidance on preparing all required documents
                      according to UKVI standards.
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
                      Thorough review of your application to ensure completeness
                      and accuracy before submission.
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
              UK Visa Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore different visa options based on your purpose of visit or
              immigration goals.
            </p>
          </div>

          <Tabs defaultValue="work" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
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
                          {option.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="text-primary h-5 w-5 mr-3 mt-0.5" />
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <h5 className="font-medium mb-1">Processing Time:</h5>
                          <p className="text-gray-700">{option.processing}</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">Duration:</h5>
                          <p className="text-gray-700">{option.duration}</p>
                        </div>
                      </div>

                      <Button asChild className="w-full">
                        <Link href="/contact">Inquire About This Visa</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              UK Visa Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Our structured approach ensures a smooth and efficient application
              experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

              {/* Timeline Steps */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3 md:hidden">
                      Initial Consultation
                    </h3>
                    <p className="text-gray-600 md:hidden">
                      Our UK visa experts assess your eligibility, discuss your
                      options, and recommend the most suitable visa category
                      based on your circumstances.
                    </p>
                  </div>

                  <div className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 md:mb-0">
                    1
                  </div>

                  <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                    <h3 className="text-xl font-semibold mb-3 hidden md:block">
                      Initial Consultation
                    </h3>
                    <p className="text-gray-600 hidden md:block">
                      Our UK visa experts assess your eligibility, discuss your
                      options, and recommend the most suitable visa category
                      based on your circumstances.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3 hidden md:hidden">
                      Document Preparation
                    </h3>
                    <p className="text-gray-600 hidden md:hidden">
                      We provide a comprehensive checklist and guide you through
                      preparing all required documents according to UK Visas and
                      Immigration standards.
                    </p>
                  </div>

                  <div className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 md:mb-0">
                    2
                  </div>

                  <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                    <h3 className="text-xl font-semibold mb-3">
                      Document Preparation
                    </h3>
                    <p className="text-gray-600">
                      We provide a comprehensive checklist and guide you through
                      preparing all required documents according to UK Visas and
                      Immigration standards.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3">
                      Application Submission
                    </h3>
                    <p className="text-gray-600">
                      We assist with completing the online application form,
                      booking biometric appointments, and submitting your
                      documents through the proper channels.
                    </p>
                  </div>

                  <div className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 md:mb-0">
                    3
                  </div>

                  <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                    <h3 className="text-xl font-semibold mb-3 md:hidden">
                      Application Submission
                    </h3>
                    <p className="text-gray-600 md:hidden">
                      We assist with completing the online application form,
                      booking biometric appointments, and submitting your
                      documents through the proper channels.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3 md:hidden">
                      Follow-Up & Tracking
                    </h3>
                    <p className="text-gray-600 md:hidden">
                      We maintain regular communication with UK authorities to
                      track your application status and respond to any
                      additional requests for information.
                    </p>
                  </div>

                  <div className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 md:mb-0">
                    4
                  </div>

                  <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                    <h3 className="text-xl font-semibold mb-3 hidden md:block">
                      Follow-Up & Tracking
                    </h3>
                    <p className="text-gray-600 hidden md:block">
                      We maintain regular communication with UK authorities to
                      track your application status and respond to any
                      additional requests for information.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3">
                      Approval & Post-Visa Support
                    </h3>
                    <p className="text-gray-600">
                      Once approved, we provide guidance on next steps,
                      including visa collection, travel arrangements, and
                      initial settlement advice for the UK.
                    </p>
                  </div>

                  <div className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 md:mb-0">
                    5
                  </div>

                  <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                    <h3 className="text-xl font-semibold mb-3 md:hidden">
                      Approval & Post-Visa Support
                    </h3>
                    <p className="text-gray-600 md:hidden">
                      Once approved, we provide guidance on next steps,
                      including visa collection, travel arrangements, and
                      initial settlement advice for the UK.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about UK visas and immigration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  How long does it take to process a UK visa?
                </h3>
                <p className="text-gray-600">
                  Standard processing times vary by visa type, typically ranging
                  from 3 to 12 weeks. Priority and super priority services are
                  available for most visa categories at additional cost,
                  reducing processing times to 5 working days or 24 hours
                  respectively.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  What is the points-based immigration system?
                </h3>
                <p className="text-gray-600">
                  The UK's points-based system assigns points for specific
                  skills, qualifications, salaries, and professions. Most work
                  visas require a minimum of 70 points, awarded for factors like
                  job offers from approved employers, English language
                  proficiency, and meeting salary thresholds.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Can I bring my family members to the UK?
                </h3>
                <p className="text-gray-600">
                  Most work and study visa holders can bring dependents
                  (spouse/partner and children under 18). You'll need to
                  demonstrate sufficient funds to support them and pay
                  additional application fees and healthcare surcharges for each
                  dependent.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  What is the Immigration Health Surcharge?
                </h3>
                <p className="text-gray-600">
                  The Immigration Health Surcharge (IHS) is a mandatory fee that
                  gives visa holders access to the UK's National Health Service.
                  The current rate is £470 per year for adults and £470 per year
                  for students and those under 18, payable upfront for the
                  entire visa duration.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  What happens if my UK visa application is refused?
                </h3>
                <p className="text-gray-600">
                  If your application is refused, you may have the right to an
                  administrative review or appeal, depending on the visa
                  category. Alternatively, you can address the reasons for
                  refusal and submit a new application. Our consultants provide
                  guidance on the most appropriate course of action.
                </p>
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
              Ready to Start Your UK Visa Application?
            </h2>
            <p className="text-xl mb-8">
              Contact our UK visa specialists today for expert guidance
              throughout your application journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}