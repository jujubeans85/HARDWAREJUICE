# Research Claims

This file separates useful direction from hype.

Do not treat claims as truth until tested on this rig.

## Working assumptions

- Mac Studio handles audio engine and local models.
- iPad PWA is a controller only.
- MIDI/OSC namespace is the system backbone.
- RAVE / AFTER / MRT2 belong to the live machine.
- Demucs / ACE-Step / MusicGen belong to prep/render unless proven otherwise.
- Local LLM helps translate knob states into prompt language.

## Claims to verify later

Use this format for every claim:

```text
Claim:
Source:
Test method:
Measured result:
Keep / park / reject:
Notes:
```

## First claims to test

### RAVE / nn~ live usefulness

Claim: RAVE can run in real time enough to be played.

Test: Load one model in Max/Pd, feed mic or file input, map CC21/22 to audible parameters, log latency and musical usefulness.

### AFTER timbre control usefulness

Claim: AFTER gives more usable timbre/style control than raw latent controls.

Test: Load tiny config where possible, map timbre blend, compare to RAVE on the same input.

### MRT2 as AI bandmate/blend layer

Claim: MRT2 is useful as a live generation channel controlled by MIDI/text/audio examples.

Test: Run standalone or plugin, map energy/prompt influence, blend with direct material.

### Demucs prep speed

Claim: stem separation is fast enough to use as track-load prep.

Test: Separate one known 3-7 minute track, log wall time, quality, and whether stems are playable.

## Anti-hype rule

If a claim sounds magical, it goes here first.

Nothing enters the live system until a small test proves it helps the ear.
