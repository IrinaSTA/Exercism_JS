const nucleotideEquivalents = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}

export const toRna = function(dnaStrand) {
  let rnaStrand = '';
  dnaStrand.split('').forEach(function(nucleotide) {
    let rna = nucleotideEquivalents[nucleotide]
    if (rna == undefined) {
      throw 'Invalid input DNA.'
    } else {
      rnaStrand += rna;
    }
  });
  return rnaStrand;
};
