'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Title, Text, Card } from '@tremor/react';
import { FingerPrintIcon } from '@heroicons/react/24/outline';

export default function CookiesPolicy() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <FingerPrintIcon className="h-16 w-16 mx-auto mb-4 text-purple-300" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Cookies Policy
              </h1>
              <p className="text-lg text-purple-100">
                Understanding how we use cookies and similar technologies to enhance your experience.
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
                  <Title className="text-2xl font-bold mb-4">What Are Cookies?</Title>
                  <Text className="text-gray-700 mb-4">
                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. Cookies enhance user experience by allowing websites to remember your preferences and understand how you use their services.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    At BetTracker X, we use cookies and similar technologies (such as web beacons, pixels, and local storage) to collect information about your browsing activities and to distinguish you from other users of our website. This helps us provide you with a good experience when you browse our website and also allows us to improve our Services.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Types of Cookies We Use</Title>
                  <Text className="text-gray-700 mb-2">
                    We use the following types of cookies:
                  </Text>
                  
                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                      <Text className="text-gray-700 mb-4">
                        These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account authentication. You cannot opt out of these cookies as the website cannot function properly without them.
                      </Text>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Cookie Name:</span> auth_token</p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Purpose:</span> Authentication and session management</p>
                        <p className="text-gray-700"><span className="font-semibold">Duration:</span> Session</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Preference Cookies</h3>
                      <Text className="text-gray-700 mb-4">
                        These cookies enable the website to remember information that changes the way the website behaves or looks, like your preferred language or the region you are in. They help us to personalize your experience and make our Services more user-friendly.
                      </Text>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Cookie Name:</span> user_preferences</p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Purpose:</span> Store user preferences</p>
                        <p className="text-gray-700"><span className="font-semibold">Duration:</span> 1 year</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
                      <Text className="text-gray-700 mb-4">
                        These cookies collect information about how you use our website, which pages you visit, and if you experience any errors. This data helps us improve our website and provide better service. The information collected is aggregated and anonymized, meaning it cannot be used to identify you personally.
                      </Text>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Cookie Name:</span> _ga, _gid</p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Purpose:</span> Google Analytics tracking</p>
                        <p className="text-gray-700"><span className="font-semibold">Duration:</span> 2 years, 24 hours</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Marketing Cookies</h3>
                      <Text className="text-gray-700 mb-4">
                        These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an advertisement. These cookies can share information with other organizations or advertisers. They work by uniquely identifying your browser and internet device.
                      </Text>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Cookie Name:</span> _fbp</p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Purpose:</span> Facebook tracking pixel</p>
                        <p className="text-gray-700"><span className="font-semibold">Duration:</span> 3 months</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Third-Party Cookies</Title>
                  <Text className="text-gray-700 mb-4">
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These cookies may be placed by:
                  </Text>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      <span className="font-semibold">Google Analytics:</span> We use Google Analytics to understand how our website performs and how you use it. For more information on how Google Analytics uses your data, please visit: <Link href="https://policies.google.com/privacy" className="text-purple-600 hover:text-purple-800">Google Privacy Policy</Link>.
                    </li>
                    <li>
                      <span className="font-semibold">Facebook:</span> We use Facebook pixels to measure conversions from our Facebook ads. For more information on how Facebook uses your data, please visit: <Link href="https://www.facebook.com/policy.php" className="text-purple-600 hover:text-purple-800">Facebook Privacy Policy</Link>.
                    </li>
                    <li>
                      <span className="font-semibold">Stripe:</span> Our payment processor may place cookies to process payments securely. For more information, please visit: <Link href="https://stripe.com/privacy" className="text-purple-600 hover:text-purple-800">Stripe Privacy Policy</Link>.
                    </li>
                  </ul>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Managing Cookies</Title>
                  <Text className="text-gray-700 mb-4">
                    Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    You can manage cookies in your browser settings. Here's how to do it in common browsers:
                  </Text>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Google Chrome</h4>
                      <Text className="text-gray-700">
                        Go to Settings {'>'}  Privacy and security {'>'}  Cookies and other site data {'>'}  See all cookies and site data. Here you can review and delete specific cookies.
                      </Text>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800">Mozilla Firefox</h4>
                      <Text className="text-gray-700">
                        Go to Options {'>'}  Privacy & Security {'>'}  Cookies and Site Data. You can view and manage stored cookies or clear data.
                      </Text>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800">Safari</h4>
                      <Text className="text-gray-700">
                        Go to Preferences {'>'}  Privacy {'>'}  Manage Website Data. Here you can see which websites have stored cookies and remove them selectively.
                      </Text>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800">Microsoft Edge</h4>
                      <Text className="text-gray-700">
                        Go to Settings {'>'}  Cookies and site permissions {'>'}  Manage and delete cookies and site data. You can review and delete cookies.
                      </Text>
                    </div>
                  </div>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Cookie Consent</Title>
                  <Text className="text-gray-700 mb-4">
                    When you first visit our website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    By using our website without changing your cookie settings, you consent to our use of cookies in accordance with this Cookie Policy. If you have accepted cookies and wish to withdraw your consent, you can clear cookies in your browser settings and refresh the page to be presented with the cookie consent banner again.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Changes to This Cookie Policy</Title>
                  <Text className="text-gray-700 mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised Cookie Policy on our website. We will notify you of any material changes by updating the "Last Updated" date at the top of this Cookie Policy.
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
                  </Text>
                </div>

                <div>
                  <Title className="text-2xl font-bold mb-4">Contact Us</Title>
                  <Text className="text-gray-700 mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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