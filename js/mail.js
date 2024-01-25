const firebaseConfig = {
	apiKey: "AIzaSyAYeLU9x35ay5bsDADG1SPP5VNC3jn4EZI",
	authDomain: "fit-sanctum-398504.firebaseapp.com",
	databaseURL: "https://fit-sanctum-398504-default-rtdb.firebaseio.com",
	projectId: "fit-sanctum-398504",
	storageBucket: "fit-sanctum-398504.appspot.com",
	messagingSenderId: "242296637009",
	appId: "1:242296637009:web:146589ef9ebe2478c09a70",
	measurementId: "G-GLF2YN2NF6"
};

firebase.initializeApp(firebaseConfig);

var contactFromDB = firebase.database().ref('contactFrom');
var contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();
	var name = getElementVal("fullname");
	var phone = getElementVal("phone");
	var email = getElementVal("email");
	var clas = getElementVal("class");
	var message = getElementVal("message");

	// Block the form
	blockForm();

	saveMsg(name, phone, email, clas, message);

	// Clear all input fields
	contactForm.reset();

	// Unblock the form after saving
	unblockForm();

	// Display a message
	displayMessage("Form submitted successfully!");
}

const saveMsg = (name, phone, email, clas, message) => {
	var newContactFrom = contactFromDB.push();

	newContactFrom.set({
		name: name,
		phone: phone,
		email: email,
		clas: clas,
		message: message,
	});
};

const getElementVal = (id) => {
	return document.getElementById(id).value;
};

const blockForm = () => {
	// Disable all form elements
	var formElements = contactForm.elements;
	for (var i = 0; i < formElements.length; i++) {
		formElements[i].disabled = true;
	}
};

const unblockForm = () => {
	// Enable all form elements
	var formElements = contactForm.elements;
	for (var i = 0; i < formElements.length; i++) {
		formElements[i].disabled = false;
	}
};

const displayMessage = (message) => {
	// Display the message where you want (e.g., alert, console, DOM element)
	console.log(message);
};
