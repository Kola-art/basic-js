const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
    let ex;
        if( typeof sampleActivity != 'string'){
            return false;
        }
        else  if (Number(sampleActivity) > 0 && Number(sampleActivity) <= 15){
            let ln = (Math.log(15/sampleActivity));
            let div = 0.693/5730;
            let res = ln /div;
            ex = Math.ceil(res);
            return ex; 
        }
        else {
            return false;
        }
};
