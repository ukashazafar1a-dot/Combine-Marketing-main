"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

const mainNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Work Visa",
        href: "/services/work-visa",
        description: "Professional work visa services for Turkey",
      },
      {
        title: "Study Visa",
        href: "/services/study-visa",
        description: "Educational visa services for international students",
      },
    ],
  },
  {
    title: "Countries",
    href: "/countries",
    children: [
      {
        title: "Europe",
        href: "/countries/europe",
        description: "Study Visa information for European countries",
      },
      {
        title: "United Kingdom",
        href: "/countries/uk",
        description: "UK Study Visa requirements and procedures",
      },
      {
        title: "Turkey",
        href: "/countries/turkey",
        description: "Specialized services for Turkish work visas",
      },
      {
        title: "Belarus",
        href: "/countries/belarus",
        description: "Specialized services for Belarus work visas",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white/95 shadow-lg backdrop-blur-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-28 w-28">
                <Image
                  src="/logoc.png"
                  alt="Combine International Consultants Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="112px"
                  priority
                  className="drop-shadow-md"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => 
                  item.children ? (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className={cn(
                        "text-lg font-semibold",
                        pathname.startsWith(item.href) ? "text-primary font-bold" : "text-gray-800 hover:text-primary"
                      )}>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                          {item.children.map((child) => (
                            <li key={child.title} className="row-span-1">
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{child.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {child.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "text-base px-4 py-2",
                            pathname === item.href ? "text-primary font-medium" : "text-gray-700"
                          )}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col w-full">
                <nav className="flex flex-col gap-4 mt-8">
                  {mainNavItems.map((item) => (
                    <div key={item.title} className="space-y-3">
                      <Link 
                        href={item.href}
                        className={cn(
                          "block text-lg font-medium",
                          pathname === item.href ? "text-primary" : "text-gray-700"
                        )}
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                          {item.children.map((child) => (
                            <Link 
                              key={child.title}
                              href={child.href}
                              className={cn(
                                "block text-base",
                                pathname === child.href ? "text-primary" : "text-gray-600"
                              )}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Contact Button */}
          <div className="hidden sm:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}