const express = require("express")
const router = express.Router()
const models = require("../models")
const Page = models.Page;
const User = models.User;

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/add", function(req,res,next){
	res.render("addpage")
});

router.post("/", function(req,res,next){

	Page.create({
    	title: req.body.title,
    	content: req.body.postContent
  	})
  	.then(function(page){
  		console.log(page)
  		res.render("wikipage")
  	})
  	

});

router.get("/:urltitle", function(req,res,next){
	Page.findOne({
			where: {
				urltitle : req.params.urltitle
			}
		})
	.then(function(foundPage){
		res.render("wikipage")
	})
	.catch(next);
		
});


module.exports = router