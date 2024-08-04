'use client'; // This marks the component as a client component

import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import CodeEditor from './CodeEditor';

const Sandbox: React.FC<QuestionProps> = ({ title, description, testCases, initialCode, initialLanguage }) => {
  const router = useRouter();

  // Function to handle back button click
  const handleBackClick = () => {
    router.push('/'); // Navigate to the homepage
  };

  return (
    <Box bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Button 
        variant="outline" 
        colorScheme="red" 
        mb={4} 
        onClick={handleBackClick} // Attach the click handler
      >
        Back
      </Button>
      <Box mt={8} p={4} bg="gray.800" color="white" rounded="md" mb={4} >
        <Heading as="h1" size="xl" mb={2}>{title}</Heading>
        <Text fontSize="lg "whiteSpace="pre-wrap"> {description} </Text>
      </Box>
      <CodeEditor initialValue={initialCode} initialLanguage={initialLanguage} />
      <Box mt={8} p={4} bg="gray.800" color="white" rounded="md">
        <Heading as="h2" size="lg" mb={2}>Test Cases</Heading>
        <Text fontSize="lg "whiteSpace="pre-wrap" >{testCases}</Text>
      </Box>
    </Box>
  );
};


export default Sandbox;
