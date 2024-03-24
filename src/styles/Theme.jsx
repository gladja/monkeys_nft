import { ThemeProvider } from 'styled-components';

// const example = styled.div`
//   color: ${({ theme }) => theme.colors.black};
// `;

const theme = {
  colors: {
    black: '#171717',
    black2: '#1E1E1E',
    red: '#DC3B5A',
    white: '#fff',
    blue: '#5A65F2',
  },
};

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
