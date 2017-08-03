const http = require('http');
const fs = require('fs');
const pg = require('pg');
const queryString = require('querystring');
const dbConnections = require('./Databases/db-connections.js');

const getData = require('./Queries/get-data.js');
const postData = require('./Queries/post-data.js');

const router = (req, res) => {

  if (req.url === '/') {
    fs.readFile(__dirname + "/../Public/index.html", function(error, file) {
      if (error) {
        res.writeHead(500, 'Content-Type:text/html');
        res.end('<h1>Sorry, our homepage is sleeping</h1>');

      }else {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(file);
      }
    });
  } else if (req.url.includes("/pick-a-genre/")){

  const genre = req.url.split('/')[2];
  getData(genre, dbConnections, (err, res) => {
    if (err) {
      response.writeHead(500, 'Content-Type: test/html');
      response.end('<h1>Sorry our librarian left!</h1>');
    } else {
      console.log(`${res} is awesome!`);
      let output = JSON.stringify(res);
      response.writeHead(200, {
          'content-type': 'application/json'
      });
      response.end(output);

    }
  });
  }
  else {
  const fileName = req.url;
  const fileType = req.url.split(".")[1];
fs.readFile(__dirname + "/../Public" + fileName, function(error, file) {
  if (error) {
    res.writeHead(500, 'Content-Type:text/html');
    res.end('<h1>Sorry, our homepage is sleeping</h1>');

  }else {
    res.writeHead(200, {"Content-Type":"text/" + fileType});
    res.end(file);
  }

});
}
};

module.exports = router;
