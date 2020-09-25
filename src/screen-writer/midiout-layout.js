
import toHex from '../util/to-hex'
import { highlightColor, foregroundColor, foregroundColor2 } from './colors'

const layout = [
  { data: 'CHANNEL', x: 1, y: 9, color: foregroundColor2 },
  { data: (data) => data['MIDI Channel'].label, x: 9, y: 9, color: foregroundColor },

  { data: 'BANK:PG', x: 1, y: 10, color: foregroundColor2 },
  { data: (data) => data['MIDI Program Bank'].label, x: 9, y: 10, color: foregroundColor },
  { data: ':', x: 12, y: 10, color: foregroundColor2 },
  { data: (data) => data['MIDI Program Change'].label, x: 13, y: 10, color: foregroundColor }
]

for (let i = 0; i < 10; i += 1) {
  const char = String.fromCharCode(65 + i)

  layout.push(
    { data: `CC${char} CC:VAL`, x: 1, y: 12 + i, color: foregroundColor2 },
    {
      data: (data) => data[`MIDI CC ${char} Control`].label,
      x: 13,
      y: 12 + i,
      color: foregroundColor
    },
    { data: ':', x: 16, y: 12 + i, color: foregroundColor2 },
    {
      data: (data) =>
        toHex(data[`MIDI CC ${char} Value`].value > 128 ? 0 : data[`MIDI CC ${char} Value`].value),
      x: 17,
      y: 12 + i,
      color: foregroundColor
    },
    {
      data: (data) =>
        data[`MIDI CC ${char} Value`].value > 128 ? 0 : data[`MIDI CC ${char} Value`].value,
      x: 19,
      y: 12 + i,
      color: highlightColor,
      type: 'bar'
    }
  )
}

export default layout
