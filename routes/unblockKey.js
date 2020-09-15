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
        const deleteTimeout = setTimeout(function() {
                    keyUnblocked.delete(key);
                    }, 2 * 60 * 1000);
        keyUnblocked.set(key, {deleteTimeout});
        res.writeHead(200, {"Success":"Key has been unblocked."});
    }
    else{
        res.writeHead(400, {"Error":"Key does not exist or is already unblocked."});
    }

    console.log("R3");

    // console.log(keyBlocked.keys());
    // console.log(keyUnblocked.keys());

    res.end();
}