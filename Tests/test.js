// Test get data and post data functions
const tape = require('tape');
const validate = require( '../src/validator');
const getData = require('../src/queries/get-data');
const dbConnectionTest = require ('./db-connections-test.js');
const postData = require('../src/queries/post-data');
const dbbuild = require('./db-build-test');



tape('Validate Faccer', (t) => {
  let result = validate.validateFaccer (333) ;
  t.equal(result.message, 'Your name must be a string', 'Correct error message is supplied when we pass in a number');
  t.notOk(result.isValid, 'Invalid entry returns false');

  result = validate.validateFaccer('Yahia ahmed abdel wahab zaky elewa')
  t.equal(result.message, 'Your name is too long', "Correct error message for long names" )
  t.notOk(result.isValid, 'Long string returns false');

  result = validate.validateFaccer('')
  t.equal(result.message, 'Please Enter your name', "Correct error message for empty name" )
  t.notOk(result.isValid, 'No name input returns false');

   result = validate.validateFaccer ('Rachael');
  t.ok(result.isValid, 'Valid string returns true');

  t.end();
})

tape('Validate Location', (t) => {
  let result = validate.validateFaclocation (333) ;
  t.equal(result.message, 'Your location must be a string', 'Correct error message is supplied when we pass in a number');
  t.notOk(result.isValid, 'Invalid entry returns false');

  result = validate.validateFaclocation("llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch");
  t.equal(result.message, 'Your location length is too long', 'Correct error message for long locations')
  t.notOk(result.isValid, 'Long location string returns false');

   result = validate.validateFaclocation ('London');
  t.ok(result.isValid, 'Valid location returns true');

  t.end();
})


tape('Validate Cohort', (t) => {
  let result = validate.validateCohort (333.2) ;
  t.equal(result.message, 'Your cohort value must be an integer', 'Correct error message is supplied when we pass in a decimal');
  t.notOk(result.isValid, 'Invalid number returns false');

  result = validate.validateCohort ('eleven') ;
  t.equal(result.message, 'Your cohort value must be an integer', 'Correct error message is supplied when we pass in a string');
  t.notOk(result.isValid, 'Invalid string returns false');

   result = validate.validateCohort (11);
  t.ok(result.isValid, 'Valid cohort number returns true');

  t.end();
})

tape('get Data', (t)=> {
  dbbuild;
  let expected = [{
    id: 3,
    faccer: 'Yahia',
    cohort: 11,
    faclocation: 'London',
    moviename: 'Batman: Dark Knight',
    rating: 5,
    description: 'Good for Netflix and chill...',
    action: true,
    animation: false,
    comedy: false,
    documentary: false,
    drama: false,
    familyfriendly: false,
    horror: false,
    romance: false,
    scifi: false,
    thriller: true
  }];
  getData('thriller', dbConnectionTest, (err, result)=>{
    if (err) console.log(err);
    t.deepEqual(result, expected, 'getData returns expected data');
    t.end();
  })
})


tape('Post Data', (t)=> {
  dbbuild;
  let expected = [{
    id: 5,
    faccer: 'Minesh',
    cohort: 11,
    faclocation: 'London',
    moviename: 'The Hangover',
    rating: 5,
    description: 'When in Vegas...',
    action: false,
    animation: false,
    comedy: true,
    documentary: false,
    drama: false,
    familyfriendly: false,
    horror: false,
    romance: false,
    scifi: false,
    thriller: false
  }];
  postData('Minesh', 11, 'London', 'The Hangover', 5, 'When in Vegas...', false, false, true, false, false, false, false, false, false, false, dbConnectionTest, (err, result)=>{
    if (err) console.log(err);
    t.deepEqual(result, expected, 'PostData returns expected data');
    t.end();
  })
})
