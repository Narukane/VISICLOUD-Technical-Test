function convertStringToNumber(inputString) {
    const numberWords = {
      'nol': 0, 'satu': 1, 'dua': 2, 'tiga': 3, 'empat': 4,
      'lima': 5, 'enam': 6, 'tujuh': 7, 'delapan': 8, 'sembilan': 9,
      'sepuluh': 10, 'sebelas': 11, 'dua belas': 12, 'tiga belas': 13, 'empat belas': 14,
      'lima belas': 15, 'enam belas': 16, 'tujuh belas': 17, 'delapan belas': 18, 'sembilan belas': 19,
      'dua puluh': 20, 'tiga puluh': 30, 'empat puluh': 40, 'lima puluh': 50,
      'enam puluh': 60, 'tujuh puluh': 70, 'delapan puluh': 80, 'sembilan puluh': 90
    };
  
    const parts = inputString.split(' ');
    let result = 0;
  
    for (let i = 0; i < parts.length; i++) {
      const currentPart = parts[i];
      const nextPart = parts[i + 1];
      
      if (numberWords[currentPart] !== undefined) {
        result += numberWords[currentPart];
      } else if (currentPart === 'puluh' && numberWords[nextPart] !== undefined) {
        result += numberWords[nextPart];
        i++;
      }
    }
  
    return result;
}

function sortStringNumbers(inputArray) {
    return inputArray.sort((a, b) => {
      const numericA = convertStringToNumber(a);
      const numericB = convertStringToNumber(b);
      
      if (numericA < numericB) {
        return -1;
      } else if (numericA > numericB) {
        return 1;
      } else {
        return 0;
      }
    });
}
  
var inputArray = ['tujuh', 'dua', 'lima', 'satu', 'sembilan', 'tiga'];
var tmp = inputArray.slice();
var sortedArray = sortStringNumbers(inputArray);

console.log("=========================================================")
console.log("Input Array: " + tmp);
console.log("Output Min: " + sortedArray[0] + ", Max: " + sortedArray[sortedArray.length - 1]);

var inputArray = ['tujuh', 'dua', 'lima', 'tiga puluh sembilan', 'sembilan', 'nol', 'tujuh puluh tujuh', 'satu'];
var tmp = inputArray.slice();
var sortedArray = sortStringNumbers(inputArray);

console.log("=========================================================")
console.log("Input Array: " + tmp);
console.log("Output Min: " + sortedArray[0] + ", Max: " + sortedArray[sortedArray.length - 1]);
