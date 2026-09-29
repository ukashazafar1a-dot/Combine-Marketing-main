import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HomeHero() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Global travel and consultancy theme"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Unlock Global Opportunities With US
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Expert visa consultancy services for ,visit, work, study, and business opportunities worldwide. Your dreams, our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-base">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Feature Cards */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m15 4-8 8 4 4 8-8-4-4z"/><path d="m9 15-4.5 4.5"/><path d="m14.5 4 5.5 5.5"/></svg>
              </div>
              <h3 className="text-xl font-semibold">Work Visas</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Specialized consultation for professionals seeking work opportunities abroad, particularly in Turkey.
            </p>
            <Link href="/services/work-visa" className="text-primary font-medium hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <h3 className="text-xl font-semibold">Study Visas</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive guidance for students planning to pursue education in prestigious institutions abroad.
            </p>
            <Link href="/services/study-visa" className="text-primary font-medium hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 className="text-xl font-semibold">Country-Specific Expertise</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Detailed knowledge of visa requirements and processes for European countries, UK, and more.
            </p>
            <Link href="/countries" className="text-primary font-medium hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}