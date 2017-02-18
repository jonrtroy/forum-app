const Topic = require('../../models/topics');
const Comments = require('../../models/comments');

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
  .then((topics) => {
    Comments
    .findAllById(req.params.id)
    .then((comments) => {
      res.render('topics/show', {
        topic: topics[0],
        comments: comments
      });
    })
    .catch((err) => {
      res
      .status(400)
      .send(err);
    });
  })
}

// Thread
// .findThreadById(req.params.id)
// .then((threads) => {
//   Comments
//   .findAllByThreadId(req.params.id)
//   .then((comments) => {
//     res.render('forum_app/show.ejs', {
//       thread: threads[0],
//       comments: comments
//     });
//   })
// })
// .catch((err) => {
//   res
//   .status(400)
//   .send(err);
// });

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

controller.createComment = (req, res) => {
  Comments
  .createComment(req.body.comments, req.params.id)
  .then(() => {
    res.redirect(`/topic/${req.params.id}`);
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
    res.redirect('/topic');
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
      topic: data[0]
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

// controller.destroy = (req, res) => {
//   Topic
//   .destroy(req.params.id)
//   .then(() => {
//     res.redirect('/topic')
//   })
//   .catch((err) => {
//     res
//     .status(400)
//     .send(err);
//   });
// }



module.exports = controller;
