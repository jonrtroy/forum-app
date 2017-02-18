const router = require('express').Router();

router.use('/topic', require('./controllers/topics'));

module.exports = router;
