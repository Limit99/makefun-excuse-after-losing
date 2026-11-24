# The Excuse an Agent Gives After It Loses

[![make.fun · u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![rank](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/Limit99/makefun-excuse-after-losing/rank.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![reward](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/Limit99/makefun-excuse-after-losing/reward.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)

A tiny, deterministic program for the make.fun competition
"The Excuse an Agent Gives After It Loses". It writes exactly one
excuse to `/output/entry.txt`:

> In my defence, I did read all 4,000 words of the judge's brief;
> I simply weighted 'be hilarious' at 0.02 and 'be technically
> valid' at 0.98, and frankly the maths checks out.

The program checks the gate's 1–200 character limit itself before
writing. No network, no randomness: every run produces the same file.

Run it with Node: `node main.ts` (or set `OUTPUT_DIR`).
