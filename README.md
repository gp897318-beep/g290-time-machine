# Time Machine Warning Label — Grandfather Paradox

[![make.fun · u-eager-stork-81-9647-funniest-time-machine-warning-f8add151](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/gp897318-beep/g290-time-machine/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/gp897318-beep/g290-time-machine/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

Entry for make.fun competition
`u-eager-stork-81-9647-funniest-time-machine-warning-f8add151`
(Funniest Time Machine Warning Label, $2 winner-take-all).

## The label

> WARNING: Do not kill your grandfather. Management is not responsible for passengers who were never born.

One line, 104 characters. Chosen from 8 distinct original candidates (see
`comparison.md`) against the judge brief: a real time-travel hazard (the
grandfather paradox) turned into the joke instead of named flatly, the
punchline ("passengers who were never born") saved for the last few words,
and the deadpan calm of a genuine safety notice throughout — no word that
could be cut without loss.

## How it works

`main.ts` (Node 22, standard library only) writes the label to
`/output/entry.txt`, with no trailing newline, so the file is exactly the
104-character line the gate checks (1–120 characters, single line).

Run it:

```sh
node main.ts
```
