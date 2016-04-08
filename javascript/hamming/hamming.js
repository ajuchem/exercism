// Compare two DNA strands and count the difference in nucleoids

var Hamming = function() {};

Hamming.prototype.compute = function(DNA1, DNA2) {
  if(DNA1.length != DNA2.length) {
    return 'DNA strands must be of equal length.';
  } else {
    var diff = 0;
    for(var i=0; i < DNA1.length; i++) {
      if(DNA1[i] != DNA2[i]) {
        diff++;
      }
    }
    return diff;
  }
};

module.exports = Hamming;
