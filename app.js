const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let ejs = require('ejs')

var userRouter = require('./router/users.route');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));


app.use(express.static('public'));
app.use('/users', userRouter);

// Set router in here
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  });  
app.listen(port, function(){
    console.log("listening on port : " + port);    
});
