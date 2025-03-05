'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, ShareIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: number | string;
  title: string;
  content?: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorImage: string;
  category: string;
  date: string;
  readTime: string;
  image: string; // This is used instead of coverImage
  tags?: string[];
  featured?: boolean;
}

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Sample blog posts data - this would typically come from an API or database
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'How Data Analytics is Revolutionizing Sports Betting',
      excerpt: 'Explore how professional bettors leverage advanced statistical models and machine learning algorithms to gain an edge in sports wagering. Learn about the methodologies used by successful bettors, the data sources they rely on, and how quantitative analysis is reshaping the betting landscape.',
      content: `
        <h2>The Evolution of Sports Betting Analytics</h2>
        <p>In the past decade, sports betting has undergone a profound transformation. What was once dominated by intuition and basic statistics has evolved into a sophisticated practice driven by advanced data analytics, machine learning algorithms, and real-time data processing.</p>
        
        <p>Professional bettors now employ complex statistical models that analyze thousands of variables simultaneously. These models can identify value opportunities that would be impossible to spot through traditional analysis methods.</p>
        
        <h2>Key Analytical Approaches in Modern Sports Betting</h2>
        
        <h3>1. Predictive Modeling</h3>
        <p>Advanced bettors build predictive models that estimate the probability of various outcomes more accurately than bookmakers' odds suggest. These models incorporate historical data, player statistics, team dynamics, and even external factors like weather conditions or travel schedules.</p>
        
        <h3>2. Machine Learning Algorithms</h3>
        <p>Machine learning has revolutionized sports prediction by identifying patterns in data that humans might miss. Algorithms can be trained on historical results to make increasingly accurate predictions about future events, adjusting and improving with each new data point.</p>
        
        <h3>3. Bayesian Statistics</h3>
        <p>Bayesian approaches allow bettors to update their probability estimates as new information becomes available. This is particularly valuable in live betting scenarios where odds shift rapidly based on in-game events.</p>
        
        <h2>Data Sources That Power Betting Analytics</h2>
        
        <p>Successful bettors leverage diverse data sources:</p>
        <ul>
          <li>Historical performance data spanning years or even decades</li>
          <li>Player tracking data that captures movement, speed, and positioning</li>
          <li>Advanced metrics like expected goals in soccer or player efficiency ratings in basketball</li>
          <li>Injury reports and team news</li>
          <li>Market movement data showing how odds shift across bookmakers</li>
        </ul>
        
        <h2>The Competitive Edge: Why Analytics Matter</h2>
        
        <p>In today's betting landscape, the edge often goes to those with superior analytical capabilities. Bookmakers employ their own sophisticated models, meaning bettors must develop even more refined approaches to identify value consistently.</p>
        
        <p>The most successful bettors typically specialize in specific leagues or bet types, developing deep domain expertise alongside their analytical skills. This combination of specialized knowledge and data science creates opportunities for sustainable profit.</p>
        
        <h2>Tools of the Trade</h2>
        
        <p>Modern betting analysts rely on various tools:</p>
        <ul>
          <li>Programming languages like Python and R for statistical analysis</li>
          <li>Database systems for storing and querying vast amounts of historical data</li>
          <li>Visualization tools to identify patterns and communicate insights</li>
          <li>Automated systems for odds comparison across bookmakers</li>
          <li>Specialized tracking platforms like BetTracker X for performance analysis</li>
        </ul>
        
        <h2>The Future of Betting Analytics</h2>
        
        <p>As technology continues to evolve, we can expect even more sophisticated approaches to emerge. Computer vision analysis of games, natural language processing of news and social media, and increasingly personalized betting recommendation systems are all on the horizon.</p>
        
        <p>For serious bettors, the message is clear: embrace data analytics or be left behind. The era of the purely intuitive bettor is giving way to a new generation of analytically-minded professionals who combine domain expertise with statistical rigor.</p>
      `,
      category: 'Data Analytics',
      author: 'Zerub Roberts',
      authorRole: 'Founder & CEO',
      authorImage: '/images/Zerub.png',
      date: 'August 18, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      tags: ['Analytics', 'Sports Betting', 'Data Science', 'Machine Learning'],
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Value Betting: The Key to Profitable Long-Term Strategies',
      excerpt: 'Master the core concept behind all profitable betting strategies. This comprehensive guide explains how to identify true value in betting markets, calculate expected value, and implement a systematic approach to long-term profitability.',
      content: `
        <h2>What is Value Betting?</h2>
        <p>At its core, value betting is about finding odds that are higher than they should be based on the true probability of an outcome. When you consistently bet on outcomes where the odds offer value, you can achieve long-term profitability regardless of short-term variance.</p>
        
        <p>The concept is simple in theory but challenging in practice: identify situations where bookmakers have mispriced the odds, and capitalize on these inefficiencies.</p>
        
        <h2>The Mathematics of Value</h2>
        
        <p>Value betting is rooted in mathematical expectation. The formula for expected value (EV) in betting is:</p>
        
        <p><strong>EV = (Probability × Potential Profit) - (1 - Probability) × Stake</strong></p>
        
        <p>When the EV is positive, a bet has value. For example, if you believe a team has a 50% chance of winning, but the odds imply only a 40% probability, you've found value.</p>
        
        <h2>Why Bookmakers Misprice Markets</h2>
        
        <p>Several factors contribute to market inefficiencies:</p>
        <ul>
          <li>Bookmakers must balance their books across all possible outcomes</li>
          <li>Public sentiment can skew odds on popular teams</li>
          <li>Bookmakers may have incomplete information or different models</li>
          <li>Some markets receive less attention and analysis</li>
          <li>Late-breaking news may not be fully incorporated into odds</li>
        </ul>
        
        <h2>Identifying Value: Practical Approaches</h2>
        
        <h3>1. Develop Your Own Probability Models</h3>
        <p>Creating your own statistical models allows you to generate independent probability estimates. When these differ significantly from implied bookmaker probabilities, you may have found value.</p>
        
        <h3>2. Specialize in Niche Markets</h3>
        <p>Lesser-followed leagues, sports, or bet types often contain more pricing inefficiencies. Developing expertise in these areas can reveal value opportunities that others miss.</p>
        
        <h3>3. Line Shopping</h3>
        <p>Different bookmakers offer different odds. By comparing odds across multiple platforms, you can identify the best available price for any bet you want to make.</p>
        
        <h3>4. Timing Your Bets</h3>
        <p>Odds fluctuate based on new information and betting volume. Understanding when markets are most likely to be inefficient can help you capture value before it disappears.</p>
        
        <h2>Building a Value Betting System</h2>
        
        <p>A systematic approach to value betting includes:</p>
        
        <h3>Bankroll Management</h3>
        <p>Proper bankroll management is essential for weathering the inevitable variance in betting outcomes. Most professionals recommend betting between 1-5% of your bankroll on any single wager, depending on your edge.</p>
        
        <h3>Record Keeping</h3>
        <p>Detailed records of all bets, including your estimated probabilities and the reasons for each bet, allow you to analyze your performance and refine your approach over time.</p>
        
        <h3>Emotional Discipline</h3>
        <p>Value betting requires the discipline to stick to your system even during losing streaks, and the restraint to avoid betting when you don't see value.</p>
        
        <h2>Common Pitfalls to Avoid</h2>
        
        <ul>
          <li>Overestimating your edge: Be conservative in your probability estimates</li>
          <li>Ignoring the vig: Remember that bookmaker margins affect the true value of a bet</li>
          <li>Chasing losses: Stick to your staking plan regardless of recent results</li>
          <li>Confirmation bias: Seek out information that might contradict your analysis</li>
        </ul>
        
        <h2>The Long-Term Perspective</h2>
        
        <p>Value betting is a marathon, not a sprint. Even with a solid edge, short-term variance can lead to losing periods. The key is to focus on the process rather than immediate results, trusting that positive expected value will translate to profit over a large sample size.</p>
        
        <p>By combining rigorous analysis, disciplined execution, and continuous improvement, value betting offers a path to sustainable profitability in sports betting—a rare achievement that separates professionals from recreational bettors.</p>
      `,
      category: 'Strategy',
      author: 'Neelima Pallanti',
      authorRole: 'Head of Customer Success',
      authorImage: '/images/Neelima Photo.jpeg',
      date: 'September 5, 2023',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      tags: ['Strategy', 'Value Betting', 'Probability', 'Bankroll Management'],
      featured: true
    },
    {
      id: 3,
      title: 'From Spreadsheets to Analytics Platform: Our Customer Success Story',
      excerpt: 'How professional bettor Mark Davies increased his ROI by 18% after switching from manual tracking to BetTracker X, transforming his approach to data-driven decision making.',
      category: 'Success Stories',
      author: 'Neelima Pallanti',
      authorRole: 'Head of Customer Success',
      authorImage: '/images/Neelima Photo.jpeg',
      date: 'April 11, 2023',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      tags: ['Success Story', 'ROI', 'Data-Driven'],
      featured: false
    },
    {
      id: 4,
      title: 'The Importance of Bankroll Management in Long-Term Betting Success',
      excerpt: 'Learn why proper bankroll management is the foundation of sustainable betting and how to implement effective strategies that protect your capital while maximizing growth potential.',
      category: 'Strategy',
      author: 'Zerub Roberts',
      authorRole: 'Founder & CEO',
      authorImage: '/images/Zerub.png',
      date: 'May 23, 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      tags: ['Bankroll', 'Risk Management', 'Strategy'],
      featured: false
    }
  ];

  useEffect(() => {
    // Simulate fetching data based on the ID parameter
    const fetchData = () => {
      setLoading(true);
      try {
        const id = params?.id;
        const foundPost = blogPosts.find(p => p.id.toString() === id);
        
        if (foundPost) {
          setPost(foundPost);
          // Get related posts (excluding the current post)
          const related = blogPosts
            .filter(p => p.id.toString() !== id)
            .slice(0, 2);
          setRelatedPosts(related);
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        setError('Error loading blog post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {error || 'Blog post not found'}
          </h1>
          <p className="text-gray-600 mb-8">
            We couldn't find the article you're looking for.
          </p>
          <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to all articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <Image
            src={post.image} // Using image instead of coverImage
            alt={post.title}
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
            <div className="container mx-auto max-w-4xl">
              <div className="flex space-x-2 mb-4">
                {post.tags && post.tags.map((tag) => (
                  <span key={tag} className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center space-x-6 text-white/80 mb-2">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-4xl px-4 md:px-8 -mt-8 relative">
          {/* Author Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 mb-8 flex items-center">
            <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
              <Image 
                src={post.authorImage} 
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{post.author}</h3>
              <p className="text-gray-600">{post.authorRole}</p>
            </div>
            <div className="ml-auto">
              <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors">
                <ShareIcon className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
          
          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-12 bg-white p-8 rounded-lg shadow-md">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <div>
                <h2>Article Preview</h2>
                <p>{post.excerpt}</p>
                <p className="text-gray-500 italic">Full article content coming soon...</p>
              </div>
            )}
          </article>
          
          {/* Back to Blog Link */}
          <div className="border-t pt-8 mb-12">
            <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to all articles
            </Link>
          </div>
          
          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <div className="border-t pt-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">You might also like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="block group">
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-purple-600 transition-colors">{relatedPost.title}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="bg-purple-100 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-600 mb-6">Get the latest betting insights and strategies delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg flex-1 border border-gray-300"
              />
              <button className="bg-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 