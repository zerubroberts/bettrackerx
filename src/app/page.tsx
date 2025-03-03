'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button, Card, Title, Text, Grid, Col, Flex } from '@tremor/react'
import { 
  ChartBarIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  PresentationChartLineIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChartPieIcon,
  BoltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Data-Driven Insights',
    description: 'Turn your betting data into actionable insights with powerful analytics and visualizations.',
    icon: ChartPieIcon,
    delay: '0ms'
  },
  {
    name: 'Performance Tracking',
    description: 'Track your betting performance over time to identify trends, strengths, and areas for improvement.',
    icon: ArrowTrendingUpIcon,
    delay: '100ms'
  },
  {
    name: 'Real-time Analytics',
    description: 'Upload your betting data and get instant analysis with beautiful charts and metrics.',
    icon: BoltIcon,
    delay: '200ms'
  },
  {
    name: 'Secure & Private',
    description: 'Your betting data remains completely private and secure. We never share your information.',
    icon: ShieldCheckIcon,
    delay: '300ms'
  },
  {
    name: 'Custom Date Ranges',
    description: 'Analyze performance for specific time periods to understand seasonal patterns.',
    icon: ClockIcon,
    delay: '400ms'
  },
  {
    name: 'Detailed Breakdown',
    description: 'See exactly which betting types and events are most profitable for your strategy.',
    icon: PresentationChartLineIcon,
    delay: '500ms'
  }
];

const pricingPlans = [
  {
    name: 'Free',
    description: 'Perfect for casual bettors tracking their performance',
    price: '$0',
    features: [
      'Basic performance metrics',
      'Upload CSV files',
      'Monthly breakdown',
      'Win/loss ratio',
      'Data export',
      'Community support'
    ],
    cta: 'Get Started',
    popular: false,
    delay: '0ms'
  },
  {
    name: 'Pro',
    description: 'For serious bettors seeking deeper insights',
    price: '$9 AUD',
    period: 'per month',
    features: [
      'Everything in Free',
      'Advanced analytics',
      'Unlimited CSV uploads',
      'Strategy recommendations',
      'Email support',
      '30-day money back guarantee'
    ],
    cta: 'Start Free Trial',
    popular: true,
    delay: '200ms'
  }
];

