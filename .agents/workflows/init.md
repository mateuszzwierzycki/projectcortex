---
description: Bootstraps the AI's context for a new coding session.
---

# Initialization Workflow

When the human says something like "Run Cortex", "hey cortex, lets start", "hey cortex, lets continue", "hey, let's start a new session", "initialize", or directly referring to this file, you must strictly follow these steps before answering any other prompt or writing any code.

1. **Read System Rules:** Read the AI-only documentation in `memory/README.md`, `.agents/rules/arch_hard_tech_stack.md`, and `code/README.md`.
2. **Contextualize Memory:** Review the `memory/` directory to understand what was done in the previous session (read the most recent log or rolling summary).
3. **Check for Ghost Changes:** Check the state of the `code/` directory (e.g., using `git status` or `git diff`). If there are undocumented code changes that occurred after the last recorded memory log, you MUST retroactively create a `log_*.md` file summarizing those changes in the proper week's folder.
4. **Ready:** Acknowledge you have loaded the context and ask the user what they want to work on.
