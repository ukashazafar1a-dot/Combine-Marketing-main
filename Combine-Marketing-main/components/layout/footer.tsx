import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const companyInfo = {
  name: "Combine International Consultants",
  address: "337MB, Sector B DHA Phase 6, Lahore, 54792, Pakistan",
  phone: "+923001701805",
  email: "combineconsulant1@gmail.com",
};

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Work Visa", href: "/services/work-visa" },
      { name: "Study Visa", href: "/services/study-visa" },
      { name: "Immigration Consulting", href: "/services/immigration" },
      { name: "Documentation", href: "/services/documentation" },
    ],
  },
  {
    title: "Countries",
    links: [
      { name: "Europe", href: "/countries/europe" },
      { name: "United Kingdom", href: "/countries/uk" },
      { name: "Turkey", href: "/countries/turkey" },
      { name: "All Countries", href: "/countries" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <div className="h-28 w-28 flex items-center justify-center text-lg font-bold mr-3">
                  <Image
                    src="/logoc.png"
                    alt="Combine International Consultants Logo"
                    width={112}
                    height={112}
                    style={{ objectFit: 'contain' }}
                    className="drop-shadow-md"
                    priority
                  />
                </div>
              </div>
            </Link>
            
            <p className="mt-6 text-lg text-gray-700 max-w-md leading-relaxed">
              Professional visa and immigration consultancy services for work, study, and business needs worldwide. 
              Making your international dreams a reality .
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <span className="text-lg text-gray-700">{companyInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <span className="text-lg text-gray-700">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3" />
                <span className="text-lg text-gray-700">{companyInfo.email}</span>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook className="h-7 w-7" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-7 w-7" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram className="h-7 w-7" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="text-lg font-bold text-gray-900 tracking-wider uppercase mb-6">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-lg text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 py-8">
          <p className="text-base text-gray-500 text-center">
            © {new Date().getFullYear()} Combine International Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}