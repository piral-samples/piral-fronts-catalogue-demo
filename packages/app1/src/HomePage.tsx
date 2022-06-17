import * as React from 'react';
import { Heading, Flex } from '@chakra-ui/react';

const HomePage: React.FC<any> = ({ piral }) => (
  <Flex align="center" justify="center" direction="column" h={400} bg="pink.100">
    <Heading as="h1" size="4xl" isTruncated>
      Welcome to our site!
    </Heading>

    <piral.Extension name="homepage-actions" />
  </Flex>
);

export default HomePage;
