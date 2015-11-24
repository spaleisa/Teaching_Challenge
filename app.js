// Create a generic function to log the response from Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// Create a new instance of the Mandrill class from the mandrill
// library. It takes one parameter, your API key.

var m = new mandrill.Mandrill('Fi1hgj6aNP06OJfjfPQZ2Q');

var content = {
	"message": {
		"from_email":"jake.therrien13@gmail.com",
		"to":[{"email":"jake.therrien13@gmail.com"}],
		"subject":"Mandrill Test",
		"text":"This is my first time using Mandrill!"
	}
};

// send the email
function sendTheMail() {
	m.messages.send(content);
	console.log("email sent successfully!");
};