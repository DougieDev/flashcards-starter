const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Turn = require('../src/Turn')

describe('Round', function() {
  var card1, card2, card3, deck, round, turn;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3])
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
  });

  it('should start with no turns', function() {
    expect(round.turns).to.equal(0)
  });

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  });

  it('should update the turn count regardless of whether the guess is correct or incorrect', function() {
    round.takeTurn('sea otter');

    expect(round.turns).to.equal(1)
  });

  it('should make the next card in the deck the current card', function() {
    round.takeTurn('sea otter');

    expect(round.currentCard).to.equal(card2);
  });

  it('should evaluate the guess and store id of incorrect guesses', function (){
    round.takeTurn('spleen');
    round.takeTurn('donkey');

    expect(round.incorrectGuesses).to.deep.equal([1, 14]);
  });

  it('should check the users guess and give feedback when a turn is completed', function() {
    expect(round.takeTurn('sea otter')).to.equal('CORRECT!');
    expect(round.takeTurn('ndkjgkjadng')).to.equal('INCORRECT!');
  });

  it('should calculate and return the percentage of incorrect guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('potato');
    expect(round.calculatePercentCorrect()).to.equal(50)
  });

  it('should tell the user when the round is over and what percentage of questions they got correct', function() {
    round.takeTurn('sea otter')
    round.takeTurn('spleen')
    round.takeTurn('watching Netflix')
    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!')
  })
});
