const sql = require("./db.js");

// constructor
const Profile = function(profile) {
  this.id = profile.id;
  this.UserName = profile.UserName;
  this.Password = profile.Password;
};

Profile.create = (newMembers, result) => {
  sql.query("INSERT INTO profile SET ?", newMembers, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created profile: ", { id: res.insertId, ...newMembers });
    result(null, { id: res.insertId, ...newMembers });
  });
};

Profile.findById = (id, result) => {
  sql.query(`SELECT * FROM profile WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found profile: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Profile with the id
    result({ kind: "not_found" }, null);
  });
};

Profile.getAll = (UserName, result) => {
  let query = "SELECT * FROM profile";

  if (UserName) {
    query += ` WHERE UserName LIKE '%${UserName}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("profile: ", res);
    result(null, res);
  });
};

// Profile.getAllPublished = result => {
//   sql.query("SELECT * FROM profile WHERE published=true", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("profile: ", res);
//     result(null, res);
//   });
// };

Profile.updateById = (id, profile, result) => {
  sql.query(
    "UPDATE profile SET UserName = ?, Password = ? WHERE id = ?",
    [profile.UserName, profile.Password, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Profile with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated profile: ", { id: id, ...profile });
      result(null, { id: id, ...profile });
    }
  );
};

Profile.remove = (id, result) => {
  sql.query("DELETE FROM profile WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Profile with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted profile with id: ", id);
    result(null, res);
  });
};

Profile.removeAll = result => {
  sql.query("DELETE FROM profile", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} profile`);
    result(null, res);
  });
};

module.exports = Profile;