// pages/sandbox.tsx
import QuestionOne from './Sandbox';
import { useRouter } from 'next/navigation'; // Use this if necessary

// Define your questions data
const questionsData = {
  'key1': {
    title: 'Title for Key 1',
    description: 'Description for Key 1',
    testCases: 'Test cases for Key 1'
  },
  'key2': {
    title: 'Title for Key 2',
    description: 'Description for Key 2',
    testCases: 'Test cases for Key 2'
  },
  'key3': {
    title: 'Title for Key 3',
    description: 'Description for Key 3',
    testCases: 'Test cases for Key 3'
  },
  // Add more key-data pairs as needed
};

const Sandbox: React.FC = ({ searchParams }) => {
  // Use the searchParams from Next.js App Router
  const keyId = searchParams?.keyId;
  
  // Get the data based on the keyId
  const questionData = keyId && questionsData[keyId as string]
    ? questionsData[keyId as string]
    : {
        title: 'Select a question',
        description: 'Please select a question to view details.',
        testCases: ''
      };

  return (
    <div className="p-4">
      <QuestionOne 
        title={questionData.title} 
        description={questionData.description} 
        testCases={questionData.testCases} 
      />
    </div>
  );
};

export default Sandbox;
