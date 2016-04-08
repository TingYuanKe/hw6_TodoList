var Data = require('../models/data');

module.exports = function(req, res, next) {
	Data.find({}, function(err, list) {
		if (err) throw err;
		res.render('index', {listinfos: list});
	})
};
