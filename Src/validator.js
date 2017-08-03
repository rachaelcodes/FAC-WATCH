//write validators for movie name, rating, and description.  dont forget to do tests aswell !

const validateFaccer = (faccer) => {
  try {
    if (typeof faccer !== 'string') {
      throw new Error ('Your name must be a string') ;
    } else if (faccer.length > 20) {
      throw new Error ('Your name is too long') ;
    } else if (faccer.length == 0 ) {
      throw new Error ('Please Enter your name') ;
    }
    return {isValid:true};
  } catch (e) {
    return {isValid:false, message: e.message};
  }

};

const validateFaclocation = (faclocation) => {
  try {
    if (typeof faclocation !== 'string') {
      throw new Error ('Your location must be a string') ;
    } else if (faclocation.length > 20) {
        throw new Error ('Your location length is too long') ;
      }
    return {isValid:true};
  } catch (e) {
    return {isValid:false, message: e.message};
  }

};

const validateMoviename = (moviename) => {
  try {
    if (typeof moviename !== 'string') {
      throw new Error ('Your movie name must be a string') ;
    } else if (moviename.length > 40) {
      throw new Error ('Your movie name is too long') ;
    } else if (moviename.length == 0 ) {
      throw new Error ('Please Enter your movie name') ;
    }
    return {isValid:true};
  } catch (e) {
    return {isValid:false, message: e.message};
  }

};

const validateCohort = (cohort) => {
  try {
    if (!Number.isInteger(cohort)) {
      throw new Error ('Your cohort value must be an integer') ;
    }
    return {isValid:true};
  } catch (e) {
    return {isValid:false, message: e.message};
  }

};

const validateDescription = (description) => {
  try {
    if (typeof description !== 'string') {
      throw new Error ('Your description must be a string') ;
    } else if (description.length == 0 ) {
      throw new Error ('Please Enter your description') ;
    }
    return {isValid:true};
  } catch (e) {
    return {isValid:false, message: e.message};
  }

};

const validateRating = (rating) => {
  try {
    if (!Number.isInteger(rating)) {
      throw new Error ('Your rating value must be an integer') ;
    }
    if (rating <= 0 || rating > 5) {
      throw new Error ('Your rating should be in the range of 1 to 5');
    }
    return {isValid:true};
  } catch (e) {
    return {isValid:false, message: e.message};
  }

};

module.exports = {validateFaccer,validateFaclocation,validateCohort, validateDescription, validateMoviename, validateRating};
