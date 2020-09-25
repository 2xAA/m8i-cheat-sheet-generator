import toHex from '../util/to-hex'
import { highlightColor, foregroundColor, foregroundColor2 } from './colors'

export default [
  { data: 'SAMPLE', x: 1, y: 9, color: foregroundColor2 },
  {
    data: (data) => data['Sample file-path'].value.split('/').pop().toUpperCase().slice(0, 19),
    x: 9,
    y: 9,
    color: highlightColor
  },

  { data: 'SLICE', x: 1, y: 11, color: foregroundColor2 },
  { data: (data) => toHex(data['Slices'].value), x: 9, y: 11, color: foregroundColor },
  { data: (data) => data['Slices'].label, x: 11, y: 11, color: highlightColor },

  { data: 'PLAY', x: 1, y: 12, color: foregroundColor2 },
  { data: (data) => toHex(data['Play Mode'].value), x: 9, y: 12, color: foregroundColor },
  { data: (data) => data['Play Mode'].label, x: 11, y: 12, color: highlightColor },

  { data: 'START', x: 1, y: 13, color: foregroundColor2 },
  { data: (data) => toHex(data['Start'].value), x: 9, y: 13, color: foregroundColor },
  { data: (data) => data['Start'].value, x: 11, y: 13, color: highlightColor, type: 'bar' },

  { data: 'LOOP ST', x: 1, y: 14, color: foregroundColor2 },
  { data: (data) => toHex(data['Loop Start'].value), x: 9, y: 14, color: foregroundColor },
  { data: (data) => data['Loop Start'].value, x: 11, y: 14, color: highlightColor, type: 'bar' },

  { data: 'LENGTH', x: 1, y: 15, color: foregroundColor2 },
  { data: (data) => toHex(data['Length'].value), x: 9, y: 15, color: foregroundColor },
  { data: (data) => data['Length'].value, x: 11, y: 15, color: highlightColor, type: 'bar' },

  { data: 'DETUNE', x: 1, y: 16, color: foregroundColor2 },
  { data: (data) => toHex(data['Detune'].value), x: 9, y: 16, color: foregroundColor },
  { data: (data) => data['Detune'].value, x: 11, y: 16, color: highlightColor, type: 'bar' },

  { data: 'DEGRADE', x: 1, y: 17, color: foregroundColor2 },
  { data: (data) => toHex(data['Degrade'].value), x: 9, y: 17, color: foregroundColor },
  { data: (data) => data['Degrade'].value, x: 11, y: 17, color: highlightColor, type: 'bar' },

  { data: 'FILTER', x: 1, y: 18, color: foregroundColor2 },
  { data: (data) => toHex(data['Filter'].value), x: 9, y: 18, color: foregroundColor },
  { data: (data) => data['Filter'].label, x: 11, y: 18, color: highlightColor },

  { data: 'CUTOFF', x: 1, y: 19, color: foregroundColor2 },
  { data: (data) => toHex(data['Cutoff'].value), x: 9, y: 19, color: foregroundColor },
  { data: (data) => data['Cutoff'].value, x: 11, y: 19, color: highlightColor, type: 'bar' },

  { data: 'RES', x: 1, y: 20, color: foregroundColor2 },
  { data: (data) => toHex(data['Resonance'].value), x: 9, y: 20, color: foregroundColor },
  { data: (data) => data['Resonance'].value, x: 11, y: 20, color: highlightColor, type: 'bar' },

  { data: 'AMP', x: 19, y: 11, color: foregroundColor2 },
  { data: (data) => toHex(data['Amp'].value), x: 23, y: 11, color: foregroundColor },
  { data: (data) => data['Amp'].value, x: 25, y: 11, color: highlightColor, type: 'bar' },

  { data: 'LIM', x: 19, y: 12, color: foregroundColor2 },
  { data: (data) => toHex(data['Limit Mode'].value), x: 23, y: 12, color: foregroundColor },
  { data: (data) => data['Limit Mode'].label, x: 25, y: 12, color: highlightColor },

  { data: 'PAN', x: 19, y: 13, color: foregroundColor2 },
  { data: (data) => toHex(data['Pan'].value), x: 23, y: 13, color: foregroundColor },
  { data: (data) => data['Pan'].value, x: 25, y: 13, color: highlightColor, type: 'bar-centered' },

  { data: 'DRY', x: 19, y: 14, color: foregroundColor2 },
  { data: (data) => toHex(data['Dry Volume'].value), x: 23, y: 14, color: foregroundColor },
  { data: (data) => data['Dry Volume'].value, x: 25, y: 14, color: highlightColor, type: 'bar' },

  { data: 'CHO', x: 19, y: 15, color: foregroundColor2 },
  { data: (data) => toHex(data['Chorus Send'].value), x: 23, y: 15, color: foregroundColor },
  { data: (data) => data['Chorus Send'].value, x: 25, y: 15, color: highlightColor, type: 'bar' },

  { data: 'DEL', x: 19, y: 16, color: foregroundColor2 },
  { data: (data) => toHex(data['Delay Send'].value), x: 23, y: 16, color: foregroundColor },
  { data: (data) => data['Delay Send'].value, x: 25, y: 16, color: highlightColor, type: 'bar' },

  { data: 'REV', x: 19, y: 17, color: foregroundColor2 },
  { data: (data) => toHex(data['Reverb Send'].value), x: 23, y: 17, color: foregroundColor },
  { data: (data) => data['Reverb Send'].value, x: 25, y: 17, color: highlightColor, type: 'bar' }
]
