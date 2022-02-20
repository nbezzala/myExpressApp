const Article = require('../models/articles')

exports.article_list = async function(req, res) {
  let articles = await Article.find();
  res.json(articles)
}


