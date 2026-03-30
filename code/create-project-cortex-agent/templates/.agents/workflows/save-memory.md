---
description: Trigger .memory rollup on natural language '/save-.memory' or 'thats it for today'
---

# Save .memory Workflow

## Triggers
The user signals the end of a chat session using phrases like:
- `/save-memory`
- `thats it for today`
- `wrap it up`
- `see ya later`

## Execution
When the above intent is detected:
1. Generate an overview log of the current conversation.
2. Store this log inside `.memory/` or update `.agents/rules/` if an architecture rule changed.
3. Archive older logs to ensure a maximum of 30 active files in the working directory.
4. Announce that the session .memory has been effectively committed.
