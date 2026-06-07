# Parameter Namespace

The namespace is the single source of truth.

Every controller maps to this same table:

- Maschine Mk3 encoders
- iPad PWA controls
- future MIDI hardware
- future DIY firmware
- Max/Pd patch targets
- prompt builder labels

If a control is not in `namespace.json`, it does not exist yet.

| ID | Name | MIDI CC | OSC | Target | Start | Purpose |
|---:|---|---:|---|---|---:|---|
| 01 | vocal_brightness | 21 | /vocal/bright | nn_latent_1 | 0.55 | brighter / crystalline vs dark / intimate |
| 02 | vocal_body | 22 | /vocal/body | nn_latent_2 | 0.45 | warmth / low-mid body |
| 03 | timbre_blend | 23 | /timbre/blend | after_map | 0.35 | donor timbre crossfade |
| 04 | energy | 24 | /global/energy | mrt2_macro | 0.60 | drive / confidence / forward motion |
| 05 | groove_swing | 25 | /groove/swing | humanizer_macro | 0.40 | pocket / looseness / human timing |
| 06 | air | 26 | /vocal/air | eq_high_shelf | 0.50 | breath / top-end sparkle |
| 07 | wet_dry | 27 | /global/wetdry | main_mix | 0.70 | processed AI vs direct signal |
| 08 | prompt_weight | 28 | /llm/weight | prompt_builder | 0.50 | how strongly controls influence generated prompt |

## Change rule

When a control changes:

1. update `parameters/namespace.json` first;
2. update this table;
3. update controller maps;
4. update PWA labels;
5. update Max/Pd patch notes.

No hard-coded mystery knobs.
