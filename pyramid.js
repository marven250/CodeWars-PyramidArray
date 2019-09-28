function pyramid(n) {
    let bigArr = []
    let arr = []
    let p = n
    if(n ==0) return bigArr
    while(bigArr.length !== n){
      for(let i=0; i< p; i++){
          arr.push(1)
      }
      p--
      bigArr.push(arr)
      arr =[]
    }
      return bigArr.reverse()
}