const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    text: String,
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    created_date: {type: Date, default: Date.now },
    modified_date: {type: Date, default: Date.now },
    modified_by: {type: Schema.Types.ObjectId, ref: 'User'},
    parentId: {type: Schema.Types.ObjectId, ref: 'Article', required: true},
    meta: {
      votes:  Number,
      favs:   Number,
    }
  }
);

module.exports = mongoose.model('Comment', CommentSchema);

