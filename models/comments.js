const db = require('../config/database');

let Comments = {};
// this orders the comment likes by most to least
Comments.findAllByTopicId = (id) => {
  return db.query(`SELECT *
    FROM comments
    WHERE topic_id = $1
    ORDER BY likes DESC`,
    [id]
  );
}
// this allows the user to create a comment
Comments.createComment = (data, id) => {
  return db.query(
    `INSERT INTO comments
    (content, topic_id)
    VALUES
    ($1, $2)`,
    [data.content, id]
  );
}
// this allows the comment likes to add 1 each time someone clicks the like button
Comments.likes = (id) => {
  return db.query(`UPDATE comments
    SET likes = likes + 1
    WHERE id = $1`,
    [id]
  );
}

module.exports = Comments;
