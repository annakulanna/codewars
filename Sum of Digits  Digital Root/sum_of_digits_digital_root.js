function digital_root(n) {
  let arrayNumber = n.toString().split('')
  n = 0

  for(let i = 0; i < arrayNumber.length; i++){
    n += Number(arrayNumber[i])
  }

  if(n > 9){
    return digital_root(n)
  } else return n

}
