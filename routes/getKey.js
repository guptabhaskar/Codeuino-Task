const crypto = require("crypto");
var keyUnblocked = require("../keys/unblocked");
var keyBlocked = require("../keys/blocked");

module.exports = (req, res) => {
	const iterator = keyUnblocked.keys();
    const val = iterator.next().value;

    if(typeof val === 'undefined'){
        res.writeHead(404, {"Error":"No key available right now."});
    }
    else{

        keyUnblocked.delete(val);

        const deleteTimeout = setTimeout(function() {
                    keyUnblocked.delete(val);
                    }, 2 * 60 * 1000);

        const delete1Timeout = setTimeout(function() {
                    keyBlocked.delete(val);
                    }, 2 * 60 * 1000);

        const releaseTimeout = setTimeout(function() {
                    keyUnblocked.set(val, {deleteTimeout});
                    keyBlocked.delete(val);
                    }, 60 * 1000);


    	keyBlocked.set(val, {releaseTimeout, delete1Timeout});
        res.writeHead(200, {"Success":val});

    }

    console.log("R2");

    // console.log(keyBlocked.keys());
    // console.log(keyUnblocked.keys());

    res.end();
}