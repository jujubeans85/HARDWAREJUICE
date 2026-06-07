# PWA Knob Surface

Minimal iPad controller stub.

This is not the audio engine.

The PWA only:

- shows 8 controls;
- sends control values to the Mac bridge;
- shows a local prompt preview;
- helps test the namespace.

## Rule

No heavy AI in the browser.

The Mac does the audio and model work. The iPad is a touch surface.

## First run

1. Open `index.html`.
2. Edit the WebSocket URL to point at the Mac running `software-bridge/osc-bridge.js`.
3. Move one slider.
4. Confirm the Mac bridge receives the matching OSC address.
5. Do not add more controls until the first 8 are useful.
