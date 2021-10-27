import React, { useEffect, useState } from 'react';
import Context from './context';
import fetchAllProducts from '../API/api';

function Provider({ children }) {
  const [withShipping, setWithShipping] = useState([]);
  const [freeShipping, setFreeShipping] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rightToFreeShipping, setRightToFreeShipping] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await fetchAllProducts();
      const { overTenReais, underTenReais } = await data;
      setFreeShipping(overTenReais);
      setWithShipping(underTenReais);
      setIsLoading(false);
    })();
  }, [])

  const contextValue = {
    withShipping,
    freeShipping,
    isLoading,
    rightToFreeShipping,
    setWithShipping,
    setFreeShipping,
    setIsLoading,
    setRightToFreeShipping
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
