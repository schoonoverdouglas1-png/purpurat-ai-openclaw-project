# PLUGINS BUILT — Captain's Plugins (2026-11-12)

Captain's orders, Nov 12, 2026: "And then make plugins and add to all
things" (~6:47 PM CST) and the freebies-first doctrine (~6:50 PM CST).
Built in the OpenClaw project's OWN extension pattern (folder +
`openclaw.plugin.json` + `package.json` with the `openclaw` block +
`index.ts` using `definePluginEntry` from `openclaw/plugin-sdk/plugin-entry`,
matching the bundled extensions and the extensions/AGENTS.md boundary:
SDK imports only, accurate manifest metadata, tools declared in
`contracts.tools`).

## The three plugins

1. **shared-kits** — tool `shared_kits`. Surfaces the public shared kits to
   any seat: no argument returns the kits index (with the freebies-first
   footer appended); a kit file name returns that kit's full contents.
   Basename-only lookup — a seat can name a kit, never wander the filesystem.
   Canonical: `openclaw/extensions/shared-kits/`
2. **old-with-new** — tool `backup_first`. The Captain's file-safety method
   as a tool: copies a file to a dated backup beside it
   (`.bak-old-with-new-<date>`, numbered if taken, COPYFILE_EXCL so a backup
   is never overwritten) and returns the undo path. Refuses directories and
   missing files. Never deletes anything.
   Canonical: `openclaw/extensions/old-with-new/`
3. **bridges** — tool `bridge_note`. Compatibility notes under the bridge
   doctrine ("Automatically make software bridges… in name of love"):
   memory-slot bridge (memory-core stays live, lancedb/wiki beside it),
   source↔compiled bridge, vCard bridge, markdown↔text bridge, config
   bridge, and the **freebies-first lane bridge** (the fourth order encoded:
   free tiers first always, paid only when free cannot, the Captain's Muse
   allotment last, rate-limit = stop signal).
   Canonical: `openclaw/extensions/bridges/`

## Load test — honest tiers
- **Discovery/registry: PASS.** `plugins list --json`: 186 plugins total;
  all three present, enabled, correct source paths.
- **Runtime load: PASS.** The live Gateway's startup line lists all three
  among its 69 runtime-loaded plugins; the bridges startup trace shows
  loadFailedCount=0 / registerFailedCount=0; Gateway health live after
  restart (note: full startup now takes ~2 minutes with everything on).
- **End-to-end tool execution through an agent turn: NOT PROVEN.** Two
  embedded-agent attempts on the free Gemini lane: the first completed with
  an empty model response and no observable tool effect (no backup file was
  created); the second timed out at 240s under the full plugin load. The
  tools are registered and loaded; a successful seat-driven call is still
  owed as proof and should be re-run when the lane is fresh. Not claimed
  beyond this.

## Added to all things
- Registered in the live Gateway config (`plugins.entries`, enabled) — the
  one Gateway serves every seat.
- Copies in every seat folder: `leo-representation/seat-plugins/`,
  `douglas-seat/seat-plugins/`, `purple-rabbit-rodent-project/seat-plugins/`,
  each referenced from that seat's OFFLOAD.md (backups:
  `OFFLOAD.md.bak-pre-captain-plugins-2026-11-12`).
- Carried to the purpurat GitHub repo (captain-plugins/ + refreshed
  shared-kits/) in the same push as this record.

## Freebies-first card (fourth order)
`shared-kits/FREEBIES-FIRST — Routing Card (2026-11-12).md` (1,139 bytes)
landed in the kits folder and is entry #12 in the kits index, so every seat
learns it. The rule is also encoded in the bridges plugin's lane note.

## Addendum to the activation — qa-channel staged
During the tool-execution test, the embedded agent path failed on
**qa-channel**: it bundles an incompatible OpenClaw SDK copy in its own
node_modules ("Package subpath './plugin-sdk/qa-channel-protocol' is not
defined"). The Gateway runtime itself loads fine without it eager-loaded.
Per the no-install rule it is STAGED (needs its bundled SDK updated — an
install/update step), entry removed from the live config on Nov 12 evening
(backup: `openclaw.json.bak-pre-qa-channel-staging-2026-11-12`). Current
verified totals: **186 plugins found, 181 enabled, 5 staged**
(team-reports, agent-guidance, mcp-events, visitor-access, qa-channel).

## Undo
- Plugins: remove the three entries from `plugins.entries` (or restore
  `openclaw.json.bak-pre-captain-plugins-2026-11-12`) and restart; delete
  the three extension folders and the seat-plugins/ copies. Nothing else
  was modified by the builds.
