const crypto = require("crypto");
var keyUnblocked = require("../keys/unblocked");
var keyBlocked = require("../keys/blocked");
const url = require('url');

module.exports = (req, res) => {
    const reqUrl = url.parse(req.url, true);
    const data = reqUrl.query;
    const key = data.key;

    if(keyBlocked.has(key)){
        keyBlocked.delete(key);
        res.writeHead(200, {"Success":"Key Deleted."});
    }
    else if(keyUnblocked.has(key)){
        keyUnblocked.delete(key);
        res.writeHead(200, {"Success":"Key Deleted."});
    }
    else{
        res.writeHead(400, {"Error":"Key not found."});
    }

    console.log("R4");

    // console.log(keyBlocked.keys());
    // console.log(keyUnblocked.keys());

    res.end();
}