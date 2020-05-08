const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round');
const Turn = require('../src/Turn')
const Game = require('../src/Game')

describe('Game', function() {
  var card1, card2, card3, deck, round, turn;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3])
    round = new Round(deck);
    game = new Game(round);
  });

  it('should keep track of the current round', function() {
    game.start()
    expect(game.currentRound()).to.deep.equal(round);
  });

  describe('Game - Start Method', function() {
    it('should be able to create cards and put cards in the deck', function() {
      game.start()
      expect(game.round.deck).to.deep.equal([card2, card3]);
    });

    it('should be able to create a new round using the deck', function() {
      game.start()
      expect(game.round).to.be.an.instanceof(Round)
    });
  });
});
