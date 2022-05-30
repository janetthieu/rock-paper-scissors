const choices = ['rock', 'paper', 'scissors'];
const playerScoreboard = document.getElementById('player-scoreboard');
const playerChoiceContainer = document.getElementById('player-choice-container');
const computerScoreboard = document.getElementById('computer-scoreboard');
const computerChoiceContainer = document.getElementById('computer-choice-container');
const comment = document.getElementById('comment');
const resetBtn = document.getElementById('reset-btn');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let playerScore = 0;
let computerScore = 0;
let roundWinner = null;
let playerImg = new Image();
let computerImg = new Image();

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(p, c) {
    if (p === choices[0] && c === choices[1] || 
        p === choices[1] && c === choices[2] ||
        p === choices[2] && c === choices[0]) {
            computerScore++;
            roundWinner = 'Computer wins this round.';
    } else if (c === choices[0] && p === choices[1] ||
        c === choices[1] && p === choices[2] ||
        c === choices[2] && p === choices[0]) {
            playerScore++;
            roundWinner = 'You win this round!';
    } else if (p === c) {
            roundWinner = 'Tie!';
    } else {
            roundWinner = 'Oops! Something went wrong.';
    }
    return roundWinner;
}

function updateScoreboard() {
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
    comment.textContent = roundWinner;
}

function toggleBtn(btn) {
    btn.disabled === false ? btn.disabled = true : btn.disabled = false;
}

function endGame() {
    if (playerScore < 5 && computerScore < 5) {
        return;
    } else {
        toggleBtn(resetBtn);
        toggleBtn(rock);
        toggleBtn(paper);
        toggleBtn(scissors);

        let gameWinner = null;
        gameWinner = playerScore > computerScore ? 'You win the game!' : 'Better luck next time!';
        comment.textContent = gameWinner;
    }
}

function resetScores() {
    playerScore = 0;
    playerScoreboard.textContent = playerScore;

    computerScore = 0;
    computerScoreboard.textContent = computerScore;
}

function resetImgs() {
    playerImg.src = '';
    computerImg.src = '';
}

function resetGame() {
    resetBtn.addEventListener('click', event => {
        resetScores();
        resetImgs();

        comment.textContent = 'Who will win this game?';

        toggleBtn(resetBtn);
        toggleBtn(rock);
        toggleBtn(paper);
        toggleBtn(scissors);
    })
}

function startRound() {
    document.querySelectorAll('.choice-btn').forEach(choice => {
        choice.addEventListener('click', event => {
            let pChoice = null;
            pChoice = event.target.id;

            let cChoice = null;
            cChoice = computerPlay();

            playRound(pChoice, cChoice);
            showChoiceImg(pChoice, playerImg, playerChoiceContainer);
            showChoiceImg(cChoice, computerImg, computerChoiceContainer);
            updateScoreboard();
            endGame();
        })
    })
}

function showChoiceImg(contenderChoice, img, choiceContainer) {

    switch (contenderChoice) {
        case 'rock':
            img.src = 'images/rock.svg';
            choiceContainer.appendChild(img);
            break;
    
        case 'paper':
            img.src = 'images/paper.svg';
            choiceContainer.appendChild(img);
            break;
    
        case 'scissors':
            img.src = 'images/scissors.svg';
            choiceContainer.appendChild(img);
            break;
    }
}

resetBtn.disabled = true;
startRound();
resetGame();