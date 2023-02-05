import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useState } from 'react';
import { MainLayout } from './Components';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="*" element="12222" />
    </Routes>
  );
};

export const WrappedApp = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <HashRouter>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <App />
        </MantineProvider>
      </ColorSchemeProvider>
    </HashRouter>
  );
};
