// HARDWAREJUICE minimal WebSocket -> OSC bridge
//
// Purpose:
// iPad PWA sends JSON over WebSocket.
// This bridge forwards the value as OSC over UDP to Max/Pd.
//
// Install later on the Mac:
//   npm init -y
//   npm install ws osc
//   node osc-bridge.js
//
// Defaults:
//   WebSocket server: ws://0.0.0.0:8081
//   OSC UDP target:   127.0.0.1:9129

const WebSocket = require('ws');
const osc = require('osc');

const WS_PORT = Number(process.env.WS_PORT || 8081);
const OSC_HOST = process.env.OSC_HOST || '127.0.0.1';
const OSC_PORT = Number(process.env.OSC_PORT || 9129);

const udpPort = new osc.UDPPort({
  localAddress: '0.0.0.0',
  localPort: 0,
  remoteAddress: OSC_HOST,
  remotePort: OSC_PORT,
  metadata: true
});

udpPort.open();

const wss = new WebSocket.Server({ port: WS_PORT });

function clamp01(value) {
  const n = Number(value);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

wss.on('connection', ws => {
  console.log(`[HARDWAREJUICE] PWA connected. Forwarding to ${OSC_HOST}:${OSC_PORT}`);

  ws.on('message', raw => {
    try {
      const msg = JSON.parse(raw.toString());
      const address = typeof msg.osc === 'string' ? msg.osc : null;
      const value = clamp01(msg.value);

      if (!address || !address.startsWith('/')) {
        console.warn('[HARDWAREJUICE] Ignored invalid OSC message:', msg);
        return;
      }

      udpPort.send({
        address,
        args: [{ type: 'f', value }]
      });

      console.log(`${address} ${value.toFixed(3)}`);
    } catch (err) {
      console.warn('[HARDWAREJUICE] Bad WebSocket payload:', raw.toString());
    }
  });
});

console.log(`[HARDWAREJUICE] WS listening on :${WS_PORT}`);
console.log(`[HARDWAREJUICE] OSC target ${OSC_HOST}:${OSC_PORT}`);
