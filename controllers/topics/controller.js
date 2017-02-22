const Topic = require('../../models/topics');
const Comments = require('../../models/comments');

let controller = {};
//  runs the sql to render the topics
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
// renders the new page
controller.new = (req, res) => {
  res.render('topics/new');
}
// this renders the show page with the topic and
// the comments associated with that topic
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
// Runs when a topic is created and puts it on the index.ejs
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
// Runs when a comment is created and puts it on the topic that it was created on
// Also adds 1 when a comment is created
// Andres helped me out with for the sumComments and helping me figure out
// to work with the topic_id
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
// Runs when user clicks on the topic like button
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
// Runs when user clicks on the comment like button and
// loads the topic page that it was liked on
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
