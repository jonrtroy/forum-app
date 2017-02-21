// Setting up the routes for the project
const router = require('express').Router();
// /topic will be the main page
router.use('/topic', require('./controllers/topics'));

module.exports = router;
