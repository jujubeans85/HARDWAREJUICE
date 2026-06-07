# Signal Flow

## Prototype flow

```text
Mic / instrument / audio file
  → current interface or Mac input
  → Mac Studio audio engine
  → live model/effect chain
  → monitors / headphones

Maschine Mk3 / iPad PWA
  → MIDI or OSC
  → parameter namespace
  → Max/Pd/Logic targets
```

## Stem-based flow

```text
full track
  → PREP MACHINE: Demucs stem separation
  → drums / bass / vocal / other stems
  → LIVE MACHINE: per-stem processing
  → mix output
```

## Control flow

```text
controller movement
  → MIDI CC or OSC message
  → namespace lookup
  → audio parameter change
  → optional prompt state update
  → optional log snapshot
```

## Prompt flow

```text
knob state
  → local rule-based text bins
  → optional local LLM rewrite
  → prompt preview
  → optional render request
```

The prompt is a bridge, not the instrument.

## First proof target

A microphone or audio file goes in.

One mapped control changes one audible thing.

The result is logged in `experiments/000-test-log.md`.
