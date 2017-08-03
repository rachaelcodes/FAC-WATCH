const getData = (genre, databaseConnection, cb) => {
  databaseConnection.query(`SELECT * FROM movies WHERE ${genre}=true;`, (err, res) => {
    if (err){
      cb(err)
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;
