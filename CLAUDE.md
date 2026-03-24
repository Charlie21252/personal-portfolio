# Project Instructions

## Memory

At the start of every session, read all files in the `memory/` directory:

- `memory/user.md` — who the user is, their background and goals
- `memory/preferences.md` — coding style, workflow, and collaboration preferences
- `memory/decisions.md` — technical and design decisions with rationale
- `memory/people.md` — people relevant to this project

After reading them, keep their contents in mind throughout the session to provide context-aware assistance.

## Updating Memory

At the end of each session (or when anything significant is learned), update the relevant memory files:

- New facts about the user → `memory/user.md`
- New preferences or confirmed patterns → `memory/preferences.md`
- Architectural or design decisions made → `memory/decisions.md`
- New people mentioned → `memory/people.md`

Only add information that is non-obvious and would not be derivable from reading the code. Avoid duplicate entries.
