import React, { useState } from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import KPICard from './KPICard';
import ConsumptionChart from './ConsumptionChart';
import GridStatusTable from './GridStatusTable';
import AlertsPanel from './AlertsPanel';
import SmartAssistant from './SmartAssistant';
import DashboardCustomizer from './DashboardCustomizer';
import { KPIData, GridAsset, GridStatus, AlertData, AlertLevel } from '../types';
import { IconSettings } from '../constants';

const kpiData: KPIData[] = [
    { title: 'Total Consumption', value: '1,234 MWh', change: '+2.1%', changeType: 'increase' },
    { title: 'Grid Stability', value: '99.8%', change: '-0.1%', changeType: 'decrease' },
    { title: 'Active Substations', value: '148 / 150', change: '+0', changeType: 'increase' },
    { title: 'Revenue Today', value: '$1.2M', change: '+5.4%', changeType: 'increase' },
];

const gridData: GridAsset[] = [
  { id: 'SUB-001', name: 'Northwind Substation', type: 'Substation', status: GridStatus.Online, load: 250, voltage: 138 },
  { id: 'SUB-002', name: 'Riverbend Facility', type: 'Substation', status: GridStatus.HighLoad, load: 480, voltage: 138 },
  { id: 'GEN-003', name: 'Maple Creek Solar', type: 'Generator', status: GridStatus.Online, load: 120, voltage: 34.5 },
  { id: 'SUB-004', name: 'Eastwood Distribution', type: 'Substation', status: GridStatus.Maintenance, load: 0, voltage: 138 },
  { id: 'SUB-005', name: 'Southpoint Hub', type: 'Substation', status: GridStatus.Online, load: 310, voltage: 138 },
  { id: 'GEN-006', name: 'Hilltop Wind Farm', type: 'Generator', status: GridStatus.Offline, load: 0, voltage: 34.5 },
];

const alertsData: AlertData[] = [
  { id: 'A01', level: AlertLevel.Critical, title: 'Transformer T-102 Overload', timestamp: '2m ago' },
  { id: 'A02', level: AlertLevel.Warning, title: 'Voltage dip at Northwind Substation', timestamp: '15m ago' },
  { id: 'A03', level: AlertLevel.Info, title: 'Routine maintenance scheduled for GEN-006', timestamp: '1h ago' },
  { id: 'A04', level: AlertLevel.Warning, title: 'High demand forecast for 3:00 PM', timestamp: '2h ago' },
];

const widgetComponents = {
    'kpi-total-consumption': { name: 'Total Consumption', component: <KPICard data={kpiData[0]} /> },
    'kpi-grid-stability': { name: 'Grid Stability', component: <KPICard data={kpiData[1]} /> },
    'kpi-active-substations': { name: 'Active Substations', component: <KPICard data={kpiData[2]} /> },
    'kpi-revenue-today': { name: 'Revenue Today', component: <KPICard data={kpiData[3]} /> },
    'consumption-chart': { name: 'Energy Consumption Chart', component: <ConsumptionChart /> },
    'alerts-panel': { name: 'Recent Alerts', component: <AlertsPanel alerts={alertsData} /> },
    'grid-status-table': { name: 'Grid Asset Status', component: <GridStatusTable assets={gridData} /> },
    'smart-assistant': { name: 'Gemini Smart Assistant', component: <SmartAssistant gridData={gridData} alerts={alertsData} /> }
};

const initialLayouts = {
  lg: [
    { i: 'kpi-total-consumption', x: 0, y: 0, w: 3, h: 1 },
    { i: 'kpi-grid-stability', x: 3, y: 0, w: 3, h: 1 },
    { i: 'kpi-active-substations', x: 6, y: 0, w: 3, h: 1 },
    { i: 'kpi-revenue-today', x: 9, y: 0, w: 3, h: 1 },
    { i: 'consumption-chart', x: 0, y: 1, w: 8, h: 4 },
    { i: 'alerts-panel', x: 8, y: 1, w: 4, h: 4 },
    { i: 'grid-status-table', x: 0, y: 5, w: 7, h: 4 },
    { i: 'smart-assistant', x: 7, y: 5, w: 5, h: 4 },
  ],
  md: [
    { i: 'kpi-total-consumption', x: 0, y: 0, w: 5, h: 1 },
    { i: 'kpi-grid-stability', x: 5, y: 0, w: 5, h: 1 },
    { i: 'kpi-active-substations', x: 0, y: 1, w: 5, h: 1 },
    { i: 'kpi-revenue-today', x: 5, y: 1, w: 5, h: 1 },
    { i: 'consumption-chart', x: 0, y: 2, w: 10, h: 4 },
    { i: 'alerts-panel', x: 0, y: 6, w: 10, h: 4 },
    { i: 'grid-status-table', x: 0, y: 10, w: 10, h: 4 },
    { i: 'smart-assistant', x: 0, y: 14, w: 10, h: 4 },
  ]
};

const Dashboard: React.FC = () => {
    const [isCustomizerOpen, setCustomizerOpen] = useState(false);

    const [layouts, setLayouts] = useState(() => {
        try {
            const savedLayouts = localStorage.getItem('dashboard-layouts');
            return savedLayouts ? JSON.parse(savedLayouts) : initialLayouts;
        } catch (e) {
            return initialLayouts;
        }
    });

    const [visibleWidgets, setVisibleWidgets] = useState(() => {
        try {
            const savedWidgets = localStorage.getItem('dashboard-visible-widgets');
            return savedWidgets ? new Set(JSON.parse(savedWidgets)) : new Set(Object.keys(widgetComponents));
        } catch (e) {
            return new Set(Object.keys(widgetComponents));
        }
    });

    const handleLayoutChange = (layout: any, newLayouts: any) => {
        localStorage.setItem('dashboard-layouts', JSON.stringify(newLayouts));
        setLayouts(newLayouts);
    }

    const toggleWidget = (widgetId: string) => {
        const newVisibleWidgets = new Set(visibleWidgets);
        if (newVisibleWidgets.has(widgetId)) {
            newVisibleWidgets.delete(widgetId);
        } else {
            newVisibleWidgets.add(widgetId);
        }
        setVisibleWidgets(newVisibleWidgets);
        localStorage.setItem('dashboard-visible-widgets', JSON.stringify(Array.from(newVisibleWidgets)));
    }

    return (
        <div className="space-y-6">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
                    <p className="text-text-secondary mt-1">Drag, drop, and resize widgets to build your ideal workspace.</p>
                </div>
                <button
                    onClick={() => setCustomizerOpen(true)}
                    className="flex items-center bg-brand-secondary hover:bg-brand-primary text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    <IconSettings className="w-5 h-5 mr-2" />
                    Customize
                </button>
            </header>

            <ResponsiveGridLayout
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={100}
                onLayoutChange={handleLayoutChange}
                className="min-h-screen"
                draggableHandle=".drag-handle"
            >
                {Array.from(visibleWidgets).map(widgetId => (
                    <div key={widgetId} className="flex flex-col">
                        {widgetComponents[widgetId as keyof typeof widgetComponents].component}
                    </div>
                ))}
            </ResponsiveGridLayout>
            
            {isCustomizerOpen && (
                <DashboardCustomizer
                    widgets={widgetComponents}
                    visibleWidgets={visibleWidgets}
                    onToggleWidget={toggleWidget}
                    onClose={() => setCustomizerOpen(false)}
                />
            )}
        </div>
    );
}

export default Dashboard;