const db = require('../config/database.js');

let Topic = {};

Topic.findAll = () => {
  return db.query(`SELECT *
    FROM topics
    ORDER BY likes DESC`);
}

Topic.findTopicById = (id) => {
  return db.query(`SELECT *
    FROM topics
    WHERE id = $1`,
    [id]
  );
}

Topic.createTopic = (data) => {
  return db.query(
    `INSERT INTO topics
    (title, content)
    VALUES
    ($1, $2)`,
    [data.title, data.content]
  );
}

Topic.sumComments = (id) => {
  return db.query(`UPDATE topics
    SET comments_number = comments_number + 1
    WHERE id = $1`,
    [id]
  );
}

Topic.likes = (id) => {
  return db.query(`UPDATE topics
    SET likes = likes + 1
    WHERE id = $1`,
    [id]
  );
}

module.exports = Topic;
