import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ConsumptionData } from '../types';

const data: ConsumptionData[] = [
  { month: 'Jan', consumption: 4000 },
  { month: 'Feb', consumption: 3000 },
  { month: 'Mar', consumption: 5000 },
  { month: 'Apr', consumption: 4500 },
  { month: 'May', consumption: 6000 },
  { month: 'Jun', consumption: 5500 },
  { month: 'Jul', consumption: 7000 },
];

const ConsumptionChart: React.FC = () => {
  return (
    <div className="bg-surface p-6 rounded-xl shadow-lg h-full border border-gray-700 flex flex-col">
        <h3 className="text-lg font-semibold text-text-primary mb-4 drag-handle cursor-move">Energy Consumption (MWh)</h3>
        <div className="flex-grow w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" tick={{ fill: '#9CA3AF' }} stroke="#4B5563" />
                    <YAxis tick={{ fill: '#9CA3AF' }} stroke="#4B5563" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1F2937',
                            borderColor: '#4B5563',
                            color: '#F9FAFB'
                        }}
                        cursor={{ fill: 'rgba(66, 165, 245, 0.1)' }}
                    />
                    <Legend wrapperStyle={{ color: '#D1D5DB' }} />
                    <Line
                        type="monotone"
                        dataKey="consumption"
                        stroke="#42A5F5"
                        strokeWidth={2}
                        dot={{ r: 4, fill: '#42A5F5' }}
                        activeDot={{ r: 8, stroke: '#0D47A1' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
};

export default ConsumptionChart;