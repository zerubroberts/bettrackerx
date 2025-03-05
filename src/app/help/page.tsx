'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Title, Text, Card, Grid, TextInput, Button } from '@tremor/react';
import { 
  QuestionMarkCircleIcon, 
  BookOpenIcon, 
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState('');

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: <ClipboardDocumentListIcon className="h-8 w-8 text-purple-600" />,
      description: 'New to BetTracker X? Learn the basics and set up your account.',
      links: [
        { title: 'Creating Your Account', href: '/help/creating-account' },
        { title: 'Importing Your First Bets', href: '/help/importing-bets' },
        { title: 'Understanding Your Dashboard', href: '/help/dashboard-guide' },
        { title: 'Setting Up Your Profile', href: '/help/profile-setup' },
        { title: 'Subscription Plans Explained', href: '/help/subscription-plans' },
      ]
    },
    {
      title: 'Tracking & Analytics',
      icon: <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      description: 'Make the most of our tracking and analytics features.',
      links: [
        { title: 'Recording Manual Bets', href: '/help/recording-bets' },
        { title: 'Using Advanced Filters', href: '/help/advanced-filters' },
        { title: 'Creating Custom Reports', href: '/help/custom-reports' },
        { title: 'Understanding Key Metrics', href: '/help/key-metrics' },
        { title: 'Exporting Your Data', href: '/help/exporting-data' },
      ]
    },
    {
      title: 'Account Management',
      icon: <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>,
      description: 'Manage your account settings, billing, and preferences.',
      links: [
        { title: 'Updating Payment Methods', href: '/help/payment-methods' },
        { title: 'Changing Your Password', href: '/help/change-password' },
        { title: 'Managing Notifications', href: '/help/notifications' },
        { title: 'Upgrading Your Subscription', href: '/help/upgrade-subscription' },
        { title: 'Cancelling Your Account', href: '/help/cancel-account' },
      ]
    },
    {
      title: 'Advanced Features',
      icon: <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      description: 'Take your analysis to the next level with our premium features.',
      links: [
        { title: 'Using Predictive Models', href: '/help/predictive-models' },
        { title: 'Setting Betting Goals', href: '/help/betting-goals' },
        { title: 'Variance Analysis Guide', href: '/help/variance-analysis' },
        { title: 'Creating Betting Systems', href: '/help/betting-systems' },
        { title: 'API Integration Guide', href: '/help/api-integration' },
      ]
    },
    {
      title: 'Troubleshooting',
      icon: <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>,
      description: 'Solutions to common problems and technical issues.',
      links: [
        { title: 'Login Issues', href: '/help/login-issues' },
        { title: 'Data Import Errors', href: '/help/import-errors' },
        { title: 'Missing Transactions', href: '/help/missing-transactions' },
        { title: 'Dashboard Not Loading', href: '/help/dashboard-loading' },
        { title: 'Payment Failed', href: '/help/payment-failed' },
      ]
    },
    {
      title: 'Mobile Apps',
      icon: <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>,
      description: 'Get help with our iOS and Android mobile applications.',
      links: [
        { title: 'iOS App Guide', href: '/help/ios-app' },
        { title: 'Android App Guide', href: '/help/android-app' },
        { title: 'Syncing Between Devices', href: '/help/device-sync' },
        { title: 'Mobile Betting Tracker', href: '/help/mobile-tracker' },
        { title: 'Offline Mode Usage', href: '/help/offline-mode' },
      ]
    },
  ];

  // Popular articles
  const popularArticles = [
    {
      title: 'How to Import Your Betting History',
      description: 'Step-by-step guide to importing bets from bookmaker sites and spreadsheets.',
      views: '4.5k',
      href: '/help/importing-bets',
      image: 'https://images.unsplash.com/photo-1611179099564-95faf5d496cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Understanding ROI and Yield Metrics',
      description: 'Learn what these key metrics mean and how to use them to improve your betting.',
      views: '3.2k',
      href: '/help/key-metrics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Setting Up Automatic Bookmaker Sync',
      description: 'Configure automatic syncing with supported bookmakers for real-time tracking.',
      views: '2.8k',
      href: '/help/bookmaker-sync',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Troubleshooting Login Issues',
      description: 'Common solutions for account access problems and authentication errors.',
      views: '2.3k',
      href: '/help/login-issues',
      image: 'https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ];

  // Filter categories based on search term
  const filteredCategories = searchTerm
    ? helpCategories.map(category => ({
        ...category,
        links: category.links.filter(link => 
          link.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.links.length > 0)
    : helpCategories;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Help Center
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Find guides, tutorials, and answers to all your questions about BetTracker X.
              </p>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Search for tutorials, guides, and troubleshooting..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Help Options */}
        <div className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/faq" className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <QuestionMarkCircleIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">FAQs</h3>
                  <p className="text-sm text-gray-600">Browse frequently asked questions</p>
                </div>
              </Link>
              
              <Link href="/help#tutorials" className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <VideoCameraIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Video Tutorials</h3>
                  <p className="text-sm text-gray-600">Step-by-step visual guides</p>
                </div>
              </Link>
              
              <Link href="/contact" className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact Support</h3>
                  <p className="text-sm text-gray-600">Get personalized assistance</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Title className="text-3xl font-bold mb-2">Popular Help Articles</Title>
              <Text className="text-gray-600">
                Our most viewed resources to help you get started and resolve common questions.
              </Text>
            </div>
            
            <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6">
              {popularArticles.map((article, idx) => (
                <Link href={article.href} key={idx}>
                  <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 flex-grow">{article.description}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {article.views} views
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </Grid>
          </div>
        </div>

        {/* Help Categories */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Title className="text-3xl font-bold mb-2">Help Categories</Title>
              <Text className="text-gray-600">
                Browse our comprehensive knowledge base by topic.
              </Text>
            </div>
            
            {searchTerm && filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
                <p className="mt-1 text-gray-500">
                  We couldn't find any help articles matching your search. Try a different term or browse the categories below.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Clear search
                  </button>
                </div>
              </div>
            ) : (
              <Grid numItems={1} numItemsMd={2} numItemsLg={3} className="gap-8">
                {filteredCategories.map((category, idx) => (
                  <Card key={idx} className="p-6 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 p-3 rounded-full mr-3">
                          {category.icon}
                        </div>
                        <Title className="text-xl font-bold">{category.title}</Title>
                      </div>
                      
                      <Text className="text-gray-600 mb-4">{category.description}</Text>
                      
                      <ul className="space-y-2 flex-grow">
                        {category.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <Link href={link.href} className="flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300">
                              <ArrowRightIcon className="h-4 w-4 mr-2" />
                              <span>{link.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      
                      <Link href={`/help/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`} className="mt-4 text-sm font-medium text-purple-600 hover:text-purple-800 inline-flex items-center">
                        View all articles
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </Card>
                ))}
              </Grid>
            )}
          </div>
        </div>

        {/* Video Tutorials */}
        <div id="tutorials" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Title className="text-3xl font-bold mb-2">Video Tutorials</Title>
              <Text className="text-gray-600">
                Visual guides to help you get the most out of BetTracker X.
              </Text>
            </div>
            
            <Grid numItems={1} numItemsSm={2} className="gap-8">
              <Card className="overflow-hidden shadow-md">
                <div className="relative pb-[56.25%] h-0">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-flex mx-auto">
                        <VideoCameraIcon className="h-12 w-12 text-white" />
                      </div>
                      <p className="mt-4 text-white font-medium">Getting Started with BetTracker X</p>
                      <span className="text-sm text-gray-300">12:45 min</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Complete Beginner's Guide</h3>
                  <p className="text-sm text-gray-600">Learn the basics of setting up your account and recording your first bets.</p>
                </div>
              </Card>
              
              <Card className="overflow-hidden shadow-md">
                <div className="relative pb-[56.25%] h-0">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-flex mx-auto">
                        <VideoCameraIcon className="h-12 w-12 text-white" />
                      </div>
                      <p className="mt-4 text-white font-medium">Advanced Analytics Tutorial</p>
                      <span className="text-sm text-gray-300">18:22 min</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Mastering Performance Analysis</h3>
                  <p className="text-sm text-gray-600">Unlock the full potential of our analytics tools to optimize your betting strategy.</p>
                </div>
              </Card>
            </Grid>
            
            <div className="text-center mt-8">
              <Link href="/help/videos" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 transition-colors duration-300">
                View All Video Tutorials
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center">
                <div className="lg:w-0 lg:flex-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Still need help?
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                    Our support team is ready to assist you with any questions or issues you might have.
                  </p>
                </div>
                <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                  <div className="bg-white py-8 px-6 shadow-md rounded-lg sm:px-10">
                    <div className="mb-6 text-center">
                      <h3 className="text-lg font-medium text-gray-900">Contact Support</h3>
                      <p className="mt-1 text-sm text-gray-600">We'll get back to you within 24 hours</p>
                    </div>
                    <div className="space-y-4">
                      <Link href="/contact" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Send a Message
                      </Link>
                      <Link href="mailto:support@bettrackerx.com" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Email Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 