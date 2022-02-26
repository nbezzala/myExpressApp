const Fortune = require('../models/fortunes')

exports.random_fortune = async function(req, res) {
  let fortune = await Fortune.aggregate([{$sample: {size: 1}}]);
  res.json(fortune);
}


