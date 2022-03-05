const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    title:  {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    summary:  {type: String, required: true},
    text: String, 
    images: String,
    created_date: {type: Date, default: Date.now },
    modified_date: {type: Date, default: Date.now },
    modified_by: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    categoryId: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
    meta: {
      votes:  Number,
      favs:   Number,
    }
  }
);

module.exports = mongoose.model('Article', ArticleSchema);

