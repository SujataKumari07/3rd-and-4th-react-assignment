import React, { useState } from 'react';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css'; // Import your global styles here

function App() {
  const [selectedTheme, setSelectedTheme] = useState({ id: 1, name: 'Light Theme', primaryColor: '#BEBEBE' });

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    applyTheme(theme);
  };

  const applyTheme = (theme) => {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    // Apply other theme-specific styles or classes to different parts of your application
  };

  return (
    <div className="App" style={{ backgroundColor: selectedTheme.primaryColor }}>
      <ThemeSelector selectedTheme={selectedTheme} onThemeChange={handleThemeChange} />
      <Dashboard />
    </div>
  );
}

export default App;

