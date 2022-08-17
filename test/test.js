const script = 'script.js';
const expect = chai.expect;
const assert = chai.assert;

describe('smoke test', function() {
    it('should exist', function() {
        expect(script).to.exist;
    });
});

describe('tie conditions', function() {
    it('should return "Tie!" on "rock", "rock"', function() {
        expect(playRound('rock', 'rock')).to.equal('Tie!');
    });
    
    it('should return "Tie!" on "paper", "paper"', function() {
        expect(playRound('paper', 'paper')).to.equal('Tie!');
    });

    it('should return "Tie!" on "scissors", "scissors"', function() {
        expect(playRound('scissors', 'scissors')).to.equal('Tie!');
    });
});

describe('contender "p" winning', function() {
    it('should return "You win this round!" on "rock", "scissors"', function() {
        expect(playRound('rock', 'scissors')).to.equal('You win this round!');
    });
    
    it('should return "You win this round!" on "scissors", "paper"', function() {
        expect(playRound('scissors', 'paper')).to.equal('You win this round!');
    });
    
    it('should return "You win this round!" on "paper", "rock"', function() {
        expect(playRound('paper', 'rock')).to.equal('You win this round!');
    });
})

describe('contender "c" winning', function() {
    it('should return "Computer wins this round." on "scissors", "rock"', function() {
        expect(playRound('scissors', 'rock')).to.equal('Computer wins this round.');
    });
    
    it('should return "Computer wins this round." on "paper", "scissors"', function() {
        expect(playRound('paper', 'scissors')).to.equal('Computer wins this round.');
    });
    
    it('should return "Computer wins this round." on "rock", "paper"', function() {
        expect(playRound('rock', 'paper')).to.equal('Computer wins this round.');
    });
})