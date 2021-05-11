const myClosure = (myNumber:number) => {
  return (myOtherNumber:number) => {
    return myNumber * myOtherNumber
  }
}

const multiplyByThree = myClosure(3)
console.log(multiplyByThree(5))

console.log(myClosure(3)(4))

