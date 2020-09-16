const { guessColour, flipCard } = require("./red-or-black");
const redOrBlack = require("./red-or-black");
const axios = require("axios").default;

jest.mock("axios");

test('guessColour - red', () => {
    jest.spyOn(redOrBlack, 'currentGuess').mockReturnValue('');
    let currentGuess = '';
    const guessToTry = 'red';

    guessColour(guessToTry);
    
    expect(currentGuess).toBe('red');
});

// jest.spyOn(Error).mockReturnValue('');


// const guessColour = (colour) => {
//     if (colour !== 'red' && colour !== 'black') {
//         throw new Error('Should guess colour red or black!');
//     }
//     currentGuess = colour;
// };

// test("Test description", () => {
//     const t = () => {
//       throw new TypeError();
//     };
//     expect(t).toThrow(TypeError);
//   });