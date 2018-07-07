var articles = [];

module.exports.create = function(req, res) {
	articles.push(req.body);
	res.redirect('/articles');
};

module.exports.index = function(req, res) {
	res.json(articles);
}

module.exports.new = function(req, res) {
	res.send("<form method='post' action = '/articles'>\
		<input type = 'text' placeholder='Title' name='Title'>\
		<input type = 'text' placeholder='Auothur' name='Auothur'>\
		<textarea  placeholder='Your Post' name='Post'></textarea>\
		<button type='submit'>Post!</button>\
		</form>");
};