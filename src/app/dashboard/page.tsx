'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Header from '@/components/Header';
import CsvUpload from '@/components/CsvUpload';
import ModernDashboard from '@/components/ModernDashboard';
import { Card, Text, Subtitle, Title, Divider, Flex, Button } from '@tremor/react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

type TransactionRow = {
  Time: string;
  Type: string;
  Summary: string;
  'Transaction Id': string;
  'Bet Id'?: string;
  Amount: string;
  Balance: string;
  [key: string]: string | undefined;
};

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [transactions, setTransactions] = useState<TransactionRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      // In a real app, we would fetch data from the API here
      setIsLoading(false);
      
      // Check if we have saved data in localStorage
      const savedData = localStorage.getItem('betTrackerTransactions');
      if (savedData) {
        try {
          setTransactions(JSON.parse(savedData));
        } catch (e) {
          console.error('Error parsing saved data', e);
        }
      }
    }
  }, [status, router]);

  const handleDataUploaded = (data: TransactionRow[]) => {
    setTransactions(data);
    setShowUpload(false);
    
    // Save to localStorage for persistence
    try {
      localStorage.setItem('betTrackerTransactions', JSON.stringify(data));
    } catch (e) {
      console.error('Error saving data', e);
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <div className="container mx-auto px-4 py-32 flex items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="h-8 w-32 bg-gray-200 rounded mx-auto"></div>
            <div className="h-6 w-48 bg-gray-200 rounded mx-auto mt-4"></div>
            <div className="h-6 w-64 bg-gray-200 rounded mx-auto mt-2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {transactions.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <Card className="mt-8">
              <Title>Welcome to BetTracker Pro</Title>
              <Subtitle>Track your betting performance with precision</Subtitle>
              <Divider />
              <div className="py-6 text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <ArrowUpTrayIcon className="w-12 h-12 text-blue-500" />
                  </div>
                </div>
                <Text className="mb-6">
                  Start by uploading your CSV file with the following columns:
                </Text>
                <div className="bg-gray-50 p-4 rounded-md mb-6 max-w-md mx-auto">
                  <code className="text-sm text-gray-700">
                    Time, Type, Summary, Transaction Id, Bet Id, Amount, Balance
                  </code>
                </div>
                <Button onClick={() => setShowUpload(true)} size="lg">
                  Upload CSV Data
                </Button>
              </div>
            </Card>
            
            {showUpload && (
              <Card className="mt-6">
                <CsvUpload onDataUploaded={handleDataUploaded} />
              </Card>
            )}
          </div>
        ) : (
          <div>
            <Flex className="mb-6" justifyContent="end">
              <Button onClick={() => setShowUpload(true)} variant="secondary" icon={ArrowUpTrayIcon}>
                Upload New Data
              </Button>
            </Flex>
            
            {showUpload && (
              <Card className="mb-6">
                <CsvUpload onDataUploaded={handleDataUploaded} />
              </Card>
            )}
            
            <ModernDashboard data={transactions} />
          </div>
        )}
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BetTracker Pro. All rights reserved.</p>
          <p className="mt-1 text-gray-400 text-xs">This application is for educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage; 