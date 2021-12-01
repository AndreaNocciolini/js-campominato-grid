// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 function getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min) + min);
 }

const container = document.querySelector(`.container`);

const rowEasy = 10;
const rowHard = 9;
const rowImpossible = 7;
const colEasy = 10;
const colHard = 9;
const colImpossible = 7;

const numSquareEasy = rowEasy * colEasy;
const numSquareHard = rowHard * colHard;
const numSquareImpossible = rowImpossible * colImpossible;

const numbersRandom = [];
for (let i = 0; i < numSquareEasy; i++) {
    const square = document.createElement(`div`);
    square.classList.add(`square-easy`);

    let numberRandEasy = getRandomInt(1, 100);
    // while (numbersRandom.includes(numberRandEasy)) {
    //     numberRandEasy = getRandomInt(1, 10)
    // }
    // numbersRandom.push(numberRandEasy);


    container.append(square);
    square.append(numberRandEasy);
 }



//  function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
//  }

// const container = document.querySelector(`.container`);
// const button = document.getElementById(`button`);
