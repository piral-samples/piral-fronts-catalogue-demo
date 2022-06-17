import * as React from 'react';
import Navigation from './Navigation';

const Header: React.FC<any> = ({ piral }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const increase = () => {
      setCount((count) => count + 1);
    };

    const decrease = () => {
      setCount((count) => count - 1);
    };

    piral.on('increase', increase);
    piral.on('decrease', decrease);

    return () => {
      piral.off('increase', increase);
      piral.off('decrease', decrease);
    };
  }, []);

  return <Navigation cartCount={count} />;
};

export default Header;
