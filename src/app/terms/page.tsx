'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Title, Text, Card } from '@tremor/react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export default function TermsOfService() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <DocumentTextIcon className="h-16 w-16 mx-auto mb-4 text-purple-300" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-lg text-purple-100">
                Please read these terms carefully before using our platform.
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
                  <Title className="text-2xl font-bold mb-4">Agreement to Terms</Title>
                  <Text className="text-gray-700 mb-4">
                    These Terms of Service ("Terms") constitute a legally binding agreement between you and BetTracker X ("Company," "we," "us," or "our") governing your access to and use of the website located at www.bettrackerx.com and all related services, features, content, and applications offered by the Company (collectively, the "Services").
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Eligibility</Title>
                  <Text className="text-gray-700 mb-4">
                    You must be at least 18 years of age to access or use our Services. By accessing or using our Services, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these Terms.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Our Services are intended for informational and analytical purposes only and are not designed to encourage, facilitate, or support gambling or betting activities. You are solely responsible for ensuring that your use of our Services complies with all applicable laws, regulations, and restrictions in your jurisdiction.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Account Registration</Title>
                  <Text className="text-gray-700 mb-4">
                    To access certain features of our Services, you may be required to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself and to update this information to maintain its accuracy.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    You are responsible for maintaining the confidentiality of your account credentials, including your password, and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    We reserve the right to suspend or terminate your account, refuse service, and remove or edit content at our sole discretion, with or without notice, if we believe your conduct violates these Terms or is harmful to other users of our Services or third parties.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Subscription and Payments</Title>
                  <Text className="text-gray-700 mb-4">
                    Some of our Services are available on a subscription basis. By subscribing to these Services, you agree to pay the applicable subscription fees as they become due. All subscription fees are non-refundable except as expressly provided in these Terms or as required by applicable law.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Subscription fees may be changed at any time, but any changes will not affect the fees for your current subscription period. We will provide notice of any fee changes before they take effect.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    You may cancel your subscription at any time through your account settings or by contacting us. If you cancel your subscription, you will continue to have access to the Services until the end of your current subscription period, after which your access will be downgraded to the free tier or terminated, as applicable.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">User Content</Title>
                  <Text className="text-gray-700 mb-4">
                    You retain all rights to any data or content you upload, submit, or display through our Services ("User Content"). By uploading, submitting, or displaying User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, and display your User Content solely for the purpose of providing the Services to you and as otherwise permitted by our Privacy Policy.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    You represent and warrant that you own or have the necessary rights to all User Content you provide and that your User Content does not violate the rights of any third party or any applicable law or regulation.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    We take no responsibility and assume no liability for any User Content provided by you or any third party. We reserve the right to remove any User Content that we determine, in our sole discretion, violates these Terms or is otherwise objectionable.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Intellectual Property Rights</Title>
                  <Text className="text-gray-700 mb-4">
                    The Services and all content, features, and functionality thereof, including but not limited to all information, software, text, displays, images, video, audio, design, and the design, selection, and arrangement thereof (excluding User Content), are owned by the Company, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    These Terms do not grant you any right, title, or interest in the Services or any content, features, or functionality thereof. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, transmit, or otherwise exploit any of the material on our Services, except as expressly permitted by these Terms.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Disclaimers</Title>
                  <Text className="text-gray-700 mb-4">
                    THE SERVICES AND ALL CONTENT, FEATURES, AND FUNCTIONALITY THEREOF ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    THE COMPANY DOES NOT WARRANT THAT (1) THE SERVICES WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (2) ANY ERRORS OR DEFECTS WILL BE CORRECTED; (3) THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (4) THE RESULTS OF USING THE SERVICES WILL MEET YOUR REQUIREMENTS.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    THE SERVICES ARE NOT INTENDED TO, AND SHOULD NOT, BE USED AS THE SOLE BASIS FOR ANY DECISION-MAKING PROCESS. THE COMPANY IS NOT RESPONSIBLE FOR ANY ACTIONS YOU TAKE BASED ON THE INFORMATION PROVIDED THROUGH THE SERVICES.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Limitation of Liability</Title>
                  <Text className="text-gray-700 mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (1) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (2) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (3) ANY CONTENT OBTAINED FROM THE SERVICES; AND (4) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    IN JURISDICTIONS WHERE THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES IS NOT ALLOWED, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Indemnification</Title>
                  <Text className="text-gray-700 mb-4">
                    You agree to defend, indemnify, and hold harmless the Company, its directors, employees, partners, agents, suppliers, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services, including, but not limited to, your User Content, any use of the Services' content, services, and products other than as expressly authorized in these Terms, or your use of any information obtained from the Services.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Governing Law</Title>
                  <Text className="text-gray-700 mb-4">
                    These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Changes to Terms</Title>
                  <Text className="text-gray-700 mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, you are no longer authorized to use the Services.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Contact Us</Title>
                  <Text className="text-gray-700 mb-4">
                    If you have any questions about these Terms, please contact us at:
                  </Text>
                  <Text>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> legal@bettrackerx.com</p>
                      <p className="text-gray-700 mb-1"><span className="font-semibold">Address:</span> 123 Tech Lane, Suite 400, San Francisco, CA 94105, USA</p>
                      <p className="text-gray-700"><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
                    </div>
                  </Text>
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