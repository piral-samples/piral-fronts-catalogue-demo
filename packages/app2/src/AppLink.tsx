import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const AppLink: React.FC<any> = () => (
  <Link to="/app2">
    <Button colorScheme="blue" mt={8}>
      Browse products
    </Button>
  </Link>
);

export default AppLink;
