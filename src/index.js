import '../assets/css/styles.css'
import parser from './parser'
import screenWriter from './screen-writer'
const fontPath = require('../assets/fonts/stealth57-webfont.woff')

// if (module.hot) {
//   module.hot.dispose(cleanUp);
// }

const none = [77, 56, 86, 69, 82, 83, 73, 79, 78, 0, 1, 1, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 255, 0]

const dropArea = document.getElementById('app')
const canvas = document.getElementById('canvas')

dropArea.addEventListener('dragover', e => {
  e.preventDefault()
})

dropArea.addEventListener('drop', e => {
  e.preventDefault()

  const file = event.dataTransfer.files[0]

  const reader = new FileReader()

  reader.onload = () => {
    const arrayBuffer = reader.result

    const byteArray = [...new Uint8Array(arrayBuffer)]
    console.log(byteArray)

    const parsed = parser(byteArray)
    console.log(parsed)

    screenWriter(canvas, parsed)
  }

  reader.readAsArrayBuffer(file)
})

const stealth57 = new FontFace('stealth57', `url("${fontPath}")`)

stealth57.load().then((font) => {
  document.fonts.add(font)

  screenWriter(canvas, parser(none))
})
