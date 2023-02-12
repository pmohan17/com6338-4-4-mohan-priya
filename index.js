var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]
//get variables with IDs in HTML//
var wordToGuess = document.getElementById("word-to-guess")
var remainingGuesses = document.getElementById("remaining-guesses")
var incorrectLettersShown = document.getElementById("incorrect-letters")
var previousWord = document.getElementById("previous-word")
var winsShown = document.getElementById("wins")
var lossesShown = document.getElementById("losses")
var visibleWord = []
var correctLetters = []
var incorrectLetters = []
var letterGuessed = []
var wins = 0
var losses = 0 
var guessesRemaining = 10

//keyboard access//
document.onkeyup = function(e) {
  var key = e.key.toLowerCase()
  if(!/^[a-z]{1}$/g.test(key)) return
  if (randomSelect.includes(key) && correctLetters.indexOf(key) === -1) { 
    correctLetters.push(key)
  } else if (!randomSelect.includes(key) && incorrectLetters.indexOf(key) === -1) {
    incorrectLetters.push(key)
    guessesRemaining--
  }
 
  guesses()
  if (visibleWord === randomSelect) {
    wins++
    winsShown.textContent = wins
    previousWord.textContent = randomSelect

    runGame()
  }
  if (guessesRemaining === 0) { 
    losses++
    lossesShown.textContent = losses
    previousWord.textContent = randomSelect
   
    runGame()
    }}
  function guesses() {
      visibleWord = ''
      for (let i = 0; i < randomSelect.length; i++) {
        if (correctLetters.indexOf(randomSelect[i]) > -1) {
          visibleWord += randomSelect[i]
        } else {
          visibleWord += '_'
        }
      }
      remainingGuesses.textContent = guessesRemaining
      incorrectLettersShown.textContent = incorrectLetters
      wordToGuess.textContent = visibleWord
      }   
   //Need function to run game   
  function runGame () {
        randomSelect = words[Math.floor(Math.random()*words.length)]
        correctLetters = []//randomSelect.split()//
        incorrectLetters = []
        guessesRemaining = 10
        
        guesses()
      }

 
    runGame()