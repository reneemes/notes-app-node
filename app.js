const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const notes = require('./notes.js');

yargs(hideBin(process.argv))

  .version('1.1.0')

  .command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      notes.addNote(argv.title, argv.body);
    }
  })

  .command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      notes.removeNote(argv.title);
    }
  })

  .command({
    command: 'remove-all',
    describe: 'Remove all notes',
    handler: (argv) => {
      notes.removeAll(argv.confirm);
    }
  })

  .command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
      notes.listNotes();
    }
  })

  .command({
    command: 'read',
    describe: 'Read your note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      notes.readNote(argv.title);
    }
  })

  .command({
    command: 'edit',
    describe: 'Edit a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      notes.editNote(argv.title, argv.body);
    }
  })

.parse();