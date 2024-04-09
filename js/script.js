// Variables selecting elements from index.html
const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

// Global variables holding the word & guesses
const word = "magnolia";
const guessedLetters = [];

// Function to Add Placeholders for Each Letter
const placeholdersForWord = function(word){
	placeholder = [];
	// Looping through word to add placeholder for each letter
	for (char in word){
		placeholder.push("●")
	}
	wordInProgress.innerText = placeholder.join("");
};

// Function to validate user input guesses
const validateInput = function(input){
	const acceptedLetter = /[a-zA-Z]/;
	if (input === ""){
		message.innerText = "Please enter a letter.";
	} else if (input.length > 1){
		message.innerText = "Please enter a single letter.";
	} else if (!input.match(acceptedLetter)){
		message.innerText = "Please enter a letter from A to Z";
	} else {
		return input;
	}
};

// Function to checked if the letter has been guessed before. If not, it is added to the guessed-letters list
const makeGuess = function(letter){
	letter = letter.toUpperCase();
	if (guessedLetters.includes(letter)){
		message.innerText = "You have already guessed this letter.";
	} else {
		guessedLetters.push(letter);
		showGuessedLetters();
		updateWord(guessedLetters);
	}
};

// Function to show guessed letters
const showGuessedLetters = function(){
	guessedLettersList.innerHTML = "";
	for (letter of guessedLetters){
		const li = document.createElement("li");
		li.innerText = letter;
		guessedLettersList.append(li);
	}
};

// Function to update the word in progress
const updateWord = function(guessedLetters){
	const wordUpper = word.toUpperCase();
	const wordArray = wordUpper.split("");
	const revealWord = [];
	
	// Check each letter in word to see if the letter has been guessed
	// and update dot to letter if it is correctly guessed
	for (const letter of wordArray) {
		if (guessedLetters.includes(letter)) {
			revealWord.push(letter.toUpperCase());
		} else {
			revealWord.push("●");
		}
	}
	
	wordInProgress.innerText = revealWord.join("");
};

// Event listener for guess Button
guessButton.addEventListener("click", function(e){
	e.preventDefault();	// Prevent page from reloading
	
	message.innerText = "";	// Clear message

	// Validate input guess 
	guess = guessInput.value;
	goodGuess = validateInput(guess);
	
	// If it is a valid guess, check if the letter has been guessed before
	if (goodGuess != undefined){
		makeGuess(goodGuess);
	}
	
	guessInput.value = "";	// Clear input field
});


placeholdersForWord(word);