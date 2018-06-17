const Win = require('mongoose').model('Win');

exports.list = (req, res) => {
    Win.find({}, (error, wins) => {
        if (error) {
            console.log('ERROR');
            console.log(error);
            return res.status(500).send(error);
        }

        return res.jsonp(wins);
    });
}

exports.create = (req, res) => {
    new Win(req.body).save((error, win) => {
        if (error) {
            console.log('ERROR');
            console.log(error);
            return res.status(500).send(error);
        }

        return res.jsonp(win);
    });
}