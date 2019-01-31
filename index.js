const express=require('express');
const path=require('path')
const mongoose=require('mongoose');
var bodyParser = require('body-parser')
const exphbs =require('express-handlebars');
mongoose.Promise=global.Promise;

require('./Models/dev')

const developer=mongoose.model('developer');

const keys=require('./keys/keys')

const app=express()

mongoose.connect(keys.mongoURI).then(()=>{
    console.log("Connected to mlab")
} ).catch( err=>{
    console.log(err)
})


//app.use(  express.static(__dirname+'/public')  )

app.use(express.static(path.join(__dirname,'public')));


// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: '.handlebars'}));

app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 

const devs=require('./routes/devs')


app.use('/',devs)

port=process.env.PORT || 3000

app.listen(port,()=>{

console.log("app listening on port ",port)

})