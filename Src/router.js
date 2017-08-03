const http = require('http');
const fs = require('fs');
const pg = require('pg');
const queryString = require('querystring');
const dbConnections = require('./Databases/db-connections.js');

const getData = require('./Queries/get-data.js');
const postData = require('./Queries/post-data.js');
const validator = require('./validator.js')

const router = (req, response) => {

  if (req.url === '/') {
    fs.readFile(__dirname + "/../Public/index.html", function(error, file) {
      if (error) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, our homepage is sleeping</h1>');

      }else {
        response.writeHead(200, {"Content-Type":"text/html"});
        response.end(file);
      }
    });
  } else if (req.url.includes("/pick-a-genre/")){

  const genre = req.url.split('/')[2];
  getData(genre, dbConnections, (err, res) => {
    if (err) {
      response.writeHead(500, 'Content-Type: test/html');
      response.end('<h1>Sorry our librarian left!</h1>');
    } else {

      let output = JSON.stringify(res);
      console.log(output);
      response.writeHead(200, {
          'content-type': 'application/json'
      });
      response.end(output);

    }
  });
 }
else if (req.url.split('/')[1] === 'review-film') {
  let data = '';
  req.on('data', function(chunk) {
      data += chunk;
  });
  req.on('end', () => {
    console.log('request made');
      const name = queryString.parse(data).name;
      console.log('name', name);
      const location = queryString.parse(data).location;
      const cohortNumber = queryString.parse(data).cohortNumber;
      const moviename = queryString.parse(data).moviename;
      const ratingnumber = queryString.parse(data).ratingnumber;
      const description = queryString.parse(data).description;

      if (validator.validateAll(name, location, moviename, cohortNumber, description, ratingnumber).isValid) {
        console.log('entry is valid');
        postData(name, cohortNumber, location, moviename, ratingnumber, description, action, animation, comedy, documentary, drama, familyfriendly, horror, romance, scifi, thriller, dbConnections,(err, res) => {
          if (err) {
            response.writeHead(500, 'Content-Type:text/html');
            response.end('<h1>Sorry, there was a problem adding that movie</h1>');
            console.log(err)
          }
        });

      } else {
//Add something to send the error message to the DOM.
      }

      response.writeHead(200, {
          "Content-Type": "text/html"
      });
      fs.readFile(__dirname + "/../public/index.html", function(error, file) {
          if (error) {
              console.log(error);
              return;
          } else {
              response.end(file);
          }
      });
  });
}
  else {
  const fileName = req.url;
  const fileType = req.url.split(".")[1];
fs.readFile(__dirname + "/../Public" + fileName, function(error, file) {
  if (error) {
    response.writeHead(500, 'Content-Type:text/html');
    response.end('<h1>Sorry, our homepage is sleeping</h1>');

  }else {
    response.writeHead(200, {"Content-Type":"text/" + fileType});
    response.end(file);
  }

});
}
};

module.exports = router;
