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
      }else if (faclocation.length == 0 ) {
        throw new Error ('Please Enter your FAC location') ;
      }
    return {isValid:true};
  } catch (e) {
    return {isValid:false, message: e.message};
  }

};


module.exports = {validateFaccer,validateFaclocation};