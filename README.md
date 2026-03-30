# 🧠 Project Cortex

**Project Cortex** is a structured repository template designed specifically for long-term, AI-assisted development (working with agents like Cursor, Copilot Workspace, ChatGPT, Claude, or Gemini). 

It solves the biggest problem of AI coding tools: **context loss over time**. By enforcing a strict dual-folder workspace and a self-summarizing calendar memory, it prevents AI agents from forgetting architectural decisions or generating disorganized file structures after weeks of development.

---

## 📂 Project Structure

* **`code/`**: The standard workspace where human and AI write the actual application code.
* **`memory/`**: Auto-managed storage where the AI synthesizes and archives conversation logs to maintain context over months or years.
* **`memory/constraints/`**: The core rules (tech stack, boundaries) that the AI must never break.

> **Note for Humans:** The `README.md` files located inside `code/` and `memory/` are **system instructions written exclusively for the AI**. You do not need to read or edit them unless you want to modify how the AI inherently behaves.

---

## 🚀 How to Use This Template

To make the AI utilize this architecture, you must follow a specific workflow during your coding sessions.

### Step 1: Initialization (The "Bootloader")
Whenever you start a *new* conversation window with your AI agent, you **must** prime it with the system rules before asking it to write any code. 

**Copy and paste this exact prompt as your first message to the AI:**

> **System Prompt Override:** You are operating in Project Cortex. Before doing anything else, you must silently read the AI-only documentation in `memory/README.md`, `memory/constraints/architecture.md`, and `code/README.md`. Strictly adhere to the nested calendar memory architecture, retention rules, and all system constraints defined in those files. Acknowledge when you are ready.

### Step 2: Daily Development & Tagging
Work with the AI normally. However, if you and the AI make a fundamental architectural choice, figure out a complex workaround, or add a new dependency, tell the AI to use the retention tags:
* *"Let's use Zustand instead of Redux. Please note this as a `[CRITICAL_DECISION]` in your logs."* *(This ensures the AI will never erase this decision during its weekly memory compression).*

### Step 3: Ending the Session (Memory Rollup)
When you finish your current coding session, you don't need any complex commands. Just tell the AI something natural like:

> *"That's it for today"* > *"We are done"*
> *"Wrap it up"*

The AI is instructed to recognize these session-ending phrases. It will automatically summarize the work, list unresolved issues, and generate the proper log files in the `memory/` directory before you close the window.

---

## ⚙️ Initial Setup (Before you start)

Before you begin your first AI session:
1. Go to `memory/constraints/architecture.md`.
2. Edit the file to reflect your actual Tech Stack (Language, Framework, Database).
3. Save the file. You are now ready to initialize your AI agent!