import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme baseColor='#fff' highlightColor='#ccc'>
        <AuthProvider>
          <GlobalStyle />
          <Routes />
        </AuthProvider>
      </SkeletonTheme>
    </ThemeProvider >
  );
}

export default App;
