import React from 'react';

interface WidgetInfo {
    name: string;
    component: React.ReactNode;
}

interface DashboardCustomizerProps {
    widgets: Record<string, WidgetInfo>;
    visibleWidgets: Set<string>;
    onToggleWidget: (widgetId: string) => void;
    onClose: () => void;
}

const DashboardCustomizer: React.FC<DashboardCustomizerProps> = ({ widgets, visibleWidgets, onToggleWidget, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 transition-opacity duration-300" onClick={onClose}>
            <div className="bg-surface rounded-2xl shadow-2xl w-full max-w-md m-4 p-6 border border-gray-700" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-text-primary">Customize Dashboard</h2>
                    <button onClick={onClose} className="text-text-secondary hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    <p className="text-text-secondary text-sm">Select the widgets you want to display on your dashboard.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-80 overflow-y-auto pr-2">
                        {/* Fix: Replaced Object.entries with Object.keys to ensure proper type inference on the widget object, resolving an 'unknown' type error. */}
                        {Object.keys(widgets).map((id) => (
                            <label key={id} className="flex items-center bg-gray-800 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                                <input
                                    type="checkbox"
                                    checked={visibleWidgets.has(id)}
                                    onChange={() => onToggleWidget(id)}
                                    className="h-5 w-5 rounded bg-gray-900 border-gray-600 text-brand-accent focus:ring-brand-accent focus:ring-offset-surface"
                                />
                                <span className="ml-3 text-sm font-medium text-text-primary">{widgets[id].name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mt-6 text-right">
                    <button
                        onClick={onClose}
                        className="bg-brand-secondary hover:bg-brand-primary text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardCustomizer;