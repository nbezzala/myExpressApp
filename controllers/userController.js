const User = require('../models/users')

exports.user_list = async function(req, res) {
  let users = await User.find();
  res.json(users)
}


