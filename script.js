const choices = ['rock', 'paper', 'scissors'];
const playerScoreboard = document.querySelector('#player-scoreboard');
const playerChoiceContainer = document.querySelector('#player-choice-container');
const computerScoreboard = document.querySelector('#computer-scoreboard');
const computerChoiceContainer = document.querySelector('#computer-choice-container');
const comment = document.querySelector('#comment');
const resetBtn = document.querySelector('#reset-btn');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');

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

function updateScoreboard() {
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
    comment.textContent = roundWinner;
}

function toggleBtn(btn) {
    btn.disabled = !btn.disabled;
}

function endGame() {
    toggleBtn(resetBtn);
    toggleBtn(rock);
    toggleBtn(paper);
    toggleBtn(scissors);

    let gameWinner = null;
    gameWinner = playerScore > computerScore ? 'You win the game!' : 'Better luck next time!';
    comment.textContent = gameWinner;

    for (const button of buttons) {
        button.style.transform = 'initial';
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
    resetBtn.addEventListener('pointerup', e => {
        if (!resetBtn.disabled) {
            resetScores();
            resetImgs();

            comment.textContent = 'Who will win this game?';

            toggleBtn(rock);
            toggleBtn(paper);
            toggleBtn(scissors);
            toggleBtn(resetBtn);

            for (const button of buttons) {
                button.style.transform = 'initial';
            }
        }
    })
}

function startRound() {
    document.querySelectorAll('.choice-btn').forEach(choice => {
        choice.addEventListener('pointerup', e => {
            if (choice.disabled) {
                return;
            }

            let pChoice = null;
            pChoice = e.target.id;

            let cChoice = null;
            cChoice = computerPlay();

            playRound(pChoice, cChoice);
            showChoiceImg(pChoice, playerImg, playerChoiceContainer);
            showChoiceImg(cChoice, computerImg, computerChoiceContainer);
            updateScoreboard();

        if (playerScore < 5 && computerScore < 5) {
            return;
        } else {
            endGame();
        }
        })
    })
}

for (const button of buttons) {
    button.addEventListener('pointerenter', e => {
        if (!button.disabled) {
            button.style.transform = 'scale(1.1)';
        }
    })

    button.addEventListener('pointerleave', e => {
        if (!button.disabled) {
            button.style.transform = 'initial';
        }
    })
}

resetBtn.disabled = true;
startRound();
resetGame();