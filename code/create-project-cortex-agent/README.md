# create-project-cortex-agent

![Project Cortex](assets/hero.png)

A command-line tool to instantly initialize your workspace with the **Project Cortex** AI Agent directory structure.

This package bootstraps the foundational architecture needed for long-term AI-assisted development by preventing context degradation. It sets up strict boundaries, rules, and calendar-based memory logs for AI coding agents (such as Claude, Gemini, ChatGPT, or IDEs like Cursor and Copilot).

---

## 🚀 Installation & Usage

### Option 1: Using `npx` (Recommended)
If this package is published to npm, you don't need to install anything globally. You can run it directly:

```bash
# Initialize into the current directory
npx create-project-cortex-agent .

# Initialize into a specific directory
npx create-project-cortex-agent ./my-new-project
```

### Option 2: Global Install
You can install the CLI globally and use it anywhere:

```bash
npm install -g create-project-cortex-agent

# Run the initialization
create-project-cortex-agent .
```

### Option 3: Local Development (from source)
If you are developing this tool locally:

```bash
# 1. Clone the repository and navigate to this folder
cd create-project-cortex-agent

# 2. Install dependencies
npm install

# 3. Build the CLI
npm run build

# 4. Link or run directly via node
node dist/cli.js /path/to/target/project
```

---

## 📂 What it Scaffolds

The CLI safely injects the necessary constraints and guidelines into your repository without destroying existing source code. It sets up the following structure:

```text
├── .agents/
│   ├── rules/
│   │   └── arch_hard_tech_stack.md      # Immutable tech stack rules for the AI
│   └── workflows/
│       ├── init.md                      # Workflow to start a new session
│       └── save-memory.md               # Workflow template for memory operations
├── code/
│   └── README.md                        # Codebase operating rules for the AI
└── .memory/
    └── README.md                        # Instructions on calendar-based long-term memory
```

---

## ⚙️ Post-Initialization (Next Steps)

After running the initializer, your project is ready for smart AI assistance, but you should take one final step:

1. **Configure Your Stack:** Open `.agents/rules/arch_hard_tech_stack.md` and define the strict technologies (Language, Framework, DB) your AI should stick to.
2. **Start Your Agent:** Whenever you start a *new* conversation window with your AI agent, you should trigger the initialization workflow so the agent loads up the necessary architectural context. You can do this by saying:

    > "Run Cortex" / "hey cortex, lets start" / "hey cortex, lets continue"

    *\*If your agent requires explicit file references (like Cursor), you can type `@init.md Run Cortex`.*
3. **Log Your Sessions:** Simply use natural language like "that's it for today", "we are done", or "see ya later" to trigger the chronological summary in the `.memory/` logs!

---

## 🛠 Features
- **Idempotency**: Safe to run multiple times; it will not overwrite modified files if you already customized your configuration.
- **Git Awareness**: Warns you if the target directory doesn't have a git repository initialized yet.
