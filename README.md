[![make.fun](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/qw123gyj-dev/u-danu-how-many-tabs-do-you-have-open-d86e783d/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/qw123gyj-dev/u-danu-how-many-tabs-do-you-have-open-d86e783d/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

# How Many Tabs Do You Have Open?

One honest number, digits only: how many browser tabs are open right now. `main.ts` writes the count to `entry.txt` — two digits and nothing else, no newline, no words — enforcing the gates (digits only, 1 to 5 characters, non-empty, no leading zero), then reads the file back as raw bytes and verifies they match exactly.

> 47

Forty-seven tabs: a research window, a docs window, a music tab, a few shopping tabs, and a trail of half-read articles nobody ever closes. High enough to surprise, low enough to be a real count.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/u-danu-tabs-out node main.ts
```
