'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Title, Text, Card, Grid, Col, Flex, Button } from '@tremor/react';
import { 
  BuildingOffice2Icon, 
  CurrencyDollarIcon, 
  ClockIcon,
  MapPinIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

export default function Careers() {
  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with stock options and performance bonuses.',
      icon: <CurrencyDollarIcon className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and work-from-anywhere policy.',
      icon: <ClockIcon className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, conference budgets, and career development plans.',
      icon: <BriefcaseIcon className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Global Team',
      description: 'Join our diverse team spanning three continents and 15+ countries.',
      icon: <MapPinIcon className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, wellness programs, and mental health support.',
      icon: <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    },
    {
      title: 'Work-Life Balance',
      description: 'Unlimited PTO policy, paid parental leave, and regular company retreats.',
      icon: <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote (US/EU)',
      type: 'Full-time',
      description: 'We\'re looking for a Senior Frontend Engineer to help build beautiful, responsive, and performant user interfaces. You\'ll work closely with our design and product teams to create intuitive experiences that make complex data easy to understand.',
      requirements: [
        'Expertise in React.js and Next.js',
        '5+ years of professional frontend development experience',
        'Strong knowledge of modern JavaScript (ES6+)',
        'Experience with responsive design and CSS frameworks',
        'Familiarity with data visualization libraries (e.g., D3.js, Chart.js)',
        'Understanding of web performance optimization techniques'
      ]
    },
    {
      id: 2,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote (Worldwide)',
      type: 'Full-time',
      description: 'Join our analytics team to develop innovative models that provide value and insights from betting data. You\'ll work on predictive algorithms, pattern recognition systems, and advanced statistical analysis to help our users make more informed decisions.',
      requirements: [
        'MS or PhD in Statistics, Mathematics, Computer Science, or related field',
        '3+ years of experience in applied data science',
        'Strong proficiency in Python and its data science ecosystem (pandas, NumPy, scikit-learn)',
        'Experience with machine learning and statistical modeling',
        'Knowledge of SQL and database querying',
        'Experience with time-series analysis is a plus'
      ]
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote (US/EU)',
      type: 'Full-time',
      description: 'We\'re seeking a experienced Product Manager to lead the strategy and execution of new features and improvements. You\'ll collaborate with cross-functional teams to define product vision, gather requirements, and deliver features that delight our users.',
      requirements: [
        '4+ years of product management experience',
        'Experience with analytics or fintech products is preferred',
        'Strong analytical skills and data-driven decision making',
        'Excellent communication and stakeholder management skills',
        'Ability to translate complex user needs into clear requirements',
        'Experience with agile development methodologies'
      ]
    },
    {
      id: 4,
      title: 'Customer Success Manager',
      department: 'Customer Experience',
      location: 'Remote (US/UK timezones)',
      type: 'Full-time',
      description: 'Help our users get the most value from BetTracker X by providing exceptional support, training, and strategic guidance. You\'ll be responsible for customer onboarding, training, and ensuring user satisfaction and retention.',
      requirements: [
        '3+ years in customer success, account management, or similar role',
        'Excellent communication and relationship-building skills',
        'Problem-solving mindset and ability to navigate complex user needs',
        'Experience with CRM systems and support tools',
        'Understanding of SaaS business models',
        'Interest in sports betting or analytics is a plus'
      ]
    }
  ];

  const values = [
    {
      title: 'User-Centric',
      description: 'We build for our users first, always prioritizing their needs and success.',
      icon: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Data-Driven',
      description: 'We make decisions based on evidence and measure our impact rigorously.',
      icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Continuous Improvement',
      description: "We're never satisfied with the status quo and always seek to be better.",
      icon: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Transparency',
      description: 'We communicate openly and honestly, both within our team and with our users.',
      icon: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Join Our Team
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Help us transform the world of betting analytics with data-driven innovation.
              </p>
              <Link href="#openings" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                View Open Positions
              </Link>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 mb-4">
                  About Us
                </span>
                <Title className="text-3xl font-bold mb-6">Building the Future of Betting Analytics</Title>
                <Text className="text-gray-600 leading-relaxed mb-6">
                  At BetTracker X, we're a team of passionate data scientists, engineers, and product specialists united by our mission to transform how people analyze and improve their betting strategies.
                </Text>
                <Text className="text-gray-600 leading-relaxed mb-6">
                  Founded in 2021, we've quickly grown to serve thousands of users worldwide while maintaining our startup spirit and innovative culture. Our remote-first approach allows us to hire the best talent from around the globe.
                </Text>
                <Text className="text-gray-600 leading-relaxed">
                  We're backed by top-tier investors and growing rapidly, creating opportunities for impact and career growth across all departments. If you're excited about building products that help people make data-driven decisions, we'd love to meet you.
                </Text>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="BetTracker X team collaboration"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="filter brightness-95"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 mb-4">
                Why Join Us
              </span>
              <Title className="text-3xl font-bold mb-6">Benefits & Perks</Title>
              <Text className="text-gray-600 max-w-3xl mx-auto">
                We believe in taking care of our team members with competitive compensation and benefits that support your professional growth and personal well-being.
              </Text>
            </div>
            
            <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <Title className="text-lg font-semibold mb-2">{benefit.title}</Title>
                      <Text className="text-gray-600">{benefit.description}</Text>
                    </div>
                  </div>
                </Card>
              ))}
            </Grid>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 mb-4">
                Our Culture
              </span>
              <Title className="text-3xl font-bold mb-6">Core Values</Title>
              <Text className="text-gray-600 max-w-3xl mx-auto">
                These principles guide our decisions, shape our product development, and define our company culture.
              </Text>
            </div>
            
            <Grid numItems={1} numItemsSm={2} className="gap-8">
              {values.map((value, index) => (
                <Card key={index} className="overflow-hidden shadow-md">
                  <div className="h-48 relative">
                    <Image
                      src={value.icon || ''}
                      alt={value.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <Text className="text-gray-600">{value.description}</Text>
                  </div>
                </Card>
              ))}
            </Grid>
          </div>
        </div>

        {/* Job Listings */}
        <div id="openings" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 mb-4">
                Open Positions
              </span>
              <Title className="text-3xl font-bold mb-6">Join Our Growing Team</Title>
              <Text className="text-gray-600 max-w-3xl mx-auto">
                We're looking for talented individuals who are passionate about our mission and eager to make an impact.
              </Text>
            </div>
            
            <div className="space-y-6">
              {jobListings.map(job => (
                <Card key={job.id} className="overflow-hidden shadow-md">
                  <div className="p-6">
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <div>
                        <Title className="text-xl font-bold text-gray-900">{job.title}</Title>
                        <div className="mt-1 flex items-center flex-wrap gap-2">
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">{job.department}</span>
                          <span className="flex items-center text-sm text-gray-500">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center text-sm text-gray-500">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Recruitment Process */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 mb-4">
                What to Expect
              </span>
              <Title className="text-3xl font-bold mb-6">Our Hiring Process</Title>
              <Text className="text-gray-600 max-w-3xl mx-auto">
                We've designed a thorough but efficient process to help us find the right fit while giving you insights into our company and culture.
              </Text>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative">
                <div className="absolute top-0 left-6 -ml-px h-full w-0.5 bg-purple-200 hidden md:block"></div>
                <div className="relative bg-white p-6">
                  <div className="bg-purple-100 text-purple-600 h-12 w-12 rounded-full flex items-center justify-center mb-4 z-10 relative">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Review</h3>
                  <p className="text-gray-600">We review your resume, portfolio, and cover letter to evaluate your experience and fit for the role.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-6 -ml-px h-full w-0.5 bg-purple-200 hidden md:block"></div>
                <div className="relative bg-white p-6">
                  <div className="bg-purple-100 text-purple-600 h-12 w-12 rounded-full flex items-center justify-center mb-4 z-10 relative">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Interview</h3>
                  <p className="text-gray-600">A 30-45 minute video call with a hiring manager to discuss your background, skills, and answer your questions.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-6 -ml-px h-full w-0.5 bg-purple-200 hidden md:block"></div>
                <div className="relative bg-white p-6">
                  <div className="bg-purple-100 text-purple-600 h-12 w-12 rounded-full flex items-center justify-center mb-4 z-10 relative">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Assessment</h3>
                  <p className="text-gray-600">A practical task or project relevant to the role, designed to be completed in 2-4 hours to evaluate your skills.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative bg-white p-6">
                  <div className="bg-purple-100 text-purple-600 h-12 w-12 rounded-full flex items-center justify-center mb-4 z-10 relative">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Interviews</h3>
                  <p className="text-gray-600">Meet with team members and leadership to discuss the role in depth and get to know our culture and values.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 mt-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <svg className="h-16 w-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Commitment to Diversity & Inclusion</h3>
                  <p className="text-gray-600 mb-4">
                    At BetTracker X, we believe that diverse teams build better products. We're committed to creating an inclusive environment where everyone can do their best work and be their authentic selves.
                  </p>
                  <p className="text-gray-600">
                    We actively seek candidates from different backgrounds, experiences, and perspectives, and our hiring practices are designed to reduce bias and create equal opportunities for all qualified applicants.
                  </p>
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