function nextHappyYear (year) {
  let set =  new Set(year.toString().split(''))
  do {
    year++
    set =  new Set(year.toString().split(''))
  } while (set.size !== year.toString().split('').length)
  return year
}
