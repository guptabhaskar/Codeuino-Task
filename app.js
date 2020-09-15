const port = process.env.port || 3000

const server = require('./controller.js');

server.listen(port, () => {
	console.log('Listening on port: ' + port);
});