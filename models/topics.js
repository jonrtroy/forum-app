const db = require('../config/database');

let Topic = {};

Topic.findAll = () => {
  return db.query(`SELECT *
  FROM topics
  ORDER BY likes DESC`);
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
  return db.query(`
    SELECT *
    FROM topics
    WHERE id = $1`,
    [id]
  );
}

Topic.update = (topic, id) => {
  return db.query(`
    UPDATE topics SET
    title = $1,
    content = $2,
    username = $3
    WHERE id = $4`,
    [topic.title, topic.content, topic.username,
    id]
  );
}

Topic.like = (id) => {
  return db.query(`
    UPDATE topics
    SET likes = likes + 1
    WHERE id = $1`,
    [id]
  );
}

// Topic.destroy = (id) => {
//   return db.query(`
//     DELETE FROM topics
//     WHERE id = $1`,
//     [id]
//   );
// }


module.exports = Topic;
