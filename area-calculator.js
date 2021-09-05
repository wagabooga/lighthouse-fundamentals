function calculateRectangleArea(length, width) {
  let result = length * width
  if (Math.sign(result) <= 0) {
    return undefined
  }
  else {
    return result
  }

}

function calculateTriangleArea(base, height) {
  let result = (base * height) / 2
  if (Math.sign(result) <= 0) {
    return undefined
  }
  else {
    return result
  }
}

function calculateCircleArea(radius) {
  if (Math.sign(radius) === -1) {
    return undefined
  }
  else {
    return Math.PI * (Math.pow(radius, 2));
  }

}
console.log(calculateCircleArea(3.5));