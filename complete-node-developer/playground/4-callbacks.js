// const geocode = (address, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 			lat: 0,
// 			long: 0,
// 		};

// 		callback(data);
// 	}, 2000);
// };

// geocode('asdad', (data) => {
// 	console.log(data);
// });

// const add = (num1, num2, callback) => {
// 	setTimeout(() => {
// 		callback(num1 + num2);
// 	}, 2000);
// };

// add(1, 4, (sum) => {
// 	console.log(sum);
// });

const doWorkCallBack = (callback) => {
	setTimeout(() => {
		callback(undefined, [1, 2, 4]);
	}, 2000);
};
doWorkCallBack((err, result) => {});
