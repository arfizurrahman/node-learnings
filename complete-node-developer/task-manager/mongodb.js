// CRUD

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database!');
		}

		const db = client.db(databaseName);
		// db.collection('users').insertOne(
		// 	{
		// 		name: 'Rakib',
		// 		age: 25,
		// 	},
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert user');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );

		// db.collection('users').insertMany(
		// 	[
		// 		{
		// 			name: 'Farez',
		// 			age: 17,
		// 		},
		// 		{
		// 			name: 'Farana',
		// 			age: 19,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert documents');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );

		// db.collection('tasks').insertMany(
		// 	[
		// 		{
		// 			description: 'Clean the house',
		// 			completed: true,
		// 		},
		// 		{
		// 			description: 'Review inspection',
		// 			completed: false,
		// 		},
		// 		{
		// 			description: 'Pot plants',
		// 			completed: true,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert documents');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );

		// db.collection('users').findOne(
		// 	{ _id: new ObjectID('5eca48ebceb3e351f012968f') },
		// 	(error, user) => {
		// 		if (error) {
		// 			return console.log('Unable to fetch user');
		// 		}

		// 		console.log(user);
		// 	}
		// );

		// db.collection('users')
		// 	.find({ age: 25 })
		// 	.toArray((error, users) => {
		// 		console.log(users);
		// 	});

		// db.collection('users')
		// 	.find({ age: 25 })
		// 	.count((error, count) => {
		// 		console.log(count);
		// 	});

		// db.collection('tasks')
		// 	.find({ completed: true })
		// 	.toArray((error, tasks) => {
		// 		console.log(tasks);
		// 	});

		// db.collection('users')
		// 	.updateOne(
		// 		{
		// 			_id: new ObjectID('5eca47452de1c52d00e73239'),
		// 		},
		// 		{
		// 			$inc: {
		// 				age: 1,
		// 			},
		// 		}
		// 	)
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// db.collection('tasks')
		// 	.updateMany(
		// 		{
		// 			completed: false,
		// 		},
		// 		{
		// 			$set: {
		// 				completed: true,
		// 			},
		// 		}
		// 	)
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// db.collection('users')
		// 	.deleteMany({
		// 		age: 25,
		// 	})
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// db.collection('tasks')
		// 	.deleteOne({
		// 		description: 'Clean the house',
		// 	})
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	}
);
