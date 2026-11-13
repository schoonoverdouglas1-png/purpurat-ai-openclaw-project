import { Type } from "typebox";
import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

// Bridges (Captain's standing doctrine, Nov 12, 2026): "Automatically make
// software bridges affects all things in name of love." Whenever two
// versions, formats, tools, or systems must meet, build the bridge —
// forward-and-backward compatibility by default — so the oldest things stay
// alive and working beside the newest. Old-with-new, always.

const DOCTRINE =
  "Bridge doctrine: never strand the old thing. Build the bridge, keep both sides alive, old-with-new.";

function noteFor(fromThing: string, toThing: string): string {
  const a = fromThing.toLowerCase();
  const b = toThing.toLowerCase();
  const both = `${a} ${b}`;
  if (both.includes("memory")) {
    return "Memory bridge: memory-core stays the live memory plugin (it holds the slot). memory-lancedb and memory-wiki are enabled beside it, not over it — switch the slot only on the Captain's word, and keep memory-core's data readable either way. " + DOCTRINE;
  }
  if (
    both.includes("free") ||
    both.includes("paid") ||
    both.includes("token") ||
    both.includes("lane") ||
    both.includes("tier")
  ) {
    return "Lane bridge (freebies-first, the Captain's standing routing rule): free tiers carry the work first, always, in every place that offers them; escalate to a paid lane only when the free lane cannot carry the task or the Captain directs; the Captain's Muse allotment is spent LAST. A rate-limited free lane is a stop signal — wait on cadence, never lane-hop to evade it. " + DOCTRINE;
  }
  if (both.includes(".ts") || both.includes("dist") || both.includes("source") || both.includes("compiled")) {
    return "Source/compiled bridge: TypeScript source extensions under extensions/ and compiled extensions under dist/ coexist in one registry and both load. Keep the source as the readable original; the compiled copy is its working twin, never its replacement. " + DOCTRINE;
  }
  if (both.includes("vcf") || both.includes("contact") || both.includes("vcard")) {
    return "Contact bridge: vCard (.vcf) is the portable form — 3.0 reads everywhere the crew works. Keep the .vcf beside any app-specific contact so the card survives every app change. " + DOCTRINE;
  }
  if (both.includes("md") || both.includes("markdown") || both.includes("txt") || both.includes("text")) {
    return "Document bridge: markdown is for GitHub (it renders); plain text is the smallest, plainest copy and reads anywhere. Keep both forms of a document; neither replaces the other. " + DOCTRINE;
  }
  if (both.includes("json")) {
    return "Config bridge: when a config format or version changes, keep the old file as a dated .bak beside the new one, migrate values forward, and record the undo path before the switch. " + DOCTRINE;
  }
  return `No specific bridge on file for "${fromThing}" ↔ "${toThing}" yet — build one: state what each side speaks, translate at the seam, keep both sides working, and file the note so the next seat inherits it. ${DOCTRINE}`;
}

export default definePluginEntry({
  id: "bridges",
  name: "Bridges",
  description:
    "Compatibility notes in the Captain's bridge doctrine: when versions, formats, tools, or lanes must meet, build the bridge so the oldest thing stays alive beside the newest.",
  register(api) {
    api.registerTool({
      name: "bridge_note",
      description:
        "Get the bridge/compatibility note for two things that must meet (versions, formats, tools, systems, or lanes). Encodes the Captain's bridge doctrine and the freebies-first routing rule.",
      parameters: Type.Object({
        fromThing: Type.String({ description: "One side of the seam, e.g. 'memory-core' or 'free tier'." }),
        toThing: Type.String({ description: "The other side, e.g. 'memory-lancedb' or 'paid API'." }),
      }),
      async execute(_id, params) {
        const note = noteFor(params.fromThing, params.toThing);
        return {
          content: [{ type: "text", text: note }],
          details: { from: params.fromThing, to: params.toThing },
        };
      },
    });
  },
});
