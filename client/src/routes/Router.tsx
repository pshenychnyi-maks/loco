import { Routes, Route } from 'react-router';
import { HomeContainer } from '../containers/HomeContainer';

export const Router = () => (
  <Routes>
    <Route path="/" element={<HomeContainer />} />
    <Route path="*" element={<>404</>} />
  </Routes>
);
