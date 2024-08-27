#! /usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';
import fs from 'fs';
import { exec } from 'child_process';
import { API_REPO_URL, PROJECT_TYPES, UI_REPO_URL } from './constants';

/* eslint-disable-next-line no-console */
const log = console.log;
/* eslint-disable-next-line no-console */
const error = console.error;

const program = new Command();
log('');
log(figlet.textSync('Comet CLI'));
log('');

program
  .command('init')
  .description('Create a new Comet App')
  .option('-t, --type [type]', 'project type to create (ui or api)', 'ui')
  .option('-n, --name [string]', 'project/directory name', 'comet-app')
  .action((options) => {
    const projectType = options.type;
    const projectName = options.name;
    log(`Creating a new Comet app with type: ${projectType} and name: ${projectName}`);
    if (fs.existsSync(projectName)) {
      log('Directory already exists!');
      process.exit(1);
    }

    if (!PROJECT_TYPES.includes(projectType)) {
      error('Invalid project type!');
      process.exit(1);
    }

    log('Initializing project directory...');
    fs.mkdirSync(projectName);
    log('Cloning starter app into project...');

    const command =
      projectType === 'ui'
        ? `git clone ${UI_REPO_URL} ${projectName}`
        : `git clone ${API_REPO_URL} ${projectName}`;
    exec(command, (err: any) => {
      if (err) {
        error(`Error: ${err.message}`);
      } else {
        log('Project initialized successfully!');
      }
    });
  });

program.parse();
