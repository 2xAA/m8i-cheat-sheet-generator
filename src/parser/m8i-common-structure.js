import commands from './m8i-command-list'
import instrumentLabels from './m8i-instrument-labels'

function parseCommand (value, instrument) {
  const availableCommands = {...commands.common, ...commands[instrument]}

  return availableCommands[value]
}

const structure = {
  0x000: {
    length: 14,
    label: 'M8 Version Header',
    transform (byteArray) {
      return `${String.fromCharCode(...byteArray.slice(0, byteArray.length - 4))}${byteArray.slice(byteArray.length - 4).join('')}`
    }
  },

  0x00E: {
    length: 1,
    label: 'Instrument Type',
    valueLabels: instrumentLabels
  },

  0x00F: {
    length: 12,
    label: 'Instrument Name',
    transform (byteArray) {
      return String.fromCharCode(...byteArray.filter(byte => byte > 0))
    }
  },

  0x01B: {
    length: 1,
    label: 'Transpose',
    valueLabels: {
      0: 'OFF',
      1: 'ON'
    }
  },

  0x01C: {
    length: 1,
    label: 'Table Tick'
  }
}

let row = 1

for (let i = 0xDD; i < 0xDD + 0x7F; i += 8) {
  structure[i + 0x00] = {
    length: 1,
    label: `Table Row ${row} Note Transpose`
  }

  structure[i + 0x001] = {
    length: 1,
    label: `Table Row ${row} Note Volume`
  }

  structure[i + 0x002] = {
    length: 1,
    label: `Table Row ${row} CMD1`,
    valueLabels (value, byteArray) {
      return parseCommand(value, instrumentLabels[byteArray[0x00E]])
    }
  }

  structure[i + 0x003] = {
    length: 1,
    label: `Table Row ${row} CMD1 Value`
  }

  structure[i + 0x004] = {
    length: 1,
    label: `Table Row ${row} CMD2`,
    valueLabels (value, byteArray) {
      return parseCommand(value, instrumentLabels[byteArray[0x00E]])
    }
  }

  structure[i + 0x005] = {
    length: 1,
    label: `Table Row ${row} CMD2 Value`
  }

  structure[i + 0x006] = {
    length: 1,
    label: `Table Row ${row} CMD3`,
    valueLabels (value, byteArray) {
      return parseCommand(value, instrumentLabels[byteArray[0x00E]])
    }
  }

  structure[i + 0x007] = {
    length: 1,
    label: `Table Row ${row} CMD3 Value`
  }

  row += 1
}

export default structure
