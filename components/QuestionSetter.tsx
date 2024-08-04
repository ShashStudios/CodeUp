'use client'; // Ensure this is a client component

import React from 'react';
import QuestionOne from './Sandbox';
import { useSearchParams } from 'next/navigation';

// Define the type for questions data with a string index signature
interface QuestionsData {
  [key: string]: QuestionData;
}

// Define your questions data
const questionsData: QuestionsData = {
  '1': {
    title: 'Sleep In',
    description: `The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we are on vacation. Return True if we sleep in.\n`
    + `sleep_in(False, False) → True \nsleep_in(True, False) → False \nsleep_in(False, True) → True`,
    testCases: `sleep_in(False, False) → True \nsleep_in(True, False) → False \nsleep_in(True, True) → True`,
    codeSnippet: "def sleep_in(weekday, vacation):\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n #please be pacient as we move this to the backend :)\n"+
    `if(sleep_in(False, False) == True):\n    print("sleep_in(False, False) → True --- Correct")\nelse:\n    print("sleep_in(False, False) → True, Incorrect :" + str(sleep_in(False, False)))\n`+
    `if(sleep_in(True, False) == False):\n    print("sleep_in(True, False) → False --- Correct")\nelse:\n    print("sleep_in(True, False) → False, --- Incorrect, expected Answer: " + str(sleep_in(True, False)))\n`+
    `if(sleep_in(True, True) == True):\n    print("sleep_in(True, True) → True --- Correct")\nelse:\n    print("sleep_in(True, True) → True, Incorrect :" + str(sleep_in(True, True)))`,
    language: "python" 

  },
  '2': {
    title: 'String Mult',
    description: `Given a string and a non-negative int n, return a larger string that is n copies of the original string.\n\n`+
    `string_times('Hi', 2) → 'HiHi'\nstring_times('Hi', 3) → 'HiHiHi'\nstring_times('Hi', 1) → 'Hi'`,
    testCases: `string_times('Hi', 2) → 'HiHi'\nstring_times('Hi', 3) → 'HiHiHi'\nstring_times('Hi', 1) → 'Hi'\nstring_times('Hi', 0) → ''\nstring_times('Hi', 5) → 'HiHiHiHiHi'\nstring_times('Oh Boy!', 2) → 'Oh Boy!Oh Boy!'\nstring_times('x', 4) → 'xxxx'\nstring_times('', 4) → ''\nstring_times('code', 2) → 'codecode'\nstring_times('code', 3) → 'codecodecode'`,
    codeSnippet: `def string_times(str, n):\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n #please be pacient as we move this to the backend :)\n`+    `if string_times('Hi', 2) == 'HiHi':\n` +`    print("string_times('Hi', 2) → 'HiHi' --- Correct!")\n` +`else:\n` +
`    print("string_times('Hi', 2) → 'HiHi' --- Incorrect! - You returned \"" + str(string_times('Hi', 2)) + "\"")\n\n` +`if string_times('Hi', 3) == 'HiHiHi':\n` +`    print("string_times('Hi', 3) == 'HiHiHi' --- Correct!")\n` +`else:\n` +`    print("string_times('Hi', 3) == 'HiHiHi' --- Incorrect! - You returned \"" + str(string_times('Hi', 3)) + "\"")\n\n` +`if string_times('Hi', 1) == 'Hi':\n` +`    print("string_times('Hi', 1) → 'Hi' --- Correct!")\n` +`else:\n` +
`    print("string_times('Hi', 1) → 'Hi' --- Incorrect! - You returned \"" + str(string_times('Hi', 1)) + "\"")\n\n` +`if string_times('Hi', 0) == '':\n` +`    print("string_times('Hi', 0) == '' --- Correct!")\n` +`else:\n` +`    print("string_times('Hi', 0) == '' --- Incorrect! - You returned \"" + str(string_times('Hi', 0)) + "\"")\n\n` +`if string_times('Hi', 5) == 'HiHiHiHiHi':\n` +`    print("string_times('Hi', 5) == 'HiHiHiHiHi' --- Correct!")\n` +`else:\n` +`    print("string_times('Hi', 5) == 'HiHiHiHiHi' --- Incorrect! - You returned \"" + str(string_times('Hi', 5)) + "\"")\n\n` +`if string_times('Oh Boy!', 2) == 'Oh Boy!Oh Boy!':\n` +`    print("string_times('Oh Boy!', 2) → 'Oh Boy!Oh Boy!' --- Correct!")\n` +`else:\n` +`    print("string_times('Oh Boy!', 2) → 'Oh Boy!Oh Boy!' --- Incorrect! - You returned \"" + str(string_times('Oh Boy!', 2)) + "\"")\n\n` +`if string_times('x', 4) == 'xxxx':\n` +`    print("string_times('x', 4) --- Correct!")\n` +`else:\n` +`    print("string_times('x', 4) → 'xxxx' --- Incorrect! - You returned \"" + str(string_times('x', 4)) + "\"")`
+`if string_times('', 4) == '':\n` +`    print("string_times('', 4) → '' --- Correct!")\n` +`else:\n` +`    print("string_times('', 4) → '' --- Incorrect! - You returned \"" + str(string_times('', 4)) + "\"")\n\n` +`if string_times('code', 2) == 'codecode':\n` +`    print("string_times('code', 2) → 'codecode' --- Correct!")\n` +`else:\n` +`    print("string_times('code', 2) → 'codecode' --- Incorrect! - You returned \"" + str(string_times('code', 2)) + "\"")\n\n` +`if string_times('code', 3) == 'codecodecode':\n` +`    print("string_times('code', 3) → 'codecodecode' --- Correct!")\n` +`else:\n` +`    print("string_times('code', 3) → 'codecodecode' --- Incorrect! - You returned \"" + str(string_times('code', 3)) + "\"")`,

language: "python" 

  },
  '3': {
    title: 'Title for Key 3',
    description: 'Description for Key 3',
    testCases: 'Test cases for Key 3'
  },
  '4': {
    title: 'Title for Key 1',
    description: 'Description for Key 1',
    testCases: 'Test cases for Key 1'
  },
  '5': {
    title: 'Title for Key 2',
    description: 'Description for Key 2',
    testCases: 'Test cases for Key 2'
  },
  '6': {
    title: 'Title for Key 3',
    description: 'Description for Key 3',
    testCases: 'Test cases for Key 3'
  },
  '7': {
    title: 'Title for Key 1',
    description: 'Description for Key 1',
    testCases: 'Test cases for Key 1'
  },
  '8': {
    title: 'Title for Key 2',
    description: 'Description for Key 2',
    testCases: 'Test cases for Key 2'
  },
  '9': {
    title: 'Title for Key 3',
    description: 'Description for Key 3',
    testCases: 'Test cases for Key 3'
  },
  '10': {
    title: 'Title for Key 1',
    description: 'Description for Key 1',
    testCases: 'Test cases for Key 1'
  },
  '11': {
    title: 'Title for Key 2',
    description: 'Description for Key 2',
    testCases: 'Test cases for Key 2'
  },
  '12': {
    title: 'Title for Key 3',
    description: 'Description for Key 3',
    testCases: 'Test cases for Key 3'
  },
  '13': {
    title: 'Title for Key 1',
    description: 'Description for Key 1',
    testCases: 'Test cases for Key 1'
  },
  '14': {
    title: 'Title for Key 2',
    description: 'Description for Key 2',
    testCases: 'Test cases for Key 2'
  },
  '15': {
    title: 'Title for Key 3',
    description: 'Description for Key 3',
    testCases: 'Test cases for Key 3'
  },
  '16': {
    title: 'Title for Key 1',
    description: 'Description for Key 1',
    testCases: 'Test cases for Key 1'
  },
  '17': {
    title: 'Title for Key 2',
    description: 'Description for Key 2',
    testCases: 'Test cases for Key 2'
  },
  '18': {
    title: 'Title for Key 3',
    description: 'Description for Key 3',
    testCases: 'Test cases for Key 3'
  },
  '19': {
    title: 'Title for Key 1',
    description: 'Description for Key 1',
    testCases: 'Test cases for Key 1'
  },
  '20': {
    title: 'Title for Key 2',
    description: 'Description for Key 2',
    testCases: 'Test cases for Key 2'
  },
  '21': {
    title: 'Title for Key 3',
    description: 'Description for Key 3',
    testCases: 'Test cases for Key 3'
  },
  '22': {
    title: 'Title for Key 1',
    description: 'Description for Key 1',
    testCases: 'Test cases for Key 1'
  },
  '23': {
    title: 'Title for Key 2',
    description: 'Description for Key 2',
    testCases: 'Test cases for Key 2'
  },
  '24': {
    title: 'Title for Key 3',
    description: 'Description for Key 3',
    testCases: 'Test cases for Key 3'
  },
  '25': {
    title: 'Title for Key 3',
    description: 'Description for Key 3',
    testCases: 'Test cases for Key 3'
  },
};

const Sandbox: React.FC = () => {
  const searchParams = useSearchParams(); // Use useSearchParams to access query params
  const keyId = searchParams?.get('keyId'); // Get the keyId from query params
  
  // Get the data based on the keyId
  const questionData = keyId && questionsData[keyId]
    ? questionsData[keyId]
    : {
        title: 'Select a question',
        description: 'Please select a question to view details.',
        testCases: '',
        codeSnippet: '',
        language: 'python' // Default to Python or another language if not provided
      };

  return (
    <div className="p-4">
      <QuestionOne
        title={questionData.title}
        description={questionData.description}
        testCases={questionData.testCases}
        initialCode={questionData.codeSnippet}
        initialLanguage={questionData.language}
      />
    </div>
  );
};

export default Sandbox;
