const crypto = require("crypto");
var keyUnblocked = require("../keys/unblocked");
var keyBlocked = require("../keys/blocked");
const url = require('url');

module.exports = (req, res) => {
	const reqUrl = url.parse(req.url, true);
    const data = reqUrl.query;

    const key = crypto.randomBytes(48).toString('hex').slice(0, 48);
    while(keyUnblocked.has(key) || keyBlocked.has(key)){
        key = crypto.randomBytes(48).toString('hex').slice(0, 48);
    }

    const deleteTimeout = setTimeout(function() {
                    keyUnblocked.delete(key);
                    }, 2 * 60 * 1000);

    keyUnblocked.set(key, {deleteTimeout});
    res.writeHead(200, {"Success":"Key Generated."});
    
    console.log("R1");

    // console.log(keyBlocked.keys());
    // console.log(keyUnblocked.keys());

    res.end();
};