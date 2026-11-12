# Ember Page Reader — extension v0.1 (built by Ember, Nov 7, 2026)
Manifest V3, read-only, no network calls, no data leaves the browser.
Load: in the Playwright Chromium on Ember's VM via persistent context + --load-extension (the bench in ../test/ uses the same pattern as the OpenCode Browse test), or in a desktop Chromium via chrome://extensions → Developer mode → Load unpacked.
Purpose: Ember's own extension for reading pages as backend data — the piece the commercial agent extensions don't aim at Douglas's exact setup. Next versions (ask-first): Photos helper (works only on photos.google.com pages Douglas opens), share-link opener for his own links.
