const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FortuneSchema = new Schema(
  {
    text:  {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    created_date: {type: Date, default: Date.now },
    modified_date: {type: Date, default: Date.now },
    modified_by: {type: Schema.Types.ObjectId, ref: 'User'},
    meta: {
      votes:  Number,
      favs:   Number,
    }
  }
);

module.exports = mongoose.model('Fortune', FortuneSchema);

