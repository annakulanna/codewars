const convert = (s) => {
  let set = new Set(s.toLowerCase().split(''))
  let arr = []
  let newArr = s.toLowerCase().split('')
  for (let value of set) {
    arr.push(value)
  } 
  if(arr == ''){
    return 0
  } else if (arr.length === 1){
    return parseInt('1'.repeat(newArr.length))
  }
  arr.unshift(...arr.splice(1, 1))
  return parseInt(newArr.map(value => arr.indexOf(value)).join(''))
}
