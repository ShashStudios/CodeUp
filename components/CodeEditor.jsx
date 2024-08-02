'use client'

import React, { useRef, useState, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import * as monaco from 'monaco-editor';
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../app/constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef(null);
  const containerRef = useRef(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    if (containerRef.current) {
      editorRef.current = monaco.editor.create(containerRef.current, {
        value: CODE_SNIPPETS[language],
        language: language,
        theme: "vs-dark",
        minimap: { enabled: false },
      });

      return () => editorRef.current.dispose();
    }
  }, [language]);

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
    if (editorRef.current) {
      monaco.editor.setModelLanguage(editorRef.current.getModel(), language);
      editorRef.current.setValue(CODE_SNIPPETS[language]);
    }
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <div ref={containerRef} style={{ height: "75vh" }}></div>
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
