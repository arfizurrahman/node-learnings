require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ecac043bb106d36903299d9')
// 	.then((task) => {
// 		console.log(task);
// 		return Task.countDocuments({ completed: false });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const deleteTaskAndCount = async (id) => {
	await Task.findByIdAndDelete(id);
	const count = await Task.countDocuments({ completed: false });
	return count;
};

deleteTaskAndCount('5ecabe8c3d9e221bb827163c', false)
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
