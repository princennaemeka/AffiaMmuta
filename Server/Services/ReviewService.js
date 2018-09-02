var repository = require('../Repositories/UserRepository');
var mailer = require('../mailer');

exports.addReview = function(req, res, data){
    repository.add(data, function(err){
        if (err) res.json({err:err, message:'error,review not sent'});
        res.json({message: 'review submitted successfully'});
        var button = `Go to Market`;
        var body = 'Thank you for your constructive review, it will help us in our committment to increasing igbo literacy with technology.'
        mailer.sendMail(data.email, 'Affia-Mmuta Support', 'Supporter', body, button);
    });
}

exports.getAllReviews = function(req, res){
    repository.getAll({}, '-__v', function(err, data){
        if (err) res.json({err:err, message:'sorry an error occured while retrieving records'});
        res.json(data);
    });
}

