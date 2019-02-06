const express = require("express")
const router = express.Router()
const models = require("../models")
const Page = models.Page;
const User = models.User;

router.get('/', function(req, res, next) {
  res.send('funcionó GET /wiki/');
});

router.get("/add", function(req,res,next){
	res.render("addpage")
});

router.post("/", function(req,res,next){
	res.json(req.body)

	var page = Page.build({
    	title: req.body.title,
    	content: req.body.postContent
  	});
  	page.save()
});


module.exports = router