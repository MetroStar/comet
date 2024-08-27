#! /usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';
import fs from 'fs';
import { exec } from 'child_process';
import { API_REPO_URL, FILE_TYPES, PROJECT_TYPES, UI_REPO_URL } from './constants';
import {
  addPageRoute,
  error,
  getComponentTemplate,
  getComponentTestTemplate,
  getFriendlyDirectoryName,
  getPageTemplate,
  getPageTestTemplate,
  log,
} from './utils';

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

program
  .command('add')
  .description('Add a new page, component, etc to the Comet App')
  .argument('<type>', 'the type of file to add (page, component, etc)')
  .argument('<name>', 'the name of file to add')
  .action((type, name) => {
    log(`Adding a new ${type} with name ${name}`);
    const dirName = getFriendlyDirectoryName(name);
    log(dirName);
    if (fs.existsSync(dirName)) {
      log('Directory already exists!');
      process.exit(1);
    }

    if (!FILE_TYPES.includes(type)) {
      error('Invalid file type!');
      process.exit(1);
    }

    const rootDir = type === 'page' ? 'src/pages' : 'src/components';
    const componentTemplate = type === 'page' ? getPageTemplate(name) : getComponentTemplate(name);
    const testTemplate =
      type === 'page'
        ? getPageTestTemplate(name, dirName)
        : getComponentTestTemplate(name, dirName);

    // Create new directory and files
    fs.mkdirSync(`${rootDir}/${dirName}`);
    // Create new base component and base test file
    fs.writeFileSync(`${rootDir}/${dirName}/${dirName}.tsx`, componentTemplate);
    fs.writeFileSync(`${rootDir}/${dirName}/${dirName}.test.tsx`, testTemplate);

    // If it's a page, add a route to App.tsx
    if (type === 'page') {
      addPageRoute(name, dirName);
      // Ensure no formatting issues after insert
      const command = 'npm run format';
      exec(command, (err: any) => {
        if (err) {
          error(`Error: ${err.message}`);
        }
      });
    }

    log(`${type} added successfully!`);
  });

program.parse();
