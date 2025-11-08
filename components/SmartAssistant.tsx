import React, { useState, useCallback } from 'react';
import { getGridSummary } from '../services/geminiService';
import { GridAsset, AlertData } from '../types';

interface SmartAssistantProps {
    gridData: GridAsset[];
    alerts: AlertData[];
}

const SmartAssistant: React.FC<SmartAssistantProps> = ({ gridData, alerts }) => {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateSummary = useCallback(async () => {
    setIsLoading(true);
    setError('');
    setSummary('');
    try {
      const result = await getGridSummary(gridData, alerts);
      setSummary(result);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [gridData, alerts]);

  return (
    <div className="bg-surface p-6 rounded-xl shadow-lg border border-gray-700 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-text-primary mb-4 drag-handle cursor-move">Gemini Smart Assistant</h3>
      <div className="flex-grow bg-gray-800 rounded-lg p-4 text-text-secondary text-sm overflow-y-auto min-h-[150px]">
        {isLoading && (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-accent"></div>
            <p className="ml-3">Generating insights...</p>
          </div>
        )}
        {error && <p className="text-danger">{error}</p>}
        {summary && <p className="whitespace-pre-wrap">{summary}</p>}
        {!isLoading && !summary && !error && <p>Click "Generate Summary" to get an AI-powered overview of the current grid status.</p>}
      </div>
      <button
        onClick={handleGenerateSummary}
        disabled={isLoading}
        className="mt-4 w-full bg-brand-secondary hover:bg-brand-primary text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? 'Generating...' : 'Generate Summary'}
      </button>
    </div>
  );
};

export default SmartAssistant;