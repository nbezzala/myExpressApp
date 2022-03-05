const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name:  {type: String, required: true},
    description:  {type: String, required: true},
    tagline: String, 
    images: String,
    created_date: {type: Date, default: Date.now },
    modified_date: {type: Date, default: Date.now },
    modified_by: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    meta: {
      votes:  Number,
      favs:   Number,
    }
  }
);

module.exports = mongoose.model('Category', CategorySchema);

