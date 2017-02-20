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
    .findTopicById(req.params.topic_id)
    .then((topics) => {
      Comments
      .findAllByTopicId(req.params.topic_id)
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

controller.create = (req, res) => {
  Topic
  .createTopic(req.body.topics)
  .then((data) => {
    res.redirect(`/topic`)
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

controller.createComment = (req, res) => {
  Comments
  .createComment(req.body.comments, req.params.topic_id)
  .then(() => {
    res.redirect(`/topic/${req.params.topic_id}`);
  })
  Topic
  .sumComments(req.params.topic_id)
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

controller.topicLikes = (req, res) => {
  Topic
  .likes(req.params.topic_id)
  .then(() => {
    res.redirect(`/topic`)
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

controller.commentLikes = (req, res) => {
  Comments
  .likes(req.params.commentLikes)
  .then(() => {
    res.redirect(`/topic/${req.params.topic_id}`)
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

module.exports = controller;
