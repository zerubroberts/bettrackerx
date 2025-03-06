'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Title, Text, Card, Grid, Badge } from '@tremor/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Categories
  const categories = ['All', 'Strategy', 'Analysis', 'Industry News', 'Tutorials', 'Success Stories'];
  
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'How Data Analytics is Revolutionizing Sports Betting',
      excerpt: 'Explore how professional bettors leverage advanced statistical models and machine learning algorithms to gain an edge in sports wagering. Learn about the methodologies used by successful bettors, the data sources they rely on, and how quantitative analysis is reshaping the betting landscape.',
      category: 'Data Analytics',
      author: 'Zerub Roberts',
      authorRole: 'Founder & CEO',
      authorImage: '/images/Zerub.png',
      date: 'August 18, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Value Betting: The Key to Profitable Long-Term Strategies',
      excerpt: 'Master the core concept behind all profitable betting strategies. This comprehensive guide explains how to identify true value in betting markets, calculate expected value, and implement a systematic approach to long-term profitability.',
      category: 'Strategy',
      author: 'Neelima Pallanti',
      authorRole: 'Head of Customer Success',
      authorImage: '/images/Neelima Photo.jpeg',
      date: 'September 5, 2023',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
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
      featured: false
    },
    {
      id: 5,
      title: 'The Future of Betting Markets: Trends to Watch in 2023',
      excerpt: 'Explore emerging technologies and regulatory changes shaping the future of sports betting and what they mean for bettors in an increasingly data-driven landscape.',
      category: 'Industry News',
      author: 'Zerub Roberts',
      authorRole: 'Founder & CEO',
      authorImage: '/images/Zerub.png',
      date: 'February 15, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'How to Create Custom Reports in BetTracker X',
      excerpt: 'Step-by-step guide to building customized reports that give you exactly the insights you need for your betting strategy, with advanced filtering and visualization techniques.',
      category: 'Tutorials',
      author: 'Neelima Pallanti',
      authorRole: 'Head of Customer Success',
      authorImage: '/images/Neelima Photo.jpeg',
      date: 'January 27, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      featured: false
    },
    {
      id: 7,
      title: 'Psychological Biases in Betting and How to Overcome Them',
      excerpt: 'Exploring common cognitive biases that affect betting decisions and strategies for more rational decision-making based on behavioral economics research.',
      category: 'Analysis',
      author: 'Neelima Pallanti',
      authorRole: 'Head of Customer Success',
      authorImage: '/images/Neelima Photo.jpeg',
      date: 'December 12, 2022',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      featured: false
    },
    {
      id: 8,
      title: 'Using BetTracker X to Identify Profitable Betting Patterns',
      excerpt: 'How to leverage data visualization and filtering tools to uncover profitable patterns in your betting history and develop more effective strategies.',
      category: 'Tutorials',
      author: 'Neelima Pallanti',
      authorRole: 'Head of Customer Success',
      authorImage: '/images/Neelima Photo.jpeg',
      date: 'November 5, 2022',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      featured: false
    }
  ];
  
  // Filter posts based on search term and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Separate featured post (if any) from regular posts
  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1F2937] to-[#4C1D95] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                BetTracker X Insights
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Expert analysis, strategies, and success stories to help you improve your betting performance.
              </p>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white py-6 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeCategory === category 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No articles found</h3>
                <p className="mt-1 text-gray-600">
                  We couldn't find any articles matching your search. Try a different term or category.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('All');
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Clear filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-12">
                {/* Featured Post */}
                {featuredPost && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden lg:flex hover:shadow-xl transition-shadow duration-300">
                      <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-8 lg:w-1/2">
                        <Badge className="mb-2" size="xs" color="indigo">{featuredPost.category}</Badge>
                        <Link href={`/blog/${featuredPost.id}`}>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                            {featuredPost.title}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mb-6">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center mb-4">
                          <div className="h-10 w-10 rounded-full relative overflow-hidden mr-3">
                            <Image
                              src={featuredPost.authorImage}
                              alt={featuredPost.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                            <p className="text-sm text-gray-500">{featuredPost.authorRole}</p>
                          </div>
                          <div className="ml-auto">
                            <Link href={`/blog/${featuredPost.id}`} className="text-sm font-medium text-purple-600 hover:text-purple-800">
                              Read more →
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">{featuredPost.date} • {featuredPost.readTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Regular Posts */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {regularPosts.slice(0, 2).map((post) => (
                      <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-64 w-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center mb-4">
                            <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                              <Image
                                src={post.authorImage}
                                alt={post.author}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-gray-900 font-medium">{post.author}</p>
                              <p className="text-gray-500 text-sm">{post.date} • {post.readTime}</p>
                            </div>
                            <div className="ml-auto">
                              <Link href={`/blog/${post.id}`} className="text-sm font-medium text-purple-600 hover:text-purple-800">
                                Read more →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.slice(2).map((post) => (
                      <Link href={`/blog/${post.id}`} key={post.id} className="group">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                          <div className="relative h-48 w-full">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {post.category}
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center text-sm">
                              <div className="flex items-center">
                                <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                                  <Image
                                    src={post.authorImage}
                                    alt={post.author}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <span className="text-gray-900">{post.author}</span>
                                  <div className="flex items-center">
                                    <span className="text-gray-500">{post.date}</span>
                                    <span className="mx-2 text-gray-400">•</span>
                                    <span className="text-gray-500">{post.readTime}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Betting Insights</h2>
              <p className="text-purple-100 mb-8">
                Subscribe to our newsletter to receive the latest articles, strategies, and industry insights directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-auto sm:flex-1 max-w-md"
                />
                <button className="bg-white text-purple-700 font-medium px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-purple-200 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 