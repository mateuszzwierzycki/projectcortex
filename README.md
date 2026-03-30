# 🧠 Project Cortex

![Project Cortex](assets/hero.png)

**Project Cortex** is a structured repository template designed specifically for long-term, AI-assisted development (working with agents like Cursor, Copilot Workspace, Claude, or Gemini). 

It solves the biggest problem of AI coding tools: **context loss over time**. By enforcing a strict dual-folder workspace and a self-summarizing calendar .memory, it prevents AI agents from forgetting architectural decisions or generating disorganized file structures after weeks of development.

### 🧠 An External Hippocampus for AI (The "Westworld" Moment)
Large Language Models are inherently stateless. Every time you open a new chat window or launch a new IDE session, the AI's short-term context is completely wiped. **Project Cortex functions as an external hippocampus.** By enforcing a strict chronological diary that the AI must read upon initialization and update upon termination, the AI effectively reads and writes its own persistent memory between context windows. This allows the agent to "wake up" and seamlessly resume complex work across weeks or months without suffering from the "blank slate" problem.

---

## 📂 Project Structure

* **`code/`**: The standard workspace where human and AI write the actual application code.
* **`.memory/`**: Auto-managed storage where the AI synthesizes and archives conversation logs to maintain context over months or years.
* **`.agents/rules/`**: The core rules (tech stack, boundaries) that the AI must never break.

> **Note for Humans:** The `README.md` files located inside `code/` and `.memory/` are **system instructions written exclusively for the AI**. You do not need to read or edit them unless you want to modify how the AI inherently behaves.

---

## 🚀 How to Use This Template

To make the AI utilize this architecture, follow this simple workflow during your coding sessions.

### Step 1: Initialization (The "Bootloader")
Whenever you start a *new* conversation window with your AI agent, you **must** prime it with the system rules before asking it to write any code. 

**Tell the AI to read the initialization workflow:**

> "Run Cortex" / "hey cortex, lets start" / "hey cortex, lets continue"

*\*If your agent requires explicit file references (like Cursor), you can type `@init.md Run Cortex`.*

### Step 2: Daily Development & Tagging
Work with the AI normally. However, if you make a fundamental architectural choice, figure out a complex workaround, or add a new dependency, explicitly tell the AI to use retention tags:
* *"Let's use Zustand instead of Redux. Please note this as a `[CRITICAL_DECISION]` in your logs."* 

### Step 3: Ending the Session (Memory Rollup)
When you finish your current coding session, you don't need any complex commands. Just tell the AI something natural like:

> *"That's it for today"* / *"We are done"* / *"Wrap it up"* / *"See ya later"*

The AI is instructed to naturally recognize any general session-ending phrases. It will automatically summarize the work, list unresolved issues, and generate the proper log files in the `.memory/` directory before you close the window.

---

## ⚙️ Initial Setup (Before you start)

Before you begin your first AI session:
1. Go to `.agents/rules/arch_hard_tech_stack.md`.
2. Edit the file to reflect your actual Tech Stack (Language, Framework, Database).
3. Save the file. You are ready to initialize your AI agent!