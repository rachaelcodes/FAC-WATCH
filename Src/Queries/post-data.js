const postData = (faccer, cohort, faclocation, moviename, rating, description, action, animation, comedy, documentary, drama, familyfriendly, horror, romance, scifi, thriller, databaseConnection, cb) => {
  databaseConnection.query(`INSERT INTO movies (faccer, cohort, faclocation, moviename, rating, description, action, animation, comedy, documentary, drama, familyfriendly, horror, romance, scifi, thriller) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16),RETURNING * ;`  [ faccer, cohort, faclocation, moviename, rating, description, action, animation, comedy, documentary, drama, familyfriendly, horror, romance, scifi, thriller], (err,res) => {
    if (err) {
      cb(err)
    } else {
      cb(null,res.rows);
    }
  });
};

module.exports = postData;
