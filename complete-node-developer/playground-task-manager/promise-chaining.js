require('../task-manager/src/db/mongoose');

const User = require('../task-manager/src/models/user');

// User.findByIdAndUpdate('5ecabb9deca7cb2c1055995b', {
// 	age: 1,
// })
// 	.then((user) => {
// 		console.log(user);
// 		return User.countDocuments({ age: 1 });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age });
	const count = await User.countDocuments({ age });
	return count;
};

updateAgeAndCount('5ecabb9deca7cb2c1055995b', 2)
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
