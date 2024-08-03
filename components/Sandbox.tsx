import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import CodeEditor from './CodeEditor';

const Sandbox = ({ title, description, testCases } : QuestionProps) => {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <button className="btn btn-primary mb-4">Back</button>
      <Box mt={8} p={4} bg="gray.800" color="white" rounded="md">
        <Heading as="h1" size="xl" mb={2}>{title}</Heading>
        <Text fontSize="lg">{description}</Text>
      </Box>
      <CodeEditor />
      <Box mt={8} p={4} bg="gray.800" color="white" rounded="md">
        <Heading as="h2" size="lg" mb={2}>Test Cases</Heading>
        <Text>{testCases}</Text>
      </Box>
    </Box>
  );
};

export default Sandbox;

