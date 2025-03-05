'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  UserGroupIcon, 
  LightBulbIcon, 
  ChartBarIcon, 
  GlobeAltIcon,
  TrophyIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { Title, Text, Card, Flex, Grid, Col, Metric } from '@tremor/react'

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Zerub Roberts',
      role: 'Founder & CEO',
      bio: 'With a background in Analytics, data visualization and finding value for punters, Zerub founded BetTracker X to help bettors make more informed decisions through data-driven insights.',
      image: '/images/Zerub.png'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'With over 15 years of experience in software development, Michael leads our engineering team to build powerful yet intuitive tools for bettors of all levels.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      name: 'James Wilson',
      role: 'Head of Data Science',
      bio: 'PhD in Statistics from MIT, James brings academic rigor to our analytics models, ensuring you get the most accurate insights possible.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      name: 'Neelima Pallanti',
      role: 'Head of Customer Success',
      bio: 'With a background in both sports betting and customer experience, Neelima ensures our users get the most value from the platform and achieve their betting goals.',
      image: '/images/Neelima Photo.jpeg'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                About BetTracker X
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-purple-100">
                We're on a mission to transform the way bettors analyze their performance and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 mb-4">
                  Our Story
                </span>
                <Title className="text-3xl md:text-4xl font-bold mb-6">From Frustrated Bettors to Industry Innovators</Title>
                <Text className="text-gray-600 leading-relaxed mb-6">
                  BetTracker X was born out of frustration. Our founder, Sarah Johnson, was tired of using spreadsheets to track her betting performance and saw an opportunity to build something better.
                </Text>
                <Text className="text-gray-600 leading-relaxed mb-6">
                  Founded in 2021, we've quickly grown from a small startup to a trusted platform used by thousands of bettors worldwide. Our team combines expertise in sports betting, data science, and software development to create a tool that genuinely helps bettors make better decisions.
                </Text>
                <Text className="text-gray-600 leading-relaxed">
                  What started as a simple tracking tool has evolved into a comprehensive analytics platform with predictive models, pattern recognition, and actionable insights that have helped our users increase their ROI by an average of 15%.
                </Text>
              </div>
              <div className="order-1 md:order-2 relative h-96">
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl transform transition-all hover:scale-105">
                  <Image
                    src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="Team collaboration"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="filter brightness-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="py-16 md:py-24 bg-gradient-to-b from-white via-purple-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 mb-4">
                Our Values
              </span>
              <Title className="text-3xl md:text-4xl font-bold mb-6">What Drives Us Every Day</Title>
              <Text className="text-gray-600 max-w-3xl mx-auto">
                These core principles guide our decisions, shape our culture, and ensure we're always working to provide the best possible experience for our users.
              </Text>
            </div>

            <Grid numItems={1} numItemsMd={2} numItemsLg={4} className="gap-6">
              <Card className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-4">
                    <UserGroupIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <Title className="text-lg font-semibold mb-2">User-Centric</Title>
                  <Text className="text-gray-600">
                    We build for our users first. Every feature and decision is made with their success in mind.
                  </Text>
                </div>
              </Card>
              
              <Card className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-4">
                    <LightBulbIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <Title className="text-lg font-semibold mb-2">Innovation</Title>
                  <Text className="text-gray-600">
                    We're constantly exploring new ways to analyze data and present insights that give our users an edge.
                  </Text>
                </div>
              </Card>
              
              <Card className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-4">
                    <ChartBarIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <Title className="text-lg font-semibold mb-2">Data Integrity</Title>
                  <Text className="text-gray-600">
                    We believe in honest, accurate data. No inflated numbers or misleading statistics, ever.
                  </Text>
                </div>
              </Card>
              
              <Card className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-4">
                    <HeartIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <Title className="text-lg font-semibold mb-2">Responsible Gaming</Title>
                  <Text className="text-gray-600">
                    We promote healthy betting habits and provide tools to help our users bet responsibly.
                  </Text>
                </div>
              </Card>
            </Grid>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 mb-4">
                Our Team
              </span>
              <Title className="text-3xl md:text-4xl font-bold mb-6">Meet the People Behind BetTracker X</Title>
              <Text className="text-gray-600 max-w-3xl mx-auto">
                Our diverse team brings together expertise in betting, statistics, software development, and user experience.
              </Text>
            </div>

            <Grid numItems={1} numItemsMd={2} numItemsLg={4} className="gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <Title className="text-xl font-semibold mb-1">{member.name}</Title>
                    <Text className="text-purple-600 font-medium mb-3">{member.role}</Text>
                    <Text className="text-gray-600">{member.bio}</Text>
                  </div>
                </Card>
              ))}
            </Grid>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 md:py-24 bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-white text-purple-800 mb-4">
                Our Impact
              </span>
              <Title className="text-3xl md:text-4xl font-bold mb-6 text-white">BetTracker X by the Numbers</Title>
              <Text className="text-purple-100 max-w-3xl mx-auto">
                We're proud of the impact we've had on our users' betting success and the community we've built.
              </Text>
            </div>

            <Grid numItems={1} numItemsMd={2} numItemsLg={4} className="gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-center">
                  <Text className="text-purple-200 font-medium">Active Users</Text>
                  <Metric className="mt-2 mb-2 text-white">25,000+</Metric>
                  <Text className="text-purple-200">And growing every day</Text>
                </div>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-center">
                  <Text className="text-purple-200 font-medium">Bets Analyzed</Text>
                  <Metric className="mt-2 mb-2 text-white">10M+</Metric>
                  <Text className="text-purple-200">Data-driven insights</Text>
                </div>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-center">
                  <Text className="text-purple-200 font-medium">Avg. ROI Improvement</Text>
                  <Metric className="mt-2 mb-2 text-white">15%</Metric>
                  <Text className="text-purple-200">For our premium users</Text>
                </div>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-center">
                  <Text className="text-purple-200 font-medium">Countries</Text>
                  <Metric className="mt-2 mb-2 text-white">45+</Metric>
                  <Text className="text-purple-200">Global community</Text>
                </div>
              </Card>
            </Grid>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500"></div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Title className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Transform Your Betting Strategy?</Title>
            <Text className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Join thousands of bettors who have improved their performance using BetTracker X's powerful analytics and insights.
            </Text>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 shadow-sm hover:shadow-lg transition-all duration-300">
                Get Started for Free
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center px-6 py-3 border border-purple-300 text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 shadow-sm hover:shadow-lg transition-all duration-300">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 