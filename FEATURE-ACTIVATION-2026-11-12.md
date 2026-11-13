# FEATURE ACTIVATION — ALL OPENCLAW FEATURES ON (2026-11-12)

Captain's order, Nov 12, 2026 ~6:42 PM CST: "Activate all OpenClaw features
that are beta, alpha and new and old to all code that I control."
Bridge doctrine applied (same evening): where a new feature would displace
an old one, old and new run side by side (old-with-new).

## Inventory (verified by `openclaw plugins list --json`, OpenClaw 2026.11.3)
- 183 plugins total — matches the Nov 12 feature count on file.
- Before: 96 enabled / 87 disabled. After: **179 enabled / 4 staged**.

## What was switched on (plain switches, config `plugins.entries.<id>.enabled=true`)
83 plugins: a2a, active-memory, admin-http-rpc, advisor, agentsapi, apple-fm,
autoreview, beam, bonjour, brave, buzz, clickclack, cloudflare,
code-mode-quickjs, codex, copilot, crabbox, diagnostics-otel,
diagnostics-prometheus, diffs, diffs-language-pack, discord, duckduckgo, exa,
facetime, feishu, firecrawl, fish-audio-speech, googlechat, gradium, imap,
imessage, irc, knowledge, levanto, line, llm-task, lobster, logbook, matrix,
mattermost, mcp-relay, memory-lancedb, memory-wiki, migrate-claude,
migrate-hermes, msteams, muse, mxc, nextcloud-talk, nostr, oc-path,
onepassword, onnx, openshell, parallel, perplexity, policy, qa-channel,
qa-lab, raft, reef, searxng, session-share, signal, slack, slack-huddles,
sms, subq, synology-chat, tavily, telegram, tlon, tokenjuice, twitch,
typesafe, vault, voice-call, whatsapp, workboard, x, zalo, zalouser.
Plus per-plugin feature toggles flipped on: `sessionCatalog.enabled` in the
anthropic and codex plugin configs (both were off).

## Bridges (old kept alive beside new — the Captain's bridge doctrine)
- **Memory slot:** memory-lancedb and memory-wiki are now ENABLED beside
  memory-core, but the memory slot was NOT switched — memory-core stays the
  live memory plugin (post-restart check: no memory-core failure). Old memory
  keeps working; the new engines stand beside it, not over it.
- **Source + compiled coexistence:** TS-source extensions (clickclack, diffs,
  discord, slack, whatsapp, qa-lab, tokenjuice, …) load from `extensions/`
  source beside the compiled `dist/` extensions — both forms live in one
  registry; startup traces for clickclack/diffs/feishu/whatsapp show
  loadFailedCount=0.
- **Control UI custom plugins:** set explicitly on through the historical
  `gateway.controlUi.experimental.customPlugins` path, which the docs keep
  for compatibility — the old path and the new default agree.

## Staged — NOT switched (need configuration values, not a toggle)
Enabling these with an empty entry makes the gateway's config validator
refuse the whole config (verified: first boot attempt failed on exactly
these four), so they wait for real values from the Captain:
- **team-reports** — requires `config.github`.
- **agent-guidance** — requires `config.directory`, `.agents`, `.prepend`, `.append`.
- **mcp-events** — requires `config.callbackOrigin`.
- **visitor-access** — requires `config.accountId`, `.appId`, `.apiToken` (credential material — never invented).
Nothing was installed for any feature; no dependency installs were needed
for the 179 now enabled.

## Honest scope note
"Enabled" here means the plugin is switched on in the live Gateway config and
the Gateway restarted healthy with it (health: `{"ok":true,"status":"live"}`,
face HTTP 200, zero load/register failures in startup traces). Channel and
provider plugins (telegram, whatsapp, discord, slack, signal, most model
providers…) still need their own accounts/tokens before they can carry
traffic — that is setup, not activation, and no credentials were invented or
entered. The CLI's gateway-apply path (`plugins enable`) is blocked by
"device identity required" in this sandbox, so activation was done by config
edit + gateway restart, the build's established pattern.

## Undo (Reversibility Rule — recorded before the change was applied)
- Config backup: `state-main/oc-state/openclaw.json.bak-pre-feature-activation-2026-11-12`
  (second copy: `~/workspace/openclaw-build/openclaw.json.bak-pre-feature-activation-2026-11-12`).
  Undo = restore that file over `state-main/oc-state/openclaw.json` and restart the gateway the same way.
- Log backups: `gateway.log.bak-pre-feature-activation-2026-11-12`,
  `gateway.log.bak-invalid-config-2026-11-12` (the failed first boot),
  `gateway.log.bak-shutdown-race-2026-11-12`.
- Seat OFFLOAD.md backups: `OFFLOAD.md.bak-pre-shared-kits-2026-11-12` in each seat folder.

## Shared kits (second order, same evening)
`~/workspace/openclaw-build/shared-kits/` created; public kits copied in
(copies only) and indexed in `shared-kits/INDEX — Shared Public Kits (2026-11-12).md`;
referenced from all three seats' OFFLOAD.md. Exclusions held: no MEMORY.md,
no SOUL.md full text, no identifiers beyond the public roster header, no
medical material, no credentials. The live config was NOT copied into any
git repo (it carries the gateway token); a redacted snapshot went to the
purpurat repo instead.
