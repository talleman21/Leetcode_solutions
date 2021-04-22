var reverse = function(x) {
  const sign = Math.sign(x)
  x = Math.abs(x)
  reversed = x.toString().split('').reverse().join('')
  return reversed > 0x7FFFFFFF ? 0 : reversed * sign  
};

console.log(reverse(-1243432223))