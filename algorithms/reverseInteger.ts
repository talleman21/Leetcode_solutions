var reverse = function(x:number) {
  const sign = Math.sign(x)
  x = Math.abs(x)
  const reversed = x.toString().split('').reverse().join('')
  return +reversed > 0x7FFFFFFF ? 0 : +reversed * sign  
};

console.log(reverse(-1243432223))