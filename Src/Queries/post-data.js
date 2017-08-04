const postData = (faccer, cohort, faclocation, moviename, rating, description, databaseConnection, cb) => {
  console.log('post Data has been called');
  databaseConnection.query('INSERT INTO movies (faccer, cohort, faclocation, moviename, rating, description) VALUES ($1, $2, $3, $4, $5, $6)', [faccer, cohort, faclocation, moviename, rating, description], (err,res) => {
    console.log('query has been made');
    if (err) {
      cb(err)
    } else {
      cb(null,res.rows);
      console.log("I sent data to database")
    }
  });
};

module.exports = postData;
