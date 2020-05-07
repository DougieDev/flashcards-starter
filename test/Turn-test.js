const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a guess', function() {
    const turn = new Turn('pug');
    expect(turn.userGuess).to.equal('pug');
  });

  it('should have a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.card).to.be.an.instanceof(Card)
    expect(turn.card).to.equal(card);
  });

  it('should return the users guess', function() {
    const turn = new Turn('pug');
    expect(turn.returnGuess(), 'pug')
  });

  it('should return an instantiation of Card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card)

    expect(turn.returnCard()).to.equal(card)
  });



})
