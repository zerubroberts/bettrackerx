'use client';

import { useState, useCallback, ReactNode } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import { Button, Flex, Text, Metric, Card } from '@tremor/react';
import { XCircleIcon, CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

export type TransactionRow = {
  Time: string;
  Type: string;
  Summary: string;
  'Transaction Id': string;
  'Bet Id'?: string;
  Amount: string;
  Balance: string;
  [key: string]: string | undefined;
};

export interface CsvUploadProps {
  onDataUploaded: (data: TransactionRow[]) => void;
}

const CsvUpload = ({ onDataUploaded }: CsvUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<TransactionRow[] | null>(null);
  const [loading, setLoading] = useState(false);

  const requiredHeaders = ['Time', 'Type', 'Summary', 'Transaction Id', 'Amount', 'Balance'];
  
  const normalizeHeader = (header: string): string => {
    // Remove quotes, trim whitespace, and normalize case for comparison
    return header.replace(/['"]/g, '').trim();
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    setPreview(null);
    
    if (acceptedFiles.length === 0) {
      return;
    }
    
    const file = acceptedFiles[0];
    
    if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
      setError('Please upload a valid CSV file');
      return;
    }
    
    setFile(file);
    setLoading(true);
    
    Papa.parse<TransactionRow>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setLoading(false);
        
        if (results.errors.length > 0) {
          setError(`CSV parsing error: ${results.errors[0].message}`);
          return;
        }
        
        if (results.data.length === 0) {
          setError('The CSV file is empty or contains no valid data rows');
          return;
        }
        
        // Check if all required headers are present
        const headers = Object.keys(results.data[0] as Record<string, unknown>).map(normalizeHeader);
        const missingHeaders = requiredHeaders.filter(
          req => !headers.some(h => normalizeHeader(h) === normalizeHeader(req))
        );
        
        if (missingHeaders.length > 0) {
          setError(`Missing required columns: ${missingHeaders.join(', ')}`);
          return;
        }
        
        // Show preview of the first 5 rows
        setPreview(results.data.slice(0, 5) as TransactionRow[]);
      },
      error: (error) => {
        setLoading(false);
        setError(`Failed to parse CSV: ${error.message}`);
      }
    });
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    }
  });

  const handleSubmit = () => {
    if (!file) return;
    
    setLoading(true);
    Papa.parse<TransactionRow>(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => {
        // Normalize headers to handle case sensitivity and whitespace issues
        return header.trim();
      },
      complete: (results) => {
        setLoading(false);
        
        if (results.errors.length > 0) {
          console.error("CSV parsing errors:", results.errors);
          setError(`CSV parsing error: ${results.errors[0].message}`);
          return;
        }
        
        // Validate and sanitize data
        const validData = results.data.filter((row) => {
          // Ensure all required fields exist and are not empty
          const hasAllRequiredFields = requiredHeaders.every(
            header => row[header] !== undefined && row[header] !== ''
          );
          
          if (!hasAllRequiredFields) {
            console.warn("Row missing required fields:", row);
            return false;
          }
          
          // Ensure Time field is a valid date
          try {
            // This just checks if we can parse the date
            const date = new Date(row.Time);
            if (isNaN(date.getTime())) {
              console.warn("Invalid date in row:", row);
              return false;
            }
          } catch (e) {
            console.warn("Error parsing date:", row.Time, e);
            return false;
          }
          
          // Ensure Amount is a valid number
          const amount = parseFloat(String(row.Amount).replace(/[^\d.-]/g, ''));
          if (isNaN(amount)) {
            console.warn("Invalid amount in row:", row);
            return false;
          }
          
          return true;
        });
        
        console.log("CSV Upload processed results:");
        console.log("- Original rows:", results.data.length);
        console.log("- Valid rows:", validData.length);
        console.log("- Sample data:", validData.slice(0, 3));
        
        if (validData.length === 0) {
          setError("No valid data rows found after validation");
          return;
        }
        
        onDataUploaded(validData as TransactionRow[]);
      },
      error: (error) => {
        console.error("CSV parsing error:", error);
        setLoading(false);
        setError(`Failed to parse CSV: ${error.message}`);
      }
    });
  };

  const resetUpload = () => {
    setFile(null);
    setError(null);
    setPreview(null);
  };

  return (
    <div className="space-y-6">
      <div 
        {...getRootProps()} 
        className={`
          border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
          ${isDragActive 
            ? 'border-blue-500 bg-blue-50' 
            : file && !error 
              ? 'border-green-500 bg-green-50' 
              : error 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50 bg-gradient-to-br from-white to-gray-50'
          }
        `}
      >
        <input {...getInputProps()} />
        
        {loading ? (
          <div className="py-4 flex flex-col items-center">
            <ArrowPathIcon className="h-12 w-12 text-blue-500 animate-spin mb-4" />
            <Text>Processing your file...</Text>
          </div>
        ) : file && !error ? (
          <div className="flex flex-col items-center">
            <CheckCircleIcon className="h-12 w-12 text-green-500 mb-4" />
            <Text className="font-medium text-green-600 mb-1">File ready for upload</Text>
            <Text>{file.name} ({(file.size / 1024).toFixed(1)} KB)</Text>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center">
            <XCircleIcon className="h-12 w-12 text-red-500 mb-4" />
            <Text className="font-medium text-red-600 mb-1">Error</Text>
            <Text>{error}</Text>
            <Button onClick={resetUpload} className="mt-4" variant="light" size="xs">
              Try Again
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <Text className="font-medium mb-1">Drag & drop your CSV file here</Text>
            <Text>or click to browse files</Text>
            <div className="mt-4 text-sm text-gray-500">
              <p>Required columns: Time, Type, Summary, Transaction Id, Amount, Balance</p>
            </div>
          </div>
        )}
      </div>
      
      {preview && preview.length > 0 && (
        <div className="mt-6">
          <Text className="font-medium mb-2">Preview (First 5 rows)</Text>
          <div className="overflow-x-auto bg-white p-2 rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {Object.keys(preview[0]).map((header, i) => (
                    <th key={i} className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {preview.map((row, i) => (
                  <tr key={i}>
                    {Object.values(row as Record<string, unknown>).map((value, j) => (
                      <td key={j} className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">
                        {String(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <Flex justifyContent="between" className="mt-6">
            <Button onClick={resetUpload} variant="light">
              Start Over
            </Button>
            <Button onClick={handleSubmit} color="blue" disabled={!file || !!error}>
              Process Data
            </Button>
          </Flex>
        </div>
      )}
    </div>
  );
};

export default CsvUpload; 