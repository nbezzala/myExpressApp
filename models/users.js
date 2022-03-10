const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema (
  {
    name: {type: String, required: true, maxLength: 100},
    email:  {type: String, required: true, maxLength: 100},
    phone:  {type: String, maxLength: 100},
    created_date: {type: Date},
    modified_date:  {type: Date},
    description: {type: String},
    liked_categories: [
      { type: Schema.Types.ObjectId, ref: 'CategorySchema' }
    ]
  }
);

module.exports = mongoose.model('User', UserSchema);

