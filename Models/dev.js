const mongoose=require('mongoose');
//mongoose.Promise=global.Promise
const Schema=mongoose.Schema;

var developer=new Schema({

name:String,

language:String


})


mongoose.model('developer',developer);