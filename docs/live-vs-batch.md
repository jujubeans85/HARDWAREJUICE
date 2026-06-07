# Live vs Batch

This file protects the build from fantasy architecture.

## LIVE / KNOB-TWEAKABLE

Use for things that should react while playing.

Belongs here:

- RAVE in nn~
- AFTER in nn~ where usable
- MRT2 live generation / blend channel
- classical DSP: EQ, saturation, delay, reverb, filters
- wet/dry blending
- gain, routing, send levels
- macro controls
- prompt preview updates

Expected feel:

- immediate enough to play;
- imperfect but responsive;
- judged by ear, not by model hype.

## BATCH / OFFLINE / PREP

Use for things that can wait seconds or minutes.

Belongs here:

- Demucs stem separation
- ACE-Step full renders / repaint / extend
- MusicGen sketches
- Stable Audio Open generation
- large local LLM rewrites
- vocal conversion experiments
- training or fine-tuning models
- analysis and tagging

Expected feel:

- not playable in real time;
- useful as prep or render output;
- output can be fed back into the live machine.

## Grey zone

Some tools may feel fast enough for short sketches but not live control.

Grey-zone rule:

If the sound cannot change while the hand is moving the control, it is batch.

## Mood / feel warning

There is no clean single AI knob for `sad ↔ energetic`, `dead ↔ alive`, or `memory ↔ future`.

Build those as macros over real controls:

- brightness
- body
- air
- saturation
- wet/dry
- swing/pocket
- density
- delay/reverb
- timbre donor
- prompt weight

Mood is emergent. Do not pretend otherwise.
