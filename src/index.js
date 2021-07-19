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
    const LETTER_LENGTH = 10
    // write your solution here
    const decoder = {'10' :'.', '11': '-', '00': ''};
    
    const words = expr.split('**********');
    
    let output = [];
    
    words.forEach(w => {
        let word = [];
        for (let j = 0; j < w.length/LETTER_LENGTH; j++){
            let morseLetterBin = w.slice(LETTER_LENGTH*j,LETTER_LENGTH*(j+1));
            let morseLetter = '';
            for (let i = 0; i<morseLetterBin.length/2; i++){
                morseLetter += decoder[morseLetterBin.slice(2*i,2*(i+1))]
            }
            word.push(MORSE_TABLE[morseLetter])
        }
        
        output.push(word)
    });
    output = output.map(w => w.join(''));
    return output.join(' ');
}


module.exports = {
    decode
}