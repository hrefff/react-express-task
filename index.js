const express = require('express');
// const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();
const port = 3005;

//
// middlewares
//

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  console.log(req.get('User-Agent'));
  next();
});

// data
let cards = [
  {
    id: 1,
    text: 'Card1',
    img_url:
      'https://tn.fishki.net/26/upload/post/201406/23/1279678/xYjUKHJssWQ.jpg',
  },
  {
    id: 2,
    text: 'Card2',
    img_url: 'https://pets2.me/media/res/7/3/5/1/7351.oyp8po.620.jpg',
  },
  {
    id: 3,
    text: 'Card3',
    img_url:
      'https://cs8.pikabu.ru/post_img/big/2016/11/15/6/1479201107192225974.jpg',
  },
];

//
// routes
//

// index
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// show all cards
app.get('/card/', (req, res) => {
  res.send(cards);
});

// show one cards
app.get('/card/:id', (req, res) => {
  res.send(cards.find((card) => card.id == req.params.id));
});

// create new card
app.post('/card/', (req, res) => {
  const new_card = {};
  new_card.id = cards.length + 1;
  new_card.text = req.body.text;
  new_card.img_url = req.body.img_url;
  cards.push(new_card);
  res.send(new_card);
});

//
app.put('/card/:id', (req, res) => {
  res.send('Got a PUT request');
});

// delete
app.delete('/card/:id', (req, res) => {
  const delete_card = cards.find((card) => card.id == req.params.id);
  // console.log(delete_card);
  cards = cards.filter((card) => card.id != req.params.id);
  // console.log(cards);
  res.send(delete_card);
});

// run server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
