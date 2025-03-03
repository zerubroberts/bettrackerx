'use client';

import Link from 'next/link';
import { 
  ChartPieIcon, 
  EnvelopeIcon, 
  ShieldCheckIcon, 
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
  UserGroupIcon,
  ArrowUpCircleIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Screenshots', href: '/#gallery' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookies', href: '/cookies' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
  ];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Wave SVG */}
        <div className="relative -mt-32 mb-16 h-16 w-full overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,165.3C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center group hover-lift">
              <div className="bg-gradient-to-r from-[#4C1D95] to-[#EF4444] p-2 rounded-md mr-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ChartPieIcon className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-[#9333EA] to-white bg-clip-text text-transparent">BetTracker X</span>
                <span className="text-xs text-purple-200 group-hover:text-white transition-colors duration-300">Transform Your Betting Game</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-purple-200 leading-relaxed">
              BetTracker X helps you analyze your betting history, identify profitable strategies, 
              and make data-driven decisions to improve your betting performance. Our advanced 
              analytics platform turns your betting data into actionable insights.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://twitter.com" className="text-purple-200 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.099 10.099 0 01-3.123 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="https://facebook.com" className="text-purple-200 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" className="text-purple-200 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((group, index) => (
            <div key={group.title} className="animate-fadeIn" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
              <h3 className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-[#9333EA] to-white bg-clip-text text-transparent">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-purple-200 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-purple-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-purple-200">
            &copy; {currentYear} BetTracker X. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-xs text-purple-200 hover:text-white transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-purple-200 hover:text-white transition-colors duration-300">
              Terms
            </Link>
            <Link href="/cookies" className="text-xs text-purple-200 hover:text-white transition-colors duration-300">
              Cookies
            </Link>
            <Link href="/sitemap" className="text-xs text-purple-200 hover:text-white transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-purple-200">
          <p>BetTracker X is intended for individuals 18+ and for entertainment purposes only.</p>
          <p className="mt-1">Please gamble responsibly. If you or someone you know has a gambling problem, call 1-800-GAMBLER</p>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-full bg-gradient-to-r from-[#4C1D95] to-[#EF4444] text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUpCircleIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </footer>
  );
} 