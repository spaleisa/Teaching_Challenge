// Create a generic function to log the response from Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// Create a new instance of the Mandrill class from the mandrill
// library. It takes one parameter, your API key.

var m = new mandrill.Mandrill('Fi1hgj6aNP06OJfjfPQZ2Q');

// Ping your Mandrill account using the users/ping method

m.users.ping(function(res) {
    log(res);
    }, function(err) {
    log(err);
    });