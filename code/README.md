# Codebase Operating Rules

> **Important: [AI-ONLY SYSTEM INSTRUCTION]**
> This file dictates how the AI agent should write, format, and manage code within the `code/` directory.

## 1. Coding Standards
* **Clean Code:** Write modular, highly cohesive, and loosely coupled code. Keep functions small and focused on a single responsibility.
* **No Dead Code:** Do not leave commented-out code blocks, unused variables, or `console.log` statements in final production files unless explicitly asked for debugging.
* **Self-Documenting:** Prefer descriptive variable and function names over inline comments. Write comments only to explain *why* something complex was done, not *what* the code does.

## 2. File Organization
* Keep the directory structure flat where possible, but group files by feature rather than type (e.g., `/features/auth/` instead of throwing everything into one massive `/components/` folder).
* Ensure all files follow a consistent naming convention (e.g., `kebab-case` for file names, `PascalCase` for React components).

## 3. Execution & Testing
* **Do Not Guess:** If a piece of code requires a specific environment variable or a database migration to run, you must inform the human user before considering the task complete.
* **Refactoring:** When modifying existing code, ensure you do not break the surrounding context. If in doubt, output the planned changes for human review before applying them directly to the file.