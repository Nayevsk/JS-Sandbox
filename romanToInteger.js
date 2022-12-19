/**
 * Cases:
 * 
 * MCMXCIV -> 1000+500
 */

s="MCMXCIV"

var romanToInteger = function (s) {
  const roman = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000,
  }

  let integer = 0;

  for (i=0; i< s.length; i++){
    const current = roman[s[i]];
    const next = roman[s[i+1]];
    
    if (current < next) {
      integer += next-current
      i++
    }else{
      result += current
    }    
  }
  return integer;
}

console.log(romanToInteger)

