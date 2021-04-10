const disariumNumber = (n) => {
  let arr = n.toString().split('')
  let sumNumbers = 0
  for(let i = 0; i < arr.length; i++){
    sumNumbers += arr[i] ** (i + 1)
  }
  if (sumNumbers === n){
    return 'Disarium !!'
  }
  return "Not !!"
}
