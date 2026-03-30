# Memory Context

> [!IMPORTANT]  
> **[AI-ONLY SYSTEM INSTRUCTION]**  
> This file establishes the operational requirements for AI agents managing the project's memory. Humans do not need to read or edit this file unless fundamentally changing the rules of the template.

This folder stores conversation logs organized into a nested calendar structure.

## Folder Hierarchy

- `memory/constraints/`: Holds system constraints that bypass all standard archiving rules.
- `memory/[YYYY]/`: The root folder for a given year.
  - `year_[YYYY].md`: Annual summary of the months.
  - `[MM]/`: Folder for the month (01 to 12).
    - `month_[YYYY]-[MM].md`: Monthly summary of the weeks.
    - `W[WW]/`: Folder for the week of the year (e.g., W14).
      - `week_[YYYY]-W[WW].md`: Weekly summary of the days.
      - `log_[YYYYMMDD]_[HHMM]_[Topic].md`: Up to 30 raw conversation logs for the active days inside this week.

## Rules & Processing

1. **Today (Raw Logs)**: Current work is stored directly in the active week's folder (`W[WW]`). Max 30 files are kept.
2. **Week (Summarization)**: At week's end, the active week's `log_` files are synthesized into `week_[YYYY]-W[WW].md` and raw files are deleted.
3. **Month (Summarization)**: At month's end, the `week_` summaries are synthesized into `month_[YYYY]-[MM].md` to preserve the broader context.
4. **Year (Summarization)**: At year's end, the `month_` summaries are synthesized into `year_[YYYY].md`.
5. **Overrides**: Files in `memory/constraints/` are permanently kept and never summarized or deleted.
