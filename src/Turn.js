const Card = require('../src/Card')

class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess
    this.card = card
  }

  returnGuess() {
    return this.userGuess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    if (this.userGuess === this.card.correctAnswer) {
      return this.giveFeedback(true)
    } else {
      return this.giveFeedback(false)
    }
  }

  giveFeedback(answer) {
    if (answer === this.card.correctAnswer) {
      return 'You are correct!'
    } else {
      return 'You are incorrect!'
    }
  }
}

module.exports = Turn;
