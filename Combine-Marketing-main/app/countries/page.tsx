import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronRight, Search } from "lucide-react"

const regions = [
  {
    name: "Europe",
    description: "Explore visa options for European countries with detailed requirements and processes.",
    image: "https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/europe"
  },
  {
    name: "United Kingdom",
    description: "Comprehensive information about UK visa categories, eligibility, and application procedures.",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/uk"
  },
  {
    name: "Turkey",
    description: "Specialized guidance for Turkey's work visa process with our expert consultancy services.",
    image: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/turkey"
  }
]

const popularCountries = [
  {
    name: "Germany",
    image: "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/germany"
  },
  {
    name: "France",
    image: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/france"
  },
  {
    name: "Italy",
    image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/italy"
  },
  {
    name: "Spain",
    image: "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/spain"
  },
  {
    name: "Turkey",
    image: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/turkey"
  },
  {
    name: "Sweden",
    image: "https://images.pexels.com/photos/3389817/pexels-photo-3389817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/sweden"
  },
  {
    name: "Netherlands",
    image: "https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/netherlands"
  },
  {
    name: "United Kingdom",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/countries/uk"
  }
]

export default function CountriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Country-Specific Visa Information
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Detailed visa requirements and procedures for countries around the world.
            </p>
            
            {/* Search Box */}
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search for a country..."
                className="pl-10 pr-4 py-2"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Regions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Regions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <Link 
                key={index} 
                href={region.link}
                className="group block"
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={region.image}
                      alt={region.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">{region.name}</h3>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">
                      {region.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      <span>View Details</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Countries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularCountries.map((country, index) => (
              <Link 
                key={index} 
                href={country.link}
                className="group block"
              >
                <div className="relative rounded-xl overflow-hidden h-48 shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{country.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Visa Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Visa Categories</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our expertise covers a wide range of visa categories for various purposes and destinations. Click on any category to learn more about the specific requirements and application processes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/services/work-visa">
                    <ChevronRight className="mr-2 h-4 w-4" />
                    Work Visas
                  </Link>
                </Button>
                
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/services/study-visa">
                    <ChevronRight className="mr-2 h-4 w-4" />
                    Study Visas
                  </Link>
                </Button>
                
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/services/business-visa">
                    <ChevronRight className="mr-2 h-4 w-4" />
                    Business Visas
                  </Link>
                </Button>
                
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/services/family-visa">
                    <ChevronRight className="mr-2 h-4 w-4" />
                    Family Visas
                  </Link>
                </Button>
                
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/services/tourist-visa">
                    <ChevronRight className="mr-2 h-4 w-4" />
                    Tourist Visas
                  </Link>
                </Button>
                
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/services/permanent-residency">
                    <ChevronRight className="mr-2 h-4 w-4" />
                    Permanent Residency
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="International travel documents"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Need Specific Country Information?
              </h2>
              <p className="text-lg text-white/90">
                Our experts provide detailed guidance for any destination.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}