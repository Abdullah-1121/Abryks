'use client'
import { useState } from 'react';

const TestCheckout = () => {
  const [responseMessage, setResponseMessage] = useState('');

  const handleTestCheckout = async () => {
    try {
      const dummyItems = [
        {
          id: '1',
          title: 'Test Product',
          price: 1000, // Amount in cents
          quantity: 1,
        },
      ];

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: dummyItems }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.sessionId) {
        setResponseMessage(`Session ID: ${data.sessionId}`);
      } else {
        setResponseMessage(`Error: ${data.error}`);
      }
    } catch (error:any) {
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Test Checkout API</h1>
      <button onClick={handleTestCheckout} className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800">
        Test Checkout
      </button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default TestCheckout;
