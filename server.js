var express = require('express'),
	app = express(),
	articles = require('./controllers/articles');


app.use(express.logger());
app.use(express.bodyParser());


var notImplimented = function(req,res){
	res.send(501);
}

app.get('/articles',articles.index);
app.get('/articles/new',articles.new);
app.get('/articles/:articleId',notImplimented);

app.post('/articles',articles.create);

app.put('/articles:articleId',notImplimented);
app.delete('/articles:articleId',notImplimented);

//comment
app.post('/articles/:articleId/comment',notImplimented);
app.delete('/articles/:articleId/comment/:commentId',notImplimented);
app.listen(8080);