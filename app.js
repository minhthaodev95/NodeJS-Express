const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var userRouter = require('./router/users.route');
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/users', userRouter);

// Set router in here
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  });  
app.listen(port, function(){
    console.log("listening on port : " + port);    
});
