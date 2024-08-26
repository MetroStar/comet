#! /usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';
import fs from 'fs';
import { exec } from 'child_process';
import { API_REPO_URL, UI_REPO_URL } from './constants';

/* eslint-disable-next-line no-console */
const log = console.log;
/* eslint-disable-next-line no-console */
const error = console.error;

const program = new Command();
log('');
log(figlet.textSync('Comet CLI'));
log('');

program
  .command('ui')
  .description('Create a new app from the Comet Starter App')
  .option('-n, --name <string>', 'project/directory name', 'comet-app')
  .action((options) => {
    const projectName = options.name;
    log(`Creating a new Comet app with name: ${projectName}`);
    if (fs.existsSync(projectName)) {
      log('Directory already exists!');
      process.exit(1);
    }

    log('Initializing project directory...');
    fs.mkdirSync(projectName);
    log('Cloning starter app into project...');

    const command = `git clone ${UI_REPO_URL} ${projectName}`;
    exec(command, (err: any) => {
      if (err) {
        error(`Error: ${err.message}`);
      } else {
        log('Project initialized successfully!');
      }
    });
  });

program
  .command('api')
  .description('Create a new api from the Comet API')
  .option('-n, --name <string>', 'project/directory name', 'comet-api')
  .action((options) => {
    const projectName = options.name;
    log(`Creating a new Comet api with name: ${projectName}`);
    if (fs.existsSync(projectName)) {
      log('Directory already exists!');
      process.exit(1);
    }

    log('Initializing project directory...');
    fs.mkdirSync(projectName);
    log('Cloning api into project...');

    const command = `git clone ${API_REPO_URL} ${projectName}`;
    exec(command, (err) => {
      if (err) {
        error(`Error: ${err.message}`);
      } else {
        log('Project initialized successfully!');
      }
    });
  });

program.parse();
