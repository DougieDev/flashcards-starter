const http = require('http');
let app = http.createServer();
const Card = require('./src/Card')
const Deck = require('./src/Deck')
const Round = require('./src/Round');
const Turn = require('./src/Turn')
const Game = require('./src/Game')

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
const deck = new Deck([card1, card2, card3])
const round = new Round(deck);
const game = new Game(round);

game.start()
