const db = require('../config/database');

let Topic = {};

Topic.findAll = () => {
  return db.query('SELECT * FROM topics');
}

Topic.save = (topic) => {
  return db.query(`
    INSERT INTO topics
    (title, content, username)
    VALUES
    ($1, $2, $3)`,
    [topic.title, topic.content, topic.username]
  );
}

Topic.findById = (id) => {
  return db.one(`
    SELECT *
    FROM topics
    WHERE id = $1`,
    [id]
  );
}

Topic.update = (topic, id) => {
  return db.none(`
    UPDATE topics SET
    likes = $1,
    title = $2,
    content = $3,
    username = $4
    WHERE id = $5`,
    [topic.likes, topic.title, topic.content, topic.username,
    id]
  );
}

Topic.like = (id) => {
  return db.none(`
    UPDATE topics
    SET likes = likes + 1
    WHERE id = $1`,
    [id]
  );
}

module.exports = Topic;
