import commonScreenLayout from './common-screen-layout'
import commonInstrumentLayout from './common-instrument-layout'
import macrosynthLayout from './macrosynth-layout'
import wavsynthLayout from './wavsynth-layout'
import sampleLayout from './sample-layout'
import midioutLayout from './midiout-layout'
import tableLayout from './table-layout'
import envelopeLayout from './envelope-layout'
import glyphs from './glyphs'
import m8Logo from './m8-logo'
import {
  backgroundColor, highlightColor
} from './colors'

const layouts = {
  'MACROSYN': macrosynthLayout,
  'WAVSYNTH': wavsynthLayout,
  'SAMPLE': sampleLayout,
  'MIDI OUT': midioutLayout
}

const columns = 40
const rows = 24

const chars = []

function clear () {
  for (let x = 0; x < columns; x += 1) {
    chars[x] = new Array(rows)
    chars[x].fill({
      data: '',
      color: '#000',
      type: 'string'
    })
  }
}

function write (data = [], x = 0, y = 0, color = '#000', type = 'string') {
  if (data.length && type !== 'glyph') {
    const dataLength = Math.min(data.length, rows)

    for (let i = 0; i < dataLength; i += 1) {
      chars[x + i][y] = { data: data[i], color, type }
    }
  } else if ((typeof data === 'string' && data) || typeof data === 'number') {
    chars[x][y] = { data: data, color, type }
  }
}

// The only way to prevent subpixel rendering for text on Canvas on Windows seems to be
// rendering the Canvas at an absurd resolution and scaling that down to another Canvas with
// a .5 offset for all co-ordinates, imageSmoothingEnabled set to false, alpha turned off and
// css imageRendering set to 'pixelated' so it shows crisp to the user in the DOM.

const renderCanvas = document.createElement('canvas')
const screenWidth = 320
const screenHeight = 240
const numberOfScreensX = 2
const numberOfScreensY = 2

export default function screenWriter (canvas, data) {
  const dpr = 5
  const fontSize = 8 * dpr
  const width = screenWidth * numberOfScreensX
  const height = screenHeight * numberOfScreensY
  const cellWidth = 8 * dpr
  const cellHeight = 10 * dpr
  const verticalHeight = screenHeight * dpr
  const horizontalWidth = screenWidth * dpr

  let screenX = 0
  let screenY = 0

  const context = canvas.getContext('2d', { alpha: false })
  const renderContext = renderCanvas.getContext('2d', { alpha: false })

  canvas.width = width
  canvas.height = height
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  canvas.style.imageRendering = 'pixelated'
  context.imageSmoothingEnabled = false

  renderCanvas.width = width * dpr
  renderCanvas.height = height * dpr
  renderContext.imageSmoothingEnabled = false

  renderContext.fillStyle = backgroundColor
  renderContext.fillRect(0, 0, renderCanvas.width, renderCanvas.height)
  renderContext.font = `${fontSize}px stealth57`
  renderContext.textBaseline = 'top'

  const renderScreen = () => {
    for (let x = 0; x < chars.length; x += 1) {
      for (let y = 0; y < chars[x].length; y += 1) {
        const { data, color, type } = chars[x][y]

        let xp = (screenX * horizontalWidth) + (x * cellWidth) + 0.5
        let yp = (screenY * verticalHeight) + (y * cellHeight) + 0.5

        if (type === 'string') {
          if (!data || data === ' ') {
            continue
          }
          renderContext.fillStyle = color
          renderContext.fillText(data, xp, yp)
        } else if (type === 'glyph') {
          renderContext.fillStyle = color

          renderContext.save()
          renderContext.translate(
            xp, yp
          )
          renderContext.fill(glyphs[data])
          renderContext.restore()
        } else if (type === 'bar') {
          renderContext.fillStyle = color

          // Write a 1px line when near 0
          const barWidth = Math.max(0.01 * (fontSize * 7), (data / 256) * (fontSize * 7))

          renderContext.fillRect(
            xp,
            yp,
            barWidth,
            4 * dpr
          )
        } else if (type === 'bar-centered') {
          const value = data / 256
          const barWidth = (fontSize * 7)
          const barCenter = barWidth / 2

          renderContext.fillStyle = color
          renderContext.fillRect(
            xp + barCenter - value,
            yp,
            // Write a 1px line when near 0
            (value > 0.5 ? Math.max(0.01, -(0.5 - value)) : Math.min(-0.01, (value - 0.5))) * barWidth,
            4 * dpr
          )
        }
      }
    }

    context.drawImage(renderCanvas, 0, 0, width, height)
  }

  screenX = 1
  screenY = 0
  renderContext.save()
  renderContext.translate(
    (screenX * horizontalWidth) + 0.5,
    (screenY * verticalHeight) + 0.5
  )

  renderContext.fillStyle = highlightColor
  renderContext.fill(m8Logo)
  renderContext.restore()

  clear()
  screenX = 0
  screenY = 1
  writeLayout(commonInstrumentLayout, data)

  const layout = layouts[data['Instrument Type'].label]

  if (layout) {
    writeLayout(commonScreenLayout, data)
    writeLayout(commonInstrumentLayout, data)
    writeLayout(layout, data)
  }

  renderScreen()

  clear()
  screenX = 1
  screenY = 1
  writeLayout(commonScreenLayout, data)
  writeLayout(tableLayout, data)
  renderScreen()

  clear()
  screenX = 0
  screenY = 0
  writeLayout(commonScreenLayout, data)
  writeLayout(commonInstrumentLayout, data)
  writeLayout(envelopeLayout, data)
  renderScreen()
}

function writeLayout (layout, data) {
  layout.forEach(({ data: layoutData, x, y, color, type }) => {
    if (typeof layoutData === 'function') {
      write(layoutData(data), x, y, color, type)
    } else {
      write(layoutData, x, y, color, type)
    }
  })
}
