'use client'
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from '../theme'; // Assuming theme.js exists
import QuestionOne from './QuestionOne/page'; // Adjust import path as needed

const RootLayout: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box minHeight="100vh" bg="gray.100">
        <QuestionOne />
      </Box>
    </ChakraProvider>
  );
};

export default RootLayout;
