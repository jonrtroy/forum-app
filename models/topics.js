const db = require('../config/database');

let Topic = {};

Topic.findAll = () => {
  return db.query('SELECT * FROM topics');
}

module.exports = Topic;
