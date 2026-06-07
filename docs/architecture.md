# Architecture

HARDWAREJUICE is three machines sharing one control language.

Do not collapse them into one confused app.

## 1. LIVE MACHINE

Purpose: touch control → real-time or near-real-time sound change.

Lives on: Mac Studio.

Controlled by: Maschine Mk3, iPad PWA, future MIDI/OSC hardware.

Likely tools:

- Max/MSP or Pure Data
- nn~
- RAVE
- AFTER
- MRT2
- DDSP / Neutone-style live effects where useful
- Logic/BlackHole/Loopback routing where needed

Rules:

- Prioritise heard change over clever architecture.
- Keep first version to 8 controls.
- Log latency and musical usefulness.
- Do not depend on cloud tools.
- Do not make the iPad the audio brain.

## 2. PREP MACHINE

Purpose: prepare material so the live machine has useful things to play.

Likely tools:

- Demucs / demucs-mlx
- stem extraction
- file naming
- loop slicing
- test input library
- offline analysis

Rules:

- Batch is allowed.
- Waiting seconds is allowed.
- Prep does not need to feel playable.
- Output should become clean inputs for live testing.

## 3. RENDER MACHINE

Purpose: generate/repaint/extend/regenerate audio after a control snapshot.

Likely tools:

- ACE-Step
- MusicGen
- Stable Audio Open
- offline RVC / vocal tools where appropriate
- local LLM prompt shaping

Rules:

- This is not live knob-tweak audio.
- It can take seconds or minutes.
- It should accept structured state from the namespace.
- Rendered output can be brought back into the live machine as material.

## Shared control layer

Everything speaks the same control language:

```text
control id → MIDI CC → OSC address → target parameter → prompt text bin
```

The parameter namespace is the single source of truth.

If a new controller cannot map to the namespace, it does not join the system yet.

## System boundary

SUNDAYJUICE is for creative sketches, listening notes, rituals, and ear training.

HARDWAREJUICE is for the build: mappings, bridges, patches, benchmarks, tests.
