# Morningate Game Studio Website  

Public hub for Morningate Game Studio.  
Built locally in VS Code and hosted on GitHub Pages.

## Local admin API (optional)

An optional helper server powers the in-site admin panel used for staging storybook pages (legacy Love & Sharing tools).

```powershell
python -m pip install -r requirements.txt
python admin_server.py
```

By default the server listens on `http://127.0.0.1:5001`. Set `LS_ADMIN_TOKEN` to enforce
an admin token, and use `ADMIN_SERVER_HOST`, `ADMIN_SERVER_PORT`, or `ADMIN_SERVER_DEBUG`
to adjust the runtime behaviour.
