export default function toHex (int) {
  return Number(int).toString(16).padStart(2, '0').toUpperCase()
}
