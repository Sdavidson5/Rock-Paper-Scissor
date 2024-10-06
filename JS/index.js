// Computer choice section
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber >=0 & randomNumber<= .33) {
        return 'Rock'
    } else if(randomNumber >= .34 & randomNumber<= .66){
        return 'Paper'
    } else if(randomNumber >= .67 & randomNumber<= 1){
        return 'Scissor'
    }
}

console.log(getComputerChoice())

// Player choice selection 

let pc = prompt("What weapon do you choose?");
