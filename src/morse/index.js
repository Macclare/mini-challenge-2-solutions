const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

Object.freeze(MORSE_CODE);

  /* store individual character into Array
  1 space separate character
  3 space separate word */

function morse(text) {
  // state a conditional statement, if text is not a string, throw an error
  if (text === "") return '';
  if (typeof text !== 'string'){
    throw new Error('Please provide a morse string')
  }
// trim text and store in a new variable trimmedText.
//split the trimmedText and store in a new variable splittedText.
let trimmedtext = text.trim();
 let splittedText = trimmedtext.split('   ');
// declare a variable and assign an empty string
 let finalElement = '';
// use a for Each loop to through the splittedText, storing it to a new variable 'element'
//using the for Each loop, loop through the element, trim and split it then store in a MORSE_CODE suming up to FinalElement.
//return trimmed finalElement
 splittedText.forEach((i) => {
 i.trim().split(' ').forEach((element) => {
  finalElement += MORSE_CODE[element]
  })
   finalElement += ' ';
  }) 
 return finalElement.trim();

}

module.exports = morse;
