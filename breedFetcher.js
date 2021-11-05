const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
	request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
		if (err) {
			callback(err, null);
		}
		if (res.statusCode !== 200) {
			callback(`Connection not found, check status: ${res.statusCode}`);
		}
		const data = JSON.parse(body);

		if (data.length === 0) {
			callback('We could not find that cat breed!', null);
			return;
		}
		callback(null, data[0].description);
		
	
	});
};

module.exports = { fetchBreedDescription };