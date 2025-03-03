'use client';

import { useState, useEffect } from 'react';
import { format, parseISO, isValid, parse, startOfDay, endOfDay, isBefore, subMonths, addMonths, startOfMonth, endOfMonth, getMonth, getYear } from 'date-fns';
import { DateRangePicker, createStaticRanges } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {
  Card,
  Text,
  Metric,
  Flex,
  Grid,
  Title,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Badge,
  List,
  ListItem,
  Button,
  Select,
  SelectItem,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Color,
  AreaChart,
  BarChart,
  DonutChart,
  Legend,
  LineChart,
  Divider,
  ValueFormatter
} from '@tremor/react';
import { ChevronDownIcon, ArrowUpIcon, ArrowDownIcon, CalendarIcon, ChartBarIcon, XMarkIcon } from '@heroicons/react/20/solid';

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

type EventPerformance = {
  summary: string;
  profit: number;
}

type BookiePerformance = {
  bookie: string;
  profit: number;
  totalBets: number;
  roi: number;
}

type MonthlyPerformance = {
  month: string;
  profit: number;
  numTransactions: number;
  year: number;
  monthNum: number;
}

type DateRangeType = {
  startDate: Date;
  endDate: Date;
  key: string;
};

// Add EventMetric type definition
type EventMetric = {
  id: string;
  betAmount: number;
  profit: number;
  summary: string;
};

// Robust date parsing function to handle various formats
const parseDate = (dateString: string): Date | null => {
  if (!dateString) {
    console.warn("Empty date string provided");
    return null;
  }
  
  // Log the input for debugging
  console.log(`Attempting to parse date: "${dateString}" (type: ${typeof dateString})`);
  
  try {
    // First try standard ISO format
    const parsedISO = parseISO(dateString);
    if (isValid(parsedISO)) {
      console.log(`Successfully parsed ISO date: ${format(parsedISO, 'yyyy-MM-dd HH:mm:ss')}`);
      return parsedISO;
    }
    
    // Try common formats
    const formats = [
      'yyyy-MM-dd HH:mm:ss',
      'yyyy-MM-dd HH:mm',
      'yyyy-MM-dd',
      'MM/dd/yyyy HH:mm:ss',
      'MM/dd/yyyy HH:mm',
      'MM/dd/yyyy',
      'dd/MM/yyyy HH:mm:ss',
      'dd/MM/yyyy HH:mm',
      'dd/MM/yyyy',
      'yyyy.MM.dd HH:mm:ss',
      'yyyy.MM.dd HH:mm',
      'yyyy.MM.dd',
      // Add more formats
      'yyyy/MM/dd',
      'yyyy/MM/dd HH:mm:ss',
      'yyyy/MM/dd HH:mm',
      'dd-MM-yyyy',
      'dd-MM-yyyy HH:mm:ss',
      'dd-MM-yyyy HH:mm',
      'MM-dd-yyyy',
      'MM-dd-yyyy HH:mm:ss',
      'MM-dd-yyyy HH:mm'
    ];
    
    for (const formatStr of formats) {
      try {
        const parsedDate = parse(dateString, formatStr, new Date());
        if (isValid(parsedDate)) {
          console.log(`Successfully parsed date with format ${formatStr}: ${format(parsedDate, 'yyyy-MM-dd HH:mm:ss')}`);
          return parsedDate;
        }
      } catch {
        // Continue to next format
      }
    }
    
    // Try Unix timestamp (milliseconds)
    const timestamp = Number(dateString);
    if (!isNaN(timestamp)) {
      const date = new Date(timestamp);
      if (isValid(date)) {
        console.log(`Successfully parsed timestamp: ${format(date, 'yyyy-MM-dd HH:mm:ss')}`);
        return date;
      }
    }
    
    // Last resort: try browser's native Date parsing
    const nativeDate = new Date(dateString);
    if (isValid(nativeDate)) {
      console.log(`Successfully parsed with native Date constructor: ${format(nativeDate, 'yyyy-MM-dd HH:mm:ss')}`);
      return nativeDate;
    }
    
    console.error("Failed to parse date:", dateString);
    return null;
  } catch (error) {
    console.error("Error while parsing date:", dateString, error);
    return null;
  }
};

