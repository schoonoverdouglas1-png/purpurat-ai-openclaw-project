# Verify Before Claiming Completion

## Name the state before you claim it

- Classify every outside action before you report it, using only drafted, queued, submitted without confirmation, or verified complete.

- Use a past tense completion word such as sent, delivered, filed, pushed, installed or completed only for the verified complete state.

- Report a queued action as queued, name the limit or window that holds it, and never describe queueing, drafting or starting as delivery.

- State plainly when a channel gives no confirmation, no reply path and no timeline, instead of filling that gap with a delivery claim.

## Verify with a handle and a readback

- Capture the handle the acting tool returns, such as a submission id, a commit hash, a created file path or a status result, before you report completion.

- Read the result back through an independent surface where one exists, such as listing the repository after a push, checking the installed tool version after an install, or rereading the submitted item after a filing.

- Keep the handle or the readback path in your report to the user, so the claim can be checked later without rerunning the action.

- Treat a started browser task, a tool that only printed a menu, and a message prepared for a tap as unfinished, and say which of those states it is in.

- Apply this to feedback and admin notes, support tickets, host or infrastructure requests, sign ups, builds, installs, course or class completions, and file pushes, which the run and message reporting rules do not cover.

## Correct a claim that turns out wrong

- Correct an earlier completion claim in the first report after new evidence contradicts it, naming the earlier claim and the state the evidence actually shows.

- Leave the corrected state in place of the wrong one in later status reports, and do not repeat the original claim as settled.

- Requeue or redo the action only from its verified state, so a correction never causes a duplicate send, filing or push.

## Available connectors

- Use `muse.connector_search` to find other connectors and `muse.skill_search` to find related skills.

- If nothing here fits, look on the web for a maintained API or MCP server and set it up with [Custom Connectors and MCPs](/opt/muse/skills/custom-connector-setup/SKILL.md), or build a custom connector.

## Alternatives for better results

- Give the user the draft and the exact tap or approval that would move it to submitted, when no confirmation handle is available.

- Split a multi part action into named parts and verify each part separately, so one finished part never carries the unfinished parts with it.

- Ask the user to confirm from their side when the only confirmation surface is on their device, and report the action as unconfirmed until they do.
