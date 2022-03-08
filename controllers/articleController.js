const Article = require('../models/articles');
const Category = require('../models/categories');
const {body, validationResult } = require('express-validator');

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

exports.create_category_get = async function(req, res) {
  res.render('category_form', {title: 'Create Category'});
}

exports.create_category_post = [
  body('name', 'Category name required').trim().isLength({min: 1}).escape(),
  body('description', 'Category description required').trim().isLength({min: 1}).escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    
    let category = new Category({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image
    });

    if(errors.isEmpty) {
      category.save(function(err) {
        if(err) { return next(err);}
        res.redirect(category.url)
      })

    } else {
      res.render('category_form', {title: 'Create Category', category: category, errors: errors.array()});
      return;
    }

  }
];