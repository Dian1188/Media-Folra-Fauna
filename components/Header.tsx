
import React from 'react';
import { View } from '../App';

interface HeaderProps {
    activeView: View;
    setActiveView: (view: View) => void;
}

const NavButton: React.FC<{
    label: string;
    view: View;
    activeView: View;
    onClick: (view: View) => void;
}> = ({ label, view, activeView, onClick }) => {
    const isActive = activeView === view;
    const baseClasses = "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";
    const activeClasses = "bg-white text-brand-green shadow";
    const inactiveClasses = "text-white hover:bg-green-500";
    
    return (
        <button
            onClick={() => onClick(view)}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            aria-current={isActive ? 'page' : undefined}
        >
            {label}
        </button>
    );
}

export const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  return (
    <header className="bg-brand-green shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <span className="text-2xl" role="img" aria-label="globe">🌍</span>
            <h1 className="text-xl font-bold text-white tracking-tight">
              Persebaran Flora dan Fauna Dunia
            </h1>
          </div>
          <nav className="hidden md:flex space-x-2 bg-green-600 p-1 rounded-lg">
            <NavButton label="Peta Interaktif" view="map" activeView={activeView} onClick={setActiveView} />
            <NavButton label="Materi" view="materi" activeView={activeView} onClick={setActiveView} />
            <NavButton label="Kuis" view="quiz" activeView={activeView} onClick={setActiveView} />
          </nav>
        </div>
      </div>
    </header>
  );
};
