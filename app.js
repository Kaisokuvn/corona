var express = require('express');
var index = require('./controllers/index');
var result = require('./controllers/result');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.set('views', 'views');

app.use(express.static(__dirname+'/public'));

index(app);
result(app);




app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})