const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});

// Create read command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	},
});

// Create list command
yargs.command({
	command: 'list',
	describe: 'Listing the note',
	handler() {
		notes.listNotes();
	},
});

yargs.parse();

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Adding remove!')
// }

// const command = process.argv[2]
// console.log(getNotes());

// const chalk = require('chalk')
// console.log(chalk.green('Hello world!'))
// console.log(chalk.red.bold.underline.bgRed('Hello', 'world'));

// const validator = require('validator');
// console.log(validator.isEmail('asdasd.com'))
// console.log(validator.isURL('https://mead.com'))

// const add = require("./utils");
// console.log(add(10, 4));
