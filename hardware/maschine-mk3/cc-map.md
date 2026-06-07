# Maschine Mk3 CC Map

Phase 0 uses Maschine Mk3 before buying anything.

Map encoders 1-8 to the first namespace controls.

| Encoder | MIDI CC | Namespace ID | Name | OSC | Start | Notes |
|---:|---:|---:|---|---|---:|---|
| 1 | 21 | 01 | vocal_brightness | /vocal/bright | 0.55 | brighter / crystalline |
| 2 | 22 | 02 | vocal_body | /vocal/body | 0.45 | warmth / body |
| 3 | 23 | 03 | timbre_blend | /timbre/blend | 0.35 | donor crossfade |
| 4 | 24 | 04 | energy | /global/energy | 0.60 | drive / confidence |
| 5 | 25 | 05 | groove_swing | /groove/swing | 0.40 | pocket / human swing |
| 6 | 26 | 06 | air | /vocal/air | 0.50 | breath / top |
| 7 | 27 | 07 | wet_dry | /global/wetdry | 0.70 | processed vs direct |
| 8 | 28 | 08 | prompt_weight | /llm/weight | 0.50 | knob state → prompt influence |

## Pad ideas for later

Do not build these until the 8 encoders work.

| Pad | Possible action |
|---:|---|
| 1 | capture snapshot |
| 5 | trigger offline render |

## First test

Use Encoder 1 only.

If Encoder 1 does not clearly change sound, do not map more controls yet.
