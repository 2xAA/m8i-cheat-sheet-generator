import toHex from '../util/to-hex'
import { foregroundColor, foregroundColor2, highlightColor } from './colors'

const layout = [
  // map
  { data: '   E ', x: 34, y: 17, color: highlightColor },
  { data: 'SCPIT', x: 34, y: 18, color: foregroundColor2 },
  { data: '   M ', x: 34, y: 19, color: foregroundColor2 },

  {
    data: 'LFO',
    x: 19,
    y: 9,
    color: foregroundColor2
  },
  {
    data: (data) => toHex(data['LFO Destination'].value),
    x: 23,
    y: 9,
    color: foregroundColor
  },
  {
    data: (data) => data['LFO Destination'].label,
    x: 25,
    y: 9,
    color: highlightColor
  },

  {
    data: 'AMT',
    x: 19,
    y: 10,
    color: foregroundColor2
  },
  {
    data: (data) => toHex(data['LFO Amount'].value),
    x: 23,
    y: 10,
    color: foregroundColor
  },
  {
    data: (data) => data['LFO Amount'].value,
    x: 25,
    y: 10,
    color: highlightColor,
    type: 'bar'
  },

  {
    data: 'OSC',
    x: 19,
    y: 11,
    color: foregroundColor2
  },
  {
    data: (data) => toHex(data['LFO Shape'].value),
    x: 23,
    y: 11,
    color: foregroundColor
  },
  {
    data: (data) => data['LFO Shape'].label,
    x: 25,
    y: 11,
    color: highlightColor
  },

  {
    data: 'TRG',
    x: 19,
    y: 12,
    color: foregroundColor2
  },
  {
    data: (data) => toHex(data['LFO Trigger Mode'].value),
    x: 23,
    y: 12,
    color: foregroundColor
  },
  {
    data: (data) => data['LFO Trigger Mode'].label,
    x: 25,
    y: 12,
    color: highlightColor
  },

  {
    data: 'FRQ',
    x: 19,
    y: 13,
    color: foregroundColor2
  },
  {
    data: (data) => toHex(data['LFO Frequency'].value),
    x: 23,
    y: 13,
    color: foregroundColor
  },
  {
    data: (data) => data['LFO Frequency'].value,
    x: 25,
    y: 13,
    color: highlightColor,
    type: 'bar'
  }
]

for (let i = 0; i < 2; i += 1) {
  layout.push({ data: `ENV${i + 1} TO`, x: 1, y: 9 + (i * 6), color: foregroundColor2 })
  layout.push({
    data: (data) => toHex(data[`Envelope ${i + 1} Destination`].value),
    x: 9,
    y: 9 + (i * 6),
    color: foregroundColor
  })
  layout.push({
    data: (data) => data[`Envelope ${i + 1} Destination`].label,
    x: 11,
    y: 9 + (i * 6),
    color: highlightColor
  })

  layout.push({ data: 'AMOUNT', x: 1, y: 10 + (i * 6), color: foregroundColor2 })
  layout.push({
    data: (data) => toHex(data[`Envelope ${i + 1} Amount`].value),
    x: 9,
    y: 10 + (i * 6),
    color: foregroundColor
  })
  layout.push({
    data: (data) => data[`Envelope ${i + 1} Amount`].value,
    x: 11,
    y: 10 + (i * 6),
    color: highlightColor,
    type: 'bar'
  })

  layout.push({ data: 'ATTACK', x: 1, y: 11 + (i * 6), color: foregroundColor2 })
  layout.push({
    data: (data) => toHex(data[`Envelope ${i + 1} Attack`].value),
    x: 9,
    y: 11 + (i * 6),
    color: foregroundColor
  })
  layout.push({
    data: (data) => data[`Envelope ${i + 1} Attack`].value,
    x: 11,
    y: 11 + (i * 6),
    color: highlightColor,
    type: 'bar'
  })

  layout.push({ data: 'HOLD', x: 1, y: 12 + (i * 6), color: foregroundColor2 })
  layout.push({
    data: (data) => toHex(data[`Envelope ${i + 1} Hold`].value),
    x: 9,
    y: 12 + (i * 6),
    color: foregroundColor
  })
  layout.push({
    data: (data) => data[`Envelope ${i + 1} Hold`].value,
    x: 11,
    y: 12 + (i * 6),
    color: highlightColor,
    type: 'bar'
  })

  layout.push({ data: 'DECAY', x: 1, y: 13 + (i * 6), color: foregroundColor2 })
  layout.push({
    data: (data) => toHex(data[`Envelope ${i + 1} Decay`].value),
    x: 9,
    y: 13 + (i * 6),
    color: foregroundColor
  })
  layout.push({
    data: (data) => data[`Envelope ${i + 1} Decay`].value,
    x: 11,
    y: 13 + (i * 6),
    color: highlightColor,
    type: 'bar'
  })
}

export default layout
