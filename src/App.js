import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import CV from './pages/CV';
import Projects from './pages/Projects';
import LogosArt from './pages/LogosArt';
import ContactMe from './pages/ContactMe';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './global';

const App = () => {
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/logos-art" element={<LogosArt />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
