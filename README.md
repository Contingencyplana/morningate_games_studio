# Morningate Game Studio Website  

Public hub for Morningate Game Studio.  
Built locally in VS Code and hosted on GitHub Pages.

## Scope & Boundaries

This repository is a lean studio hub. Keep it small and fast:

- Included: Home, Games (e.g., Nightlands), Stories teaser pages, Reflection link, light assets, simple JS/CSS.
- Excluded: Large content trees (e.g., 4,096 Alphas), fractal folder structures, heavy binaries/generated artefacts, and non‑essential tooling.
- Planning lives elsewhere: use the Reflection Layer for research/notes.

Links:
- Reflection Layer: https://github.com/Contingencyplana/morningate_reflection_layer
- Nightlands page: `pages/games/nightlands.html`

## Local admin API (optional)

An optional helper server powers the in-site admin panel used for staging storybook pages (legacy Love & Sharing tools).

```powershell
python -m pip install -r requirements.txt
python admin_server.py
```

By default the server listens on `http://127.0.0.1:5001`. Set `LS_ADMIN_TOKEN` to enforce
an admin token, and use `ADMIN_SERVER_HOST`, `ADMIN_SERVER_PORT`, or `ADMIN_SERVER_DEBUG`
to adjust the runtime behaviour.
