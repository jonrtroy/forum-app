const Topic = require('../../models/topics');
const Comments = require('../comments/controller');

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

controller.new = (req, res) => {
  res.render('topics/new');
}

controller.show = (req, res) => {
  Topic
  .findById(req.params.id)
  .then((data) => {
    res.render('topics/show', {
      topic: data
    })
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

controller.create = (req, res) => {
  Topic
  .save(req.body.topic)
  .then(() => {
    res.redirect('/topic')
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

controller.update = (req, res) => {
  Topic
  .update(req.body.topic, req.params.id)
  .then((data) => {
    res.redirect('/topic')
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

controller.edit = (req, res) => {
  Topic
  .findById(req.params.id)
  .then((data) => {
    res.render('topics/edit', {
      topic: data
    })
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

controller.like = (req, res) => {
  Topic
  .like(req.params.id)
  .then(() => {
    if (req.query.show) {
      res.redirect(`/topic/${req.params.id}`)
    } else {
      res.redirect('/topic')
    }
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

controller.destroy = (req, res) => {
  Topic
  .destroy(req.params.id)
  .then(() => {
    res.redirect('/topic')
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}



module.exports = controller;
