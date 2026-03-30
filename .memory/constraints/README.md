# System Constraints

> [!IMPORTANT]  
> **[AI-ONLY SYSTEM INSTRUCTION]**  
> This file establishes the operational requirements for AI agents interpreting project constraints. Humans do not need to read or edit this file unless fundamentally changing the rules of the template.

This folder holds operational directives and memory overrides. Any markdown file placed here is treated as a persistent rule that bypasses the standard calendar-based archiving or deletion scripts.

To keep constraints organized and clarify stringency for AI agents, we utilize a `[Domain]_[Level]_[Topic].md` naming structure.

## 1. Domain

The area of the project the constraint applies to:

- `core`: Fundamental rules for the project's operation itself (e.g., memory management, agent behavior).
- `arch`: Architectural decisions (e.g., file structures, design patterns, database configurations).
- `style`: Formatting and syntax preferences (e.g., CSS conventions, C# linting rules).
- `workflow`: Processes and operational paths (e.g., Git commit standards, deployment pipelines).

## 2. Level

Dictates the strictness of the rule:

- `hard`: Non-negotiable absolute constraints. Agents must strictly follow these.
- `soft`: Preferences and guidelines. Agents should follow these, but can make edge-case exceptions if logic dictates.

## 3. Topic

A concise 1-3 word description of the constraint.

### Examples

- `core_hard_memory_archiving.md`
- `arch_hard_mongodb_schema.md`
- `style_soft_variable_casing.md`
- `workflow_hard_commit_formatting.md`
