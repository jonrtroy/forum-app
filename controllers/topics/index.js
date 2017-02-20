const router = require('express').Router();
const controller = require('./controller');


router.put('/:topic_id/topicLikes', controller.topicLikes);

router.put('/:topic_id/:commentLikes', controller.commentLikes);

router.get('/new', controller.new);

router.get('/:topic_id', controller.show);

router.get('/', controller.index);

router.post('/', controller.create);

router.post('/:topic_id', controller.createComment);

module.exports = router;
