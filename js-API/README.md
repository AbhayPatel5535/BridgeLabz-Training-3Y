# Assignment 10 - JSON Server + AJAX

Each question has its own `index.html`, `script.js`, and `db.json`.
Each JSON Server uses a different port, as required.

## Before running
Install JSON Server once (Node.js must be installed):

```bash
npm install -g json-server@0.17.4
```

Open a separate terminal for each question folder and run:

| Question | Command | URL |
|---|---|---|
| Q1 | `json-server --watch db.json --port 3001` | `http://localhost:3001/products` |
| Q2 | `json-server --watch db.json --port 3002` | `http://localhost:3002/employees` |
| Q3 | `json-server --watch db.json --port 3003` | `http://localhost:3003/tasks` |
| Q4 | `json-server --watch db.json --port 3004` | `/users`, `/orders`, `/products` |
| Q5 | `json-server --watch db.json --port 3005` | `http://localhost:3005/timetable` |

Then open that question's `index.html` using VS Code Live Server.

Run only the JSON Server for the question you are testing. Keep its terminal open.

## Notes
- Q1 uses jQuery AJAX GET with `q=value`.
- Q2 uses XMLHttpRequest GET and PATCH.
- Q3 uses jQuery AJAX GET query parameters and PATCH.
- Q4 uses Fetch and Promise.all for three endpoints.
- Q5 uses Fetch with the `day` query parameter.
- Every question uses only its own `db.json`.
