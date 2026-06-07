# Max / Pd Patch Notes

Patch files and notes live here.

## First patch target

One live model passing audio.

Minimum useful proof:

```text
input audio
  → model/effect
  → wet/dry
  → output

MIDI CC21 or OSC /vocal/bright
  → one audible parameter
```

## Receiver defaults

- OSC UDP port: `9129`
- First target: `/vocal/bright`
- First controller: Maschine encoder 1 / CC21

## Rule

Do not build a massive patch first.

Build one audible control, then log it.
