function mapToNegativize(array) {
  let r = []
  for (let i = 0; i < array.length; i++ ) {
    r.push(-1 * array[i])
  }
  return r
}

function mapToNoChange(array) {
  let r = []
  for (let i = 0; i < array.length; i++ ) {
    r.push(array[i])
  }
  return r
}

function mapToDouble(array) {
  let r = []
  for (let i = 0; i < array.length; i++ ) {
    r.push(2 * array[i])
  }
  return r
}

function mapToSquare(array) {
  let r = []
  for (let i = 0; i < array.length; i++ ) {
    r.push(array[i] * array[i])
  }
  return r
}

function reduceToTotal(array, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < array.length; i++ ) {
    total = total + array[i]
  }
  return total
}

function reduceToAllTrue(array) {
  for (let i = 0; i < array.length; i++ ) {
    if (!array[i])
    return false
  }
  return true
}

function reduceToAnyTrue(array) {
  for (let i = 0; i < array.length; i++ ) {
    if (array[i])
    return true
  }
  return false
}