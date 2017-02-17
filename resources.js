const router = require('express').Router();

router.use('/topic', require('./controllers/topics'));

router.use('/comment', require('./controllers/comments'));

module.exports = router;
