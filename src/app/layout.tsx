'use client';
import StyledComponentsRegistry from '../lib/registry';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}