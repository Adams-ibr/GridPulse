import React from 'react';

const Analytics: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-text-primary">Forecasting & Analytics</h1>
      <p className="text-text-secondary mt-1">
        Analyze historical data to forecast demand, detect anomalies, and gain insights.
      </p>
      
      <div className="mt-8 p-12 bg-surface rounded-lg border border-gray-700 text-center">
        <h2 className="text-xl font-semibold text-text-primary">Feature Coming Soon</h2>
        <p className="mt-2 text-text-secondary">
          The full functionality for Forecasting & Analytics is currently under development.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
