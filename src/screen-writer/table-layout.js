import toHex from '../util/to-hex'
import { foregroundColor, foregroundColor2, highlightColor } from './colors'

const layout = [
  { data: 'TABLE 00', x: 1, y: 3, color: highlightColor },

  {
    data: 'N  V  CMD1  CMD2  CMD3',
    x: 3,
    y: 5,
    color: foregroundColor2
  }
]

for (let i = 0; i < 16; i += 1) {
  layout.push({
    data: toHex(i)[1],
    x: 1,
    y: 6 + i,
    color: i % 4 === 0 ? foregroundColor : foregroundColor2
  })

  layout.push({ data: '--', x: 3, y: 6 + i, color: foregroundColor2 })
  layout.push({
    data: (data) => toHex(data[`Table Row ${i + 1} Note Transpose`].value),
    x: 3,
    y: 6 + i,
    color: foregroundColor
  })

  layout.push({ data: '--', x: 6, y: 6 + i, color: foregroundColor2 })
  layout.push({
    data: (data) => {
      const { value } = data[`Table Row ${i + 1} Note Volume`]
      if (value < 128) {
        return toHex(value)
      }

      return false
    },
    x: 6,
    y: 6 + i,
    color: foregroundColor
  })

  layout.push({ data: '---', x: 9, y: 6 + i, color: foregroundColor2 })
  layout.push({
    data: (data) => {
      const { label, value } = data[`Table Row ${i + 1} CMD1`]
      if (value < 255) {
        return label
      }

      return false
    },
    x: 9,
    y: 6 + i,
    color: foregroundColor
  })

  layout.push({ data: '00', x: 12, y: 6 + i, color: foregroundColor })
  layout.push({
    data: (data) => toHex(data[`Table Row ${i + 1} CMD1 Value`].value),
    x: 12,
    y: 6 + i,
    color: foregroundColor
  })

  layout.push({ data: '---', x: 15, y: 6 + i, color: foregroundColor2 })
  layout.push({
    data: (data) => {
      const { label, value } = data[`Table Row ${i + 1} CMD2`]
      if (value < 255) {
        return label
      }

      return false
    },
    x: 15,
    y: 6 + i,
    color: foregroundColor
  })

  layout.push({ data: '00', x: 18, y: 6 + i, color: foregroundColor })
  layout.push({
    data: (data) => toHex(data[`Table Row ${i + 1} CMD2 Value`].value),
    x: 18,
    y: 6 + i,
    color: foregroundColor
  })

  layout.push({ data: '---', x: 21, y: 6 + i, color: foregroundColor2 })
  layout.push({
    data: (data) => {
      const { label, value } = data[`Table Row ${i + 1} CMD3`]
      if (value < 255) {
        return label
      }

      return false
    },
    x: 21,
    y: 6 + i,
    color: foregroundColor
  })

  layout.push({ data: '00', x: 24, y: 6 + i, color: foregroundColor })
  layout.push({
    data: (data) => toHex(data[`Table Row ${i + 1} CMD3 Value`].value),
    x: 24,
    y: 6 + i,
    color: foregroundColor
  })
}

export default layout
