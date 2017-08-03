// Test get data and post data functions
const tape = require('tape');
const validate = require( '../src/validator');

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
