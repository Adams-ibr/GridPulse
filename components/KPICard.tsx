import React from 'react';
import { KPIData } from '../types';

const KPICard: React.FC<{ data: KPIData }> = ({ data }) => {
  const { title, value, change, changeType } = data;
  const isIncrease = changeType === 'increase';
  
  const ArrowIcon = isIncrease ? 
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg> :
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>;

  return (
    <div className="bg-surface p-6 rounded-xl shadow-lg border border-gray-700 hover:border-brand-accent transition-all duration-300 h-full">
      <p className="text-sm text-text-secondary font-medium drag-handle cursor-move">{title}</p>
      <div className="flex items-end justify-between mt-2">
        <p className="text-3xl font-bold text-text-primary">{value}</p>
        <div className={`flex items-center px-2 py-1 rounded-full text-sm font-semibold ${isIncrease ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'}`}>
          {ArrowIcon}
          <span className="ml-1">{change}</span>
        </div>
      </div>
    </div>
  );
};

export default KPICard;