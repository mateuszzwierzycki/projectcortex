# System Constraints & Architecture

> **Important: [AI-ONLY SYSTEM INSTRUCTION]**
> This file defines the immutable architectural rules, tech stack, and hard boundaries for Project Cortex. 
> You MUST strictly adhere to these constraints in every task, code generation, and refactoring step. Do not alter these rules unless explicitly instructed by the human developer.

## 1. Core Tech Stack
* **Language:** [e.g., TypeScript strictly enforced. No generic `any` types.]
* **Framework:** [e.g., Next.js 14 with App Router.]
* **Styling:** [e.g., Tailwind CSS.]
* **Database/ORM:** [e.g., PostgreSQL with Prisma ORM.]

## 2. Hard Architectural Rules
* **Rule 1: Component Paradigms:** [e.g., Default to Server Components in Next.js. Only use `"use client"` when DOM manipulation or React lifecycle hooks are strictly required.]
* **Rule 2: State Management:** [e.g., Use React Context for localized state. Do not introduce Redux without permission.]
* **Rule 3: Error Handling:** [e.g., All external API calls must be wrapped in try/catch blocks with proper error logging. Never silently swallow errors.]

## 3. AI Operational Boundaries
* **Dependency Rule:** Before installing any new third-party library or package (via npm/yarn/pnpm/pip), you MUST explicitly ask the user for permission. Provide the package name, size, and rationale.
* **Destructive Actions:** Before running any commands that drop databases, delete non-temporary files, or force-push to git, you MUST halt and request human confirmation.
* **Decision Tracking:** If you and the human user agree on a fundamental shift in architecture or a new core library, you must immediately update this file to reflect the new state, and log the change in the daily `log_` file using the `[ADR]` tag.