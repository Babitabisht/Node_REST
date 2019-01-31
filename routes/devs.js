const express = require("express");
require("../Models/dev");
const mongoose = require("mongoose");
const developer = mongoose.model("developer");
const router = express.Router();

//var dev=new developer(devv

var dev = new developer({
  name: "Hritik bisht",
  lang: "Javascript"
});

router.get("/", (req, res) => {
  // dev.save().then(done=>{
  //     console.log(done)
  //     console.log("Successfully added to database")
  // }).catch(err=>{
  // console.log(err)

  // })

  console.log("Inside");

  res.render("home");
});

router.get("/getDevs", (req, res) => {
  developer
    .find()
    .then(devs => {
      console.log(devs);

      res.send(devs);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/addDevs", (req, res) => {
  res.render("addDevs");
});

router.post("/addDevs", (req, res) => {
  console.log(req.body.name);
  console.log(req.body.lang);
var dev= new developer({
    name:req.body.name,
    language:req.body.lang
})

dev.save().then(done=>{
console.log(done)
res.redirect('/getDevs')

}).catch(err=>{
    console.log(err)
})

});

module.exports = router;
