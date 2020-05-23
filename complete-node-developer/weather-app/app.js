const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
	console.log('Please provide an addess');
} else {
	geocode(address, (error, { latitude, longitude, location }) => {
		if (error) {
			return console.log(error);
		}

		forecast(latitude, longitude, (error, forcastData) => {
			if (error) {
				return console.log(error);
			}

			console.log(forcastData + ' In ' + location + '.');
		});
	});
}
