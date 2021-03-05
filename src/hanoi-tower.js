const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let count = ((2**disksNumber) - 1);
  count = parseInt(count);
  let sec = Math.floor((count/turnsSpeed)*3600);
  sec = parseInt(sec);
  let res = {
      turns: parseInt(`${count}`),
      seconds: parseInt(`${sec}`),
  }
  return  res;
};
