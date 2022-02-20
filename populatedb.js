#!/usr/bin/env node

console.log('Create some test data');

//const async = require('async');
const User = require('./models/users')
const Article = require('./models/articles')

const mongoDB = 'mongodb://ajnabee-mongodb:ycdNOxFywhG2IPCXdp9TLPzPt3RKBFpxT7L4JgaZnKAROEizr8P6hZl7Li2Ni0Cy1N02Aau1ORNCCcyOHFJ1eQ==@ajnabee-mongodb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@ajnabee-mongodb@';

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

async function main() {
  await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//  await user.save();
    await article.save();

  users = await User.find();
  console.log(users);

  articles = await Article.find();
  console.log(articles);

}





