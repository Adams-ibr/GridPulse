import React from 'react';

const AI: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-text-primary">AI Assistant</h1>
      <p className="text-text-secondary mt-1">
        Leverage generative AI for insights, summaries, and operational assistance.
      </p>
      
      <div className="mt-8 p-12 bg-surface rounded-lg border border-gray-700 text-center">
        <h2 className="text-xl font-semibold text-text-primary">Feature Coming Soon</h2>
        <p className="mt-2 text-text-secondary">
          The full functionality for the AI Assistant is currently under development. The smart assistant on the dashboard provides a preview.
        </p>
      </div>
    </div>
  );
};

export default AI;
