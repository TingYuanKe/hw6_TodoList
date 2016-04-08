var Data = require('../models/data');

module.exports = function(req, res, next) {
var data = new Data({
	title: req.body.title,
	content: req.body.content
});
data.save(function(err){
		if (err) throw err;
		console.log('data saved!');
	}).then(
		Data.find({}, function(err, list) {
			if (err) throw err;
			 res.redirect('/');
		})
	);
};
