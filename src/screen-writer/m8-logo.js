const logo = new Path2D('M 232.4 111.7 L 232.4 160.7 L 87.4 160.7 L 87.4 128.7 L 146.8 128.7 L 162 128.7 L 191.1 128.7 L 250.2 69.5 L 226.9 46.2 L 177.4 95.7 L 87.4 95.7 L 55.4 95.7 L 55.4 160.7 L 55.4 193.7 L 232.4 193.7 L 264.4 193.7 L 264.4 111.7 Z')

const m = document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGMatrix()
const p = new Path2D()
const t = m.scale(4.022)
p.addPath(logo, t)

export default p
