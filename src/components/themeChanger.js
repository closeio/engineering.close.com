import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const ThemeChanger = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label className="theme-changer">
        <input
          type="checkbox"
          className="theme-changer-input"
          onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className="mode-container">
          <i className="gg-sun"></i>
          <i className="gg-moon"></i>
        </div>
      </label>
    )}
  </ThemeToggler>
);

export default ThemeChanger;
