import React from 'react';

const Meters: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-text-primary">Meter Management</h1>
      <p className="text-text-secondary mt-1">
        Track meter installations, status, types, and firmware. Assign meters to customers.
      </p>
      
      <div className="mt-8 p-12 bg-surface rounded-lg border border-gray-700 text-center">
        <h2 className="text-xl font-semibold text-text-primary">Feature Coming Soon</h2>
        <p className="mt-2 text-text-secondary">
          The full functionality for Meter Management is currently under development.
        </p>
      </div>
    </div>
  );
};

export default Meters;
