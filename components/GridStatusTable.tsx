import React from 'react';
import { GridAsset, GridStatus } from '../types';

const getStatusColor = (status: GridStatus) => {
  switch (status) {
    case GridStatus.Online:
      return 'bg-success/20 text-success';
    case GridStatus.Offline:
      return 'bg-danger/20 text-danger';
    case GridStatus.Maintenance:
      return 'bg-warning/20 text-warning';
    case GridStatus.HighLoad:
      return 'bg-orange-500/20 text-orange-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
};

const GridStatusTable: React.FC<{ assets: GridAsset[] }> = ({ assets }) => {
  return (
    <div className="bg-surface p-6 rounded-xl shadow-lg border border-gray-700 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-text-primary mb-4 drag-handle cursor-move">Grid Asset Status</h3>
      <div className="overflow-auto flex-grow">
        <table className="w-full text-left">
          <thead className="border-b border-gray-600 sticky top-0 bg-surface">
            <tr>
              <th className="py-3 px-4 text-sm font-semibold text-text-secondary">Asset ID</th>
              <th className="py-3 px-4 text-sm font-semibold text-text-secondary">Name</th>
              <th className="py-3 px-4 text-sm font-semibold text-text-secondary">Status</th>
              <th className="py-3 px-4 text-sm font-semibold text-text-secondary">Load (MW)</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                <td className="py-3 px-4 text-sm text-text-secondary font-mono">{asset.id}</td>
                <td className="py-3 px-4 text-sm text-text-primary font-medium">{asset.name}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(asset.status)}`}>
                    {asset.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-text-primary">{asset.load.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GridStatusTable;