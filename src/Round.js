const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deckSize = deck.cards.length
    this.deck = deck.cards
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
    if (this.currentCard.correctAnswer !== guess) {
      this.incorrectGuesses.push(this.currentCard.id)
    } else {
      this.correctGuesses++
    }
    this.currentCard = this.deck.shift()
    var endRoundFeedback = this.endRound() || '';
    return turn.giveFeedback(guess) + endRoundFeedback
  }

  calculatePercentCorrect() {
    return ((this.correctGuesses) * 100 / this.turns).toFixed(2)
  }

  endRound() {
    if(this.deckSize === this.turns) {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
  }
}

module.exports = Round;
