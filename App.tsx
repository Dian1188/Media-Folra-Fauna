
import React, { useState } from 'react';
import { Header } from './components/Header';
import MapView from './components/CodeInput';
import QuizView from './components/ReviewOutput';
import MateriView from './components/Spinner';

export type View = 'map' | 'materi' | 'quiz';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('map');

  const renderContent = () => {
    switch (activeView) {
      case 'map':
        return <MapView />;
      case 'quiz':
        return <QuizView />;
      case 'materi':
        return <MateriView />;
      default:
        return <MapView />;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans flex flex-col">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-grow container mx-auto p-4">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
