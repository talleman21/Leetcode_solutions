function longestCommonPrefix(strs: string[]): string {

  let longestPrefix = ''

  const letters = strs[0].split('')

  for(let i = 0;i<letters.length;i++){
    if(strs.filter(item => item.substr(0,i+1).includes(longestPrefix+letters[i])).length !== strs.length){
      break
    }else{
      longestPrefix = longestPrefix + letters[i]
    }    
  }

  return longestPrefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["c","acc","ccc"]))