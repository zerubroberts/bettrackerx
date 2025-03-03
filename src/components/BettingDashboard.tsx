'use client';

import { useState, useEffect, useMemo } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Helper function to safely parse date strings
const parseDate = (dateString: string): Date => {
  if (!dateString || typeof dateString !== 'string') {
    console.error(`Invalid date string: ${dateString}`);
    return new Date();
  }
  
  // Trim any whitespace
  dateString = dateString.trim();
  
  // Try to parse the date normally first
  const date = new Date(dateString);
  
  // Check if date is valid
  if (!isNaN(date.getTime())) {
    return date;
  }
  
  // If not valid, try different formats
  
  // Try DD/MM/YYYY HH:MM:SS format (British format)
  let parts = dateString.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/);
  if (parts) {
    // parts[1] = day, parts[2] = month, parts[3] = year
    // parts[4] = hours, parts[5] = minutes, parts[6] = seconds
    return new Date(
      parseInt(parts[3]), 
      parseInt(parts[2]) - 1, 
      parseInt(parts[1]),
      parseInt(parts[4]),
      parseInt(parts[5]),
      parseInt(parts[6])
    );
  }
  
  // Try MM/DD/YYYY HH:MM:SS format (US format)
  parts = dateString.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/);
  if (parts) {
    return new Date(
      parseInt(parts[3]), 
      parseInt(parts[1]) - 1, 
      parseInt(parts[2]),
      parseInt(parts[4]),
      parseInt(parts[5]),
      parseInt(parts[6])
    );
  }
  
  // Try DD/MM/YYYY (without time)
  parts = dateString.match(/(\d+)\/(\d+)\/(\d+)/);
  if (parts) {
    return new Date(
      parseInt(parts[3]), 
      parseInt(parts[2]) - 1, 
      parseInt(parts[1])
    );
  }
  
  // Try YYYY-MM-DD HH:MM:SS format (ISO-like)
  parts = dateString.match(/(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+)/);
  if (parts) {
    return new Date(
      parseInt(parts[1]), 
      parseInt(parts[2]) - 1, 
      parseInt(parts[3]),
      parseInt(parts[4]),
      parseInt(parts[5]),
      parseInt(parts[6])
    );
  }
  
  // Try YYYY-MM-DD (without time)
  parts = dateString.match(/(\d+)-(\d+)-(\d+)/);
  if (parts) {
    return new Date(
      parseInt(parts[1]), 
      parseInt(parts[2]) - 1, 
      parseInt(parts[3])
    );
  }
  
  // Log the date string that couldn't be parsed
  console.error(`Could not parse date: ${dateString}`);
  return new Date();
};

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

type FilterOptions = {
  month: string | null;
  transactionType: string | null;
};

type BettingDashboardProps = {
  data: TransactionRow[];
};

