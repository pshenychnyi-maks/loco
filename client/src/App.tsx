import { Router } from './routes/Router';
import { BrowserRouter } from 'react-router';
import { GlobalStyles } from './styles/global';
import { MainLayout } from './layouts/MainLayout/MainLayout';

export const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  );
};

