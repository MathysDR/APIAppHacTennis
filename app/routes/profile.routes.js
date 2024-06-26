module.exports = app => {
    const profile = require("../controllers/profile.controller.js");
  
    var router = require("express").Router();
  
    // Create a new profile
    router.post("/", profile.create);
  
    // Retrieve all profile
    router.get("/", profile.findAll);
  
    // Retrieve all published profile
    router.get("/published", profile.findAllPublished);
  
    // Retrieve a single profile with id
    router.get("/:id", profile.findOne);
  
    // Update a profile with id
    router.put("/:id", profile.update);
  
    // Delete a profile with id
    router.delete("/:id", profile.delete);
  
    // Delete all profile
    router.delete("/", profile.deleteAll);
  
    app.use('/api/profile', router);
  };