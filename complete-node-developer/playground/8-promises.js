const doWorkPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([1, 2, 4]);
	}, 2000);
});

doWorkPromise
	.then((result) => {
		console.log('Success', result);
	})
	.catch((err0r) => {
		console.log('Fail', error);
	});

//                        fulfilled
//                       /
// Promise -- pending ->
//                       \
//                        rejected
