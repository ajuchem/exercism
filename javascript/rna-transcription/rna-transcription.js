var dnaTranscriber = function() {};

dnaTranscriber.prototype.toRna = function(rna) { // takes rna as argument
  var rnaComplements = {
    'C': 'G',
    'G': 'C',
    'T': 'A',
    'A': 'U'
  };

  return rnaComplements[rna]; // returns the value of the object
};

module.exports = dnaTranscriber;
