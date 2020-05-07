const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
    this.currentCard = this.deck.shift()
    this.correctGuesses = 0
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    const turn =  new Turn(guess, this.returnCurrentCard())
    this.turns++
    if (!this.currentCard.answers.includes(guess)) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    if (this.currentCard.answers.includes(guess)) {
      this.correctGuesses++
    }
    this.currentCard = this.deck.shift()
    return turn.giveFeedback(guess)
     // turn
  }

  calculatePercentCorrect() {
    return (this.correctGuesses) * 100 / this.turns
  }

  endRound() {
    console.log(this.deck.length)
    if(this.deck.length === 0) {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
  }
}

module.exports = Round;
