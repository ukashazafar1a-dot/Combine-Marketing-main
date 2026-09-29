import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HomeHero from "@/components/home/hero"
import ServicesOverview from "@/components/home/services-overview"
import CountryHighlights from "@/components/home/country-highlights"
import TestimonialsSection from "@/components/home/testimonials-section"
import ProcessSection from "@/components/home/process-section"
import StatsSection from "@/components/home/stats-section"
import TeamSection from "@/components/home/team-section"
import LatestNews from "@/components/home/latest-news"
import FAQSection from "@/components/home/faq-section"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero />
      <ServicesOverview />
      <ProcessSection />
      <CountryHighlights />
      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
      <LatestNews />
      <FAQSection />
      <CTASection />
    </div>
  )
}