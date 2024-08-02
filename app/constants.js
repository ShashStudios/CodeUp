export const LANGUAGE_VERSIONS = {
  python: "3.10.0",
  java: "15.0.2",
};

export const CODE_SNIPPETS = {
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
};

export const DESCRIPTIONS = {
 sleepin:"\nThe parameter weekday is true if it is a weekday, and the parameter vacation is true " +
"if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.\n " +
"sleepIn(false, false) → true \n sleepIn(true, false) → false \n sleepIn(false, true) → true \n",
string_times:"\nGiven a string and a non-negative int n, return a larger string that is n copies of the original string.\n string_times('Hi', 2) → 'HiHi'\n string_times('Hi', 3) → 'HiHiHi'\n string_times('Hi', 1) → 'Hi'\n"
 
};

export const DESCODING = {
  sleepin:"\def sleep_in(weekday, vacation): \n",
  string_times: "\ndef string_times(str, n):\n"
 };
 
