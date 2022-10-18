// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

/** -creo una griglia a con varie scatole a seconda del livello
    -creo un randomizzatoreche generi 16 numeri che diverranno le bombe evitando di duplicare i numeri delle bombe 
    quindi con while dovrò produrre 16 numeri riconoscendo se sono gia inclusi nella generazione
    -attribuire alla lista generata questi 16 elementi e
    quando questi elementi verranno cliccati la cella diverrà rossa e il gioco terminerà
    se non vengono cliccati le celle possono continuare a essere premute 
*/ 



// grid
const grid = document.querySelector(".row");

// btn
const btnPlay = document.getElementById("play"); 

// select options
const difficulty = document.getElementById("difficulty");
const difficultyEz = difficulty.options[3];
const difficultyMid = difficulty.options[2];
const difficultyHard = difficulty.options[1];

// BONUS Listener 
btnPlay.addEventListener("click",function(){
    // LEVEL EASY
    if(difficultyEz.selected == true){
        // generate number
        const generatedNumber = consecutiveNumberGen (parseInt(difficultyEz.value));
        console.log(generatedNumber)
        
        // generate boxes in the html
        const box = boxGenerator(generatedNumber, "level-size-easy");
        // LEVEL MEDIUM
    }else if (difficultyMid.selected == true){
        // generate number
        const generatedNumber = consecutiveNumberGen (parseInt(difficultyMid.value));
        console.log(generatedNumber)

        
        // generate boxes in the html
        const box = boxGenerator(generatedNumber, "level-size-medium");
    // LVEL HARD
    }else if(difficultyHard.selected == true){
        // generate number
        const generatedNumber = consecutiveNumberGen (parseInt(difficultyHard.value));
        
        console.log(generatedNumber)
        // generate boxes in the html
        const box = boxGenerator(generatedNumber, "level-size-hard");
        // NO LEVEL SELCTED
    }else{
        alert ("Scegli una difficoltà")
    }
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
/**
 * function that gives you an arry with consecutive number   
 * @param {number}} arrayLenght
 * @returns {number} boxNumber
 */
function consecutiveNumberGen (arrayLenght){
    let boxNumber = []
    for(let arrayIndex = 1; arrayIndex <= arrayLenght; arrayIndex++) {
        boxNumber.push(arrayIndex)
        
    }
    return boxNumber
}

// Ui Function

/**
 * create the grid boxes generator and use the result of consecutiveNumberGen as a param
 * @param {Array} numberOfBoxes
 * @param {string} levelBoxSize adds css class size that depend on the difficulty levele chosed
 * @returns {object} 
 */
function boxGenerator(numberOfBoxes, levelBoxSize) {
    for(let i = 1; i <= numberOfBoxes.length; i++){
        let number = i;
        let gridBox = document.createElement("div")
        gridBox.classList.add("box"); 
        gridBox.classList.add(levelBoxSize);
        gridBox.innerHTML = number;
        gridBox.addEventListener("click", function(){
            this.classList.toggle("bg-blue");
            console.log(i)
        })
        grid.append(gridBox)
    }
}




// create a random number generator with function that produce number between two ranges min max and that doesn't produce duplicated numbers

/**
 * bomb number generator from 1 to how many bombs we want
 * @param {number} bombNumber
 * @returns {object} bombs  
 */
function getRandomNumber(bombNumber) {
    const bombs = [];
    while (bombs.length < bombNumber) {
    const randomNumber = Math.floor(Math.random() * bombNumber + 1);
    if (!bombs.includes(randomNumber)) {
      bombs.push(randomNumber);
    }
  }
    return bombs;
}