export default function BettingDashboard({ data }: BettingDashboardProps) {
  const [filteredData, setFilteredData] = useState<TransactionRow[]>(data);
  const [filters, setFilters] = useState<FilterOptions>({ 
    month: null,
    transactionType: null
  });

  // Sort data by time (newest first)
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      return parseDate(b.Time).getTime() - parseDate(a.Time).getTime();
    });
  }, [data]);

  // Get unique transaction types
  const transactionTypes = useMemo(() => {
    const types = new Set<string>();
    data.forEach(transaction => {
      if (transaction.Type) {
        types.add(transaction.Type);
      }
    });
    return Array.from(types).sort();
  }, [data]);

  // Process data with filters when filters change
  useEffect(() => {
    let newFilteredData = [...sortedData];
    
    if (filters.month) {
      newFilteredData = newFilteredData.filter(transaction => {
        const transactionDate = parseDate(transaction.Time);
        const monthYear = `${transactionDate.getFullYear()}-${String(transactionDate.getMonth() + 1).padStart(2, '0')}`;
        return monthYear === filters.month;
      });
    }
    
    if (filters.transactionType) {
      newFilteredData = newFilteredData.filter(transaction => 
        transaction.Type === filters.transactionType
      );
    }
    
    setFilteredData(newFilteredData);
  }, [sortedData, filters]);

  // Calculate profit and loss
  const profitLossData = useMemo(() => {
    const winningTransactions = filteredData
      .filter(t => t.Type === 'Win')
      .reduce((sum, t) => sum + parseFloat(t.Amount || '0'), 0);
    
    const betStakeTransactions = filteredData
      .filter(t => t.Type === 'Bet Stake')
      .reduce((sum, t) => sum + parseFloat(t.Amount || '0'), 0);
    
    // For Bet Stake, Amount is typically negative but we want to display stake as a positive value
    const totalStake = Math.abs(betStakeTransactions);
    
    // Calculate net profit/loss (wins minus stakes)
    const netProfitLoss = winningTransactions + betStakeTransactions;
    
    return {
      totalBets: filteredData.filter(t => t.Type === 'Bet Stake').length,
      totalStake,
      totalWinnings: winningTransactions,
      netProfitLoss,
      avgStakePerBet: totalStake / Math.max(1, filteredData.filter(t => t.Type === 'Bet Stake').length),
      roi: totalStake > 0 ? (netProfitLoss / totalStake) * 100 : 0
    };
  }, [filteredData]);

  // Calculate top profitable and loss-making events by Summary
  const eventPerformance = useMemo(() => {
    // Group transactions by their Summary (event)
    const eventMap = new Map<string, { profit: number; count: number }>();
    
    // Process bets and wins together
    filteredData.forEach(transaction => {
      if (['Bet Stake', 'Win'].includes(transaction.Type)) {
        const summary = transaction.Summary || 'Unknown';
        const amount = parseFloat(transaction.Amount || '0');
        
        if (!eventMap.has(summary)) {
          eventMap.set(summary, { profit: 0, count: 0 });
        }
        
        const currentData = eventMap.get(summary)!;
        currentData.profit += amount;
        
        if (transaction.Type === 'Bet Stake') {
          currentData.count += 1;
        }
        
        eventMap.set(summary, currentData);
      }
    });
    
    // Convert to array and sort by profit (descending for most profitable, ascending for most losses)
    const eventsArray = Array.from(eventMap.entries())
      .map(([summary, data]) => ({
        summary,
        profit: data.profit,
        count: data.count
      }))
      .filter(event => event.count > 0); // Only include events with actual bets
    
    // Get top 10 most profitable events
    const topProfitable = [...eventsArray]
      .sort((a, b) => b.profit - a.profit)
      .slice(0, 10);
    
    // Get top 10 most loss-making events
    const topLosses = [...eventsArray]
      .sort((a, b) => a.profit - b.profit)
      .slice(0, 10);
    
    return { topProfitable, topLosses };
  }, [filteredData]);

  // Prepare data for profit/loss over time chart
  const prepareChartData = () => {
    // Group data by month
    const groupedByMonth: Record<string, TransactionRow[]> = {};
    
    filteredData.forEach(transaction => {
      const date = parseDate(transaction.Time);
      const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      
      if (!groupedByMonth[monthYear]) {
        groupedByMonth[monthYear] = [];
      }
      
      groupedByMonth[monthYear].push(transaction);
    });

    // Calculate profit/loss per month
    const months = Object.keys(groupedByMonth).sort();
    const profitLossPerMonth = months.map(month => {
      const transactions = groupedByMonth[month];
      const wins = transactions
        .filter(t => t.Type === 'Win')
        .reduce((sum, t) => sum + parseFloat(t.Amount || '0'), 0);
      
      const stakes = transactions
        .filter(t => t.Type === 'Bet Stake')
        .reduce((sum, t) => sum + parseFloat(t.Amount || '0'), 0);
      
      return wins + stakes; // Net profit/loss
    });

    return {
      labels: months.map(month => {
        const [year, monthNum] = month.split('-');
        return `${monthNum}/${year}`;
      }),
      datasets: [
        {
          label: 'Profit/Loss',
          data: profitLossPerMonth,
          backgroundColor: profitLossPerMonth.map(value => value >= 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)'),
          borderColor: profitLossPerMonth.map(value => value >= 0 ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)'),
          borderWidth: 1,
        },
      ],
    };
  };

  // Prepare data for top profitable events chart
  const prepareTopProfitableChart = () => {
    return {
      labels: eventPerformance.topProfitable.map(event => 
        event.summary.length > 20 ? event.summary.substring(0, 20) + '...' : event.summary
      ),
      datasets: [
        {
          label: 'Profit ($)',
          data: eventPerformance.topProfitable.map(event => event.profit),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1,
        },
      ],
    };
  };

  // Prepare data for top loss events chart
  const prepareTopLossChart = () => {
    return {
      labels: eventPerformance.topLosses.map(event => 
        event.summary.length > 20 ? event.summary.substring(0, 20) + '...' : event.summary
      ),
      datasets: [
        {
          label: 'Loss ($)',
          data: eventPerformance.topLosses.map(event => Math.abs(event.profit)),
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
      ],
    };
  };

  // Get available months for filter
  const getAvailableMonths = () => {
    const months = new Set<string>();
    
    data.forEach(transaction => {
      const date = parseDate(transaction.Time);
      const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      months.add(monthYear);
    });
    
    return Array.from(months).sort();
  };

  // Handle filter change
  const handleMonthFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === 'all' ? null : e.target.value;
    setFilters(prev => ({ ...prev, month: value }));
  };

  // Handle transaction type filter change
  const handleTypeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === 'all' ? null : e.target.value;
    setFilters(prev => ({ ...prev, transactionType: value }));
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-lg font-medium mb-4 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
          Filter Your Data
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-64">
            <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
            <div className="relative">
              <select 
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 bg-white pl-4 pr-10 py-2 appearance-none"
                value={filters.month || 'all'}
                onChange={handleMonthFilterChange}
              >
                <option value="all">All Months</option>
                {getAvailableMonths().map(month => (
                  <option key={month} value={month}>
                    {month.split('-')[1]}/{month.split('-')[0]}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="w-full sm:w-64">
            <label className="block text-sm font-medium text-gray-700 mb-2">Transaction Type</label>
            <div className="relative">
              <select 
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 bg-white pl-4 pr-10 py-2 appearance-none"
                value={filters.transactionType || 'all'}
                onChange={handleTypeFilterChange}
              >
                <option value="all">All Types</option>
                {transactionTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-16 h-16 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Bets</h3>
          <p className="text-2xl font-bold text-gray-800">{profitLossData.totalBets}</p>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-indigo-500 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-16 h-16 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Stake</h3>
          <p className="text-2xl font-bold text-gray-800">${profitLossData.totalStake.toFixed(2)}</p>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-500 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-16 h-16 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Avg Stake/Bet</h3>
          <p className="text-2xl font-bold text-gray-800">${profitLossData.avgStakePerBet.toFixed(2)}</p>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-16 h-16 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Profit/Loss</h3>
          <p className={`text-2xl font-bold ${profitLossData.netProfitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${profitLossData.netProfitLoss.toFixed(2)}
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-yellow-500 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-16 h-16 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-500">ROI</h3>
          <p className={`text-2xl font-bold ${profitLossData.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {profitLossData.roi.toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Profit/Loss Over Time Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-lg font-medium mb-4 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          Profit/Loss Over Time
        </h2>
        <div className="h-80">
          <Bar 
            data={prepareChartData()} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: false,
                  grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                  },
                  ticks: {
                    callback: function(value) {
                      return '$' + value;
                    },
                    color: 'rgba(0, 0, 0, 0.7)',
                  }
                },
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: 'rgba(0, 0, 0, 0.7)',
                  }
                }
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return `Profit/Loss: $${context.raw}`;
                    }
                  }
                }
              }
            }}
          />
        </div>
      </div>

      {/* Top 10 Profitable Events Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-lg font-medium mb-4 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293-4.293a1 1 0 01-1.414 1.414l5 5a1 1 0 001.414 0L11 10.586 14.586 13H12z" clipRule="evenodd" />
          </svg>
          Top 10 Most Profitable Events
        </h2>
        <div className="h-80">
          <Bar 
            data={prepareTopProfitableChart()} 
            options={{
              indexAxis: 'y',
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  beginAtZero: true,
                  grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                  },
                  ticks: {
                    callback: function(value) {
                      return '$' + value;
                    },
                    color: 'rgba(0, 0, 0, 0.7)',
                  }
                },
                y: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: 'rgba(0, 0, 0, 0.7)',
                  }
                }
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  callbacks: {
                    title: function(tooltipItems) {
                      const index = tooltipItems[0].dataIndex;
                      return eventPerformance.topProfitable[index].summary;
                    },
                    label: function(context) {
                      return `Profit: $${context.raw}`;
                    }
                  }
                }
              }
            }}
          />
        </div>
      </div>

      {/* Top 10 Loss-Making Events Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-lg font-medium mb-4 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 10.586 14.586 13H12z" clipRule="evenodd" />
          </svg>
          Top 10 Events with Highest Losses
        </h2>
        <div className="h-80">
          <Bar 
            data={prepareTopLossChart()} 
            options={{
              indexAxis: 'y',
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  beginAtZero: true,
                  grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                  },
                  ticks: {
                    callback: function(value) {
                      return '$' + value;
                    },
                    color: 'rgba(0, 0, 0, 0.7)',
                  }
                },
                y: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: 'rgba(0, 0, 0, 0.7)',
                  }
                }
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  callbacks: {
                    title: function(tooltipItems) {
                      const index = tooltipItems[0].dataIndex;
                      return eventPerformance.topLosses[index].summary;
                    },
                    label: function(context) {
                      return `Loss: $${context.raw}`;
                    }
                  }
                }
              }
            }}
          />
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <h2 className="text-lg font-medium p-5 border-b border-gray-100 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
          </svg>
          Transaction History
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Summary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bet ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((transaction, index) => (
                <tr key={transaction['Transaction Id'] || index} className={index % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {parseDate(transaction.Time).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.Type === 'Win' ? 'bg-green-100 text-green-800' : 
                      transaction.Type === 'Bet Stake' ? 'bg-blue-100 text-blue-800' :
                      transaction.Type === 'Deposit' ? 'bg-purple-100 text-purple-800' :
                      transaction.Type === 'Withdrawal' ? 'bg-yellow-100 text-yellow-800' :
                      transaction.Type === 'Void' ? 'bg-gray-100 text-gray-800' :
                      transaction.Type === 'Cashed Out' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {transaction.Type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {transaction.Summary}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {transaction['Bet Id'] || '-'}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    parseFloat(transaction.Amount || '0') >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ${parseFloat(transaction.Amount || '0').toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    ${parseFloat(transaction.Balance || '0').toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 