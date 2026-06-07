# Software Bridge

Minimal bridge between the iPad PWA and the Mac audio engine.

## Job

```text
iPad PWA WebSocket message
  → Node bridge
  → OSC UDP message
  → Max/Pd receiver
```

The bridge does not make music.
It only moves control values.

## First target

Receive this from the PWA:

```json
{ "osc": "/vocal/bright", "value": 0.72 }
```

Forward this to Max/Pd over UDP:

```text
/vocal/bright 0.72
```

## Max/Pd receive defaults

- UDP host: `127.0.0.1`
- UDP port: `9129`
- WebSocket port: `8081`

Change only if needed.
