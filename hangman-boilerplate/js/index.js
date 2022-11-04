// array with the wordlist for the game.
const wordList = ['mobil', 'päron', 'gurka', 'dator','tröja','byxor'];

const ul = document.querySelector('ul');
const ShowParts = document.querySelector("figure")
let resetbtn = document.querySelector("#reset")
let maxGuesses = 5;
let showMaxGuesses = document.querySelector('aside')
showMaxGuesses.textContent =  `You have ${maxGuesses} guesses left`;
const slider = document.querySelector(".slider");
const slider1 = document.querySelector(".slider1");
const playAgainBtn = document.querySelector(".play-again-btn");
const playAgainBtn2 = document.querySelector(".play-again-btn2");
const LoseText = document.querySelector(".lose-text");
const WinText = document.querySelector(".win-text");
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"]

// Function that reloads the page when "play again" btn is clicked.
function reset(){
  location.reload();
}
// Function that makes the game-over screen slide in.
function toggleSliderLose() {
  slider.classList.toggle("show");
}

//  Function that makes the win screen slide in.
function toggleSliderWin() {
  slider1.classList.toggle("show");
}
//When the play again button is pressed, the slider moves back to the correct index again.
playAgainBtn.addEventListener("click", () => {
toggleSliderLose();
});

//When the play again button is pressed, the slider moves back to the correct index again.
playAgainBtn2.addEventListener("click",() => {
  toggleSliderWin();
} )

//Randomize a random number that is declared in a variable.
let pickAnumber = Math.floor(Math.random() * wordList.length);
const randomWord = wordList[pickAnumber];

// An empty array that is filled with wrong letter guesses.
const wrongGuesses = [];

// The lines that are visible at the start represent the number of letters.
let rightLetter = [`<li>-</li>`,`<li>-</li>`,`<li>-</li>`,`<li>-</li>`,`<li>-</li>`,];

//splits the word into an array of letters for easier comparison.
const letters = randomWord.split('');


// On button press, userInput is compared with various conditions.
document.querySelector('body').addEventListener('keypress', (event) => {
  
  
  const userInput = event.key;
  for (let i = 0; i < alphabet.length; i++) { 
    if (userInput == alphabet[i]) {
      
      let correctGuess = false;
      
      for(let i = 0; i<letters.length; i++) {
        if (userInput === letters[i]){
          rightLetter[i] = `${letters[i]}`;

          correctGuess = true;
          
          ul.textContent = '';
          rightLetter[i]  = `${letters[i]}`;
          ul.insertAdjacentHTML ('beforeend', rightLetter.join(""));
        }

        if(randomWord == rightLetter.join("")){
          WinText.style.color = "white";
          WinText.style.backgroundColor = "green";
          WinText.textContent= `YOU WON!!!`;
          toggleSliderWin();
        }  
      }
    // When the user make a wrong guess.
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
          LoseText.textContent= `GAME OVER! Right word was: "${randomWord}".`;
          LoseText.style.color ="white";
          LoseText.style.backgroundColor="red";
          toggleSliderLose();
        }  
      }
    }
    }
  });
  
  