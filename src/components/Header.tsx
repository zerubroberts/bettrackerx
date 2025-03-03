'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  ArrowRightOnRectangleIcon,
  ChartBarSquareIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline';
import { Button, Flex, Text } from '@tremor/react';

export default function Header() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { name: 'Dashboard', href: '/dashboard', icon: ChartBarSquareIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
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
                <div className="bg-gradient-to-r from-[#4C1D95] to-[#EF4444] text-white p-2 rounded-md mr-2 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                  <ChartPieIcon className="w-6 h-6 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-[#4C1D95] to-[#EF4444] bg-clip-text text-transparent">
                    BetTracker X
                  </span>
                  <span className="text-xs text-[#1F2937] group-hover:text-[#EF4444] transition-colors duration-300">
                    Transform Your Betting Game
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
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
            <Link href="/dashboard">
              <Button 
                variant="primary"
                className="bg-gradient-to-r from-[#4C1D95] to-[#EF4444] hover:from-[#3b1678] hover:to-[#df2828] transition-all duration-300 transform hover:scale-105 shadow-md text-white border-none"
              >
                <ChartBarSquareIcon className="h-5 w-5 mr-1" />
                Go to Dashboard
              </Button>
            </Link>

            {/* Auth buttons */}
            {status === 'authenticated' ? (
              <div className="flex items-center">
                <div className="group relative flex items-center cursor-pointer">
                  <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gradient-to-r from-[#9333EA] to-[#4C1D95] mr-2 shadow-md">
                    {session?.user?.image ? (
                      <img src={session.user.image} alt={session.user.name || ''} className="h-full w-full" />
                    ) : (
                      <UserCircleIcon className="h-8 w-8 text-white" />
                    )}
                  </span>
                  <span className="text-sm font-medium text-[#1F2937] hidden lg:block transition-colors duration-300 group-hover:text-[#4C1D95]">
                    {session.user?.name || 'User'}
                  </span>
                  
                  <button
                    onClick={() => signOut()}
                    className="ml-4 flex items-center text-sm font-medium text-[#4C1D95] hover:text-[#EF4444] transition duration-300 ease-in-out"
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
                    <span className="hidden lg:block">Sign out</span>
                  </button>
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
                  <div className="text-base font-medium text-[#1F2937]">{session.user?.name || 'User'}</div>
                  <div className="text-sm font-medium text-[#4C1D95]">{session.user?.email || ''}</div>
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