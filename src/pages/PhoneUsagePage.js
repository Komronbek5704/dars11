// src/pages/PhoneUsagePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PhoneUsageChart from '../components/PhoneUsageChart';

const PhoneUsagePage = () => {
  return (
    <div>
      <Header />
      <section>
        <h1 className="text-2xl font-bold text-center my-8">Phone Usage Chart</h1>
        <PhoneUsageChart />
      </section>
      <div className="text-center my-4">
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">Back to Home</Link>
      </div>
    </div>
  );
};

export default PhoneUsagePage;
