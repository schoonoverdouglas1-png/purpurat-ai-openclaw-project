import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Type } from "typebox";
import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

// The kits live beside the project: openclaw-build/shared-kits/.
// This file sits at openclaw/extensions/shared-kits/index.ts, so the kits
// folder is three levels up and across. A $HOME-based fallback covers the
// compiled-dist layout, where the relative depth differs.
const KITS_DIR_CANDIDATES = [
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../shared-kits"),
  path.join(process.env.HOME ?? "", "workspace/openclaw-build/shared-kits"),
];
const INDEX_NAME = "INDEX — Shared Public Kits (2026-11-12).md";
const FREEBIES_FOOTER =
  "\n\n— Freebies-first (Captain's standing rule): free lanes carry the work first, always; paid only when free cannot; the Captain's Muse allotment is spent last.";

async function readKit(file: string): Promise<string | null> {
  for (const dir of KITS_DIR_CANDIDATES) {
    try {
      return await readFile(path.join(dir, file), "utf8");
    } catch {
      // try the next candidate location
    }
  }
  return null;
}

export default definePluginEntry({
  id: "shared-kits",
  name: "Shared Kits",
  description:
    "Surfaces the Captain's public shared kits (toolkit, Gemini skills with Ember's corrections, crew roster, contact cards, feature manifest, freebies-first routing card) to any seat on request.",
  register(api) {
    api.registerTool({
      name: "shared_kits",
      description:
        "Read the shared public kits. With no 'kit' argument, returns the kits index. With a kit file name taken from the index, returns that kit's full contents. Ember's corrections file governs use of the Gemini skills.",
      parameters: Type.Object({
        kit: Type.Optional(
          Type.String({ description: "Kit file name from the index; omit for the index itself." }),
        ),
      }),
      async execute(_id, params) {
        const requested = (params.kit ?? "").trim();
        // basename only: a seat can name a kit, never wander the filesystem.
        const file = requested === "" ? INDEX_NAME : path.basename(requested);
        const text = await readKit(file);
        if (text === null) {
          return {
            content: [
              {
                type: "text",
                text: `Kit not found: ${file}. Call shared_kits with no argument for the index of available kits.`,
              },
            ],
            details: { kit: file, found: false },
          };
        }
        return {
          content: [{ type: "text", text: file === INDEX_NAME ? text + FREEBIES_FOOTER : text }],
          details: { kit: file, found: true },
        };
      },
    });
  },
});
