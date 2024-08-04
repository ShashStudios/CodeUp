'use client'

import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../app/constants";
import Output from "./Output";

interface CodeEditorProps {
  initialValue?: string;
  initialLanguage?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue = "", initialLanguage = "python" }) => {
  const editorRef = useRef<any>(null);
  const [value, setValue] = useState(initialValue);
  const [language, setLanguage] = useState(initialLanguage);

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue(initialValue);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            value={value}
            onMount={onMount}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
