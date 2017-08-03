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
  t.notOk(result.isValid, 'Invalid string returns false');

  result = validate.validateFaclocation("llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch");
  t.equal(result.message, 'Your location length is too long', 'Correct error message for long locations')
  t.notOk(result.isValid, 'Long location string returns false');

  result = validate.validateFaclocation("");
  t.equal(result.message, 'Please Enter your FAC location', 'Correct error message for empty location')
  t.notOk(result.isValid, 'Empty location string returns false');



   result = validate.validateFaclocation ('London');
  t.ok(result.isValid, 'Valid location returns true');

  t.end();
})
