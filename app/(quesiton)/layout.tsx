'use client'
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from '../theme'; // Adjust the import path if necessary
import QuestionOne from './QuestionOne/page'; // Adjust the import path if necessary

const RootLayout: React.FC = () => {
  return (
    <html lang="en">
      <head>
        {/* Add any additional <head> content here */}
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Box minHeight="100vh" bg="gray.100">
            <QuestionOne />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
