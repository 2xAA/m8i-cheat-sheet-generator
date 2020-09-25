const commands = {}

commands.common = {
  0xFF: '---',
  0x00: 'ARP',
  0x01: 'CHA',
  0x02: 'DEL',
  0x03: 'GRV',
  0x04: 'HOP',
  0x05: 'KIL',
  0x06: 'RAN',
  0x07: 'RET',
  0x08: 'REP',
  0x09: 'PSL',
  0x0A: 'PVB',
  0x0B: 'PVX',
  0x0C: 'TBL',
  0x0D: 'THO',
  0x0E: 'TIC',
  0x0F: 'TPO',
  0x10: 'VMV',
  0x11: 'XCM',
  0x12: 'XCF',
  0x13: 'XCW',
  0x14: 'XCR',
  0x15: 'XDT',
  0x16: 'XDF',
  0x17: 'XDW',
  0x18: 'XDR',
  0x19: 'XRS',
  0x1A: 'XRD',
  0x1B: 'XRM',
  0x1C: 'XRF',
  0x1D: 'XRW',
  0x1E: 'XRZ'
}

commands.WAVSYNTH = {
  0x80: 'VOL',
  0x81: 'PIT',
  0x82: 'FIN',
  0x83: 'OSC',
  0x84: 'SIZ',
  0x85: 'MUL',
  0x86: 'WRP',
  0x87: 'MIR',
  0x88: 'FIL',
  0x89: 'CUT',
  0x8A: 'RES',
  0x8B: 'AMP',
  0x8C: 'LIM',
  0x8D: 'PAN',
  0x8E: 'DRY',
  0x8F: 'SCH',
  0x90: 'SDL',
  0x91: 'SRV',
  0x92: 'E1>',
  0x93: 'EV1',
  0x94: 'AT1',
  0x95: 'HO1',
  0x96: 'DE1',
  0x97: 'ET1',
  0x98: 'E2>',
  0x99: 'EV2',
  0x9A: 'AT2',
  0x9B: 'HO2',
  0x9C: 'DE2',
  0x9D: 'ET2',
  0x9E: 'LFO',
  0x9F: 'LF>',
  0xA0: 'LFT',
  0xA1: 'LFQ',
  0xA2: 'LFO',
  0xA3: 'LFT'
}

commands.MACROSYN = {
  0x80: 'VOL',
  0x81: 'PIT',
  0x82: 'FIN',
  0x83: 'OSC',
  0x84: 'TBR',
  0x85: 'COL',
  0x86: 'DEG',
  0x87: 'RED',
  0x88: 'FIL',
  0x89: 'CUT',
  0x8A: 'RES',
  0x8B: 'AMP',
  0x8C: 'LIM',
  0x8D: 'PAN',
  0x8E: 'DRY',
  0x8F: 'SCH',
  0x90: 'SDL',
  0x91: 'SRV',
  0x92: 'E1>',
  0x93: 'EV1',
  0x94: 'AT1',
  0x95: 'HO1',
  0x96: 'DE1',
  0x97: 'ET1',
  0x98: 'E2>',
  0x99: 'EV2',
  0x9A: 'AT2',
  0x9B: 'HO2',
  0x9C: 'DE2',
  0x9D: 'ET2',
  0x9E: 'LFO',
  0x9F: 'LF>',
  0xA0: 'LFT',
  0xA1: 'LFQ',
  0xA2: 'LFO',
  0xA3: 'LFT'
}

commands.SAMPLE = {
  0x80: 'VOL',
  0x81: 'PIT',
  0x82: 'FIN',
  0x83: 'PLY',
  0x84: 'SLI',
  0x85: 'STA',
  0x86: 'LOP',
  0x87: 'LEN',
  0x88: 'DEG',
  0x89: 'FIL',
  0x8A: 'CUT',
  0x8B: 'RES',
  0x8C: 'AMP',
  0x8D: 'LIM',
  0x8E: 'PAN',
  0x8F: 'DRY',
  0x90: 'SCH',
  0x91: 'SDL',
  0x92: 'SRV',
  0x93: 'E1>',
  0x94: 'EV1',
  0x95: 'AT1',
  0x96: 'HO1',
  0x97: 'DE1',
  0x98: 'ET1',
  0x99: 'E2>',
  0x9A: 'EV2',
  0x9B: 'AT2',
  0x9C: 'HO2',
  0x9D: 'DE2',
  0x9E: 'ET2',
  0x9F: 'LFO',
  0xA0: 'LF>',
  0xA1: 'LFT',
  0xA2: 'LFQ',
  0xA3: 'LFO',
  0xA4: 'LFT'
}

commands['MIDI OUT'] = {
  0x80: 'CHN',
  0x81: 'BNK',
  0x82: 'MPG',
  0x83: 'MPB',
  0x84: 'ADD',
  0x85: 'CHD',
  0x86: 'CCA',
  0x87: 'CCA',
  0x88: 'CCB',
  0x89: 'CCB',
  0x8A: 'CCC',
  0x8B: 'CCC',
  0x8C: 'CCD',
  0x8D: 'CCD',
  0x8E: 'CCE',
  0x8F: 'CCE',
  0x90: 'CCF',
  0x91: 'CCF',
  0x92: 'CCG',
  0x93: 'CCG',
  0x94: 'CCH',
  0x95: 'CCH',
  0x96: 'CCI',
  0x97: 'CCI',
  0x98: 'CCJ',
  0x99: 'CCJ'
}

export default commands