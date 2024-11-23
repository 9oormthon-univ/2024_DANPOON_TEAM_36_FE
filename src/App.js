import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  const elements = routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
  ));

  return (
    <ThemeProvider theme={theme}>
      <Router basename="2024_DANPOON_TEAM_36_FE">
        <Routes>
          {elements}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
