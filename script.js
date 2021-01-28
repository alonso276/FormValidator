///DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

////Functions

//#show input error message
function showError(input, message) {
	//<div class control></div>
	const formControl = input.parentElement;
	//overwrites form control class name
	formControl.className = 'form-control error';
	//?change error message
	const small = formControl.querySelector('small');
	small.innerText = message;
}

//#success
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//# check email is valid

function isValidEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
////Event Listeners
form.addEventListener('submit', function (e) {
	//prevent default submitting
	e.preventDefault();
	// console.log(username.value); //lidia
	if (username.value === '') {
		showError(username, 'Usename is required');
	} else {
		showSuccess(username);
	}

	if (email.value === '') {
		showError(email, 'Email is required');
	} else if (!isValidEmail(email.value)) {
		showError(email, 'Email is not valid');
	} else {
		showSuccess(email);
	}

	if (password.value === '') {
		showError(password, 'Password is required');
	} else {
		showSuccess(password);
	}
	if (password2.value === '') {
		showError(password2, 'Password is required');
	} else {
		showSuccess(password2);
	}
});
