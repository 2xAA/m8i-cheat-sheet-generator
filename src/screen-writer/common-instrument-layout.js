import toHex from '../util/to-hex'
import {
  foregroundColor,
  foregroundColor2,
  highlightColor
} from './colors'

export default [
  { data: 'INST. 00', x: 1, y: 3, color: highlightColor },

  { data: 'LOAD SAVE', x: 19, y: 3, color: foregroundColor },

  { data: 'TYPE', x: 1, y: 5, color: foregroundColor2 },
  { data: (data) => data['Instrument Type'].label, x: 9, y: 5, color: foregroundColor },

  { data: 'NAME', x: 1, y: 6, color: foregroundColor2 },
  { data: '------------', x: 9, y: 6, color: foregroundColor2 },
  { data: (data) => data['Instrument Name'].value, x: 9, y: 6, color: foregroundColor },

  { data: 'TRANSP.', x: 1, y: 7, color: foregroundColor2 },
  { data: (data) => data['Transpose'].label, x: 9, y: 7, color: foregroundColor },

  { data: 'TABLE TIC', x: 16, y: 7, color: foregroundColor2 },
  { data: (data) => toHex(data['Table Tick'].value), x: 26, y: 7, color: foregroundColor }
]
