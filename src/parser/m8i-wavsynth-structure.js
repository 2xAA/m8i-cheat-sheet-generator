export default {
  0x020: {
    length: 1,
    label: 'Shape',
    valueLabels (value) {
      let label

      switch (value) {
        case 0:
          label = 'PULSE 12%'
          break

        case 1:
          label = 'PULSE 25%'
          break

        case 2:
          label = 'PULSE 50%'
          break

        case 3:
          label = 'PULSE 75%'
          break

        case 4:
          label = 'SAW'
          break

        case 5:
          label = 'TRIANGLE'
          break

        case 6:
          label = 'SINE'
          break

        case 7:
          label = 'NOISE'
          break

        case 8:
          label = 'NOISE PITCHED'
          break

        case 9:
        default:
          label = 'OVERFLOW'
          break
      }

      return label
    }
  },

  0x021: {
    length: 1,
    label: 'Size'
  },

  0x022: {
    length: 1,
    label: 'Multiply'
  },

  0x023: {
    length: 1,
    label: 'Warp'
  },

  0x024: {
    length: 1,
    label: 'Mirror'
  },

  0x025: {
    length: 1,
    label: 'Filter',
    valueLabels: {
      0: 'OFF',
      1: 'LOWPASS',
      2: 'HIGHPAS',
      3: 'BANDPAS',
      4: 'BANDSTO',
      5: 'LP: POST',
      6: 'HP: POST',
      7: 'BP: POST',
      8: 'BS: POST'
    }
  },

  0x026: {
    length: 1,
    label: 'Cutoff'
  },

  0x027: {
    length: 1,
    label: 'Resonance'
  },

  0x028: {
    length: 1,
    label: 'Amp'
  },

  0x029: {
    length: 1,
    label: 'Limit Mode',
    valueLabels: {
      0: 'CLIP',
      1: 'SIN',
      2: 'FOLD',
      3: 'WRAP',
      4: 'POST'
    }
  },

  0x02A: {
    length: 1,
    label: 'Pan'
  },

  0x02B: {
    length: 1,
    label: 'Dry Volume'
  },

  0x02C: {
    length: 1,
    label: 'Chorus Send'
  },

  0x02D: {
    length: 1,
    label: 'Delay Send'
  },

  0x02E: {
    length: 1,
    label: 'Reverb Send'
  },

  0x02F: {
    length: 1,
    label: 'Envelope 1 Destination',
    valueLabels: {
      0: 'OFF',
      1: 'VOLUME',
      2: 'PITCH',
      3: 'SIZE',
      4: 'MULT',
      5: 'WARP',
      6: 'MIRROR',
      7: 'CUTOFF',
      8: 'RES',
      9: 'AMP'
    }
  },

  0x030: {
    length: 1,
    label: 'Envelope 1 Amount'
  },

  0x031: {
    length: 1,
    label: 'Envelope 1 Attack'
  },

  0x032: {
    length: 1,
    label: 'Envelope 1 Hold'
  },

  0x033: {
    length: 1,
    label: 'Envelope 1 Decay'
  },

  0x034: {
    length: 1,
    label: 'Envelope 2 Destination',
    valueLabels: {
      0: 'OFF',
      1: 'VOLUME',
      2: 'PITCH',
      3: 'SIZE',
      4: 'MULT',
      5: 'WARP',
      6: 'MIRROR',
      7: 'CUTOFF',
      8: 'RES',
      9: 'AMP'
    }
  },

  0x035: {
    length: 1,
    label: 'Envelope 2 Amount'
  },

  0x036: {
    length: 1,
    label: 'Envelope 2 Attack'
  },

  0x037: {
    length: 1,
    label: 'Envelope 2 Hold'
  },

  0x038: {
    length: 1,
    label: 'Envelope 2 Decay'
  },

  0x03B: {
    length: 1,
    label: 'LFO Shape',
    valueLabels: {
      0: 'TRI',
      1: 'SIN',
      2: 'RAMP DN',
      3: 'RAMP UP',
      4: 'EXP DN',
      5: 'EXP UP',
      6: 'SQU DN',
      7: 'SQU UP',
      8: 'RANDOM',
      9: 'DRUNK'
    }
  },

  0x03C: {
    length: 1,
    label: 'LFO Destination',
    valueLabels: {
      0: 'OFF',
      1: 'VOLUME',
      2: 'PITCH',
      3: 'SIZE',
      4: 'MULT',
      5: 'WARP',
      6: 'MIRROR',
      7: 'CUTOFF',
      8: 'RES',
      9: 'AMP'
    }
  },

  0x03D: {
    length: 1,
    label: 'LFO Trigger Mode',
    valueLabels: {
      0: 'FREE',
      1: 'RETRIG',
      2: 'HOLD',
      3: 'ONCE'
    }
  },

  0x03E: {
    length: 1,
    label: 'LFO Frequency'
  },

  0x03F: {
    length: 1,
    label: 'LFO Amount'
  }
}
