# HARDWAREJUICE

Local-first tactile AI music manipulation rig.

This repo is the machine/build repo for a personal physical-digital instrument: real audio in, local neural audio on the Mac, tactile control from Maschine/iPad/future knobs, and one shared MIDI/OSC parameter namespace.

## What this is

- A local-first studio rig.
- A clean build spine for tactile AI audio experiments.
- A single source of truth for controls, mappings, signal flow, and test logs.
- A place to prove whether a knob meaningfully changes sound.

## What this is not

- Not the creative sketch diary. That belongs in SUNDAYJUICE.
- Not a shopping list.
- Not a cloud-first AI generator workflow.
- Not an iPad-hosted AI engine.
- Not an impressive app for its own sake.
- Not a prompt-typing machine.

## Core architecture

```text
Mac Studio        = audio brain / neural engine
iPad PWA          = touch controller only
Maschine Mk3      = tactile controller now
Future knobs      = tactile controller later
MIDI + OSC        = shared control layer
parameter namespace = single source of truth
RAVE / AFTER / MRT2 = live machine
Demucs / ACE-Step / MusicGen = prep/render machine
local LLM         = prompt interpreter / bridge, not the instrument
```

## Prime directive

The raw audio carries the soul.

The system restyles, bends, colours, pushes, dirties, brightens, smears, translates, and reveals. It does not replace the human input.

Hands → controls → parameters → sound → ear → feeling → log → improve.

## Phase 0 rule

No purchases required for Phase 0.

Use what already exists. Start with 8 controls. One knob must earn trust before the system grows.

## Repo map

```text
docs/                 mission, architecture, signal flow, live-vs-batch notes
parameters/           namespace JSON + human-readable table
hardware/             Maschine, Twister, future desk mapping notes
pwa-knob-surface/     minimal iPad controller stub
software-bridge/      WebSocket/UDP bridge starter
max/                  Max/MSP patch notes and patch parking
firmware/             future Teensy/CircuitPython controller notes
experiments/          test logs and listening notes
benchmarks/           measured results only
bom/                  AU pricing notes; no-buy Phase 0 rule
assets/               diagrams and screenshots
```

## First proof

A real input enters the Mac. One control changes one parameter. The sound changes in a way that can be heard, described, and logged.

If that does not happen, nothing else matters yet.
