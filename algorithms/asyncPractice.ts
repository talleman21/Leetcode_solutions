(async function main(){

  async function delay(n:number){
    return new Promise((resolve=>setTimeout(resolve,n)))
  }

  console.time('test')
  await delay(2000)
  console.timeEnd('test')

})()