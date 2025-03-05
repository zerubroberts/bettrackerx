'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Title, Text, Card, Grid } from '@tremor/react';
import { QuestionMarkCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: 'Account & Billing',
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>,
      questions: [
        {
          question: 'How do I create an account?',
          answer: "To create an account, click the \"Sign Up\" button in the top right corner of our homepage. You'll be asked to provide your email address and create a password. After verifying your email, you can complete your profile and start using BetTracker X."
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. For annual subscriptions, we also offer payment via bank transfer. All payments are processed securely through Stripe.'
        },
        {
          question: 'Can I change my subscription plan?',
          answer: 'Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. Upgrades take effect immediately, with a prorated charge for the remainder of your billing cycle. Downgrades take effect at the end of your current billing period.'
        },
        {
          question: 'How do I cancel my subscription?',
          answer: 'You can cancel your subscription at any time from your account settings. Go to "Subscription Management" and click "Cancel Subscription." Your access will continue until the end of your current billing period. We don\'t offer refunds for partial months of service.'
        },
        {
          question: 'Is there a free trial available?',
          answer: "Yes, we offer a 14-day free trial for all new users. No credit card is required to start your trial. You'll have access to all features of our Standard plan during this period."
        }
      ]
    },
    {
      title: 'Data & Privacy',
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>,
      questions: [
        {
          question: 'How is my betting data protected?',
          answer: 'Your betting data is encrypted both in transit and at rest using industry-standard encryption protocols. We use bank-level security measures to ensure your data remains private and secure. We never share your personal data with third parties without your explicit consent.'
        },
        {
          question: 'Can I export my data?',
          answer: 'Yes, you can export your data at any time in CSV or Excel format from your dashboard. This includes all your betting history, performance metrics, and analysis. This feature is available on all subscription plans.'
        },
        {
          question: 'What happens to my data if I cancel my subscription?',
          answer: 'If you cancel your subscription, your data remains in our system for 30 days, during which time you can reactivate your account and regain access. After 30 days, your account and data are marked for deletion. You can request immediate data deletion at any time through your account settings.'
        },
        {
          question: 'Do you share my betting data with bookmakers?',
          answer: 'Absolutely not. We do not share your betting data, patterns, or analysis with any bookmakers or third parties. Your data is used solely to provide you with insights and improve your experience on our platform.'
        },
        {
          question: 'Can I delete specific bets from my history?',
          answer: 'Yes, you can delete individual bets from your history at any time. Go to your Betting History, find the bet you want to remove, and click the delete option. Please note that this will affect your overall statistics and analysis.'
        }
      ]
    },
    {
      title: 'Features & Functionality',
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      questions: [
        {
          question: 'What betting markets do you support?',
          answer: 'BetTracker X supports all major betting markets, including sports betting (all major sports and leagues worldwide), horse racing, casino games, poker, and financial betting. If you\'re using a market that isn\'t automatically recognized, you can create custom categories.'
        },
        {
          question: 'Can I import my existing betting history?',
          answer: 'Yes, you can import your betting history from Excel/CSV files or directly from supported bookmakers. We provide templates to help you format your data correctly. For Premium and Enterprise subscribers, we offer assisted imports where our team helps you migrate your historical data.'
        },
        {
          question: 'How accurate are the performance predictions?',
          answer: 'Our prediction models are built on advanced statistical methods and machine learning algorithms. They analyze your historical patterns and market conditions to provide forecasts with up to 80% accuracy in stable markets. However, all predictions should be used as one of several factors in your decision-making process.'
        },
        {
          question: 'Is there a mobile app available?',
          answer: 'Yes, we offer mobile apps for both iOS and Android devices. The apps provide full functionality, allowing you to record bets, view analytics, and receive insights on the go. You can download them from the App Store or Google Play Store.'
        },
        {
          question: 'Can I track bets from multiple bookmakers?',
          answer: 'Yes, BetTracker X is designed to track bets across multiple bookmakers. You can add as many bookmaker accounts as you need, allowing you to compare odds, track performance by bookmaker, and identify which platforms offer you the best value.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>,
      questions: [
        {
          question: 'What should I do if I encounter an error?',
          answer: 'If you encounter an error, please try refreshing the page first. If the issue persists, clear your browser cache and cookies. For specific errors, take a screenshot of the error message and contact our support team via the Help Center or by emailing support@bettrackerx.com.'
        },
        {
          question: 'How do I report a bug?',
          answer: 'We appreciate bug reports as they help us improve the platform. To report a bug, go to the Help Center and click "Report a Bug." Please provide as much detail as possible, including steps to reproduce the issue, screenshots, and information about your device and browser.'
        },
        {
          question: 'Is there a user guide available?',
          answer: 'Yes, we offer a comprehensive user guide that covers all aspects of BetTracker X. You can access it by clicking on the "Help" icon in the dashboard or visiting our Knowledge Base. We also provide tutorial videos for visual learners.'
        },
        {
          question: 'Do you offer API access?',
          answer: 'Yes, API access is available for Enterprise plan subscribers. Our API allows you to integrate BetTracker X with your own applications, automate data uploads, and extract insights programmatically. Documentation is provided in our Developer Hub.'
        },
        {
          question: 'What browsers are supported?',
          answer: 'BetTracker X works best on modern browsers including Chrome, Firefox, Safari, and Edge (latest two versions). We recommend keeping your browser updated for optimal performance and security. Internet Explorer is not supported.'
        }
      ]
    },
    {
      title: 'Responsible Gambling',
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>,
      questions: [
        {
          question: 'How can BetTracker X help with responsible gambling?',
          answer: 'BetTracker X includes several features designed to promote responsible gambling. These include deposit/loss limits tracking, playing time monitors, risk pattern identification, and customizable alerts when your betting behavior changes significantly. These tools help you maintain awareness of your betting habits.'
        },
        {
          question: 'Do you offer resources for problem gambling?',
          answer: 'Yes, we provide links to professional gambling addiction resources and self-assessment tools. Visit our Responsible Gambling page for a list of organizations that offer support and counseling services. We take problem gambling seriously and encourage users to bet responsibly.'
        },
        {
          question: 'Can I set betting limits in the app?',
          answer: "Yes, you can set various limits within BetTracker X, including daily/weekly/monthly deposit limits, loss thresholds, and session time limits. When you approach these limits, you'll receive notifications. These features are available in all subscription plans."
        },
        {
          question: 'What signs indicate potential problem gambling?',
          answer: 'Potential signs include betting more than you can afford, borrowing money to gamble, gambling to recover losses, neglecting work or relationships due to gambling, and feeling anxious or irritable when not gambling. If you recognize these signs, we encourage you to seek support.'
        },
        {
          question: 'Does BetTracker X encourage gambling?',
          answer: 'BetTracker X is designed as an analytical tool to help existing bettors make more informed decisions and understand their betting patterns. We do not promote gambling to non-gamblers, offer bonuses for betting more, or partnering with gambling operators for referral fees. Our goal is to provide transparency and insights, not to increase gambling activity.'
        }
      ]
    }
  ];

  // Filter FAQs based on search term
  const filteredFAQs = searchTerm 
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(
          q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
               q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <QuestionMarkCircleIcon className="h-16 w-16 mx-auto mb-4 text-purple-300" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-purple-100">
                Find answers to common questions about BetTracker X.
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {searchTerm && filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
                <p className="mt-1 text-gray-500">
                  We couldn't find any FAQs matching your search. Try a different term or browse the categories below.
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
              <div className="space-y-12">
                {filteredFAQs.map((category, idx) => (
                  <div key={idx} className={category.questions.length > 0 ? '' : 'hidden'}>
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="bg-purple-100 p-2 rounded-full">
                        {category.icon}
                      </div>
                      <Title className="text-2xl font-bold">{category.title}</Title>
                    </div>
                    
                    <Grid numItemsMd={1} className="gap-6">
                      {category.questions.map((item, index) => (
                        <Card key={index} className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                              <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                              <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              </span>
                            </summary>
                            <div className="mt-4 text-gray-600 leading-relaxed">
                              {item.answer}
                            </div>
                          </details>
                        </Card>
                      ))}
                    </Grid>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-16 text-center">
              <Title className="text-xl font-semibold mb-4">Still have questions?</Title>
              <Text className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Please contact our support team.
              </Text>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 