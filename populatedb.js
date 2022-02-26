#!/usr/bin/env node

console.log('Create some test data');

//const async = require('async');
const User = require('./models/users')
const Article = require('./models/articles')
const Fortune = require('./models/fortunes');

const env = require('dotenv').config();

const mongoDB = process.env.mongoDB;

const mongoose = require('mongoose')

main().catch(err => console.log(err));

var user = new User({
  name:   "Hema Murali Mohan",
  email:  "hemabezz@gmail.com",
  phone:  "989001298",
  created_date: Date.now(),
});

var article = new Article({
  title:  "The first article",
  summary:  "A summary of the first article",
  text: "This is the long text of the article",
  images: "http://someimage_url",
  author: "61ff57a82aad8c957dbbe158",
  modified_by: "61ff57a82aad8c957dbbe158"
});

let fortunes = [
	"Your boyfriend takes chocolate from strangers.",
	"Your business will assume vast proportions.",
	"Your business will go through a period of considerable expansion.",
	"Your depth of comprehension may tend to make you lax in worldly ways.",
	"Your domestic life may be harmonious.",
	"Your fly might be open (but don't check it just now).",
	"Your goose is cooked.",
	"(Your current chick is burned up too!)",
	"Your heart is pure, and your mind clear, and your soul devout.",
	"Your ignorance cramps my conversation.",
	"Your life would be very empty if you had nothing to regret.",
	"Your love life will be happy and harmonious.",
	"Your love life will be... interesting.",
	"Your lover will never wish to leave you.",
	"Your lucky color has faded.",
	"Your lucky number has been disconnected.",
	"Your lucky number is 3552664958674928.  Watch for it everywhere.",
	"Your mode of life will be changed for the better because of good news soon.",
	"Your mode of life will be changed for the better because of new developments.",
	"Your motives for doing whatever good deed you may have in mind will be misinterpreted by somebody.",
	"Your nature demands love and your happiness depends on it.",
	"Your object is to save the world, while still leading a pleasant life.",
	"Your own qualities will help prevent your advancement in the world.",
	"Your present plans will be successful.",
	"Your reasoning is excellent -- it's only your basic assumptions that are wrong.",
	"Your reasoning powers are good, and you are a fairly good planner.",
	"Your sister swims out to meet troop ships.",
	"Your society will be sought by people of taste and refinement.",
	"Your step will soil many countries.",
	"Your supervisor is thinking about you.",
	"Your talents will be recognized and suitably rewarded.",
	"Your temporary financial embarrassment will be relieved in a surprising manner.",
	"Your true value depends entirely on what you are compared with.",
];



async function main() {
  await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//  await user.save();
//    await article.save();

  users = await User.find();
  console.log(users);

  articles = await Article.find();
  console.log(articles);

  for (let i = 0; i < fortunes.length; i++) {
    fortune_text = fortunes[i];
    let fortune = new Fortune({
      text: fortune_text
    });
    fortune.save();
  }
  console.log("End of main function");


}

console.log("All done!");



