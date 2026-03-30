# Undocumented Code Changes Log (Ghost Changes)
* **Date:** 2026-03-30 07:57
* **Topic:** Ghost Changes - Repository Restructuring

## Summary of Changes
Detected undocumented changes in the repository upon initialization. The repository has been significantly restructured, likely to adhere strictly to the Project Cortex file architecture:
- `memory/` directory has been renamed/moved to `.memory/` and reorganized.
- `create-project-cortex-agent/` npm package has been moved inside the `code/` directory.
- The `.agents/` folder was added containing rules and workflow definitions.
- Various README files (including root `README.md` and `code/README.md`) have been updated.
- `LICENSE` file was removed.

## Completed Goals
- Restructured workspace to align with Project Cortex constraints (nested `.memory`, `.agents` rules, and separating code execution into `code/`).

## Technical Decisions
- Moved out-of-bounds project folders into standard directory structures to enforce AI operational boundaries.

## Unresolved Issues & WIP
- Need to verify if all paths in the CLI tool inside `code/create-project-cortex-agent/` have been updated to reflect the new directory locations (`.memory/`, etc.).
