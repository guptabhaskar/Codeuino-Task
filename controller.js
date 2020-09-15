const http = require('http'),
	  url = require('url');

const generateKey = require('./routes/generateKey'),
       unblockKey = require('./routes/unblockKey'),
        deleteKey = require('./routes/deleteKey'),
         aliveKey = require('./routes/aliveKey'),
           getKey = require('./routes/getKey');

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    if (reqUrl.pathname == '/generateKey') {
        generateKey(req, res);
    }
    else if(reqUrl.pathname == '/getKey') {
        getKey(req, res);
    }
    else if(reqUrl.pathname === '/unblockKey') {
        unblockKey(req, res);
    }
    else if(reqUrl.pathname === '/deleteKey') {
        deleteKey(req, res);
    }
    else if(reqUrl.pathname === '/aliveKey') {
        aliveKey(req, res);
    }
    else {
    	console.log("Not found.");
    }

})

module.exports = server;