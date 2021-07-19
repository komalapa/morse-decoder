const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const decoder = {'10' :'.', '11': '-', '00': ''};
    
    const words = expr.split('**********');
    
    let morse = [];
    
    words.forEach(w => {
        let morseWord = [];
        for (let j = 0; j < w.length/10; j++){
            let morseLetterBin = w.slice(10*j,10*(j+1));
            let morseLetter = '';
            for (let i = 0; i<morseLetterBin.length/2; i++){
                morseLetter += decoder[morseLetterBin.slice(2*i,2*(i+1))]
            }
            //console.log(j, morseLetterBin)
            morseWord.push(MORSE_TABLE[morseLetter])
        }
        
        morse.push(morseWord)
    });
    // console.log(words,morse)
    morse = morse.map(w => w.join(''));
    return morse.join(' ');
}


module.exports = {
    decode
}