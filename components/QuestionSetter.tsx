'use client'; // Ensure this is a client component

import React from 'react';
import QuestionOne from './Sandbox';
import { useSearchParams } from 'next/navigation';
import { languages } from 'monaco-editor';

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
    codeSnippet: "def sleep_in(weekday, vacation):\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n #please be patient as we move this to the backend :)\n"+
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
    codeSnippet: `def string_times(str, n):\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n #please be patient as we move this to the backend :)\n`+    `if string_times('Hi', 2) == 'HiHi':\n` +`    print("string_times('Hi', 2) → 'HiHi' --- Correct!")\n` +`else:\n` +
    `    print("string_times('Hi', 2) → 'HiHi' --- Incorrect! - You returned \"" + str(string_times('Hi', 2)) + "\"")\n\n` +`if string_times('Hi', 3) == 'HiHiHi':\n` +`    print("string_times('Hi', 3) == 'HiHiHi' --- Correct!")\n` +`else:\n` +`    print("string_times('Hi', 3) == 'HiHiHi' --- Incorrect! - You returned \"" + str(string_times('Hi', 3)) + "\"")\n\n` +`if string_times('Hi', 1) == 'Hi':\n` +`    print("string_times('Hi', 1) → 'Hi' --- Correct!")\n` +`else:\n` +
    `    print("string_times('Hi', 1) → 'Hi' --- Incorrect! - You returned \"" + str(string_times('Hi', 1)) + "\"")\n\n` +`if string_times('Hi', 0) == '':\n` +`    print("string_times('Hi', 0) == '' --- Correct!")\n` +`else:\n` +`    print("string_times('Hi', 0) == '' --- Incorrect! - You returned \"" + str(string_times('Hi', 0)) + "\"")\n\n` +`if string_times('Hi', 5) == 'HiHiHiHiHi':\n` +`    print("string_times('Hi', 5) == 'HiHiHiHiHi' --- Correct!")\n` +`else:\n` +`    print("string_times('Hi', 5) == 'HiHiHiHiHi' --- Incorrect! - You returned \"" + str(string_times('Hi', 5)) + "\"")\n\n` +`if string_times('Oh Boy!', 2) == 'Oh Boy!Oh Boy!':\n` +`    print("string_times('Oh Boy!', 2) → 'Oh Boy!Oh Boy!' --- Correct!")\n` +`else:\n` +`    print("string_times('Oh Boy!', 2) → 'Oh Boy!Oh Boy!' --- Incorrect! - You returned \"" + str(string_times('Oh Boy!', 2)) + "\"")\n\n` +`if string_times('x', 4) == 'xxxx':\n` +`    print("string_times('x', 4) --- Correct!")\n` +`else:\n` +`    print("string_times('x', 4) → 'xxxx' --- Incorrect! - You returned \"" + str(string_times('x', 4)) + "\"")\n`
    +`if string_times('', 4) == '':\n` +`    print("string_times('', 4) → '' --- Correct!")\n` +`else:\n` +`    print("string_times('', 4) → '' --- Incorrect! - You returned \"" + str(string_times('', 4)) + "\"")\n\n` +`if string_times('code', 2) == 'codecode':\n` +`    print("string_times('code', 2) → 'codecode' --- Correct!")\n` +`else:\n` +`    print("string_times('code', 2) → 'codecode' --- Incorrect! - You returned \"" + str(string_times('code', 2)) + "\"")\n\n` +`if string_times('code', 3) == 'codecodecode':\n` +`    print("string_times('code', 3) → 'codecodecode' --- Correct!")\n` +`else:\n` +`    print("string_times('code', 3) → 'codecodecode' --- Incorrect! - You returned \"" + str(string_times('code', 3)) + "\"")`,
    language: "python" 

  },
  '3': {
    title: 'First Last 6',
    description: `Given an array of ints, return True if 6 appears as either the first or last element in the array. The array will be length 1 or more.\n\n` +
    `first_last6([1, 2, 6]) → True\n` +
    `first_last6([6, 1, 2, 3]) → True\n` +
    `first_last6([13, 6, 1, 2, 3]) → False`,
    testCases: `first_last6([1, 2, 6]) → True\n` +
    `first_last6([6, 1, 2, 3]) → True\n` +
    `first_last6([13, 6, 1, 2, 3]) → False\n` +
    `first_last6([13, 6, 1, 2, 6]) → True\n` +
    `first_last6([3, 2, 1]) → False\n` +
    `first_last6([3, 6, 1]) → False\n` +
    `first_last6([3, 6]) → True\n` +
    `first_last6([6]) → True\n` +
    `first_last6([3]) → False\n` +
    `first_last6([5, 6]) → True\n` +
    `first_last6([5, 5]) → False\n` +
    `first_last6([1, 2, 3, 4, 6]) → True\n` +
    `first_last6([1, 2, 3, 4]) → False`,
    codeSnippet: `def first_last6(nums):\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n #please be patient as we move this to the backend :)\n` + 
    `if first_last6([1, 2, 6]) == True:\n` +`    print("first_last6([1, 2, 6]) → True --- Correct!")\n` +`else:\n` +`    print("first_last6([1, 2, 6]) → True --- Incorrect! - You returned \"" + str(first_last6([1, 2, 6])) + "\"")\n\n` +    `if first_last6([6, 1, 2, 3]) == True:\n` +`    print("first_last6([6, 1, 2, 3]) → True --- Correct!")\n` +
    `else:\n` +`    print("first_last6([6, 1, 2, 3]) → True --- Incorrect! - You returned \"" + str(first_last6([6, 1, 2, 3])) + "\"")\n\n` +`if first_last6([13, 6, 1, 2, 3]) == False:\n` +`    print("first_last6([13, 6, 1, 2, 3]) → False --- Correct!")\n` +    `else:\n` +
    `    print("first_last6([13, 6, 1, 2, 3]) → False --- Incorrect! - You returned \"" + str(first_last6([13, 6, 1, 2, 3])) + "\"")\n\n` +`if first_last6([13, 6, 1, 2, 6]) == True:\n` +
    `    print("first_last6([13, 6, 1, 2, 6]) → True --- Correct!")\n` +`else:\n` +`    print("first_last6([13, 6, 1, 2, 6]) → True --- Incorrect! - You returned \"" + str(first_last6([13, 6, 1, 2, 6])) + "\"")\n\n` +`if first_last6([3, 2, 1]) == False:\n` +
    `    print("first_last6([3, 2, 1]) → False --- Correct!")\n` +`else:\n` +`    print("first_last6([3, 2, 1]) → False --- Incorrect! - You returned \"" + str(first_last6([3, 2, 1])) + "\"")\n\n` +`if first_last6([3, 6, 1]) == False:\n` +
    `    print("first_last6([3, 6, 1]) → False --- Correct!")\n` +`else:\n` +`    print("first_last6([3, 6, 1]) → False --- Incorrect! - You returned \"" + str(first_last6([3, 6, 1])) + "\"")\n\n` +`if first_last6([3, 6]) == True:\n` +
    `    print("first_last6([3, 6]) → True --- Correct!")\n` +`else:\n` +`    print("first_last6([3, 6]) → True --- Incorrect! - You returned \"" + str(first_last6([3, 6])) + "\"")\n\n` +`if first_last6([6]) == True:\n` +
    `    print("first_last6([6]) → True --- Correct!")\n` +`else:\n` +`    print("first_last6([6]) → True --- Incorrect! - You returned \"" + str(first_last6([6])) + "\"")\n\n` +
    `if first_last6([3]) == False:\n` +`    print("first_last6([3]) → False --- Correct!")\n` +`else:\n` +`    print("first_last6([3]) → False --- Incorrect! - You returned \"" + str(first_last6([3])) + "\"")\n\n` +    `if first_last6([5, 6]) == True:\n` +`    print("first_last6([5, 6]) → True --- Correct!")\n` +
    `else:\n` +`    print("first_last6([5, 6]) → True --- Incorrect! - You returned \"" + str(first_last6([5, 6])) + "\"")\n\n` +    `if first_last6([5, 5]) == False:\n` +
    `    print("first_last6([5, 5]) → False --- Correct!")\n` +
    `else:\n` +
    `    print("first_last6([5, 5]) → False --- Incorrect! - You returned \"" + str(first_last6([5, 5])) + "\"")\n\n` +
    
    `if first_last6([1, 2, 3, 4, 6]) == True:\n` +
    `    print("first_last6([1, 2, 3, 4, 6]) → True --- Correct!")\n` +
    `else:\n` +
    `    print("first_last6([1, 2, 3, 4, 6]) → True --- Incorrect! - You returned \"" + str(first_last6([1, 2, 3, 4, 6])) + "\"")\n\n` +
    
    `if first_last6([1, 2, 3, 4]) == False:\n` +
    `    print("first_last6([1, 2, 3, 4]) → False --- Correct!")\n` +
    `else:\n` +
    `    print("first_last6([1, 2, 3, 4]) → False --- Incorrect! - You returned \"" + str(first_last6([1, 2, 3, 4])) + "\"")`,    
    language: "python"
  },
  '4': {
    title: 'Big Diff',
    description: `Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in min(v1, v2) and max(v1, v2) functions return the smaller or larger of two values.\n\n` +
`big_diff([10, 3, 5, 6]) → 7\n` +
`big_diff([7, 2, 10, 9]) → 8\n` +
`big_diff([2, 10, 7, 2]) → 8`,
    testCases: `big_diff([10, 3, 5, 6]) → 7\n` +`big_diff([7, 2, 10, 9]) → 8\n` +`big_diff([2, 10, 7, 2]) → 8\n` +`big_diff([2, 10]) → 8\n` +`big_diff([10, 2]) → 8\n` +`big_diff([10, 0]) → 10\n` +`big_diff([2, 3]) → 1\n` +`big_diff([2, 2]) → 0\n` +`big_diff([2]) → 0\n` +`big_diff([5, 1, 6, 1, 9, 9]) → 8\n` +`big_diff([7, 6, 8, 5]) → 3\n` +`big_diff([7, 7, 6, 8, 5, 5, 6]) → 3`,
    codeSnippet: `def big_diff(nums):\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n #please be patient as we move this to the backend :)\n` + 
`if big_diff([10, 3, 5, 6]) == 7:\n` +
`    print("big_diff([10, 3, 5, 6]) → 7 --- Correct!")\n` +
`else:\n` +
`    print("big_diff([10, 3, 5, 6]) → 7 --- Incorrect! - You returned \"" + str(big_diff([10, 3, 5, 6])) + "\"")\n\n` +

`if big_diff([7, 2, 10, 9]) == 8:\n` +
`    print("big_diff([7, 2, 10, 9]) → 8 --- Correct!")\n` +
`else:\n` +
`    print("big_diff([7, 2, 10, 9]) → 8 --- Incorrect! - You returned \"" + str(big_diff([7, 2, 10, 9])) + "\"")\n\n` +

`if big_diff([2, 10, 7, 2]) == 8:\n` +
`    print("big_diff([2, 10, 7, 2]) → 8 --- Correct!")\n` +
`else:\n` +
`    print("big_diff([2, 10, 7, 2]) → 8 --- Incorrect! - You returned \"" + str(big_diff([2, 10, 7, 2])) + "\"")\n\n` +

`if big_diff([2, 10]) == 8:\n` +
`    print("big_diff([2, 10]) → 8 --- Correct!")\n` +
`else:\n` +
`    print("big_diff([2, 10]) → 8 --- Incorrect! - You returned \"" + str(big_diff([2, 10])) + "\"")\n\n` +

`if big_diff([10, 2]) == 8:\n` +
`    print("big_diff([10, 2]) → 8 --- Correct!")\n` +
`else:\n` +
`    print("big_diff([10, 2]) → 8 --- Incorrect! - You returned \"" + str(big_diff([10, 2])) + "\"")\n\n` +

`if big_diff([10, 0]) == 10:\n` +
`    print("big_diff([10, 0]) → 10 --- Correct!")\n` +
`else:\n` +
`    print("big_diff([10, 0]) → 10 --- Incorrect! - You returned \"" + str(big_diff([10, 0])) + "\"")\n\n` +

`if big_diff([2, 3]) == 1:\n` +
`    print("big_diff([2, 3]) → 1 --- Correct!")\n` +
`else:\n` +
`    print("big_diff([2, 3]) → 1 --- Incorrect! - You returned \"" + str(big_diff([2, 3])) + "\"")\n\n` +

`if big_diff([2, 2]) == 0:\n` +
`    print("big_diff([2, 2]) → 0 --- Correct!")\n` +
`else:\n` +
`    print("big_diff([2, 2]) → 0 --- Incorrect! - You returned \"" + str(big_diff([2, 2])) + "\"")\n\n` +

`if big_diff([2]) == 0:\n` +
`    print("big_diff([2]) → 0 --- Correct!")\n` +
`else:\n` +
`    print("big_diff([2]) → 0 --- Incorrect! - You returned \"" + str(big_diff([2])) + "\"")\n\n`,
language: "python"
  },
  '5': {
    title: 'Cigar Party',
    description: `When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return True if the party with the given values is successful, or False otherwise.\n\n` +`cigar_party(30, False) → False\n` +`cigar_party(50, False) → True\n` +`cigar_party(70, True) → True`,
    testCases: `cigar_party(30, False) → False\n` +`cigar_party(50, False) → True\n` +`cigar_party(70, True) → True\n` +`cigar_party(30, True) → False\n` +`cigar_party(50, True) → True\n` +`cigar_party(60, False) → True\n` +`cigar_party(61, False) → False\n` +`cigar_party(40, False) → True\n` +`cigar_party(39, False) → False\n` +`cigar_party(40, True) → True\n` +`cigar_party(39, True) → False`,
    codeSnippet:"def cigar_party(cigars, is_weekend):\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n #please be patient as we move this to the backend :)\n"+
    `if cigar_party(30, False) == False:\n` +
`    print("cigar_party(30, False) → False --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(30, False) → False --- Incorrect! - You returned \"" + str(cigar_party(30, False)) + "\"")\n\n` +

`if cigar_party(50, False) == True:\n` +
`    print("cigar_party(50, False) → True --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(50, False) → True --- Incorrect! - You returned \"" + str(cigar_party(50, False)) + "\"")\n\n` +

`if cigar_party(70, True) == True:\n` +
`    print("cigar_party(70, True) → True --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(70, True) → True --- Incorrect! - You returned \"" + str(cigar_party(70, True)) + "\"")\n\n` +

`if cigar_party(30, True) == False:\n` +
`    print("cigar_party(30, True) → False --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(30, True) → False --- Incorrect! - You returned \"" + str(cigar_party(30, True)) + "\"")\n\n` +

`if cigar_party(50, True) == True:\n` +
`    print("cigar_party(50, True) → True --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(50, True) → True --- Incorrect! - You returned \"" + str(cigar_party(50, True)) + "\"")\n\n` +

`if cigar_party(60, False) == True:\n` +
`    print("cigar_party(60, False) → True --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(60, False) → True --- Incorrect! - You returned \"" + str(cigar_party(60, False)) + "\"")\n\n` +

`if cigar_party(61, False) == False:\n` +
`    print("cigar_party(61, False) → False --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(61, False) → False --- Incorrect! - You returned \"" + str(cigar_party(61, False)) + "\"")\n\n` +

`if cigar_party(40, False) == True:\n` +
`    print("cigar_party(40, False) → True --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(40, False) → True --- Incorrect! - You returned \"" + str(cigar_party(40, False)) + "\"")\n\n` +

`if cigar_party(39, False) == False:\n` +
`    print("cigar_party(39, False) → False --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(39, False) → False --- Incorrect! - You returned \"" + str(cigar_party(39, False)) + "\"")\n\n` +

`if cigar_party(40, True) == True:\n` +
`    print("cigar_party(40, True) → True --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(40, True) → True --- Incorrect! - You returned \"" + str(cigar_party(40, True)) + "\"")\n\n` +

`if cigar_party(39, True) == False:\n` +
`    print("cigar_party(39, True) → False --- Correct!")\n` +
`else:\n` +
`    print("cigar_party(39, True) → False --- Incorrect! - You returned \"" + str(cigar_party(39, True)) + "\"")`,
    language:"python"
  },
  '6': {
    title: 'Close Far',
    description: `Given three ints, a b c, return True if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: abs(num) computes the absolute value of a number.\n\n` +`close_far(1, 2, 10) → True\n` +`close_far(1, 2, 3) → False\n` +`close_far(4, 1, 3) → True`,
    testCases: `close_far(1, 2, 10) → True\n` +`close_far(1, 2, 3) → False\n` +`close_far(4, 1, 3) → True\n` +`close_far(4, 5, 3) → False\n` +`close_far(4, 3, 5) → False\n` +`close_far(-1, 10, 0) → True\n` +`close_far(0, -1, 10) → True\n` +`close_far(10, 10, 8) → True\n` +`close_far(10, 8, 9) → False\n` +`close_far(8, 9, 10) → False\n` +`close_far(8, 9, 7) → False\n` +`close_far(8, 6, 9) → True`,
    codeSnippet: `def close_far(a, b, c):\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n #please be patient as we move this to the backend :)\n`+
    `if close_far(1, 2, 10) == True:\n` +
`    print("close_far(1, 2, 10) → True --- Correct!")\n` +
`else:\n` +
`    print("close_far(1, 2, 10) → True --- Incorrect! - You returned \"" + str(close_far(1, 2, 10)) + "\"")\n\n` +

`if close_far(1, 2, 3) == False:\n` +
`    print("close_far(1, 2, 3) → False --- Correct!")\n` +
`else:\n` +
`    print("close_far(1, 2, 3) → False --- Incorrect! - You returned \"" + str(close_far(1, 2, 3)) + "\"")\n\n` +

`if close_far(4, 1, 3) == True:\n` +
`    print("close_far(4, 1, 3) → True --- Correct!")\n` +
`else:\n` +
`    print("close_far(4, 1, 3) → True --- Incorrect! - You returned \"" + str(close_far(4, 1, 3)) + "\"")\n\n` +

`if close_far(4, 5, 3) == False:\n` +
`    print("close_far(4, 5, 3) → False --- Correct!")\n` +
`else:\n` +
`    print("close_far(4, 5, 3) → False --- Incorrect! - You returned \"" + str(close_far(4, 5, 3)) + "\"")\n\n` +

`if close_far(4, 3, 5) == False:\n` +
`    print("close_far(4, 3, 5) → False --- Correct!")\n` +
`else:\n` +
`    print("close_far(4, 3, 5) → False --- Incorrect! - You returned \"" + str(close_far(4, 3, 5)) + "\"")\n\n` +

`if close_far(-1, 10, 0) == True:\n` +
`    print("close_far(-1, 10, 0) → True --- Correct!")\n` +
`else:\n` +
`    print("close_far(-1, 10, 0) → True --- Incorrect! - You returned \"" + str(close_far(-1, 10, 0)) + "\"")\n\n` +

`if close_far(0, -1, 10) == True:\n` +
`    print("close_far(0, -1, 10) → True --- Correct!")\n` +
`else:\n` +
`    print("close_far(0, -1, 10) → True --- Incorrect! - You returned \"" + str(close_far(0, -1, 10)) + "\"")\n\n` +

`if close_far(10, 10, 8) == True:\n` +
`    print("close_far(10, 10, 8) → True --- Correct!")\n` +
`else:\n` +
`    print("close_far(10, 10, 8) → True --- Incorrect! - You returned \"" + str(close_far(10, 10, 8)) + "\"")\n\n` +

`if close_far(10, 8, 9) == False:\n` +
`    print("close_far(10, 8, 9) → False --- Correct!")\n` +
`else:\n` +
`    print("close_far(10, 8, 9) → False --- Incorrect! - You returned \"" + str(close_far(10, 8, 9)) + "\"")\n\n` +

`if close_far(8, 9, 10) == False:\n` +
`    print("close_far(8, 9, 10) → False --- Correct!")\n` +
`else:\n` +
`    print("close_far(8, 9, 10) → False --- Incorrect! - You returned \"" + str(close_far(8, 9, 10)) + "\"")\n\n` +

`if close_far(8, 9, 7) == False:\n` +
`    print("close_far(8, 9, 7) → False --- Correct!")\n` +
`else:\n` +
`    print("close_far(8, 9, 7) → False --- Incorrect! - You returned \"" + str(close_far(8, 9, 7)) + "\"")\n\n` +

`if close_far(8, 6, 9) == True:\n` +
`    print("close_far(8, 6, 9) → True --- Correct!")\n` +
`else:\n` +
`    print("close_far(8, 6, 9) → True --- Incorrect! - You returned \"" + str(close_far(8, 6, 9)) + "\"")`,
    language:"python"
},
  '7': {
    title: 'Hello Name',
    description: `Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".\n\n` +
`hello_name('Bob') → 'Hello Bob!'\n` +
`hello_name('Alice') → 'Hello Alice!'\n` +
`hello_name('X') → 'Hello X!'`,
    testCases: 
    `hello_name('Bob') → 'Hello Bob!'\n` +
`hello_name('Alice') → 'Hello Alice!'\n` +
`hello_name('X') → 'Hello X!'\n` +
`hello_name('Dolly') → 'Hello Dolly!'\n` +
`hello_name('Alpha') → 'Hello Alpha!'\n` +
`hello_name('Omega') → 'Hello Omega!'\n` +
`hello_name('Goodbye') → 'Hello Goodbye!'\n` +
`hello_name('ho ho ho') → 'Hello ho ho ho!'\n` +
`hello_name('xyz!') → 'Hello xyz!!'\n` +
`hello_name('Hello') → 'Hello Hello!'`,
codeSnippet: `def hello_name(name):\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n #please be patient as we move this to the backend :)\n`+
`if hello_name('Bob') == 'Hello Bob!':\n` +
`    print("hello_name('Bob') → 'Hello Bob!' --- Correct!")\n` +
`else:\n` +
`    print("hello_name('Bob') → 'Hello Bob!' --- Incorrect! - You returned \"" + str(hello_name('Bob')) + "\"")\n\n` +

`if hello_name('Alice') == 'Hello Alice!':\n` +
`    print("hello_name('Alice') → 'Hello Alice!' --- Correct!")\n` +
`else:\n` +
`    print("hello_name('Alice') → 'Hello Alice!' --- Incorrect! - You returned \"" + str(hello_name('Alice')) + "\"")\n\n` +

`if hello_name('X') == 'Hello X!':\n` +
`    print("hello_name('X') → 'Hello X!' --- Correct!")\n` +
`else:\n` +
`    print("hello_name('X') → 'Hello X!' --- Incorrect! - You returned \"" + str(hello_name('X')) + "\"")\n\n` +

`if hello_name('Dolly') == 'Hello Dolly!':\n` +
`    print("hello_name('Dolly') → 'Hello Dolly!' --- Correct!")\n` +
`else:\n` +
`    print("hello_name('Dolly') → 'Hello Dolly!' --- Incorrect! - You returned \"" + str(hello_name('Dolly')) + "\"")\n\n` +

`if hello_name('Alpha') == 'Hello Alpha!':\n` +
`    print("hello_name('Alpha') → 'Hello Alpha!' --- Correct!")\n` +
`else:\n` +
`    print("hello_name('Alpha') → 'Hello Alpha!' --- Incorrect! - You returned \"" + str(hello_name('Alpha')) + "\"")\n\n` +

`if hello_name('Omega') == 'Hello Omega!':\n` +
`    print("hello_name('Omega') → 'Hello Omega!' --- Correct!")\n` +
`else:\n` +
`    print("hello_name('Omega') → 'Hello Omega!' --- Incorrect! - You returned \"" + str(hello_name('Omega')) + "\"")\n\n` +

`if hello_name('Goodbye') == 'Hello Goodbye!':\n` +
`    print("hello_name('Goodbye') → 'Hello Goodbye!' --- Correct!")\n` +
`else:\n` +
`    print("hello_name('Goodbye') → 'Hello Goodbye!' --- Incorrect! - You returned \"" + str(hello_name('Goodbye')) + "\"")\n\n` +

`if hello_name('ho ho ho') == 'Hello ho ho ho!':\n` +
`    print("hello_name('ho ho ho') → 'Hello ho ho ho!' --- Correct!")\n` +
`else:\n` +
`    print("hello_name('ho ho ho') → 'Hello ho ho ho!' --- Incorrect! - You returned \"" + str(hello_name('ho ho ho')) + "\"")\n\n` +

`if hello_name('xyz!') == 'Hello xyz!!':\n` +
`    print("hello_name('xyz!') → 'Hello xyz!!' --- Correct!")\n` +
`else:\n` +
`    print("hello_name('xyz!') → 'Hello xyz!!' --- Incorrect! - You returned \"" + str(hello_name('xyz!')) + "\"")\n\n` +

`if hello_name('Hello') == 'Hello Hello!':\n` +
`    print("hello_name('Hello') → 'Hello Hello!' --- Correct!")\n` +
`else:\n` +
`    print("hello_name('Hello') → 'Hello Hello!' --- Incorrect! - You returned \"" + str(hello_name('Hello')) + "\"")`,
language:"python"

  },
  '8': {
    title: 'Double Char',
    description: `Given a string, return a string where for every char in the original, there are two chars.\n\n` +`double_char('The') → 'TThhee'\n` +`double_char('AAbb') → 'AAAAbbbb'\n` +`double_char('Hi-There') → 'HHii--TThheerree'`,
    testCases: `double_char('The') → 'TThhee'\n` +`double_char('AAbb') → 'AAAAbbbb'\n` +`double_char('Hi-There') → 'HHii--TThheerree'\n` +`double_char('Word!') → 'WWoorrdd!!'\n` +`double_char('!!') → '!!!!'\n` +`double_char('') → ''\n` +`double_char('a') → 'aa'\n` +`double_char('.') → '..'\n` +`double_char('aa') → 'aaaa'`,
    codeSnippet: `def double_char(str):\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n #please be patient as we move this to the backend :)\n`+
    `if double_char('The') == 'TThhee':\n` +`    print("double_char('The') → 'TThhee' --- Correct!")\n` +`else:\n` +`    print("double_char('The') → 'TThhee' --- Incorrect! - You returned \"" + str(double_char('The')) + "\"")\n\n` +
    `if double_char('AAbb') == 'AAAAbbbb':\n` +`    print("double_char('AAbb') → 'AAAAbbbb' --- Correct!")\n` +`else:\n` +`    print("double_char('AAbb') → 'AAAAbbbb' --- Incorrect! - You returned \"" + str(double_char('AAbb')) + "\"")\n\n` +`if double_char('Hi-There') == 'HHii--TThheerree':\n` +`    print("double_char('Hi-There') → 'HHii--TThheerree' --- Correct!")\n` +`else:\n` +`    print("double_char('Hi-There') → 'HHii--TThheerree' --- Incorrect! - You returned \"" + str(double_char('Hi-There')) + "\"")\n\n` +`if double_char('Word!') == 'WWoorrdd!!':\n` +`    print("double_char('Word!') → 'WWoorrdd!!' --- Correct!")\n` +`else:\n` +`    print("double_char('Word!') → 'WWoorrdd!!' --- Incorrect! - You returned \"" + str(double_char('Word!')) + "\"")\n\n` +
    `if double_char('!!') == '!!!!':\n` +`    print("double_char('!!') → '!!!!' --- Correct!")\n` +`else:\n` +`    print("double_char('!!') → '!!!!' --- Incorrect! - You returned \"" + str(double_char('!!')) + "\"")\n\n` +`if double_char('a') == 'aa':\n` +
    `    print("double_char('a') → 'aa' --- Correct!")\n` +`else:\n` +`    print("double_char('a') → 'aa' --- Incorrect! - You returned \"" + str(double_char('a')) + "\"")\n\n` +`if double_char('.') == '..':\n` +`    print("double_char('.') → '..' --- Correct!")\n` +`else:\n` +`    print("double_char('.') → '..' --- Incorrect! - You returned \"" + str(double_char('.')) + "\"")\n\n` +`if double_char('aa') == 'aaaa':\n` +`    print("double_char('aa') → 'aaaa' --- Correct!")\n` +`else:\n` +`    print("double_char('aa') → 'aaaa' --- Incorrect! - You returned \"" + str(double_char('aa')) + "\"")`,
    language:'python'
  },
  '9': {
    title: 'Monkey Trouble',
    description: `We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.\n\n` +`monkeyTrouble(true, true) → true\n` +`monkeyTrouble(false, false) → true\n` +`monkeyTrouble(true, false) → false`,
    testCases: `monkeyTrouble(true, true) → true\n` +`monkeyTrouble(false, false) → true\n` +`monkeyTrouble(true, false) → false\n` +`monkeyTrouble(false, true) → false`,
    codeSnippet:'public boolean monkeyTrouble(boolean aSmile, boolean bSmile) {\n//coming soon!\n}',
    language:'java'
},
  '10': {
    title: 'DoubleX',
    description: `Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".\n\n` +`doubleX("axxbb") → true\n` +`doubleX("axaxax") → false\n` +`doubleX("xxxxx") → true`,
    testCases: `doubleX("axxbb") → true\n` +`doubleX("axaxax") → false\n` +`doubleX("xxxxx") → true\n` +`doubleX("xaxxx") → false\n` +`doubleX("aaaax") → false\n` +`doubleX("") → false\n` +`doubleX("abc") → false\n` +`doubleX("x") → false\n` +`doubleX("xx") → true\n` +`doubleX("xax") → false\n` +`doubleX("xaxx") → false`,
    codeSnippet:'boolean doubleX(String str) {\n//coming soon!\n}',
    language:'java'
  },
  '11': {
    title: 'Make Out Word',
    description: `Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.\n\n` +`makeOutWord("<<>>", "Yay") → "<<Yay>>"\n` +`makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"\n` +`makeOutWord("[[]]", "word") → "[[word]]"`,
    testCases: `makeOutWord("<<>>", "Yay") → "<<Yay>>"\n` +`makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"\n` +`makeOutWord("[[]]", "word") → "[[word]]"\n` +`makeOutWord("HHoo", "Hello") → "HHHellooo"\n` +`makeOutWord("abyz", "YAY") → "abYAYyz"`,
    codeSnippet:'public String makeOutWord(String out, String word) {\n//coming soon!\n}',
    language:'java'
  },
  '12': {
    title: 'Common End',
    description: `Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.\n\n` +`commonEnd([1, 2, 3], [7, 3]) → true\n` +`commonEnd([1, 2, 3], [7, 3, 2]) → false\n` +`commonEnd([1, 2, 3], [1, 3]) → true`,
    testCases: `commonEnd([1, 2, 3], [7, 3]) → true\n` +`commonEnd([1, 2, 3], [7, 3, 2]) → false\n` +`commonEnd([1, 2, 3], [1, 3]) → true\n` +`commonEnd([1, 2, 3], [1]) → true\n` +`commonEnd([1, 2, 3], [2]) → false`,
    codeSnippet:'public boolean commonEnd(int[] a, int[] b) {\n//coming soon!\n}',
    language:'java'
  },
  '13': {
    title: 'Sort-a-Sum',
    description: `Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.\n\n` +`sortaSum(3, 4) → 7\n` +`sortaSum(9, 4) → 20\n` +`sortaSum(10, 11) → 21`,
    testCases: `sortaSum(3, 4) → 7\n` +`sortaSum(9, 4) → 20\n` +`sortaSum(10, 11) → 21\n` +`sortaSum(12, -3) → 9\n` +`sortaSum(-3, 12) → 9\n` +`sortaSum(4, 5) → 9\n` +`sortaSum(4, 6) → 20\n` +`sortaSum(14, 7) → 21\n` +`sortaSum(14, 6) → 20`,
    codeSnippet:'public int sortaSum(int a, int b) {\n//coming soon!\n}',
    language:'java'
  },
  '14': {
    title: 'Lone Sum',
    description: `Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.\n\n` +`loneSum(1, 2, 3) → 6\n` +`loneSum(3, 2, 3) → 2\n` +`loneSum(3, 3, 3) → 0`,
    testCases: `loneSum(1, 2, 3) → 6\n` +`loneSum(3, 2, 3) → 2\n` +`loneSum(3, 3, 3) → 0\n` +`loneSum(9, 2, 2) → 9\n` +`loneSum(2, 2, 9) → 9\n` +`loneSum(2, 9, 2) → 9\n` +`loneSum(2, 9, 3) → 14\n` +`loneSum(4, 2, 3) → 9\n` +`loneSum(1, 3, 1) → 3`,
    codeSnippet:'public int loneSum(int a, int b, int c) {\n//coming soon!\n}',
    language:'java'
  },
  '15': {
    title: 'Count Code',
    description: `Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.\n\n` +`countCode("aaacodebbb") → 1\n` +`countCode("codexxcode") → 2\n` +`countCode("cozexxcope") → 2`,
    testCases: `countCode("aaacodebbb") → 1\n` +`countCode("codexxcode") → 2\n` +`countCode("cozexxcope") → 2\n` +`countCode("cozfxxcope") → 1\n` +`countCode("xxcozeyycop") → 1\n` +`countCode("cozcop") → 0\n` +`countCode("abcxyz") → 0\n` +`countCode("code") → 1\n` +`countCode("ode") → 0\n` +`countCode("c") → 0\n` +`countCode("") → 0\n` +`countCode("AAcodeBBcoleCCccoreDD") → 3\n` +`countCode("AAcodeBBcoleCCccorfDD") → 2\n` +`countCode("coAcodeBcoleccoreDD") → 3`,
    codeSnippet:'public int countCode(String str) {\n//coming soon!\n}',
    language:'java'
  },
  '16': {
    title: 'Max Block',
    description: `Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.\n\n` +`maxBlock("hoopla") → 2\n` +`maxBlock("abbCCCddBBBxx") → 3\n` +`maxBlock("") → 0`,
    testCases: `maxBlock("hoopla") → 2\n` +`maxBlock("abbCCCddBBBxx") → 3\n` +`maxBlock("") → 0\n` +`maxBlock("xyz") → 1\n` +`maxBlock("xxyz") → 2\n` +`maxBlock("xyzz") → 2\n` +`maxBlock("abbbcbbbxbbbx") → 3\n` +`maxBlock("XXBBBbbxx") → 3\n` +`maxBlock("XXBBBBbbxx") → 4\n` +`maxBlock("XXBBBbbxxXXXX") → 4\n` +`maxBlock("XX2222BBBbbXX2222") → 4`,
    codeSnippet:'public int maxBlock(String str) {\n//coming soon!\n}',
    language:'java'
  },
  '17': {
    title: 'Only 14',
    description: `Given an array of ints, return true if every element is a 1 or a 4.\n\n` +`only14([1, 4, 1, 4]) → true\n` +`only14([1, 4, 2, 4]) → false\n` +`only14([1, 1]) → true`,
    testCases: `only14([1, 4, 1, 4]) → true\n` +`only14([1, 4, 2, 4]) → false\n` +`only14([1, 1]) → true\n` +`only14([4, 1]) → true\n` +`only14([2]) → false\n` +`only14([]) → true\n` +`only14([1, 4, 1, 3]) → false\n` +`only14([3, 1, 3]) → false\n` +`only14([1]) → true\n` +`only14([4]) → true\n` +`only14([3, 4]) → false\n` +`only14([1, 3, 4]) → false\n` +`only14([1, 1, 1]) → true\n` +`only14([1, 1, 1, 5]) → false\n` +`only14([4, 1, 4, 1]) → true`,
    codeSnippet:'public boolean only14(int[] nums) {\n//coming soon!\n}',
    language:'java'
  },
  '18': {
    title: 'Fix 34',
    description: `Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.\n\n` +`fix34([1, 3, 1, 4]) → [1, 3, 4, 1]\n` +`fix34([1, 3, 1, 4, 4, 3, 1]) → [1, 3, 4, 1, 1, 3, 4]\n` +`fix34([3, 2, 2, 4]) → [3, 4, 2, 2]`,
    testCases: `fix34([1, 3, 1, 4]) → [1, 3, 4, 1]\n` +`fix34([1, 3, 1, 4, 4, 3, 1]) → [1, 3, 4, 1, 1, 3, 4]\n` +`fix34([3, 2, 2, 4]) → [3, 4, 2, 2]\n` +`fix34([3, 2, 3, 2, 4, 4]) → [3, 4, 3, 4, 2, 2]\n` +`fix34([2, 3, 2, 3, 2, 4, 4]) → [2, 3, 4, 3, 4, 2, 2]\n` +`fix34([5, 3, 5, 4, 5, 4, 5, 4, 3, 5, 3, 5]) → [5, 3, 4, 5, 5, 5, 5, 5, 3, 4, 3, 4]\n` +`fix34([3, 1, 4]) → [3, 4, 1]\n` +`fix34([3, 4, 1]) → [3, 4, 1]\n` +`fix34([1, 1, 1]) → [1, 1, 1]\n` +`fix34([1]) → [1]\n` +`fix34([]) → []\n` +`fix34([7, 3, 7, 7, 4]) → [7, 3, 4, 7, 7]\n` +`fix34([3, 1, 4, 3, 1, 4]) → [3, 4, 1, 3, 4, 1]\n` +`fix34([3, 1, 1, 3, 4, 4]) → [3, 4, 1, 3, 4, 1]`,
    codeSnippet:'public int[] fix34(int[] nums) {\n//coming soon!\n}',
    language:'java'
  },
  '19': {
    title: 'Copy Evens',
    description: `Given an array of positive ints, return a new array of length "count" containing the first even numbers from the original array. The original array will contain at least "count" even numbers.\n\n` +`copyEvens([3, 2, 4, 5, 8], 2) → [2, 4]\n` +`copyEvens([3, 2, 4, 5, 8], 3) → [2, 4, 8]\n` +`copyEvens([6, 1, 2, 4, 5, 8], 3) → [6, 2, 4]`,
    testCases: `copyEvens([3, 2, 4, 5, 8], 2) → [2, 4]\n` +`copyEvens([3, 2, 4, 5, 8], 3) → [2, 4, 8]\n` +`copyEvens([6, 1, 2, 4, 5, 8], 3) → [6, 2, 4]\n` +`copyEvens([6, 1, 2, 4, 5, 8], 4) → [6, 2, 4, 8]\n` +`copyEvens([3, 1, 4, 1, 5], 1) → [4]\n` +`copyEvens([2], 1) → [2]\n` +`copyEvens([6, 2, 4, 8], 2) → [6, 2]\n` +`copyEvens([6, 2, 4, 8], 3) → [6, 2, 4]\n` +`copyEvens([6, 2, 4, 8], 4) → [6, 2, 4, 8]\n` +`copyEvens([1, 8, 4], 1) → [8]\n` +`copyEvens([1, 8, 4], 2) → [8, 4]\n` +`copyEvens([2, 8, 4], 2) → [2, 8]`,
    codeSnippet:'public int[] copyEvens(int[] nums, int count) {\n//coming soon!\n}',
    language:'java'
  },
  '20': {
    title: 'Factorial',
    description: `Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).\n\n` +`factorial(1) → 1\n` +`factorial(2) → 2\n` +`factorial(3) → 6`,
    testCases: `factorial(1) → 1\n` +`factorial(2) → 2\n` +`factorial(3) → 6\n` +`factorial(4) → 24\n` +`factorial(5) → 120\n` +`factorial(6) → 720\n` +`factorial(7) → 5040\n` +`factorial(8) → 40320\n` +`factorial(12) → 479001600`,
    codeSnippet:'public int factorial(int n) {\n//coming soon!\n}',
    language:'java'
  },
  '21': {
    title: 'Group Sum',
    description: `Given an array of ints, is it possible to choose a group of some of the ints, such that the group sums to the given target? This is a classic backtracking recursion problem. Once you understand the recursive backtracking strategy in this problem, you can use the same pattern for many problems to search a space of choices. Rather than looking at the whole array, our convention is to consider the part of the array starting at index start and continuing to the end of the array. The caller can specify the whole array simply by passing start as 0. No loops are needed -- the recursive calls progress down the array.\n\n` +`groupSum(0, [2, 4, 8], 10) → true\n` +`groupSum(0, [2, 4, 8], 14) → true\n` +`groupSum(0, [2, 4, 8], 9) → false`,
    testCases: `groupSum(0, [2, 4, 8], 10) → true\n` +`groupSum(0, [2, 4, 8], 14) → true\n` +`groupSum(0, [2, 4, 8], 9) → false\n` +`groupSum(0, [2, 4, 8], 8) → true\n` +`groupSum(1, [2, 4, 8], 8) → true\n` +`groupSum(1, [2, 4, 8], 2) → false\n` +`groupSum(0, [1], 1) → true\n` +`groupSum(0, [9], 1) → false\n` +`groupSum(1, [9], 0) → true\n` +`groupSum(0, [], 0) → true\n` +`groupSum(0, [10, 2, 2, 5], 17) → true\n` +`groupSum(0, [10, 2, 2, 5], 15) → true\n` +`groupSum(0, [10, 2, 2, 5], 9) → true`,
    codeSnippet:'public boolean groupSum(int start, int[] nums, int target) {\n//coming soon!\n}',
    language:'java'
  },
  '22': {
    title: 'Map Bully',
    description: `Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string.\n\n` +`mapBully({"a": "candy", "b": "dirt"}) → {"a": "", "b": "candy"}\n` +`mapBully({"a": "candy"}) → {"a": "", "b": "candy"}\n` +`mapBully({"a": "candy", "b": "carrot", "c": "meh"}) → {"a": "", "b": "candy", "c": "meh"}`,
    testCases: `mapBully({"a": "candy", "b": "dirt"}) → {"a": "", "b": "candy"}\n` +`mapBully({"a": "candy"}) → {"a": "", "b": "candy"}\n` +`mapBully({"a": "candy", "b": "carrot", "c": "meh"}) → {"a": "", "b": "candy", "c": "meh"}\n` +`mapBully({"b": "carrot"}) → {"b": "carrot"}\n` +`mapBully({"c": "meh"}) → {"c": "meh"}\n` +`mapBully({"a": "sparkle", "c": "meh"}) → {"a": "", "b": "sparkle", "c": "meh"}`,
    codeSnippet:'public Map<String, String> mapBully(Map<String, String> map) {\n//coming soon!\n}',
    language:'java'
  },
  '23': {
    title: 'Word 0',
    description: `Given an array of strings, return a Map<String, Integer> containing a key for every different string in the array, always with the value 0. For example, the string "hello" makes the pair "hello":0. We'll do more complicated counting later, but for this problem the value is simply 0.\n\n` +`word0(["a", "b", "a", "b"]) → {"a": 0, "b": 0}\n` +`word0(["a", "b", "a", "c", "b"]) → {"a": 0, "b": 0, "c": 0}\n` +`word0(["c", "b", "a"]) → {"a": 0, "b": 0, "c": 0}`,
    testCases: `word0(["a", "b", "a", "b"]) → {"a": 0, "b": 0}\n` +`word0(["a", "b", "a", "c", "b"]) → {"a": 0, "b": 0, "c": 0}\n` +`word0(["c", "b", "a"]) → {"a": 0, "b": 0, "c": 0}\n` +`word0(["c", "c", "c", "c"]) → {"c": 0}\n` +`word0([]) → {}`,
    codeSnippet:'public Map<String, Integer> word0(String[] strings) {\n//coming soon!\n}',
    language:'java'
  },
  '24': {
    title: 'Doubling',
    description: `Given a list of integers, return a list where each integer is multiplied by 2.\n\n` +`doubling([1, 2, 3]) → [2, 4, 6]\n` +`doubling([6, 8, 6, 8, -1]) → [12, 16, 12, 16, -2]\n` +`doubling([]) → []`,
    testCases: `doubling([1, 2, 3]) → [2, 4, 6]\n` +`doubling([6, 8, 6, 8, -1]) → [12, 16, 12, 16, -2]\n` +`doubling([]) → []\n` +`doubling([5]) → [10]\n` +`doubling([5, 10]) → [10, 20]\n` +`doubling([8, -5, 7, 3, 109]) → [16, -10, 14, 6, 218]\n` +`doubling([6, -3, 12, 23, 4, 1, 19, 11, 2, 3, 2]) → [12, -6, 24, 46, 8, 2, 38, 22, 4, 6, 4]\n` +`doubling([3, 1, 4, 1, 5, 9]) → [6, 2, 8, 2, 10, 18]`,
    codeSnippet:'public List<Integer> doubling(List<Integer> nums) {\n//coming soon!\n}',
    language:'java'
  },
  '25': {
    title: 'No Negs',
    description: `Given a list of integers, return a list of the integers, omitting any that are less than 0.\n\n` +`noNeg([1, -2]) → [1]\n` +`noNeg([-3, -3, 3, 3]) → [3, 3]\n` +`noNeg([-1, -1, -1]) → []`,
    testCases: `noNeg([1, -2]) → [1]\n` +`noNeg([-3, -3, 3, 3]) → [3, 3]\n` +`noNeg([-1, -1, -1]) → []\n` +`noNeg([]) → []\n` +`noNeg([0, 1, 2]) → [0, 1, 2]\n` +`noNeg([3, -10, 1, -1, 4, -400]) → [3, 1, 4]\n` +`noNeg([-1, 3, 1, -1, -10, -100, -111, 5]) → [3, 1, 5]`,
    codeSnippet:'public List<Integer> noNeg(List<Integer> nums) {\n//coming soon!\n}',
    language:'java'
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
