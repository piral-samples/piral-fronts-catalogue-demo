import * as React from 'react';
import { Stack } from '@chakra-ui/react';
import Product from './components/Product';
import products from './products';

const App: React.FC<any> = ({ piral }) => {
  const [prod, setProducts] = React.useState(products);

  function addToCart(pid: any) {
    const newProd = [...prod];

    newProd.forEach((p) => {
      if (p.id === pid) {
        if (!p.active) {
          piral.emit('increase');
          p.active = true;
        } else {
          piral.emit('decrease');
          p.active = false;
        }
      }
    });

    setProducts(newProd);
  }

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      textAlign="center"
      justify="center"
      spacing={{ base: 4, lg: 10 }}
      bg="gray.100"
      py={10}>
      {prod.map((p) => (
        <Product p={p} addToCart={addToCart} key={p.id} />
      ))}
    </Stack>
  );
};

export default App;
