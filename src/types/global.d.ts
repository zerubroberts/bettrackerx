import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Define missing module declarations
declare module 'react-dropzone';
declare module 'papaparse';
declare module 'chart.js';
declare module 'react-chartjs-2';

// This file is a module
export {}; 