import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StoreContent from './StoreContent';
import './StorePage.css';

const StorePage = () => {
  const location = useLocation();
  const [isStorePage, setIsStorePage] = useState(false);

  useEffect(() => {
    setIsStorePage(location.pathname.includes('/store'));
  }, [location]);

  return (
    <div className={`store-page ${isStorePage ? 'active' : ''}`}>
    
      <StoreContent />
    </div>
  );
};

export default StorePage;