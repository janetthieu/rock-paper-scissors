const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

const playerSelection = prompt('Choose rock, paper, or scissors!').toLowerCase();
const computerSelection = computerPlay();

function playRound(player, computer) {
    if (player === 'rock' && computer === 'paper' || 
        player === 'paper' && computer === 'scissors' ||
        player === 'scissors' && computer === 'rock') {
        return `You Lose! ${computer} beats ${player}.`;
    } else if (computer === 'rock' && player === 'paper' ||
    computer === 'paper' && player === 'scissors' ||
    computer === 'scissors' && player === 'rock') {
        return `You Win! ${player} beats ${computer}.`;
    } else {
        return `Tie! Play again.`;
    }
}

function game(a, b) {
    for (let i = 0; i < 5; i++) {
        console.log(a, b);
        console.log(playRound(a, b));
        a = prompt('Choose rock, paper, or scissors!').toLowerCase();
        b = computerPlay();
    }
}