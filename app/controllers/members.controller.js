const members = require("../models/members.model.js");

// // Create and Save a new members
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Le contenu ne peut pas être vide !"
//     });
//   }

//   // Create a members
//   const members = new members({
//     Name: req.body.Name,
//     FirstName: req.body.FirstName,
//     Age: req.body.Age,
//     Gender: req.body.Gender,
//     Ranking: req.body.Ranking,
//     Id: req.body.Id,
//     RankId: req.body.RankId,
//   });

//   // Save members in the database
//   members.create(members, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the members."
//       });
//     else res.send(data);
//   });
// };

// Retrieve all members from the database (with condition).
exports.findByGender = (req, res) => {
  const gender = req.query.gender;

  members.getAllByGender(gender, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erreur lors de la récupération des membres."
      });
    else res.send(data);
  });
  
};

exports.findByAge = (req, res) => {
  const minAge = req.query.minAge;
  const maxAge = req.query.maxAge;

  members.getAllBetweenAges(minAge, maxAge, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erreur lors de la récupération des membres."
      });
    else res.send(data);
  });

};

exports.findByRanking = (req, res) => {
  const minRank = req.query.minRank;
  const maxRank = req.query.maxRank;

  members.getAllBetweenRanks(minRank, maxRank, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members."
      });
    else res.send(data);
  });
  
};

exports.findByRankId = (req, res) => {
  const RankId = req.query.RankId;

  members.getAll(RankId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members."
      });
    else res.send(data);
  });
  
};

// Find a single members with a id
exports.findOne = (req, res) => {
  
};

// find all published members
exports.findAllPublished = (req, res) => {
  
};

// Update a members identified by the id in the request
exports.update = (req, res) => {
  
};

// Delete a members with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all members from the database.
exports.deleteAll = (req, res) => {
  
};