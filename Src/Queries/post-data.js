const postData = (faccer, cohort, faclocation, moviename, rating, description, action, animation, comedy, documentary, drama, familyfriendly, horror, romance, scifi, thriller, databaseConnection, cb) => {
  databaseConnection.query(`INSERT INTO movies (faccer, cohort, faclocation, moviename, rating, description, action, animation, comedy, documentary, drama, familyfriendly, horror, romance, scifi, thriller) VALUES ('${faccer}', ${cohort}, '${faclocation}', '${moviename}', ${rating}, '${description}', ${action}, ${animation}, ${comedy}, ${documentary}, ${drama}, ${familyfriendly}, ${horror}, ${romance}, ${scifi}, ${thriller}) RETURNING * ; `, (err,res) => {
    if (err) {
      cb(err)
    } else {
      cb(null,res.rows);
    }
  });
};

module.exports = postData;
