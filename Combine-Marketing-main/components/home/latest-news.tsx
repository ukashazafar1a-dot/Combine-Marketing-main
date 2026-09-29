import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CalendarDays, ChevronRight } from "lucide-react"

const blogPosts = [
  {
    title: "2023 Updates: UK Student Visa Requirements",
    excerpt: "Recent changes to the UK's student visa application process and how they might affect your application.",
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "June 15, 2023",
    slug: "uk-student-visa-updates-2023"
  },
  {
    title: "Turkey Work Permit: New Opportunities for IT Professionals",
    excerpt: "Exploring the growing demand for IT talent in Turkey and the streamlined work permit process.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 22, 2023",
    slug: "turkey-work-permit-it-professionals"
  },
  {
    title: "European Blue Card: Eligibility and Application Process",
    excerpt: "A comprehensive guide to the EU Blue Card program for highly skilled professionals.",
    image: "https://images.pexels.com/photos/18261785/pexels-photo-18261785/free-photo-of-close-up-of-a-eu-flag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 18, 2023",
    slug: "european-blue-card-guide"
  }
]

export default function LatestNews() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay informed about the latest visa regulations, immigration news, and valuable insights.
            </p>
          </div>
          
          <Link 
            href="/blog" 
            className="mt-6 md:mt-0 inline-flex items-center text-primary font-medium hover:underline"
          >
            <span>View All Posts</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden h-full border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0 px-6 pb-6">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  <span>Read More</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}