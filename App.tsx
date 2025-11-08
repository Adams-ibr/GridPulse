import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Customers from './components/pages/Customers';
import Meters from './components/pages/Meters';
import Assets from './components/pages/Assets';
import Outages from './components/pages/Outages';
import Billing from './components/pages/Billing';
import Payments from './components/pages/Payments';
import Analytics from './components/pages/Analytics';
import Reports from './components/pages/Reports';
import Notifications from './components/pages/Notifications';
import AI from './components/pages/AI';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('Dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'Dashboard': return <Dashboard />;
      case 'Customers': return <Customers />;
      case 'Meters': return <Meters />;
      case 'Assets': return <Assets />;
      case 'Outages': return <Outages />;
      case 'Billing': return <Billing />;
      case 'Payments': return <Payments />;
      case 'Analytics': return <Analytics />;
      case 'Reports': return <Reports />;
      case 'Notifications': return <Notifications />;
      case 'AI Assistant': return <AI />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background font-sans">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;