import { Command } from 'commander';
import figlet from 'figlet';
import fs from 'fs';
import { exec } from 'child_process';
import { REPO_URL } from './constants';

const log = console.log;
const error = console.error;

const program = new Command();
log('');
log(figlet.textSync('Comet CLI'));
log('');

program
  .command('init')
  .description('Create a new app from the Comet Stater App')
  .option('-n, --name <string>', 'project/directory name')
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

    const command = `git clone ${REPO_URL} ${projectName}`;
    exec(command, (err: any) => {
      if (err) {
        error(`Error: ${err}`);
      } else {
        log('Project initialized successfully!');
      }
    });
  });

program.parse();
