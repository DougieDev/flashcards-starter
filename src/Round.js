const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
    this.currentCard = this.deck.shift()
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    this.turns++
    if (!this.currentCard.answers.includes(guess)) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.currentCard = this.deck.shift()
    return new Turn(guess, this.returnCurrentCard())
// Feedback is returned regarding whether the guess is incorrect or correct
  }

  // turns() {
  //   return this.turn
  // }
}

module.exports = Round;
