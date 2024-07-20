import React from 'react';
import './ThemeSelector.css';

function ThemeSelector({ selectedTheme, onThemeChange }) {
  const themes = [
    { id: 1, name: 'Light Theme', primaryColor: '#BEBEBE' },
    { id: 2, name: 'Dark Theme', primaryColor: '#708090' },
  ];

  return (
    <div className="theme-selector">
      <h3>Theme Selector</h3>
      <div className="themes">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`theme ${theme.id === selectedTheme.id ? 'active' : ''}`}
            style={{ backgroundColor: theme.primaryColor }}
            onClick={() => onThemeChange(theme)}
          >
            {theme.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;


