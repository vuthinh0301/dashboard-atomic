import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/layout/DefaultLayout';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route: any) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                  <Page />
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
