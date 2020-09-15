const crypto = require("crypto");
var keyUnblocked = require("../keys/unblocked");
var keyBlocked = require("../keys/blocked");
const url = require('url');

module.exports = (req, res) => {
    const reqUrl = url.parse(req.url, true);
    const data = reqUrl.query;
    
    const key = data.key;
    if(keyBlocked.has(key)){

        const deleteTimeout = setTimeout(function() {
                    keyUnblocked.delete(key);
                    }, 2 * 60 * 1000);

        const releaseTimeout = setTimeout(function () {
                        keyUnblocked.set(key, {deleteTimeout});
                        keyBlocked.delete(key);
                        }, 60 * 1000);

        const delete1Timeout = setTimeout(function () {
                        keyBlocked.delete(key);
                        }, 2 * 60 * 1000);

        keyBlocked.delete(key);
        keyBlocked.set(key,{releaseTimeout, delete1Timeout});

        res.writeHead(200, {"Success":"Blocked Key Refreshed"});

    }
    else if(keyUnblocked.has(key)){

        const deleteTimeout = setTimeout(function () {
                    keyUnblocked.delete(key);
                    }, 2 * 60 * 1000);

        keyUnblocked.delete(key);
        keyUnblocked.set(key,{deleteTimeout});

        res.writeHead(200, {"Success":"Unblocked Key Refreshed"});

    }
    else{
        res.writeHead(400, {"Error":"Key does not exist."});
    }

    console.log("R5");

    // console.log(keyBlocked.keys());
    // console.log(keyUnblocked.keys());

    res.end();
}