// Gallery images would typically be real screenshots of your dashboard
const galleryImages = [
  {
    src: '/dashboard-overview.png',
    alt: 'Dashboard overview showing key metrics',
    caption: 'Comprehensive Dashboard Overview',
    placeholder: 'https://via.placeholder.com/600x340/BDD5EA/495867?text=Dashboard+Overview'
  },
  {
    src: '/profit-chart.png',
    alt: 'Profit/Loss chart showing performance over time',
    caption: 'Detailed Profit/Loss Analysis',
    placeholder: 'https://via.placeholder.com/600x340/BDD5EA/495867?text=Profit+Chart'
  },
  {
    src: '/performance-breakdown.png',
    alt: 'Performance breakdown by bet type',
    caption: 'Performance by Bet Type',
    placeholder: 'https://via.placeholder.com/600x340/577399/FFFFFF?text=Performance+Breakdown'
  },
  {
    src: '/monthly-analysis.png',
    alt: 'Monthly performance analysis',
    caption: 'Monthly Performance Tracking',
    placeholder: 'https://via.placeholder.com/600x340/577399/FFFFFF?text=Monthly+Analysis'
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7FF]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bettracker-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div 
                  className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Transform Your Betting Strategy with Data
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-[#F7F7FF] opacity-90">
                    BetTracker X helps you analyze your betting history to identify winning patterns
                    and make smarter decisions with your money.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/dashboard">
                      <Button 
                        size="lg" 
                        className="w-full sm:w-auto bg-[#FE5F55] hover:bg-[#e54840] text-white font-bold py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-105 shadow-md"
                      >
                        <span className="flex items-center">
                          Go to Dashboard 
                          <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </span>
                      </Button>
                    </Link>
                    <a href="#pricing">
                      <Button 
                        size="lg" 
                        variant="secondary" 
                        className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white font-bold py-3 px-6 rounded-md transition-all duration-200"
                      >
                        View Pricing
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                <div 
                  className={`bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-xl animate-pulse-slow">
                      <div className="text-4xl font-bold">+15%</div>
                      <div className="text-sm text-[#F7F7FF]">ROI Improvement</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
                      <div className="text-4xl font-bold">$325</div>
                      <div className="text-sm text-[#F7F7FF]">Avg. Monthly Profit</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl animate-pulse-slow" style={{ animationDelay: '1s' }}>
                      <div className="text-4xl font-bold">68%</div>
                      <div className="text-sm text-[#F7F7FF]">Win Rate</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
                      <div className="text-4xl font-bold">87K</div>
                      <div className="text-sm text-[#F7F7FF]">Bets Analyzed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#495867] mb-4">
                Powerful Features for Smart Bettors
              </h2>
              <p className="text-lg text-[#577399] max-w-2xl mx-auto">
                BetTracker X gives you the tools you need to analyze your betting patterns and make data-driven decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.name}
                  className={`bg-[#F7F7FF] p-6 rounded-xl shadow-md border border-[#BDD5EA]/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn`}
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="rounded-full bg-[#577399]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#577399]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#495867] mb-3">{feature.name}</h3>
                  <p className="text-[#577399]">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-[#577399] hover:bg-[#495867] text-white font-bold py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-105 shadow-md"
                >
                  <span className="flex items-center">
                    Explore All Features
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-[#F7F7FF]" id="gallery">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#495867] mb-4">
                Dashboard Gallery
              </h2>
              <p className="text-lg text-[#577399] max-w-2xl mx-auto">
                See how BetTracker X transforms your betting data into actionable insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative h-64 md:h-80 bg-[#BDD5EA]">
                    <img 
                      src={image.placeholder}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold text-[#495867]">{image.caption}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-[#FE5F55] hover:bg-[#e54840] text-white font-bold py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-105 shadow-md"
                >
                  <span className="flex items-center">
                    Try It Now
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-white" id="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#495867] mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-[#577399] max-w-2xl mx-auto">
                Choose the plan that works best for your betting strategy.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 justify-center">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={plan.name}
                  className={`w-full lg:w-96 rounded-2xl shadow-lg overflow-hidden animate-fadeIn ${
                    plan.popular ? 'border-2 border-[#FE5F55] transform scale-105' : 'border border-[#BDD5EA]/50'
                  }`}
                  style={{ 
                    animationDelay: plan.delay,
                    backgroundColor: plan.popular ? 'white' : '#F7F7FF'
                  }}
                >
                  {plan.popular && (
                    <div className="bg-[#FE5F55] text-white text-center py-2 font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#495867] mb-2">{plan.name}</h3>
                    <p className="text-[#577399] mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-[#495867]">{plan.price}</span>
                      {plan.period && (
                        <span className="text-[#577399] ml-2">{plan.period}</span>
                      )}
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircleIcon className={`h-5 w-5 mr-3 mt-0.5 ${plan.popular ? 'text-[#FE5F55]' : 'text-[#577399]'}`} />
                          <span className="text-[#495867]">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href="/dashboard">
                      <Button 
                        size="lg" 
                        className={`w-full py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-105 ${
                          plan.popular 
                            ? 'bg-[#FE5F55] hover:bg-[#e54840] text-white' 
                            : 'bg-[#577399] hover:bg-[#495867] text-white'
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-[#F7F7FF] p-8 rounded-xl shadow-md animate-fadeIn" style={{ animationDelay: '400ms' }}>
              <h3 className="text-xl font-semibold text-[#495867] mb-4">Need a custom solution?</h3>
              <p className="text-[#577399] mb-6">
                Contact us for enterprise plans, bulk discounts, or custom features.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-[#495867] hover:bg-[#3a4652] text-white font-bold py-3 px-6 rounded-md transition-all duration-200"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bettracker-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Betting Strategy?</h2>
              <p className="text-xl mb-8 text-[#F7F7FF] opacity-90 max-w-2xl mx-auto">
                Join thousands of smart bettors who are using data to make better decisions.
              </p>
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-white text-[#577399] hover:bg-[#F7F7FF] font-bold py-3 px-8 rounded-md transition-all duration-200 transform hover:scale-105 shadow-md"
                >
                  <span className="flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 