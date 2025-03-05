'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  ArrowRightOnRectangleIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  ChartPieIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import { Button, Flex, Text } from '@tremor/react';

export default function Header() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'About Us', href: '/about', icon: UserCircleIcon },
    { name: 'Blog', href: '/blog', icon: BookOpenIcon },
    { name: 'Help', href: '/help', icon: QuestionMarkCircleIcon },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-gradient-to-r from-[#F9FAFB] to-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="bg-[#4C1D95] text-white p-2 rounded-md mr-2 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                  <ChartPieIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#4C1D95]">
                    BetTracker X
                  </span>
                  <span className="text-xs text-[#1F2937] group-hover:text-[#4C1D95] transition-colors duration-300">
                    Transform Your Betting Game
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:ml-10 md:flex md:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                    isActive(item.href) 
                      ? 'text-[#EF4444] font-semibold' 
                      : 'text-[#1F2937] hover:text-[#4C1D95]'
                  }`}
                >
                  <item.icon className={`h-5 w-5 mr-1 transition-all duration-300 ${
                    isActive(item.href) ? 'text-[#EF4444]' : 'text-[#4C1D95] group-hover:text-[#4C1D95]'
                  }`} />
                  {item.name}
                  
                  {/* Animated underline effect */}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4C1D95] to-[#EF4444] transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dashboard CTA */}
            {(status === 'authenticated' || pathname !== '/dashboard') && (
              <Link href="/dashboard">
                <Button 
                  className="bg-[#FE5F55] hover:bg-[#e54840] text-white font-bold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center min-w-[180px]"
                >
                  <span className="flex items-center whitespace-nowrap">
                    Go to Dashboard
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </span>
                </Button>
              </Link>
            )}

            {/* Auth buttons */}
            {status === 'authenticated' ? (
              <div className="flex items-center">
                <div className="group relative flex items-center cursor-pointer" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                  <div className="inline-block h-9 w-9 overflow-hidden rounded-full bg-[#4C1D95] mr-2 shadow-md border-2 border-white">
                    {session?.user?.image ? (
                      <img src={session.user.image} alt={session.user.name || ''} className="h-full w-full object-cover" />
                    ) : (
                      <UserCircleIcon className="h-8 w-8 text-white p-1" />
                    )}
                  </div>
                  <span className="text-sm font-bold text-[#1F2937] transition-colors duration-300 group-hover:text-[#4C1D95] flex items-center">
                    {session.user?.name || 'Demo User'}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                  
                  {/* User dropdown menu */}
                  {userMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50">
                      <button
                        onClick={() => signOut()}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2 text-[#4C1D95]" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => signIn()}
                  className="flex items-center px-4 py-2 text-sm font-medium text-[#4C1D95] hover:text-[#EF4444] transition duration-300 ease-in-out relative group"
                >
                  <span>Sign in</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF4444] transition-all duration-300 group-hover:w-full"></span>
                </button>
                <Link href="/register">
                  <Button 
                    variant="secondary" 
                    className="bg-[#4C1D95] hover:bg-[#3b1678] transition-all duration-300 transform hover:scale-105 text-white border-none"
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1F2937] hover:text-[#EF4444] hover:bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4C1D95] transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-[#EF4444] bg-gradient-to-r from-[#F9FAFB] to-white'
                    : 'text-[#1F2937] hover:bg-[#F9FAFB] hover:text-[#4C1D95]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon
                  className={`h-5 w-5 mr-2 transition-colors duration-300 ${
                    isActive(item.href) ? 'text-[#EF4444]' : 'text-[#4C1D95]'
                  }`}
                />
                {item.name}
              </Link>
            ))}
            
            {/* Dashboard link in mobile menu */}
            <Link
              href="/dashboard"
              className="flex items-center justify-between px-4 py-2 rounded-md text-base font-medium text-white bg-[#FE5F55] hover:bg-[#e54840] transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Go to Dashboard</span>
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-purple-200">
            {status === 'authenticated' ? (
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  {session?.user?.image ? (
                    <img className="h-10 w-10 rounded-full border-2 border-[#4C1D95]" src={session.user.image} alt={session.user.name || ''} />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#4C1D95] to-[#9333EA] flex items-center justify-center">
                      <UserCircleIcon className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-bold text-[#1F2937]">{session.user?.name || 'Demo User'}</div>
                </div>
                <button
                  onClick={() => signOut()}
                  className="ml-auto flex-shrink-0 p-1 rounded-full text-[#4C1D95] hover:text-[#EF4444] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4C1D95] transition-colors duration-300"
                >
                  <ArrowRightOnRectangleIcon className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="flex justify-between px-5 py-2">
                <button
                  onClick={() => signIn()}
                  className="flex items-center px-4 py-2 text-sm font-medium text-[#4C1D95] hover:text-[#EF4444] transition-colors duration-300"
                >
                  Sign in
                </button>
                <Link href="/register" className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#4C1D95] to-[#EF4444] rounded-md hover:from-[#3b1678] hover:to-[#df2828] transition-all duration-300 shadow-md">
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
} 