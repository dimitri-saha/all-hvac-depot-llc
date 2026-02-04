import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
// import Test from './test';

console.log('Main.tsx loaded');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

console.log('Creating React root...');
const root = ReactDOM.createRoot(rootElement);
console.log('React root created, rendering Test component...');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('Test component rendered successfully');