const db = require('../config/database');

const comment = {};

comment.findAllById = (id) => {
  return db.query(`SELECT * FROM comments WHERE topic_id = $1`, [id]);
}

comment.createComment = (comment, id) => {
  return db.query(`
    INSERT INTO comments
    (username, comment, topic_id)
    VALUES
    ($1, $2, $3)`,
    [comment.username, comment.comment, id]
  );
}

comment.like = (id) => {
  return db.query(`
    UPDATE comments
    SET likes = likes + 1
    WHERE id = $1`,
    [id]
  );
}

module.exports = comment;
