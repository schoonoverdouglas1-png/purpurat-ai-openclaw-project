# TOOLS.md - Local Notes

Short, durable notes that make external tools work reliably in this
particular setup: device nicknames, host aliases, preferred voices, and
environment-specific quirks. Skills describe how tools work in general; this
file holds only what is unique here.

## Executable names on Douglas's box (verified Nov 9, 2026, three ways)
- ripgrep → binary `rg` (/usr/bin/rg, pkg ripgrep 14.1.0)
- fd → binary `fdfind` (/usr/bin/fdfind, pkg fd-find 9.0.0) — Debian renames it
- LibreOffice → `soffice` / `libreoffice` (headless nogui build)
- Poppler → `pdftotext`, `pdfinfo` (pkg poppler-utils)
- Always run `~/workspace/ember-upgrades/check-tools.sh` before saying a tool is missing.
