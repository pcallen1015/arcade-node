const winsCtrl = require('../controllers/wins.controller');

module.exports = (app) => {
    app.route('/wins')
        .get(winsCtrl.list)
        .post(winsCtrl.create);
}