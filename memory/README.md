# Memory Context

> **Important: [AI-ONLY SYSTEM INSTRUCTION]**
> This file establishes the operational requirements for AI agents managing the project's memory. Humans do not need to read or edit this file unless fundamentally changing the rules of the template.
> This folder stores conversation logs organized into a nested calendar structure, acting as the long-term memory for the AI.

## Folder Hierarchy

* **`memory/constraints/`**: Holds system constraints, architectural rules, and core states that bypass all standard archiving rules. These files are permanently kept.
* **`memory/[YYYY]/`**: The root folder for a given year.
    * `year_[YYYY].md`: Annual summary of the months.
    * **`[MM]/`**: Folder for the month (01 to 12).
        * `month_[YYYY]-[MM].md`: Monthly summary of the weeks.
        * **`W[WW]/`**: Folder for the week of the year (e.g., W14).
            * `week_[YYYY]-W[WW].md`: Weekly summary of the days.
            * `log_[YYYYMMDD]_[HHMM]_[Topic].md`: Up to 30 raw conversation logs for the active days inside this week.

## Rules & Processing

1.  **Today (Raw Logs):** Current work is stored directly in the active week's folder (`W[WW]`). A maximum of 30 log files are kept at any time.
2.  **Week (Summarization):** At the week's end, the active week's `log_` files are synthesized into `week_[YYYY]-W[WW].md` and the raw log files are deleted.
3.  **Month (Summarization):** At the month's end, the `week_` summaries are synthesized into `month_[YYYY]-[MM].md`.
4.  **Year (Summarization):** At the year's end, the `month_` summaries are synthesized into `year_[YYYY].md`.
5.  **Overrides:** Files in `memory/constraints/` are permanently kept and NEVER summarized or deleted by the calendar cleanup process.
6.  **Session Termination Trigger:** Whenever the human user uses natural language indicating the end of a session (e.g., "that's it for today", "we are done", "wrap it up"), you MUST automatically initiate the memory rollup process, generating the required summaries and `log_` files in the `memory/` directory.
7.  **Auto-Recovery (Missing Logs):** If you are initialized in a new session and detect that the `code/` directory contains updates, new files, or Git changes that are NOT documented in the most recent `log_` or `week_` file, you must assume the previous session ended without a proper rollup. You MUST immediately analyze the undocumented code changes and generate a retroactive `log_` file summarizing them before proceeding with new human requests.

## Mandatory Formatting & Retention Rules

To prevent knowledge loss and context degradation during the summarization process, you MUST strictly adhere to the following rules:

* **Summary Structure:** All `week_`, `month_`, and `year_` summaries MUST be formatted using this exact Markdown structure:
    * **Completed Goals:** High-level overview of what was built, fixed, or explored.
    * **Technical Decisions:** Specific architectural choices, dependencies added/removed, or workarounds implemented (including the rationale).
    * **Unresolved Issues & WIP:** Tasks started but not finished, known bugs, or blockers.
    * **Context & Notes:** Any specific commands, environment variables, or quirks needed to run the current codebase.
* **Critical Retention Tags:** If a raw daily log or a lower-level summary contains the tag `[CRITICAL_DECISION]` or `[ADR]`, the exact text associated with that tag MUST be copied verbatim into the higher-level summaries. Do not paraphrase or compress these points.
* **Task Rollover:** Any incomplete tasks or open bugs mentioned in the active period MUST be explicitly listed under "Unresolved Issues & WIP" in the newly generated summary so the next AI session can immediately resume work.
* **Knowledge Extraction:** While summarizing at the end of a week/month, if a core architectural pattern, tech stack, or global rule has changed, you MUST automatically update the relevant files in `memory/constraints/` to reflect the current state of the project.