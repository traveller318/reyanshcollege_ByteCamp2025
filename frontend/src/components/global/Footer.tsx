import Link from "next/link";
import { Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="w-full bg-white/50 backdrop-blur-xl border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#07A996] to-[#068c7f]">
              Aarogyasaathi
            </h3>
            <p className="mt-4 text-gray-600 max-w-sm">
              Best NGO Website
            </p>
            <div className="flex gap-4 mt-6">
              <Link 
                href="https://twitter.com" 
                className="text-[#07A996] hover:text-[#068c7f] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://github.com" 
                className="text-[#07A996] hover:text-[#068c7f] transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#07A996] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-600">
                Email: hello@aarogyasaathi.com
              </li>
              <li className="text-gray-600">
                Support: support@aarogyasaathi.com
              </li>
              <li>
                <Button 
                  className={cn(
                    "mt-4 bg-gradient-to-r from-[#07A996] to-[#068c7f]",
                    "hover:from-[#068c7f] hover:to-[#057a6f] text-white",
                    "transition-all duration-200 shadow-lg hover:shadow-[#07A996]/20"
                  )}
                >
                  Contact Us
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-blue-50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 aarogyasaathi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/privacy" 
                className="text-sm text-gray-600 hover:text-[#07A996] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-gray-600 hover:text-[#07A996] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 
