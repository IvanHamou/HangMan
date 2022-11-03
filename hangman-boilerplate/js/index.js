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
const ShowParts = document.querySelector("figure")
let resetbtn = document.querySelector("#reset")
let maxGuesses = 5;
let showMaxGuesses = document.querySelector('aside')
showMaxGuesses.textContent =  `You have ${maxGuesses} guesses left`;
const slider = document.querySelector(".slider");
const slider1 = document.querySelector(".slider");
//const acceptedKeys = 'abcdefghijklmnopqrstuvwxyzåäö';
const playAgainBtn = document.querySelector(".play-again-btn");
const LoseText = document.querySelector(".lose-text");
const WinText = document.querySelector(".win-text");


// funktion som gör att det kommer upp en "game over-skärm"
function toggleSliderLose() {
  slider.classList.toggle("show");
}
playAgainBtn.addEventListener("click", () => {
  toggleSliderLose();
});

function toggleSliderWin() {
  slider1.classList.toggle("show");
}

//vårat ord slumpas till en variabel
let pickAnumber = Math.floor(Math.random() * wordList.length);
const randomWord = wordList[pickAnumber];

const wrongGuesses = [];
let rightLetter = [`<li>-</li>`,`<li>-</li>`,`<li>-</li>`,`<li>-</li>`,`<li>-</li>`,];


console.log(randomWord);

const letters = randomWord.split('');// splittrar ordet till en array med bokstäver för att enklare kunna jämföra.
// letters.map(x => ('_'));

document.querySelector('body').addEventListener('keypress', (event) => {

  const userInput = event.key;
  let correctGuess = false;
  console.log(event.key);

  
  for(let i = 0; i<letters.length; i++) {
    if (userInput === letters[i]){
      rightLetter[i] = `${letters[i]}`;
      //pusha in med '' och mellanslag?

      correctGuess = true;
      
      console.log(rightLetter);
      console.log('Rätt bokstav');
      
      ul.textContent = '';
      rightLetter[i]  = `<li>${letters[i]}</li>`;
      ul.insertAdjacentHTML ('beforeend', rightLetter.join(""));
    }
  }
  if (correctGuess === false){
    console.log('Fel gissning');
    wrongGuesses.push(userInput);
    document.querySelector('.wrong').textContent = `${wrongGuesses.join("")}`;
    console.log(wrongGuesses);
    
    
    if (wrongGuesses.length == 1){
     ShowParts.classList.add("scaffold")
     showMaxGuesses.textContent = `You have ${maxGuesses-1} guesses left`;

    }
    else if (wrongGuesses.length == 2){
      ShowParts.classList.add("head")
      showMaxGuesses.textContent = `You have ${maxGuesses-2} guesses left`;

    } 
    else if (wrongGuesses.length == 3){
      ShowParts.classList.add("body")
      showMaxGuesses.textContent = `You have ${maxGuesses-3} guesses left`;

    }
    else if (wrongGuesses.length == 4){
       ShowParts.classList.add("arms")
       showMaxGuesses.textContent = `You have ${maxGuesses-4} guesses left`;

    }
    else if (wrongGuesses.length == 5){
      ShowParts.classList.add("legs")
      showMaxGuesses.textContent = `You have ${maxGuesses-5} guesses left`;
      LoseText.textContent= `GAME OVER! Rätt ord var "${randomWord}"`;
      LoseText.style.color ="white";
      LoseText.style.backgroundColor="red";
    toggleSliderLose();
    } 
    
    // }); 
    
  }
  });


//  resetbtn.addEventListener("click",function(){
//    reset();
//});
//  function reset() {
//    shitInput.value = ""
//  }


  // for (let i = 0; i < randomWord.length; i++) {
  //   if (randomWord.match(userInput)) {
  //   console.log("Rätt");
  //   }else {
  //   console.log("fel");
  //   }
  // };
  // console.log(event);