// Custom date range picker component with the new color scheme
const CustomDateRangePicker = ({ 
  dateRange, 
  setDateRange, 
  isOpen, 
  setIsOpen 
}: {
  dateRange: DateRangeType;
  setDateRange: (range: DateRangeType) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const staticRanges = createStaticRanges([
    {
      label: 'Last 7 Days',
      range: () => ({
        startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
        endDate: new Date(),
      }),
    },
    {
      label: 'This Month',
      range: () => ({
        startDate: startOfMonth(new Date()),
        endDate: new Date(),
      }),
    },
    {
      label: 'Last Month',
      range: () => ({
        startDate: startOfMonth(subMonths(new Date(), 1)),
        endDate: endOfMonth(subMonths(new Date(), 1)),
      }),
    },
    {
      label: 'Last 3 Months',
      range: () => ({
        startDate: subMonths(new Date(), 3),
        endDate: new Date(),
      }),
    },
    {
      label: 'Year to Date',
      range: () => ({
        startDate: new Date(new Date().getFullYear(), 0, 1),
        endDate: new Date(),
      }),
    },
  ]);

  return (
    <div className="relative">
      <div 
        className="flex items-center gap-2 cursor-pointer p-2 rounded-md border border-[#BDD5EA] hover:border-[#577399] bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CalendarIcon className="h-5 w-5 text-[#577399]" />
        <span className="text-[#495867]">
          {dateRange.startDate ? format(dateRange.startDate, 'MMM d, yyyy') : 'Start date'} - {' '}
          {dateRange.endDate ? format(dateRange.endDate, 'MMM d, yyyy') : 'End date'}
        </span>
        <ChevronDownIcon className="h-5 w-5 text-[#577399]" />
      </div>
      
      {isOpen && (
        <div className="absolute z-50 mt-1 bg-white shadow-lg rounded-md border border-[#BDD5EA]">
          <div className="p-2 border-b border-[#BDD5EA] flex justify-between items-center">
            <h3 className="font-medium text-[#495867]">Select Date Range</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#577399] hover:text-[#FE5F55]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          <DateRangePicker
            onChange={(item) => {
              if (item.selection && item.selection.startDate && item.selection.endDate) {
                setDateRange({
                  startDate: item.selection.startDate,
                  endDate: item.selection.endDate,
                  key: 'selection'
                });
              }
            }}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={[dateRange]}
            direction="horizontal"
            staticRanges={staticRanges}
            rangeColors={['#577399']}
            inputRanges={[]}
          />
        </div>
      )}
    </div>
  );
};

export default function ModernDashboard({ data }: { data: TransactionRow[] }) {
  const [dateRange, setDateRange] = useState<DateRangeType>({
    startDate: new Date(2000, 0, 1), // Set a very early date to include all historical data
    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 10)), // Set a future date to include all future data
    key: 'selection',
  });
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [filteredData, setFilteredData] = useState<TransactionRow[]>([]);
  
  // Keep track if default filters are applied
  const [isDefaultView, setIsDefaultView] = useState(true);
  
  // Overall metrics
  const [totalBets, setTotalBets] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalBetAmount, setTotalBetAmount] = useState(0);
  const [avgBetSize, setAvgBetSize] = useState(0);
  const [winLossRatio, setWinLossRatio] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [eventMetrics, setEventMetrics] = useState<Record<string, EventMetric>>({});
  
  // Chart data
  const [cumulativeProfitData, setCumulativeProfitData] = useState<{date: string; profit: number}[]>([]);
  const [monthlyProfitData, setMonthlyProfitData] = useState<MonthlyPerformance[]>([]);
  const [winLossRatioData, setWinLossRatioData] = useState<{name: string; value: number}[]>([]);

  // Debug function to log data structure
  const logDataStructure = (label: string, data: any) => {
    console.log(`${label}:
      - Type: ${typeof data}
      - Is Array: ${Array.isArray(data)}
      - Length: ${Array.isArray(data) ? data.length : 'N/A'}
      - First item: ${Array.isArray(data) && data.length > 0 ? JSON.stringify(data[0], null, 2) : 'None'}
    `);
  };

  // Process data based on filters
  useEffect(() => {
    console.log("🔄 Starting data processing...");
    logDataStructure("Initial data", data);

    if (!data || !Array.isArray(data) || data.length === 0) {
      console.warn("No data available or data is not an array:", data);
      setFilteredData([]);
      setTotalBets(0);
      setTotalProfit(0);
      setTotalBetAmount(0);
      setAvgBetSize(0);
      setWinLossRatio(0);
      setWins(0);
      setLosses(0);
      setEventMetrics({});
      return;
    }

    // Apply date filter only
    let filtered = [...data];
    
    if (dateRange.startDate || dateRange.endDate) {
      console.log("📅 Filtering by date range:", dateRange);
      filtered = filtered.filter(row => {
        const rowDate = parseDate(row.Time);
        
        if (!rowDate) {
          console.warn(`Could not parse date for row:`, row);
          return false;
        }
        
        const startDate = dateRange.startDate ? startOfDay(dateRange.startDate) : null;
        const endDate = dateRange.endDate ? endOfDay(dateRange.endDate) : null;
        
        let includeRow = true;
        
        if (startDate && rowDate < startDate) {
          includeRow = false;
        }
        
        if (endDate && rowDate > endDate) {
          includeRow = false;
        }
        
        return includeRow;
      });
      
      console.log(`After date filtering: ${filtered.length} rows remain`);
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => {
      const dateA = parseDate(a.Time) || new Date(0);
      const dateB = parseDate(b.Time) || new Date(0);
      return dateB.getTime() - dateA.getTime();
    });

    console.log(`Final filtered data: ${filtered.length} rows`);
    if (filtered.length > 0) {
      console.log("Sample filtered row:", filtered[0]);
    }
    
    setFilteredData(filtered);

    // Calculate metrics
    let profit = 0;
    let betAmount = 0;
    let betCount = 0;
    let winCount = 0;
    let lossCount = 0;
    const events: Record<string, EventMetric> = {};
    let runningProfit = 0;
    const cumulativeData: {date: string; profit: number}[] = [];
    const monthlyData = new Map<string, MonthlyPerformance>();

    filtered.forEach(row => {
      // Skip rows without amount
      if (!row.Amount) {
        console.warn("Row missing Amount:", row);
        return;
      }

      // Parse amount as number, removing any currency symbols
      const amount = parseFloat(row.Amount.replace(/[^0-9.-]+/g, ''));
      
      if (isNaN(amount)) {
        console.warn(`Invalid amount value: "${row.Amount}" in row:`, row);
        return;
      }

      const rowDate = parseDate(row.Time);
      if (!rowDate) {
        console.warn("Invalid date in row:", row);
        return;
      }

      // Process based on transaction type
      switch (row.Type) {
        case 'Bet Stake':
        case 'Bet with Mates':
          betCount++;
          betAmount += Math.abs(amount);
          profit -= Math.abs(amount);
          
          // Track event metrics if Bet Id is available
          if (row['Bet Id']) {
            const eventId = row['Bet Id'];
            if (!events[eventId]) {
              events[eventId] = { 
                id: eventId, 
                betAmount: Math.abs(amount), 
                profit: -Math.abs(amount), 
                summary: row.Summary || 'Unknown event' 
              };
            } else {
              events[eventId].betAmount += Math.abs(amount);
              events[eventId].profit -= Math.abs(amount);
            }
          }
          break;

        case 'Win':
          winCount++;
          profit += Math.abs(amount);
          
          // Track event metrics if Bet Id is available
          if (row['Bet Id']) {
            const eventId = row['Bet Id'];
            if (!events[eventId]) {
              events[eventId] = { 
                id: eventId, 
                betAmount: 0, 
                profit: Math.abs(amount), 
                summary: row.Summary || 'Unknown event' 
              };
            } else {
              events[eventId].profit += Math.abs(amount);
            }
          }
          break;

        case 'Cashed Out':
          // For cash out, we add the amount as it's money returned
          profit += Math.abs(amount);
          if (row['Bet Id']) {
            const eventId = row['Bet Id'];
            if (events[eventId]) {
              events[eventId].profit += Math.abs(amount);
            }
          }
          break;

        case 'Void':
          // For void bets, we return the stake amount
          profit += Math.abs(amount);
          if (row['Bet Id']) {
            const eventId = row['Bet Id'];
            if (events[eventId]) {
              events[eventId].profit += Math.abs(amount);
              events[eventId].betAmount = 0; // Reset bet amount as it was voided
            }
          }
          break;

        case 'Deposit':
          // Deposits don't affect profit/loss
          break;

        case 'Withdrawal':
          // Withdrawals don't affect profit/loss
          break;

        default:
          console.warn(`Unknown transaction type: ${row.Type}`, row);
      }

      // If bet lost (no win/cashout/void), increment loss counter
      if ((row.Type === 'Bet Stake' || row.Type === 'Bet with Mates') && 
          !filtered.some(r => 
            r['Bet Id'] === row['Bet Id'] && 
            (r.Type === 'Win' || r.Type === 'Cashed Out' || r.Type === 'Void')
          )) {
        lossCount++;
      }

      // Update cumulative profit data
      const dateStr = format(rowDate, 'yyyy-MM-dd');
      cumulativeData.push({
        date: dateStr,
        profit: profit
      });

      // Update monthly data
      const monthYear = format(rowDate, 'MMM yyyy');
      if (!monthlyData.has(monthYear)) {
        monthlyData.set(monthYear, {
          month: format(rowDate, 'MMM'),
          profit: 0,
          numTransactions: 0,
          year: getYear(rowDate),
          monthNum: getMonth(rowDate)
        });
      }
      const monthData = monthlyData.get(monthYear)!;
      monthData.profit = profit;
      monthData.numTransactions++;
    });

    // Set all metrics
    setTotalBets(betCount);
    setTotalProfit(profit);
    setTotalBetAmount(betAmount);
    setAvgBetSize(betCount > 0 ? betAmount / betCount : 0);
    setWins(winCount);
    setLosses(lossCount);
    setWinLossRatio(lossCount > 0 ? winCount / lossCount : winCount);
    setEventMetrics(events);
    setCumulativeProfitData(cumulativeData);
    
    // Convert monthly data to array and sort
    const monthlyDataArray = Array.from(monthlyData.values())
      .sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return a.monthNum - b.monthNum;
      });
    setMonthlyProfitData(monthlyDataArray);

    // Set win/loss ratio data for charts
    setWinLossRatioData([
      { name: 'Wins', value: winCount },
      { name: 'Losses', value: lossCount }
    ]);

    console.log(`📈 Calculated metrics:
      - Total bets: ${betCount}
      - Total profit: ${profit}
      - Total bet amount: ${betAmount}
      - Average bet size: ${betCount > 0 ? betAmount / betCount : 0}
      - Wins: ${winCount}
      - Losses: ${lossCount}
      - Win/Loss ratio: ${lossCount > 0 ? winCount / lossCount : winCount}
      - Events tracked: ${Object.keys(events).length}
    `);
  }, [data, dateRange]);
  
  // Define colors based on profit/loss
  const getProfitLossColor = (value: number): Color => {
    return value >= 0 ? 'emerald' : 'rose';
  };
  
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
  
  const formatCompactNumber = (value: number): string => {
    if (Math.abs(value) >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
  };

  // Custom color function for charts
  const getBarColor = (item: MonthlyPerformance): Color => {
    return item.profit >= 0 ? 'emerald' : 'rose';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Filters Section */}
        <Card className="p-4 border border-purple-200 shadow-sm">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="w-full md:w-auto">
                <Text className="mb-2 text-[#1F2937] font-medium">Date Range</Text>
                <CustomDateRangePicker 
                  dateRange={dateRange}
                  setDateRange={setDateRange}
                  isOpen={datePickerOpen}
                  setIsOpen={setDatePickerOpen}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Badge size="md" color={isDefaultView ? 'indigo' : 'amber'} className="px-2 py-1">
                {isDefaultView ? 'Showing All Data' : 'Filtered View'}
              </Badge>
            </div>
          </div>
        </Card>

        {/* KPI Cards */}
        <Grid numItemsMd={2} numItemsLg={4} className="gap-4">
          <Card 
            decoration="top" 
            decorationColor={getProfitLossColor(totalProfit)}
            className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-[#4C1D95]"
          >
            <Flex justifyContent="between" alignItems="center" className="space-x-4">
              <div>
                <Text className="text-[#1F2937]">Total Profit/Loss</Text>
                <Metric className={`${totalProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {formatCurrency(totalProfit)}
                </Metric>
              </div>
              <Badge 
                size="lg" 
                color={getProfitLossColor(totalProfit)}
                className="p-2"
              >
                {totalProfit >= 0 ? 
                  <ArrowUpIcon className="h-5 w-5" /> :
                  <ArrowDownIcon className="h-5 w-5" />
                }
              </Badge>
            </Flex>
          </Card>
          
          <Card 
            decoration="top" 
            decorationColor="blue"
            className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-[#4C1D95]"
          >
            <Flex justifyContent="between" alignItems="center" className="space-x-4">
              <div>
                <Text className="text-[#1F2937]">Total Bets</Text>
                <Metric className="text-[#1F2937]">{totalBets}</Metric>
              </div>
              <Badge size="lg" color="blue" className="p-2">
                <ChartBarIcon className="h-5 w-5" />
              </Badge>
            </Flex>
          </Card>
          
          <Card 
            decoration="top" 
            decorationColor="amber"
            className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-[#4C1D95]"
          >
            <Flex justifyContent="between" alignItems="center" className="space-x-4">
              <div>
                <Text className="text-[#1F2937]">Average Bet Size</Text>
                <Metric className="text-[#1F2937]">{formatCurrency(avgBetSize)}</Metric>
              </div>
              <Badge size="lg" color="amber" className="p-2">
                <div className="font-bold">$</div>
              </Badge>
            </Flex>
          </Card>
          
          <Card 
            decoration="top" 
            decorationColor={winLossRatio >= 1 ? 'emerald' : 'rose'}
            className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-[#4C1D95]"
          >
            <Flex justifyContent="between" alignItems="center" className="space-x-4">
              <div>
                <Text className="text-[#1F2937]">Win/Loss Ratio</Text>
                <Metric className={`${winLossRatio >= 1 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {winLossRatio.toFixed(2)}
                </Metric>
              </div>
              <Badge 
                size="lg" 
                color={winLossRatio >= 1 ? 'emerald' : 'rose'}
                className="p-2"
              >
                {winLossRatio >= 1 ? 
                  <ArrowUpIcon className="h-5 w-5" /> :
                  <ArrowDownIcon className="h-5 w-5" />
                }
              </Badge>
            </Flex>
          </Card>
        </Grid>

        {/* Dashboard Tabs */}
        <TabGroup>
          <TabList className="mt-8">
            <Tab className="text-[#495867]">Performance Overview</Tab>
            <Tab className="text-[#495867]">Event Analysis</Tab>
            <Tab className="text-[#495867]">Detailed Transactions</Tab>
          </TabList>
          
          <TabPanels>
            {/* Performance Overview Panel */}
            <TabPanel>
              <div className="mt-8 space-y-8">
                {/* Charts row */}
                <Grid numItemsMd={1} numItemsLg={2} className="gap-8">
                  {/* Cumulative Profit/Loss Chart */}
                  <Card className="shadow-md border border-[#BDD5EA]">
                    <Title className="text-[#495867]">Cumulative Profit/Loss Over Time</Title>
                    <Text className="text-[#577399]">Tracking your betting performance journey</Text>
                    
                    {cumulativeProfitData.length > 0 ? (
                      <AreaChart
                        className="mt-4 h-72"
                        data={cumulativeProfitData}
                        index="date"
                        categories={["profit"]}
                        colors={["indigo"]}
                        valueFormatter={formatCurrency}
                        showLegend={false}
                        showGridLines={false}
                        showYAxis={true}
                        curveType="monotone"
                        showAnimation={true}
                      />
                    ) : (
                      <div className="h-72 flex items-center justify-center">
                        <Text className="text-[#577399]">Insufficient data to display chart</Text>
                      </div>
                    )}
                  </Card>
                  
                  {/* Monthly Profit/Loss Bar Chart */}
                  <Card className="shadow-md border border-[#BDD5EA]">
                    <Title className="text-[#495867]">Monthly Profit/Loss</Title>
                    <Text className="text-[#577399]">Performance breakdown by month</Text>
                    
                    {monthlyProfitData.length > 0 ? (
                      <BarChart
                        className="mt-4 h-72"
                        data={monthlyProfitData}
                        index="month"
                        categories={["profit"]}
                        colors={["emerald"]}
                        valueFormatter={formatCurrency}
                        showLegend={false}
                        showGridLines={false}
                        layout="horizontal"
                        showAnimation={true}
                        customTooltip={({ payload }) => {
                          if (payload?.length) {
                            const profit = payload[0].value as number;
                            return (
                              <div className="p-2 border border-[#BDD5EA] bg-white shadow-md rounded-md">
                                <div className="text-[#495867] font-medium">{payload[0].payload.month} {payload[0].payload.year}</div>
                                <div className={profit >= 0 ? 'text-emerald-600' : 'text-rose-600'}>
                                  {formatCurrency(profit)}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    ) : (
                      <div className="h-72 flex items-center justify-center">
                        <Text className="text-[#577399]">Insufficient data to display chart</Text>
                      </div>
                    )}
                  </Card>
                </Grid>
                
                {/* More charts row */}
                <Grid numItemsMd={1} numItemsLg={2} className="gap-8">
                  {/* Win/Loss Ratio Donut Chart */}
                  <Card className="shadow-md border border-[#BDD5EA]">
                    <Title className="text-[#495867]">Win/Loss Ratio</Title>
                    <Text className="text-[#577399]">Distribution of winning vs losing bets</Text>
                    
                    {winLossRatioData.length > 0 && winLossRatioData.some(item => item.value > 0) ? (
                      <div className="mt-4">
                        <DonutChart
                          className="h-64"
                          data={winLossRatioData}
                          category="value"
                          index="name"
                          colors={["emerald", "rose"]}
                          valueFormatter={(value) => formatCompactNumber(value)}
                          showAnimation={true}
                        />
                        <Legend 
                          className="mt-3"
                          categories={["Wins", "Losses"]}
                          colors={["emerald", "rose"]}
                        />
                      </div>
                    ) : (
                      <div className="h-64 flex items-center justify-center">
                        <Text className="text-[#577399]">Insufficient data to display chart</Text>
                      </div>
                    )}
                  </Card>
                  
                  {/* Top 10 Most Profitable Events */}
                  <Card className="shadow-md border border-[#BDD5EA]">
                    <Title className="text-[#495867]">Top 10 Most Profitable Events</Title>
                    <Text className="text-[#577399]">Events that have generated the most profit</Text>
                    
                    {eventMetrics && Object.keys(eventMetrics).length > 0 ? (
                      <BarChart
                        className="mt-4 h-96"
                        data={Object.values(eventMetrics)
                          .map(event => ({
                            ...event,
                            summary: event.summary.length > 25 ? event.summary.substring(0, 22) + '...' : event.summary
                          }))
                          .slice(0, 10)}
                        index="summary"
                        categories={["profit"]}
                        colors={["blue"]}
                        valueFormatter={formatCurrency}
                        showLegend={false}
                        showGridLines={false}
                        layout="vertical"
                        showAnimation={true}
                        yAxisWidth={160}
                        customTooltip={({ payload }) => {
                          if (payload?.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="p-2 border border-[#BDD5EA] bg-white shadow-md rounded-md max-w-xs">
                                <div className="text-[#495867] font-medium">{data.summary}</div>
                                <div className={data.profit >= 0 ? 'text-emerald-600' : 'text-rose-600'}>
                                  {formatCurrency(data.profit)}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    ) : (
                      <div className="h-72 flex items-center justify-center">
                        <Text className="text-[#577399]">Insufficient data to display chart</Text>
                      </div>
                    )}
                  </Card>
                </Grid>
              </div>
            </TabPanel>
            
            {/* Event Analysis Panel */}
            <TabPanel>
              <Grid numItemsMd={1} numItemsLg={2} className="gap-8 mt-8">
                {/* Most Profitable Events */}
                <Card className="shadow-md border border-[#BDD5EA]">
                  <Title className="text-[#495867]">Most Profitable Events</Title>
                  <List className="mt-4">
                    {eventMetrics && Object.keys(eventMetrics).length > 0 ? (
                      Object.values(eventMetrics)
                        .sort((a, b) => b.profit - a.profit)
                        .slice(0, 5)
                        .map((event, index) => (
                          <ListItem key={index}>
                            <div className="truncate max-w-xs">{event.summary}</div>
                            <div className={`font-medium ${event.profit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                              {formatCurrency(event.profit)}
                            </div>
                          </ListItem>
                        ))
                    ) : (
                      <Text className="text-[#577399]">No event data available</Text>
                    )}
                  </List>
                </Card>
                
                {/* Least Profitable Events */}
                <Card className="shadow-md border border-[#BDD5EA]">
                  <Title className="text-[#495867]">Least Profitable Events</Title>
                  <List className="mt-4">
                    {eventMetrics && Object.keys(eventMetrics).length > 0 ? (
                      Object.values(eventMetrics)
                        .sort((a, b) => a.profit - b.profit)
                        .slice(0, 5)
                        .map((event, index) => (
                          <ListItem key={index}>
                            <div className="truncate max-w-xs">{event.summary}</div>
                            <div className={`font-medium ${event.profit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                              {formatCurrency(event.profit)}
                            </div>
                          </ListItem>
                        ))
                    ) : (
                      <Text className="text-[#577399]">No event data available</Text>
                    )}
                  </List>
                </Card>
              </Grid>
            </TabPanel>
            
            {/* Detailed Transactions Panel */}
            <TabPanel>
              <Card className="mt-8 shadow-md border border-[#BDD5EA]">
                <Title className="text-[#495867]">Transaction History</Title>
                <Text className="text-[#577399]">
                  Showing {filteredData.length} transactions
                </Text>
                
                <div className="mt-4 overflow-x-auto">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell className="text-[#495867]">Date</TableHeaderCell>
                        <TableHeaderCell className="text-[#495867]">Type</TableHeaderCell>
                        <TableHeaderCell className="text-[#495867]">Summary</TableHeaderCell>
                        <TableHeaderCell className="text-[#495867]">Amount</TableHeaderCell>
                        <TableHeaderCell className="text-[#495867]">Balance</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredData.length > 0 ? (
                        filteredData.map((row, index) => {
                          const amount = parseFloat(row.Amount);
                          const isPositive = !isNaN(amount) && amount > 0;
                          
                          return (
                            <TableRow key={index}>
                              <TableCell>{row.Time && parseDate(row.Time) ? format(parseDate(row.Time) as Date, 'MMM d, yyyy') : 'N/A'}</TableCell>
                              <TableCell>
                                <Badge color={row.Type === 'BetWin' ? 'emerald' : row.Type === 'Bet' ? 'rose' : 'gray'}>
                                  {row.Type}
                                </Badge>
                              </TableCell>
                              <TableCell className="max-w-xs truncate">{row.Summary}</TableCell>
                              <TableCell className={isPositive ? 'text-emerald-600' : 'text-rose-600'}>
                                {!isNaN(amount) ? formatCurrency(amount) : row.Amount}
                              </TableCell>
                              <TableCell>
                                {!isNaN(parseFloat(row.Balance)) ? formatCurrency(parseFloat(row.Balance)) : row.Balance}
                              </TableCell>
                            </TableRow>
                          );
                        })
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center">
                            No transactions found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
} 