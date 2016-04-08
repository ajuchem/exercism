var leapYear = function() {};

leapYear.prototype.isLeap = function() {
  if(leapYear % 4 === 0 || leapYear % 400 === 0) {
    return true;
  } else if(leapYear % 100 === 0) {
    return false;
  } else {
    return false;
  }
};

module.exports = leapYear;

// year % 4 === 0 // on every year that is % 4
//   EXCEPT
//   year % 100 === 0 // except the year is % 100
//   UNLESS
//     year % 400 === 0 // unless every year that is % 400
