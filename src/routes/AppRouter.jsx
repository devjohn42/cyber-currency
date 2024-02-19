import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CryptoApp from '../pages/CryptoStats/CryptoApp';
import CoinInfo from '../pages/CryptoStats/components/Coins/CoinInfo';
import Error from '../pages/Error';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/crypto-stats" element={<CryptoApp />} />
      <Route path="/crypto-stats/:coinId" element={<CoinInfo />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
