import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const countries = [
  {
    name: "United Kingdom",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Discover opportunities for work, study, and business in the UK with our specialized visa services.",
    link: "/countries/uk"
  },
  {
    name: "Germany",
    image: "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Navigate Germany's skilled immigration programs and educational opportunities with expert guidance.",
    link: "/countries/germany"
  },
  {
    name: "France",
    image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Explore work and study options in France with comprehensive visa application support.",
    link: "/countries/france"
  },
  {
    name: "Turkey",
    image: "https://images.pexels.com/photos/37646/new-york-skyline-new-york-city-city-37646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Specialized work visa services for Turkey's growing economy and diverse opportunities.",
    link: "/countries/turkey"
  }
]

export default function CountryHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600">
            We provide specialized visa services for various countries with updated requirements and procedures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <Link 
              key={index} 
              href={country.link}
              className="group block rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">{country.name}</h3>
              </div>
              
              <div className="p-6 bg-white">
                <p className="text-gray-600 mb-4">
                  {country.description}
                </p>
                <div className="flex items-center text-primary font-medium">
                  <span>View Details</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/countries" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            <span>View All Destinations</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}