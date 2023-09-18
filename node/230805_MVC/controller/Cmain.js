const Comment = require("../model/Comment");

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  console.log(Comment.commentInfos());
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

exports.comment = (req, res) => {
  const commentid = req.params.id;
  const comments = Comment.commentInfos();
  console.log(comments[commentid - 1]);
  if (isNaN(commentid)) return res.render("404");
  if (commentid < 1 || commentid > comments.length) return res.render("404");
  res.render("comment", { commentInfo: comments[commentid - 1] });
};
