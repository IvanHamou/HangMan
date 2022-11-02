/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */
// var input = "h";
// const ord = "here";
// let newO = ord.split(" ");
// // console.log(newO);
// // const ee = newO.join("");
// // var ww = ee.split("");
// let myIndex;
// newO.forEach((res, i) => {
//   if (res.includes(input)) {
//     myIndex = i;
//   } else {
//     console.log("no", input);
//   }
// });

// 

// array med ord att gissa på
const wordList = ['tomat', 'banan', 'päron', 'äpple', 'morot', 'mössa', 'gurka', 'dator', 'penna', 'jacka'];
const ul = document.querySelector('ul');

//vårat ord slumpas till en variabel
let pickAnumber = Math.floor(Math.random() * wordList.length);
const randomWord = wordList[pickAnumber];

const wrongGuesses = [];
let rightLetter = [];


console.log(randomWord);

const letters = randomWord.split('');// splittrar ordet till en array med bokstäver för att enklare kunna jämföra.
const lines = letters.map(x => `${x} `);


const inputField = document.querySelector('#inputMain').addEventListener('keydown', (event) => {
  const userInput = event.key;
  let correctGuess = false;
  console.log(event.key);
  
  for(let i = 0; i<letters.length; i++) {
    if (userInput === letters[i]){
      rightLetter[i] = letters[i];
      correctGuess = true;

      console.log(rightLetter);
      console.log('Rätt bokstav');
      
      
      ul.textContent = '';
      rightLetter[i]  = `<li>${letters[i]}</li>`;
      ul.insertAdjacentHTML ('beforeend', rightLetter);
    }
  }
  if (correctGuess === false){
    console.log('Fel gissning');
    wrongGuesses.push(userInput);

    document.querySelector('p').textContent = `${wrongGuesses}`;
    console.log(wrongGuesses);
    
  }

  });
  
 


  // for (let i = 0; i < randomWord.length; i++) {
  //   if (randomWord.match(userInput)) {
  //   console.log("Rätt");
  //   }else {
  //   console.log("fel");
  //   }
  // };
  // console.log(event);

