const Topic = require('../../models/topics');

let controller = {};

controller.index = (req, res) => {
  Topic
  .findAll()
  .then((data) => {
    res.render('topics/index', {
      topics: data
    });
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

module.exports = controller;
