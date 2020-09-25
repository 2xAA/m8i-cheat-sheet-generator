const logo = new Path2D('M 4.92,1.31 0.33,1.31 0.33,0.99 0,0.99 0,0.33 0.33,0.33 0.33,0 4.92,0 4.92,0.33 2.95,0.33 2.95,0.99   4.92,0.99 4.92,0.33 5.25,0.33 5.25,0.99 4.92,0.99 z')

const m = document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGMatrix()
const p = new Path2D()
const t = m.scale(10)
p.addPath(logo, t)

export default p
