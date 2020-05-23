const https = require('https');

const url =
	'https://api.openweathermap.org/data/2.5/weather?lat=22&lon=91&units=metric&appid=b9189fa7d6dd62b7b401d5030864e37f';

const request = https.request(url, (response) => {
	let data = '';
	response.on('data', (chunk) => {
		data = data + chunk;
	});

	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on('error', (error) => {
	console.log('Error', error);
});
request.end();
