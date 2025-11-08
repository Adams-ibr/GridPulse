import React from 'react';

const Assets: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-text-primary">Asset Management</h1>
      <p className="text-text-secondary mt-1">
        Manage physical assets like transformers, feeders, and substations. Track maintenance and inventory.
      </p>
      
      <div className="mt-8 p-12 bg-surface rounded-lg border border-gray-700 text-center">
        <h2 className="text-xl font-semibold text-text-primary">Feature Coming Soon</h2>
        <p className="mt-2 text-text-secondary">
          The full functionality for Asset Management is currently under development.
        </p>
      </div>
    </div>
  );
};

export default Assets;
