import * as fs from 'fs-extra';
import * as path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import inquirer from 'inquirer';

/**
 * Checks if the current directory is within a Git repository.
 */
export function isGitRepo(targetDir: string): boolean {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore', cwd: targetDir });
    return true;
  } catch {
    return false;
  }
}

/**
 * Ensures a directory exists, creating it if necessary.
 */
export async function ensureDirectory(dirPath: string): Promise<void> {
  await fs.ensureDir(dirPath);
}

/**
 * Safely copies a template file to the target location.
 * Prompts for confirmation if the file already exists.
 */
export async function safeCopy(src: string, dest: string): Promise<boolean> {
  if (await fs.pathExists(dest)) {
    const { overwrite } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: `File ${chalk.cyan(dest)} already exists. Overwrite?`,
        default: false,
      },
    ]);

    if (!overwrite) {
      console.log(chalk.yellow(`Skipped ${dest}`));
      return false;
    }
  }

  await fs.copy(src, dest);
  return true;
}

/**
 * Centralized error handler
 */
export function handleError(error: unknown) {
  console.error(chalk.red('\n✖ An error occurred during initialization:'));
  if (error instanceof Error) {
    console.error(chalk.red(error.message));
  } else {
    console.error(chalk.red(String(error)));
  }
  process.exit(1);
}
