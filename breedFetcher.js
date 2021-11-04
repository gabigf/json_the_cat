const request = require('request');
const args = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (err, res, body) => {
  if (!err) {
    const data = JSON.parse(body);
    if (data.length !== 0) {
			console.log(data[0].description);
		}
		console.log('We could not find that cat!');
		return;
  }
	
  console.log('There was a problem: ', err);

});