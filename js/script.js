
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

// create a random number generator with function that produce number between two ranges min max and that not prodeuce duplicated numbers
// let randomNumber = 0
// function getRandomNumber(min, max) {
    //      randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    //     return randomNumber;
    //   }