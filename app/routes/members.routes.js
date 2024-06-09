module.exports = app => {
    const members = require("../controllers/members.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all members
    router.get("/findByGender/?", members.findByGender);
    router.get("/findByAge/?", members.findByAge);
    router.get("/findByRanking/?", members.findByRanking);
    // router.get("/findByRankId/?", members.findByRankId);
    router.get("/findByGenderAge/?", members.findByGenderAge);
    router.get("/findByGenderRank/?", members.findByGenderRank);
    router.get("/findByAgeRank/?", members.findByAgeRank);
    router.get("/findByMultipleFilters/?", members.findByMultipleFilters);
  
    app.use('', router);
  };