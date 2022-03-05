const Article = require('../models/articles');
const Category = require('../models/categories');

exports.article_list = async function(req, res) {
  let articles = await Article.find();
  res.json(articles)
}

exports.categories = async function(req, res) {
  let categories = await Category.find();
  res.json(categories);
}

exports.category_articles = async function(req, res) {
  const categoryId = req.params.categoryId;
  let articles = await Article.find({categoryId: categoryId});
  res.json(articles)
}
