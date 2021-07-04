class XPoint {
  constructor(x1, x2) {
    this.x1 = x1
    this.x2 = x2
    this.samePoint = x1 == x2
    this.pointSort()
  }

  pointSort() {
    if (this.x1 > this.x2) {
      let temp = this.x2
      this.x2 = this.x1
      this.x1 = temp
    }
  }
}

function overlap(xpoint1, xpoint2) {
  if (xpoint1.samePoint) {
    return xpoint1.x1 == xpoint2.x1 || xpoint1.x1 == xpoint2.x2
  }
  return !(xpoint1.x1 > xpoint2.x2 || xpoint1.x2 < xpoint2.x1)
}

function testCases() {
  console.log('test example case 1 (1,5), (2,6)')
  const point1 = new XPoint(1, 5)
  const point2 = new XPoint(2, 6)
  console.log('overlap', overlap(point1, point2))

  console.log('test example case 2 (1,5), (6,8)')
  const point3 = new XPoint(1, 5)
  const point4 = new XPoint(6, 8)
  console.log('overlap', overlap(point3, point4))

  console.log('test custom 1 x1=x2=x3 (3,3), (3,6)')
  const point5 = new XPoint(3, 3)
  const point6 = new XPoint(3, 6)
  console.log('overlap', overlap(point5, point6))

  console.log('test custom 1 x1=x2=x3 (-1,-3), (10,-2)')
  const point7 = new XPoint(-1, -3)
  const point8 = new XPoint(10, -2)
  console.log('overlap', overlap(point7, point8))
}

testCases()
