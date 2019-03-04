export const Triangle = function(side1, side2, side3) {
  this.side1 = side1,
  this.side2 = side2,
  this.side3 = side3
}

Triangle.prototype.kind = function() {
  if (illegalTriangle(this.side1, this.side2, this.side3) ||
      triangleInequality(this.side1, this.side2, this.side3)) {
    throw 'Such a triangle does not exist'
  }
  if (isEquilateral(this.side1, this.side2, this.side3)) {
    return 'equilateral'
  } else if (isIsosceles(this.side1, this.side2, this.side3)) {
    return 'isosceles'
  } else {
    return 'scalene'
  }
}

function isEquilateral(side1, side2, side3) {
  return side1 == side2 && side2 == side3
}

function isIsosceles(side1, side2, side3) {
  return side1 == side2 || side2 == side3 || side1 == side3
}

function illegalTriangle(side1, side2, side3) {
  return side1 <= 0 || side2 <= 0 || side3 <= 0
}

function triangleInequality(side1, side2, side3) {
  return !(side1 + side2 >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2)
}
