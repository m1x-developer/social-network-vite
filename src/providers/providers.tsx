import React, { useState } from 'react';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { ChatContextProvider } from './ChatContex';
import { AuthContextProvider } from './AuthContext';

export const RootProvider = ({ children }: any) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <BrowserRouter>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              theme={{ colorScheme }}
              withGlobalStyles
              withNormalizeCSS
            >
              {children}
            </MantineProvider>
          </ColorSchemeProvider>
        </BrowserRouter>
      </ChatContextProvider>
    </AuthContextProvider>
  );
};
