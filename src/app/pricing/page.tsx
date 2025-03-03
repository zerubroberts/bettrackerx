'use client';

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import { Card, Title, Text, Button, Divider } from '@tremor/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)
  
  const toggleBilling = () => {
    setIsAnnual(!isAnnual)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that's right for your betting strategy.
                All plans include access to our core features.
              </p>
              
              <div className="mt-8 inline-flex items-center bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={toggleBilling}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    isAnnual ? 'bg-blue-600 text-white' : 'text-gray-700'
                  }`}
                >
                  Annual (Save 15%)
                </button>
                <button
                  onClick={toggleBilling}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    !isAnnual ? 'bg-blue-600 text-white' : 'text-gray-700'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Free Tier */}
              <Card className="p-8 border-2 border-gray-200">
                <div className="flex flex-col h-full">
                  <div>
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Free
                    </div>
                    <Title>Starter</Title>
                    <div className="mt-4 mb-8">
                      <Text className="text-gray-500 mb-2">Perfect for casual bettors</Text>
                      <div className="flex items-baseline mt-2">
                        <span className="text-5xl font-bold text-gray-900">$0</span>
                        <span className="text-gray-500 ml-1">/ forever</span>
                      </div>
                    </div>
                    
                    <Divider />
                    
                    <div className="mt-8 space-y-4">
                      <Feature text="CSV upload for betting data" />
                      <Feature text="Basic profit/loss tracking" />
                      <Feature text="Up to 1,000 transactions" />
                      <Feature text="30-day data retention" />
                      <Feature text="Basic stats and visualizations" />
                      <Feature text="Email support" />
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-8">
                    <Link href="/dashboard">
                      <Button size="lg" color="blue" className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
              
              {/* Paid Tier */}
              <Card className="p-8 border-2 border-blue-600 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Recommended
                </div>
                <div className="flex flex-col h-full">
                  <div>
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Pro
                    </div>
                    <Title>Professional</Title>
                    <div className="mt-4 mb-8">
                      <Text className="text-gray-500 mb-2">For serious bettors who want deeper insights</Text>
                      <div className="flex items-baseline mt-2">
                        <span className="text-5xl font-bold text-gray-900">$9</span>
                        <span className="text-gray-500 ml-1">/ {isAnnual ? 'month' : 'month'}</span>
                      </div>
                      <Text className="text-sm text-gray-500 mt-2">
                        {isAnnual ? 'Billed annually ($108/year)' : 'Billed monthly'}
                      </Text>
                    </div>
                    
                    <Divider />
                    
                    <div className="mt-8 space-y-4">
                      <Feature text="Everything in Free plan" />
                      <Feature text="Unlimited transactions" />
                      <Feature text="Unlimited data retention" />
                      <Feature text="Advanced performance metrics" />
                      <Feature text="Export analytics as PDF/CSV" />
                      <Feature text="Betting strategy recommendations" />
                      <Feature text="Priority support" />
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-8">
                    <Button size="lg" color="blue" className="w-full">
                      Subscribe Now
                    </Button>
                    <Text className="text-xs text-center text-gray-500 mt-2">
                      7-day money-back guarantee
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Have questions? We have answers.
              </p>
            </div>
            
            <div className="space-y-8">
              <FaqItem 
                question="How does the free plan work?" 
                answer="The free plan gives you access to core features like CSV upload and basic profit/loss tracking. You can track up to 1,000 transactions with 30-day data retention. It's perfect for casual bettors or those just getting started." 
              />
              
              <FaqItem 
                question="What currency do you support?" 
                answer="BetTracker Pro supports all major currencies. The system will detect the currency from your CSV data and display it accordingly. All monetary values will be shown in your preferred currency." 
              />
              
              <FaqItem 
                question="Can I cancel my subscription anytime?" 
                answer="Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to Pro features until the end of your billing period. We also offer a 7-day money-back guarantee for new subscribers." 
              />
              
              <FaqItem 
                question="Is my data secure?" 
                answer="Absolutely. We use industry-standard encryption and security practices to protect your data. Your betting data is stored securely and is never shared with third parties. You can delete your data at any time." 
              />
              
              <FaqItem 
                question="Do you offer enterprise plans?" 
                answer="Yes, for bookmakers or professional betting syndicates, we offer custom enterprise solutions with advanced features, dedicated support, and custom integration options. Contact us for more information." 
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BetTracker Pro. All rights reserved.</p>
          <p className="mt-1 text-gray-400 text-xs">This application is for educational purposes only.</p>
        </div>
      </footer>
    </div>
  )
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
      <span className="ml-3 text-gray-600">{text}</span>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
} 