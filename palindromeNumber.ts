
const isPalindrome = function(x:number) {
  const stringified = x.toString()
  return stringified.split('').reverse().join('') === stringified
};

console.log(isPalindrome(-121))