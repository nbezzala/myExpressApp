const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name:  {type: String, required: true},
    description:  {type: String, required: true},
    tagline: String, 
    image: String,
    private: {type: Boolean, default: false},
    created_date: {type: Date, default: Date.now },
    modified_date: {type: Date, default: Date.now },
    modified_by: {type: Schema.Types.ObjectId, ref: 'User'},
    meta: {
      votes:  Number,
      favs:   Number,
    }
  }
);

CategorySchema
  .virtual('url')
  .get(function() {
    return '/blog/category/' + this.id
  })

module.exports = mongoose.model('Category', CategorySchema);

