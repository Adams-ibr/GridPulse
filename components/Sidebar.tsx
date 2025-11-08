import React from 'react';
import { IconDashboard, IconAssets, IconBilling, IconAnalytics, IconAssistant, IconSettings, IconCustomers, IconMeters, IconOutage, IconReports, IconNotifications, IconPayments } from '../constants';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <li
    onClick={onClick}
    className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
      active ? 'bg-brand-secondary text-white shadow-lg' : 'text-text-secondary hover:bg-surface hover:text-white'
    }`}
  >
    {icon}
    <span className="ml-4 font-medium">{label}</span>
  </li>
);

interface SidebarProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {

  const navItems = [
    { name: 'Dashboard', icon: <IconDashboard className="w-6 h-6" /> },
    { name: 'Customers', icon: <IconCustomers className="w-6 h-6" /> },
    { name: 'Meters', icon: <IconMeters className="w-6 h-6" /> },
    { name: 'Assets', icon: <IconAssets className="w-6 h-6" /> },
    { name: 'Outages', icon: <IconOutage className="w-6 h-6" /> },
    { name: 'Billing', icon: <IconBilling className="w-6 h-6" /> },
    { name: 'Payments', icon: <IconPayments className="w-6 h-6" /> },
    { name: 'Analytics', icon: <IconAnalytics className="w-6 h-6" /> },
    { name: 'Reports', icon: <IconReports className="w-6 h-6" /> },
    { name: 'Notifications', icon: <IconNotifications className="w-6 h-6" /> },
    { name: 'AI Assistant', icon: <IconAssistant className="w-6 h-6" /> },
  ];

  return (
    <aside className="w-64 bg-surface flex-shrink-0 p-4 hidden md:flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-10 p-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
           </svg>
           <h1 className="text-2xl font-bold ml-2 text-white">GridPulse</h1>
        </div>
        <nav>
          <ul className="overflow-y-auto max-h-[calc(100vh-200px)] pr-2">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                icon={item.icon}
                label={item.name}
                active={activePage === item.name}
                onClick={() => onNavigate(item.name)}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <ul>
          <NavItem
            icon={<IconSettings className="w-6 h-6" />}
            label="Settings"
            active={activePage === 'Settings'}
            onClick={() => onNavigate('Settings')}
          />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;