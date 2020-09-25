import m8iCommonStructure from './m8i-common-structure'
import m8iWavsynthStructure from './m8i-wavsynth-structure'
import m8iMacrosynthStructure from './m8i-macrosynth-structure'
import m8iSampleStructure from './m8i-sample-structure'
import m8iMidioutStructure from './m8i-midiout-structure'

const instrumentStructures = {
  'WAVSYNTH': m8iWavsynthStructure,
  'MACROSYN': m8iMacrosynthStructure,
  'SAMPLE': m8iSampleStructure,
  'MIDI OUT': m8iMidioutStructure
}

function parseLabel (value, valueLabels, byteArray) {
  let label = null

  if (valueLabels && typeof valueLabels === 'function') {
    label = valueLabels(value, byteArray)
  } else if (valueLabels) {
    label = valueLabels[value]
  }

  return label
}

function parseOffset (byteArray = [], offsetIn, structure) {
  const offset = Number(offsetIn)
  const key = structure.label
  const offsetParsed = { [key]: { value: null, label: null } }

  if (structure.length === 1) {
    const value = byteArray[offset]
    const label = parseLabel(value, structure.valueLabels, byteArray)

    offsetParsed[key].value = value
    offsetParsed[key].label = label
  } else if (structure.length > 1 && structure.transform) {
    offsetParsed[key].value = structure.transform(
      byteArray.slice(offset, offset + structure.length)
    )
  }

  return offsetParsed
}

export default function parser (byteArray) {
  let parsed = {}

  const commonOffsets = Object.keys(m8iCommonStructure)
  const commonOffsetsLength = commonOffsets.length

  for (let i = 0; i < commonOffsetsLength; i += 1) {
    const offset = Number(commonOffsets[i])
    const structure = m8iCommonStructure[offset]

    parsed = {...parsed, ...parseOffset(byteArray, offset, structure)}
  }

  const instrumentType = parsed['Instrument Type'].label

  if (instrumentType === 'NONE') {
    return parsed
  }

  const instrumentStructure = instrumentStructures[instrumentType]

  const instrumentOffsets = Object.keys(instrumentStructure)
  const instrumentOffsetsLength = instrumentOffsets.length

  for (let i = 0; i < instrumentOffsetsLength; i += 1) {
    const offset = instrumentOffsets[i]
    const structure = instrumentStructure[offset]

    parsed = {...parsed, ...parseOffset(byteArray, offset, structure)}
  }

  return parsed
}
