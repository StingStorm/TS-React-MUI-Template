import './App.css';
import theme from '@/theme/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
