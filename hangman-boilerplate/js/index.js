// array med ord att gissa på
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

// Funktion som startar om sidan.
function reset(){
  location.reload();
}
// funktion som gör att det kommer upp en "game over-skärm".
function toggleSliderLose() {
  slider.classList.toggle("show");
}

// funktion som gör att det kommer upp en "game over-skärm".
function toggleSliderWin() {
  slider1.classList.toggle("show");
}
// Tar tillbaka slider till rätt z-index igen.
playAgainBtn.addEventListener("click", () => {
toggleSliderLose();
});

// Tar tillbaka slider till rätt z-index igen.
playAgainBtn2.addEventListener("click",() => {
  toggleSliderWin();
} )

//Slumpar random tal som görs om till en variabel.
let pickAnumber = Math.floor(Math.random() * wordList.length);

const randomWord = wordList[pickAnumber];
const wrongGuesses = [];

// Strecken som syns vid start, står för antalet bokstäver.
let rightLetter = [`<li>-</li>`,`<li>-</li>`,`<li>-</li>`,`<li>-</li>`,`<li>-</li>`,];


// splittrar ordet till en array med bokstäver för att enklare kunna jämföra.
const letters = randomWord.split('');

// Vid knapptryck, jämförs userInput med olika villkor.
document.querySelector('body').addEventListener('keypress', (event) => {
  
  const userInput = event.key;
  for (let i = 0; i < alphabet.length; i++) { 
    if (userInput == alphabet[i]) {
      
      let correctGuess = false;
      console.log(event.key);
      
      
      for(let i = 0; i<letters.length; i++) {
        if (userInput === letters[i]){
          rightLetter[i] = `${letters[i]}`;

          correctGuess = true;
          
          console.log(rightLetter);
          console.log('Rätt bokstav');
          
          ul.textContent = '';
          rightLetter[i]  = `${letters[i]}`;
          ul.insertAdjacentHTML ('beforeend', rightLetter.join(""));
          console.log(rightLetter.join(""));
        }
        if(randomWord == rightLetter.join("")){
          WinText.style.color = "white";
          WinText.style.backgroundColor = "green";
          WinText.textContent= `DU VANN!`;
          toggleSliderWin();
        }
        
      }

    // När användaren gissar fel
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
      }
    }
    }
  });
  
  