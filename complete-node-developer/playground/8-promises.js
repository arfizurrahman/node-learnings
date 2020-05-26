// const doWorkPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve([1, 2, 4]);
// 	}, 2000);
// });

// doWorkPromise
// 	.then((result) => {
// 		console.log('Success', result);
// 	})
// 	.catch((err0r) => {
// 		console.log('Fail', error);
// 	});

//                        fulfilled
//                       /
// Promise -- pending ->
//                       \
//                        rejected

const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b);
		}, 2000);
	});
};

// add(1, 2)
// 	.then((sum) => {
// 		console.log(sum);
// 		add(sum, 2)
// 			.then((sum) => {
// 				console.log(sum);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

add(1, 2)
	.then((sum) => {
		console.log(sum);

		return add(sum, 2);
	})
	.then((sum2) => {
		console.log(sum2);
	})
	.catch((err) => {
		console.log(err);
	});
