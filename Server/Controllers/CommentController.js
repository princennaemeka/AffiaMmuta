var model = require('../models/Comment');
var service = require('../Services/CommentService');

exports.addComment = function (req, res){
    var data = {
        user: req.body.user,
        commentBody: req.body.commentBody,
        book: req.body.book,
        time: Date.now(),
        commentCount: req.body.commentCount,
    }
    return service.addComment(req, res, data);
}

exports.deleteComment = function (req, res){
    var data = {_id: req.params.id};
    return service.deleteComment(req, res, data);
}

exports.getComments = function (req, res){
    return service.getAllComments(req, res,);
}

exports.getCommentByParam = function (req, res){
    var options = req.query;
    return service.getCommentByParam(req, res, options);
}

exports.getCommentById = function (req, res){
    var id = req.params.id;
    return service.getCommentById(req, res, id);
}

exports.updateComment = function(req, res){
    var id = req.params.id
    var options = req.body;
    return service.updateComment(req, res, id, options);
}
