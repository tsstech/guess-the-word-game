// Variables selecting elements from index.html
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

// Global variable holding the word
const word = "magnolia";

// Function to Add Placeholders for Each Letter
const placeholdersForWord = function(word){
	placeholder = [];
	// Looping through word to add placeholder for each letter
	for (char in word){
		placeholder.push("●")
	}
	wordInProgress.innerText = placeholder.join("");
};

// Event listener for guess Button
guessButton.addEventListener("click", function(e){
	e.preventDefault();
	guess = guessInput.value;
	console.log(guess);
	guessInput.value = "";
});


placeholdersForWord(word);