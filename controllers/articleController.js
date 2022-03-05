const Article = require('../models/articles')

exports.article_list = async function(req, res) {
  let articles = await Article.find();
  res.json(articles)
}

exports.category_articles = async function(req, res) {
  const categoryId = req.params.categoryId;
  let articles = await Article.find({categoryId});
  res.json(articles)
}
