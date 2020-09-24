import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleDimensionsChange = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleDimensionsChange);
    return () => window.removeEventListener('resize', handleDimensionsChange);
  });

  return dimensions;
};

export default useWindowDimensions;
