function midiValueLabel (value) {
  if (value === 0 || value > 128) {
    return '---'
  }

  return `${value - 1}`.padStart(3, '0')
}

const structure = {
  0x020: {
    length: 1,
    label: 'MIDI Channel',
    valueLabels (value) {
      return `${value + 1}`.padStart(3, '0')
    }
  },

  0x021: {
    length: 1,
    label: 'MIDI Program Bank',
    valueLabels: midiValueLabel
  },

  0x022: {
    length: 1,
    label: 'MIDI Program Change',
    valueLabels: midiValueLabel
  }
}

for (let i = 0; i < 10; i += 1) {
  const char = String.fromCharCode(65 + i)

  structure[0x026 + (i * 2)] = {
    length: 1,
    label: `MIDI CC ${char} Control`,
    valueLabels: midiValueLabel
  }

  structure[0x027 + (i * 2)] = {
    length: 1,
    label: `MIDI CC ${char} Value`,
    valueLabels: midiValueLabel
  }
}

export default structure
