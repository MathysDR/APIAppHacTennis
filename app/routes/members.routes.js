module.exports = app => {
    const members = require("../controllers/members.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all members
    router.get("/findByGender/?", members.findByGender);
    router.get("/findByAge/?", members.findByAge);
    router.get("/findByRanking/?", members.findByRanking);
  
    app.use('', router);
  };