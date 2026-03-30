#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import * as path from 'path';
import * as fs from 'fs-extra';
import { isGitRepo, ensureDirectory, safeCopy, handleError } from './utils/fileops';

const program = new Command();

program
  .name('create-project-cortex-agent')
  .description('Initializes a clean directory structure and deploy Markdown-based instruction files into an existing project.')
  .version('1.0.0');

program
  .argument('[target-directory]', 'The directory to initialize', '.')
  .action(async (targetDirStr) => {
    try {
      const targetDir = path.resolve(targetDirStr);
      console.log(`\nInitializing Project Cortex Agent Structure in: ${chalk.cyan(targetDir)}\n`);

      // 1. Check Context
      if (!isGitRepo(targetDir)) {
        console.warn(chalk.yellow('⚠ Warning: The target directory does not appear to be inside a Git repository.'));
      }

      const spinner = ora('Creating directories...').start();

      // 2. Ensure Directories
      const dirs = [
        path.join(targetDir, '.agents', 'rules'),
        path.join(targetDir, '.agents', 'workflows'),
        path.join(targetDir, '.memory'),
        path.join(targetDir, 'code'),
      ];

      for (const dir of dirs) {
        await ensureDirectory(dir);
      }
      spinner.succeed('Directories created.');

      // 3. Inject Markdown Files & Special Handling (Workflows)
      const injectSpinner = ora('Injecting Markdown files...').start();
      
      const __dirnameLocal = __dirname;
      const templatesDir = path.join(__dirnameLocal, '..', 'templates');

      // Defining the template mapping
      const filesToInject = [
        {
          src: path.join(templatesDir, '.agents', 'rules', 'arch_hard_tech_stack.md'),
          dest: path.join(targetDir, '.agents', 'rules', 'arch_hard_tech_stack.md')
        },
        {
          src: path.join(templatesDir, '.agents', 'workflows', 'save-memory.md'),
          dest: path.join(targetDir, '.agents', 'workflows', 'save-memory.md')
        },
        {
          src: path.join(templatesDir, '.agents', 'workflows', 'init.md'),
          dest: path.join(targetDir, '.agents', 'workflows', 'init.md')
        },
        {
          src: path.join(templatesDir, '.memory', 'README.md'),
          dest: path.join(targetDir, '.memory', 'README.md')
        },
        {
          src: path.join(templatesDir, 'code', 'README.md'),
          dest: path.join(targetDir, 'code', 'README.md')
        }
      ];

      injectSpinner.info('Checking for existing template files...');
      
      let allSuccess = true;
      for (const file of filesToInject) {
        if (await fs.pathExists(file.src)) {
          const copied = await safeCopy(file.src, file.dest);
          if (copied) {
            console.log(chalk.green(`  ✔ Injected: ${path.relative(targetDir, file.dest)}`));
          } else {
            allSuccess = false;
          }
        } else {
          console.warn(chalk.yellow(`  ⚠ Template missing in package: ${path.relative(templatesDir, file.src)}`));
        }
      }

      if (allSuccess) {
         console.log(chalk.green('\n✔ Initialization Complete!'));
      } else {
         console.log(chalk.yellow('\n⚠ Initialization Finished with skipped files.'));
      }

      // 4. Final Message
      console.log();
      console.log(chalk.green('Project Cortex Agent has been successfully initialized.'));
      console.log();
      console.log(chalk.yellow('Next Steps:'));
      console.log(chalk.yellow('  1. Initialize Antigravity in this project: ag init.'));
      console.log(chalk.yellow('  2. Edit .agents/rules/arch_hard_tech_stack.md to define your stack.'));
      console.log(chalk.yellow('  3. Enjoy!'));
      console.log();

    } catch (error) {
      handleError(error);
    }
  });

program.parse(process.argv);
