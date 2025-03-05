'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Title, Text, Card, Grid } from '@tremor/react';
import { 
  HomeIcon, 
  UserGroupIcon, 
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon, 
  NewspaperIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  UserIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function Sitemap() {
  const siteMapData = [
    {
      title: 'Main Pages',
      icon: <HomeIcon className="h-5 w-5 text-purple-600" />,
      links: [
        { name: 'Home', href: '/' },
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
      ]
    },
    {
      title: 'Company',
      icon: <UserGroupIcon className="h-5 w-5 text-purple-600" />,
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact' },
      ]
    },
    {
      title: 'Legal',
      icon: <DocumentTextIcon className="h-5 w-5 text-purple-600" />,
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookies Policy', href: '/cookies' },
        { name: 'Responsible Gambling', href: '/responsible-gambling' },
      ]
    },
    {
      title: 'Support',
      icon: <QuestionMarkCircleIcon className="h-5 w-5 text-purple-600" />,
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact Support', href: '/contact' },
      ]
    },
    {
      title: 'Features',
      icon: <ChartBarIcon className="h-5 w-5 text-purple-600" />,
      links: [
        { name: 'Performance Tracking', href: '/#features' },
        { name: 'Betting Analytics', href: '/#features' },
        { name: 'Custom Reports', href: '/#features' },
        { name: 'Data Visualization', href: '/#features' },
        { name: 'Insights & Predictions', href: '/#features' },
      ]
    },
    {
      title: 'Account',
      icon: <UserIcon className="h-5 w-5 text-purple-600" />,
      links: [
        { name: 'My Profile', href: '/dashboard/profile' },
        { name: 'Account Settings', href: '/dashboard/settings' },
        { name: 'Billing', href: '/dashboard/billing' },
        { name: 'Subscription', href: '/dashboard/subscription' },
      ]
    },
    {
      title: 'Resources',
      icon: <NewspaperIcon className="h-5 w-5 text-purple-600" />,
      links: [
        { name: 'Getting Started Guide', href: '/help/getting-started' },
        { name: 'Video Tutorials', href: '/help#tutorials' },
        { name: 'Blog Articles', href: '/blog' },
        { name: 'API Documentation', href: '/help/api' },
      ]
    },
    {
      title: 'Extras',
      icon: <CurrencyDollarIcon className="h-5 w-5 text-purple-600" />,
      links: [
        { name: 'Affiliate Program', href: '/affiliates' },
        { name: 'Referral Program', href: '/referrals' },
        { name: 'Partner With Us', href: '/partners' },
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Sitemap
              </h1>
              <p className="text-lg text-purple-100">
                Find all pages and resources across the BetTracker X platform.
              </p>
            </div>
          </div>
        </div>

        {/* Sitemap Content */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Grid numItems={1} numItemsMd={2} numItemsLg={4} className="gap-6">
              {siteMapData.map((section, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-100 rounded-md mr-3">
                      {section.icon}
                    </div>
                    <Title className="font-semibold">{section.title}</Title>
                  </div>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          href={link.href} 
                          className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center"
                        >
                          <svg 
                            className="h-3 w-3 mr-2 text-gray-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </Grid>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-b border-gray-200 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Title className="text-lg font-semibold mb-4">Site Info</Title>
                  <ul className="space-y-3 text-gray-600">
                    <li>
                      <Link href="/about" className="hover:text-purple-600 transition-colors duration-300">About BetTracker X</Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-purple-600 transition-colors duration-300">Contact Information</Link>
                    </li>
                    <li>
                      <Link href="/sitemap" className="hover:text-purple-600 transition-colors duration-300">Sitemap</Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <Title className="text-lg font-semibold mb-4">User Accounts</Title>
                  <ul className="space-y-3 text-gray-600">
                    <li>
                      <Link href="/login" className="hover:text-purple-600 transition-colors duration-300">Login</Link>
                    </li>
                    <li>
                      <Link href="/register" className="hover:text-purple-600 transition-colors duration-300">Create Account</Link>
                    </li>
                    <li>
                      <Link href="/login" className="hover:text-purple-600 transition-colors duration-300">Reset Password</Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <Title className="text-lg font-semibold mb-4">Legal & Support</Title>
                  <ul className="space-y-3 text-gray-600">
                    <li>
                      <Link href="/privacy" className="hover:text-purple-600 transition-colors duration-300">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms" className="hover:text-purple-600 transition-colors duration-300">Terms of Service</Link>
                    </li>
                    <li>
                      <Link href="/help" className="hover:text-purple-600 transition-colors duration-300">Help Center</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-purple-600 mr-2" />
                <span className="text-gray-600">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="text-purple-600 hover:text-purple-800">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="text-purple-600 hover:text-purple-800">Terms of Service</a> apply.</span>
              </div>
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} BetTracker X. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 