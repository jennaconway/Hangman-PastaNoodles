/*------------------------------
        Global Variables
-------------------------------*/
var words = ["gnocchi", "spaghetti", "penne", "macaroni", "ravioli", "rigatoni"];

var word = "";

var letterArray = [];
var numBlanks = 0;
var wordArray = [];

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;

// var wordSplit = word.split("");
// console.log(wordSplit);

// var wordLength = wordSplit.length;
// console.log(wordLength);

/*------------------------------
        Functions
-------------------------------*/
function startGame(){
    word = words[Math.floor(Math.random()*words.length)];
    console.log(word);

    //reset counter values
    guessesLeft = 9;

    for (var i = 0; i < word.length; i ++){
        letterArray.push("_");
        console.log(letterArray);
    };

    document.getElementById("wordToGuess").innerHTML=letterArray.join(" ");
    document.getElementById("winCounter").innerHTML=winCounter;
    document.getElementById("lossCounter").innerHTML=lossCounter;
    document.getElementById("numGuesses").innerHTML=guessesLeft;

};

// CHANGE HTML T REFLECT ROUND (can use jQuery Instead)O
//FUNCTION TO CHECK LETTERS
function checkLetters(letter){
    var letterinWord = false;
    for (var i = 0; i < word.length; i++){
        if (word[i]==letter){
            letterinWord = true;
            
        };
    }
    console.log(letterinWord);
};
//FUNCTION TO CHECK IF ROUNDS COMPLETE
/*------------------------------
        Main Process
-------------------------------*/
// INITIATES GAME
startGame();
document.onkeyup=function(event){
    console.log("key pressed");
    var guessLetter = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guessLetter);
};
// HANDLE KEYCLICKS