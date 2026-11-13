import { constants as fsConstants } from "node:fs";
import { copyFile, stat } from "node:fs/promises";
import { Type } from "typebox";
import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

// Old-with-new (Captain's standing method): before a file changes, its old
// self is copied beside it, dated. A backup is never overwritten — if today's
// backup name is taken, the next one gets a number. Nothing is ever deleted
// by this plugin; it only adds copies.

async function exists(p: string): Promise<boolean> {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

export default definePluginEntry({
  id: "old-with-new",
  name: "Old With New",
  description:
    "Backup-first file safety in the Captain's old-with-new method: makes a dated backup copy beside a file before it is changed, and never overwrites an existing backup.",
  register(api) {
    api.registerTool({
      name: "backup_first",
      description:
        "Copy a file to a dated backup beside it (old-with-new). Run this BEFORE editing any project file so the change can be undone. Refuses directories and missing files; never overwrites an existing backup.",
      parameters: Type.Object({
        path: Type.String({ description: "Absolute path of the file to back up." }),
      }),
      async execute(_id, params) {
        const target = params.path;
        let st;
        try {
          st = await stat(target);
        } catch {
          return {
            content: [{ type: "text", text: `Refused: ${target} does not exist.` }],
            details: { ok: false, reason: "missing" },
          };
        }
        if (!st.isFile()) {
          return {
            content: [{ type: "text", text: `Refused: ${target} is not a file.` }],
            details: { ok: false, reason: "not-a-file" },
          };
        }
        const stamp = new Date().toISOString().slice(0, 10);
        let dest = `${target}.bak-old-with-new-${stamp}`;
        for (let n = 2; await exists(dest); n++) {
          dest = `${target}.bak-old-with-new-${stamp}-${n}`;
        }
        // COPYFILE_EXCL: even in a race, an existing backup is never clobbered.
        await copyFile(target, dest, fsConstants.COPYFILE_EXCL);
        return {
          content: [
            {
              type: "text",
              text: `Backup made: ${dest} (undo = restore it over ${target}). The original is untouched; old-with-new.`,
            },
          ],
          details: { ok: true, backup: dest, source: target },
        };
      },
    });
  },
});
