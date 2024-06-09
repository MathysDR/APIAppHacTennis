const sql = require("./db.js");

// constructor
const Members = function(members) {
  this.Name = members.Name;
  this.FirstName = members.FirstName;
  this.Age = members.Age;
  this.Gender =  members.Gender;
  this.Ranking = members.Ranking;
  this.Id = members.Id;
  this.RankId = members.RankId;
};

// Members.create = (newMembers, result) => {
//   sql.query("INSERT INTO members SET ?", newMembers, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created members: ", { id: res.insertId, ...newMembers });
//     result(null, { id: res.insertId, ...newMembers });
//   });
// };

// get all members by gender (1 or 2)
Members.getAllByGender = (gender, result) => {
  sql.query(
    `SELECT * FROM members WHERE Gender = ${gender}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("members: ", res);
      result(null, res);
    }
  );
}

// get all members between a range of ages (minAge and maxAge)
Members.getAllBetweenAges = (minAge, maxAge, result) => {
  sql.query(
    `SELECT * FROM members WHERE Age BETWEEN ${minAge} AND ${maxAge}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("members: ", res);
      result(null, res);
    }
  );
}

// get all members between a range of ranks (minRank and maxRank) using rankId
Members.getAllBetweenRanks = (minRank, maxRank, result) => {
  sql.query(
    `SELECT * FROM members WHERE RankId BETWEEN ${minRank} AND ${maxRank}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("members: ", res);
      result(null, res);
    }
  );
}

Members.getByGenderAge = (gender, minAge, maxAge, result) => {
  sql.query(
    `SELECT * FROM members WHERE Gender = ${gender} AND Age BETWEEN ${minAge} AND ${maxAge}`
    , (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("members: ", res);
      result(null, res);
    }
  );
}

Members.getByGenderRank = (gender, minRank, maxRank, result) => {
  sql.query(
    `SELECT * FROM members WHERE Gender = ${gender} AND RankId BETWEEN ${minRank} AND ${maxRank}`
    , (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("members: ", res);
      result(null, res);
    }
  );
}

Members.getByAgeRank = (minAge, maxAge, minRank, maxRank, result) => {
  sql.query(
    `SELECT * FROM members WHERE Age BETWEEN ${minAge} AND ${maxAge} AND RankId BETWEEN ${minRank} AND ${maxRank}`
    , (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("members: ", res);
      result(null, res);
    }
  );
}

Members.getByMultipleFilters = (gender, minAge, maxAge, minRank, maxRank, result) => {
  sql.query(
    `SELECT * FROM members WHERE Gender = ${gender} AND Age BETWEEN ${minAge} AND ${maxAge} AND RankId BETWEEN ${minRank} AND ${maxRank}`
    , (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("members: ", res);
      result(null, res);
    }
  );
}
  

// Members.updateById = (id, members, result) => {
//   sql.query(
//     "UPDATE members SET Age = ?, Gender = ?, Ranking = ? WHERE id = ?",
//     [members.Age, members.Gender, members.Rankings, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found members with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated members: ", { id: id, ...members });
//       result(null, { id: id, ...members });
//     }
//   );
// };

module.exports = Members;