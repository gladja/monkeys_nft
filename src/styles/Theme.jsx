import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#171717',
    black2: '#1E1E1E',
    red: '#DC3B5A',
    white: '#fff',
    blue: '#5A65F2',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
