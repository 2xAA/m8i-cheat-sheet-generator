export default {
  0x020: {
    length: 1,
    label: 'Shape',
    valueLabels: {
      [Number(0x00)]: 'CSAW',
      [Number(0x01)]: 'MORPH',
      [Number(0x02)]: 'SAW SQUARE',
      [Number(0x03)]: 'SINE TRIANGLE',
      [Number(0x04)]: 'BUZZ',
      [Number(0x05)]: 'SQUARE SUB',
      [Number(0x06)]: 'SAW SUB',
      [Number(0x07)]: 'SQUARE SYNC',
      [Number(0x08)]: 'SAW SYNC',
      [Number(0x09)]: 'TRIPLE SAW',
      [Number(0x0A)]: 'TRIPLE SQUARE',
      [Number(0x0B)]: 'TRIPLE TRIANGLE',
      [Number(0x0C)]: 'TRIPLE SIN',
      [Number(0x0D)]: 'TRIPLE RNG',
      [Number(0x0E)]: 'SAW SWARM',
      [Number(0x0F)]: 'SAW COMB',
      [Number(0x10)]: 'TOY',
      [Number(0x11)]: 'DIGITAL FILTER LP',
      [Number(0x12)]: 'DIGITAL FILTER PK',
      [Number(0x13)]: 'DIGITAL FILTER BP',
      [Number(0x14)]: 'DIGITAL FILTER HP',
      [Number(0x15)]: 'VOSIM',
      [Number(0x16)]: 'VOWEL',
      [Number(0x17)]: 'VOWEL FOF',
      [Number(0x18)]: 'HARMONICS',
      [Number(0x19)]: 'FM',
      [Number(0x1A)]: 'FEEDBACK FM',
      [Number(0x1B)]: 'CHAOTIC FEEDBACK FM',
      [Number(0x1C)]: 'PLUCKED',
      [Number(0x1D)]: 'BOWED',
      [Number(0x1E)]: 'BLOWN',
      [Number(0x1F)]: 'STRUCK BELL',
      [Number(0x20)]: 'STRUCK DRUM',
      [Number(0x21)]: 'KICK',
      [Number(0x22)]: 'CYMBAL',
      [Number(0x23)]: 'SNARE',
      [Number(0x24)]: 'WAVETABLES',
      [Number(0x25)]: 'WAVE MAP',
      [Number(0x26)]: 'WAV LINE',
      [Number(0x27)]: 'WAV PARAPHONIC',
      [Number(0x28)]: 'FILTERED NOISE',
      [Number(0x29)]: 'TWIN PEAKS NOISE',
      [Number(0x2A)]: 'CLOCKED NOISE',
      [Number(0x2B)]: 'GRANULAR CLOUD',
      [Number(0x2C)]: 'PARTICLE NOISE'
    }
  },

  0x021: {
    length: 1,
    label: 'Timbre'
  },

  0x022: {
    length: 1,
    label: 'Color'
  },

  0x023: {
    length: 1,
    label: 'Degrade'
  },

  0x024: {
    length: 1,
    label: 'Redux'
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
      3: 'TIMBRE',
      4: 'COLOR',
      5: 'DEGRADE',
      6: 'REDUX',
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
      3: 'TIMBRE',
      4: 'COLOR',
      5: 'DEGRADE',
      6: 'REDUX',
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
      3: 'TIMBRE',
      4: 'COLOR',
      5: 'DEGRADE',
      6: 'REDUX',
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
