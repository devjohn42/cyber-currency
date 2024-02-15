import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import CryptoStats from '../pages/CryptoStats';
import Error from '../pages/Error';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/crypto-stats" element={<CryptoStats />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
