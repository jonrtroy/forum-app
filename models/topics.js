// topics model
const db = require('../config/database');

let Topic = {};

// This orders the likes by most to least
Topic.findAll = () => {
  return db.query(`SELECT *
    FROM topics
    ORDER BY likes DESC`);
}
// This grabbed the topics by id
Topic.findTopicById = (id) => {
  return db.query(`SELECT *
    FROM topics
    WHERE id = $1`,
    [id]
  );
}
// this createsthe topic the user inputted
Topic.createTopic = (data) => {
  return db.query(
    `INSERT INTO topics
    (title, content)
    VALUES
    ($1, $2)`,
    [data.title, data.content]
  );
}
// this adds up the comments
Topic.sumComments = (id) => {
  return db.query(`UPDATE topics
    SET comments_number = comments_number + 1
    WHERE id = $1`,
    [id]
  );
}
// this allows the click button to add 1
Topic.likes = (id) => {
  return db.query(`UPDATE topics
    SET likes = likes + 1
    WHERE id = $1`,
    [id]
  );
}

module.exports = Topic;
