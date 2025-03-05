'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Title, Text, Card, Grid, TextInput, Textarea, Button } from '@tremor/react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <ChatBubbleLeftRightIcon className="h-16 w-16 mx-auto mb-4 text-purple-300" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-lg text-purple-100">
                Have questions or need help? We're here to assist you.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Grid numItemsLg={2} className="gap-8">
              {/* Contact Information */}
              <div>
                <Title className="text-2xl font-bold mb-6">Get in Touch</Title>
                <Text className="text-gray-600 mb-8">
                  Our team is ready to answer your questions and help you get the most out of BetTracker X. 
                  Choose the most convenient way to reach us.
                </Text>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-purple-100 p-3 rounded-full">
                          <EnvelopeIcon className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                        <p className="text-gray-600 mt-1">For general inquiries:</p>
                        <a href="mailto:support@bettrackerx.com" className="text-purple-600 hover:text-purple-800">
                          support@bettrackerx.com
                        </a>
                        <p className="text-gray-600 mt-1">For business partnerships:</p>
                        <a href="mailto:partners@bettrackerx.com" className="text-purple-600 hover:text-purple-800">
                          partners@bettrackerx.com
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-purple-100 p-3 rounded-full">
                          <PhoneIcon className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                        <p className="text-gray-600 mt-1">Customer Support:</p>
                        <a href="tel:+15551234567" className="text-purple-600 hover:text-purple-800">
                          +1 (555) 123-4567
                        </a>
                        <p className="text-gray-600 mt-1">Hours of Operation:</p>
                        <p className="text-gray-700">Monday - Friday: 9am - 6pm EST</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-purple-100 p-3 rounded-full">
                          <MapPinIcon className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
                        <p className="text-gray-600 mt-1">Our Headquarters:</p>
                        <address className="not-italic text-gray-700">
                          123 Tech Lane, Suite 400<br />
                          San Francisco, CA 94105<br />
                          United States
                        </address>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <Title className="text-xl font-semibold mb-4">Follow Us</Title>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com" className="bg-purple-100 p-3 rounded-full text-purple-600 hover:bg-purple-200 transition-colors duration-300" aria-label="Twitter">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.099 10.099 0 01-3.123 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                    <a href="https://facebook.com" className="bg-purple-100 p-3 rounded-full text-purple-600 hover:bg-purple-200 transition-colors duration-300" aria-label="Facebook">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://instagram.com" className="bg-purple-100 p-3 rounded-full text-purple-600 hover:bg-purple-200 transition-colors duration-300" aria-label="Instagram">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com" className="bg-purple-100 p-3 rounded-full text-purple-600 hover:bg-purple-200 transition-colors duration-300" aria-label="LinkedIn">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <Card className="p-8 shadow-md">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="bg-green-100 text-green-800 p-4 rounded-full inline-flex mx-auto mb-6">
                        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <Title className="text-2xl font-bold mb-4">Message Sent!</Title>
                      <Text className="text-gray-600 mb-6">
                        Thank you for contacting us. We've received your message and will get back to you within 24-48 hours.
                      </Text>
                      <Button
                        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Title className="text-2xl font-bold mb-6">Send Us a Message</Title>
                      <Text className="text-gray-600 mb-6">
                        Fill out the form below, and we'll get back to you as quickly as possible.
                      </Text>
                      
                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                          {error}
                        </div>
                      )}
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Your Name *
                            </label>
                            <TextInput
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address *
                            </label>
                            <TextInput
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                              Subject *
                            </label>
                            <TextInput
                              id="subject"
                              name="subject"
                              placeholder="How can we help you?"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                              Message *
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="Please provide as much detail as possible..."
                              value={formData.message}
                              onChange={handleChange}
                              rows={6}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                            loading={isSubmitting}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </div>
                      </form>
                    </>
                  )}
                </Card>
              </div>
            </Grid>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Title className="text-3xl font-bold mb-4">Frequently Asked Questions</Title>
              <Text className="text-gray-600">
                Find quick answers to common questions, or contact us for more specific help.
              </Text>
            </div>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer p-6 bg-gray-50">
                    <span>How quickly will I receive a response to my inquiry?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 border-t border-gray-100">
                    <p className="text-gray-700">
                      We strive to respond to all inquiries within 24-48 business hours. For urgent matters related to account access or payment issues, we prioritize those tickets and typically respond within a few hours during business days.
                    </p>
                  </div>
                </details>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer p-6 bg-gray-50">
                    <span>How can I request a feature or suggest an improvement?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 border-t border-gray-100">
                    <p className="text-gray-700">
                      We love hearing from our users! You can suggest features or improvements by using the contact form on this page or by emailing feedback@bettrackerx.com. Our product team reviews all suggestions and incorporates them into our development roadmap based on user demand and feasibility.
                    </p>
                  </div>
                </details>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer p-6 bg-gray-50">
                    <span>Do you offer phone support?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 border-t border-gray-100">
                    <p className="text-gray-700">
                      Yes, we offer phone support for our Premium and Enterprise plan members. Standard plan users can access email and chat support. Our phone support hours are Monday through Friday, 9am to 6pm Eastern Time.
                    </p>
                  </div>
                </details>
              </div>
              
              <div className="text-center mt-8">
                <Link href="/faq" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  View all FAQs
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 