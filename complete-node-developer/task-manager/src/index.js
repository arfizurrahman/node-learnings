const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
// 	res.status(503).send('Site is currently down. Check back soon!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
// 	const task = await Task.findById('5ecc83f16ebfe72684a36301');
// 	await task.populate('owner').execPopulate();

// 	const user = await User.findById('5ecc1bbfa41b1c24941b6c0b');
// 	await user.populate('tasks').execPopulate();
// };

// main()
