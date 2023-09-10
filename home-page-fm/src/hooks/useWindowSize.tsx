import {useEffect, useState} from 'react';

interface IWindowSize {
  height: number | null;
  width: number | null;
}

const useWindowSize = () => {
  const [size, setSize] = useState<IWindowSize>({width: null, height: null});

  useEffect(() => {
    const onTakeWindowSize = () => {
      const {innerHeight, innerWidth} = window;
      setSize({height: innerHeight, width: innerWidth});
    };
    window.addEventListener('resize', onTakeWindowSize);

    return () => {
      window.removeEventListener('resize', onTakeWindowSize);
    };
  }, []);

  return {size, setSize};
};

export default useWindowSize;
