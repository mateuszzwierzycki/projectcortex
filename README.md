# Project Cortex

This repository is built on a structured template designed specifically for long-term, AI-assisted development. It enforces a strict dual-folder workspace to prevent AI agents from losing context or generating disorganized file structures over time.

## How to Use This Template

Whenever you start a new conversation with an AI agent in this repository, you **must** prime it with the system rules.

Copy and paste this exact prompt as your first message to the AI:

> **System Prompt Override:** You are operating in Project Cortex. Before doing anything else, you must read the AI-only documentation in `memory/README.md`, `memory/constraints/README.md`, and `code/README.md`. Strictly adhere to the nested calendar memory architecture and all system constraints defined in those files.

## Project Structure

- `code/`: The shared workspace where development happens. 
- `memory/`: Auto-managed storage where the AI synthesizes and archives conversation logs to maintain context over months or years.

---
*Note: The `README.md` files located inside `code/` and `memory/` are system instructions written exclusively for the AI. You do not need to read them unless you want to modify how the AI behaves.*
