import * as React from 'react';
import { ExtensionSlot } from 'piral-core';
import { ChakraProvider } from '@chakra-ui/react';

const Layout: React.FC = ({ children }) => (
  <ChakraProvider>
    <div>
      <ExtensionSlot name="header" />
      {children}
    </div>
  </ChakraProvider>
);

export default Layout;
