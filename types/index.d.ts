interface QuestionData {
  title: string;
  description: string;
  testCases: string;
  codeSnippet?: string; // Add optional codeSnippet
  language?: string;    // Add optional language
}

interface QuestionProps {
  title: string;
  description: string;
  testCases: string;
  initialCode?: string;
  initialLanguage?: string;
}


// Define the props interface
interface CardProps {
  title: string;
  description: string;
  badgeText: string;
  badges: string[];
  keyId: string; // Add key or id to identify the description
}

// Define badge class mappings
const badgeClassMap: { [key: string]: string } = {
  easy: 'badge-success',
  medium: 'badge-warning',
  hard: 'badge-error'
};