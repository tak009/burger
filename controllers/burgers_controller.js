var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
  burger.selectAll(function(data){
    var burgersObj = {
        burgers: data
    };
    res.render("index", burgersObj);
  });
});

router.post("/api/burgers", function(req, res){
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(result){
    res.json({id: result.insertId});
  });
});

router.put("/api/burgers/:id", function(req, res){
  burger.updateOne("devoured",[parseInt(req.body.devoured)], [parseInt(req.params.id)], function(result){
    if(result.changedRows == 0){
      return res.status(404).end();
    } else {
      return res.status(200).end();
    }
  });
});

module.exports = router;
