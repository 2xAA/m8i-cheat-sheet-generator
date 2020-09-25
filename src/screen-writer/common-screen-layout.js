import { foregroundColor2, highlightColor } from './colors'

const layout = [
  { data: 'battery', x: 34, y: 4, type: 'glyph', color: foregroundColor2 },
  { data: 'T>120', x: 34, y: 5, color: foregroundColor2 }
]

for (let i = 0; i < 8; i += 1) {
  layout.push({
    data: i + 1,
    x: 34,
    y: 7 + i,
    color: i > 0 ? foregroundColor2 : highlightColor
  })

  layout.push({
    data: '---',
    x: 36,
    y: 7 + i,
    color: foregroundColor2
  })
}

export default layout
