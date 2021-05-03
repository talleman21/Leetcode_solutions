

function romanToInt(s: string): number {
  const intArr:number[] = s.split('').map(num => {
    if(num === 'I') return 1
    if(num === 'V') return 5
    if(num === 'X') return 10
    if(num === 'L') return 50
    if(num === 'C') return 100
    if(num === 'D') return 500
    if(num === 'M') return 1000
    return 0
  })

  for(let i = 0; i < intArr.length; i++){
    if(intArr[i] === intArr[i+1]){
      intArr[i+1] += intArr[i]
      intArr[i] = 0
    }else if(intArr[i] < intArr[i+1]){
      intArr[i+1] = intArr[i+1] - intArr[i]
      intArr[i] = 0
    }
  }

  return intArr.reduce((prev,curr) => prev+curr)
};

console.log(romanToInt('MCMXCIV'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('DCXXI'))
console.log(romanToInt('MCDLXXVI'))
console.log(romanToInt('MMMXLV'))