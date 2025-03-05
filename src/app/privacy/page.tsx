'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Title, Text, Card } from '@tremor/react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PrivacyPolicy() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <ShieldCheckIcon className="h-16 w-16 mx-auto mb-4 text-purple-300" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-lg text-purple-100">
                Your privacy matters to us. This policy outlines how we collect, use, and protect your personal information.
              </p>
              <p className="mt-4 text-sm text-purple-200">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 shadow-md">
              <div className="space-y-12">
                <div>
                  <Title className="text-2xl font-bold mb-4">Introduction</Title>
                  <Text className="text-gray-700 mb-4">
                    BetTracker X ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Please read this privacy policy carefully. By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound by all terms of this privacy policy. If you do not agree with our policies and practices, your choice is not to use our services.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Information We Collect</Title>
                  <Text className="text-gray-700 mb-2">
                    We collect several types of information from and about users of our services, including:
                  </Text>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      <span className="font-semibold">Personal Information:</span> Information that identifies you personally, such as your name, email address, and payment information when you register for an account or subscribe to our services.
                    </li>
                    <li>
                      <span className="font-semibold">Betting Data:</span> Information about your betting activities that you voluntarily upload or input into our platform, including bet details, outcomes, and performance metrics.
                    </li>
                    <li>
                      <span className="font-semibold">Usage Information:</span> Information about how you use our services, including your browsing actions, search queries, features used, and time spent on various pages.
                    </li>
                    <li>
                      <span className="font-semibold">Device Information:</span> Information about the device you use to access our services, including IP address, device type, operating system, and browser type.
                    </li>
                    <li>
                      <span className="font-semibold">Cookies and Similar Technologies:</span> We use cookies and similar tracking technologies to track activity on our services and hold certain information to enhance user experience.
                    </li>
                  </ul>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">How We Use Your Information</Title>
                  <Text className="text-gray-700 mb-2">
                    We may use the information we collect about you for various purposes, including to:
                  </Text>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide, maintain, and improve our services to you</li>
                    <li>Process your subscription and payments</li>
                    <li>Analyze your betting data to generate insights and recommendations</li>
                    <li>Send you technical notices, updates, security alerts, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                    <li>Detect, prevent, and address technical issues, fraud, or illegal activity</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Personalize your experience by presenting tailored content and features</li>
                  </ul>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">How We Share Your Information</Title>
                  <Text className="text-gray-700 mb-4">
                    We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described below:
                  </Text>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      <span className="font-semibold">Service Providers:</span> We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.
                    </li>
                    <li>
                      <span className="font-semibold">Business Transfers:</span> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                    </li>
                    <li>
                      <span className="font-semibold">Legal Requirements:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
                    </li>
                    <li>
                      <span className="font-semibold">Protection of Rights:</span> We may disclose your information to protect our rights, privacy, safety, or property, as well as that of our users or others.
                    </li>
                    <li>
                      <span className="font-semibold">Aggregated or De-identified Data:</span> We may share aggregated or de-identified information, which cannot reasonably be used to identify you, with third parties for research, marketing, analytics, and other purposes.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <Title className="text-2xl font-bold mb-4">Data Security</Title>
                  <Text className="text-gray-700 mb-4">
                    We have implemented appropriate technical and organizational measures designed to protect the security of your personal information. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                  </Text>
                </div>
                
                <div>
                  <Title className="text-2xl font-bold mb-4">Your Data Protection Rights</Title>
                  <Text className="text-gray-700 mb-2">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </Text>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>The right to access personal information we hold about you</li>
                    <li>The right to request correction of inaccurate personal information</li>
                    <li>The right to request deletion of your personal information</li>
                    <li>The right to object to or restrict processing of your personal information</li>
                    <li>The right to data portability (receiving a copy of your personal information in a structured, commonly used format)</li>
                    <li>The right to withdraw consent at any time, where we rely on consent to process your personal information</li>
                  </ul>
                  <Text className="text-gray-700 mt-4">
                    To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                  </Text>
                </div>
                
                <div>
                  <Title className="text-2xl font-bold mb-4">Children's Privacy</Title>
                  <Text className="text-gray-700 mb-4">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we learn we have collected or received personal information from a child under 18, we will delete that information. If you believe we might have any information from or about a child under 18, please contact us.
                  </Text>
                </div>
                
                <div>
                  <Title className="text-2xl font-bold mb-4">Changes to Our Privacy Policy</Title>
                  <Text className="text-gray-700 mb-4">
                    We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you by email or through a notice on our website. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date, active, and deliverable email address for you, and for periodically visiting our website and this privacy policy to check for any changes.
                  </Text>
                </div>
                
                <div>
                  <Title className="text-2xl font-bold mb-4">Contact Us</Title>
                  <Text className="text-gray-700 mb-4">
                    If you have any questions, concerns, or comments about this privacy policy, please contact us at:
                  </Text>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> privacy@bettrackerx.com</p>
                    <p className="text-gray-700 mb-1"><span className="font-semibold">Address:</span> 123 Tech Lane, Suite 400, San Francisco, CA 94105, USA</p>
                    <p className="text-gray-700"><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 