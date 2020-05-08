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
      return 'CORRECT!'
    } else {
      return 'INCORRECT!'
    }
  }
}

module.exports = Turn;
