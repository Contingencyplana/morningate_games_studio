# Project Ledger

## 2025-11-12 — Morningate Game Studio website stabilization

Status: Completed

Scope:
- Rebrand site to Morningate Game Studio (titles, meta, nav, footer).
- Add Games hub and Nightlands game page (tagline, 3 screenshots, links).
- Add Reflection Layer page linking to public repo.
- Add Love & Sharing legacy page (+ underscore alias redirect).
- Fix Harbinger page to use relative assets and dynamic chapter base.
- Hide admin UI by default; reveal with `?admin=1`.
- Update README to reflect new purpose.

Verification checklist:
- Repo renamed to `morningate_games_studio` on GitHub.
- GitHub Pages active (main/root) and loads homepage.
- Navigation works: Home, Games → Nightlands, Stories, Harbinger, Reflection, Legacy page.
- Footer shows “© 2025 Morningate Game Studio” on all pages.

Follow-ups (optional):
- Replace Nightlands placeholder images with real screenshots.
- Add analytics (e.g., Plausible/GA) and update social preview images.
- Consider a subtle link to the legacy page from the homepage or About.

## 2025-11-16 - Doc refresh queue path realignment

Status: Completed

Scope:
- Documented War Office relocation of the doc refresh queue to `planning/commonwealth_loop/doc_refresh_queue.md`.
- Verified repo contains no references to `planning/doc_refresh_queue.md` or `planning/document_refresh_queue.md`.

Verification checklist:
- `rg -n "planning/doc_refresh_queue\.md"` returns no matches in the repo.
- Future document links must point to `planning/commonwealth_loop/doc_refresh_queue.md`.
