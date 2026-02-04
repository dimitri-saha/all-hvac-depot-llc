import React from 'react';

console.log('Test component loaded');

const Test: React.FC = () => {
  console.log('Test component rendering');
  return (
    <div style={{ padding: '20px', backgroundColor: 'red', color: 'white' }}>
      <h1>TEST COMPONENT - REACT IS WORKING!</h1>
      <p>If you see this, React is mounted correctly.</p>
    </div>
  );
};

export default Test;