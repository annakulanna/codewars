function highAndLow(numbers){
  const numberRegex = /-\d+|\d+/g
  const result = numbers.match(numberRegex)
  return Math.max(...result) + " " + Math.min(...result)
}
