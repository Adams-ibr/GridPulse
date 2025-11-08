import React from 'react';
import { AlertData, AlertLevel } from '../types';

const getAlertIcon = (level: AlertLevel) => {
  const baseClasses = "w-5 h-5 mr-3";
  switch (level) {
    case AlertLevel.Critical:
      return <svg xmlns="http://www.w.org/2000/svg" className={`${baseClasses} text-danger`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
    case AlertLevel.Warning:
      return <svg xmlns="http://www.w3.org/2000/svg" className={`${baseClasses} text-warning`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case AlertLevel.Info:
      return <svg xmlns="http://www.w3.org/2000/svg" className={`${baseClasses} text-brand-accent`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  }
};

const getAlertColor = (level: AlertLevel) => {
    switch (level) {
      case AlertLevel.Critical: return 'border-danger';
      case AlertLevel.Warning: return 'border-warning';
      case AlertLevel.Info: return 'border-brand-accent';
    }
}

const AlertsPanel: React.FC<{ alerts: AlertData[] }> = ({ alerts }) => {
  return (
    <div className="bg-surface p-6 rounded-xl shadow-lg h-full border border-gray-700 flex flex-col">
      <h3 className="text-lg font-semibold text-text-primary mb-4 drag-handle cursor-move">Recent Alerts</h3>
      <div className="space-y-4 overflow-y-auto flex-grow pr-2">
        {alerts.map((alert) => (
          <div key={alert.id} className={`flex items-start p-3 bg-gray-800 rounded-lg border-l-4 ${getAlertColor(alert.level)}`}>
            {getAlertIcon(alert.level)}
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">{alert.title}</p>
              <p className="text-xs text-text-secondary mt-1">{alert.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsPanel;