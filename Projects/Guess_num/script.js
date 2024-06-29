const random = Math.floor(Math.random() * 100) + 1;
console.log(random);
const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
//const gus = document.getElementsByClassName('guesses');
const gus = document.querySelector('.guesses');
//const chancesLeft = document.getElementsByClassName('chancesLeft');
const cl= document.querySelector('.chancesLeft');
//console.log(guesses);
let gs = [];
let gscount = 10;

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    if (validateGuess(guess) == true){
        if (guess === random) {
            alert('Congratulations, you guessed the number!');
            alert('The game will reset in 5 seconds');
            setInterval(function() {
                window.location.reload();
            }, 5000);
        } 
        else {
            //console.log(guess);
            gs.push(guess);
            console.log(gs);
            gus.textContent = guess
            //document.getElementsByClassName('guesses')
            
            if (guess < random) {
            alert('Too low!');        
            } 
            else {
            alert('Too high!');
            }
        }
    gscount--;
    //console.log(gscount);
    cl.textContent = gscount;
    }
    
});

function validateGuess(guess) {
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert('Please enter a valid number between 1 and 100');
        return false;
    }
    else if (gscount === 0) {
        alert('You have reached the maximum number of guesses');
        alert('The game will reset in 5 seconds');
        setInterval(function() {
            window.location.reload();
        }, 5000);
        return false;
    }
    else if (gs.includes(guess)) {
        alert('You have already guessed that number');
        return false;
    }
    else return true;
}