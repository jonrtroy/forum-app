const db = require('../config/database.js');

let Comments = {};

Comments.findAllByTopicId = (id) => {
  return db.query(`SELECT *
    FROM comments
    WHERE topic_id = $1
    ORDER BY likes DESC`, [id]);
}

Comments.createComment = (data, id) => {
  return db.query(
    `INSERT INTO comments
    (content, topic_id)
    VALUES
    ($1, $2)`,
    [data.content, id]
  );
}

Comments.likes = (id) => {
  return db.query(`UPDATE comments
    SET likes = likes + 1
    WHERE id = $1`,
    [id]
  );
}

module.exports = Comments;
