//your JS code here. If required.
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phoneNumber = document.getElementById('phoneNumber');
let email = document.getElementById('email');
let submitBtn = document.getElementById('submitBtn');

function onFormClick(){
	let firstNameValue = firstName.value;
	let lastNameValue = lastName.value;
	let phoneNumberValue = phoneNumber.value;
	let emailValue = email.value;
	console.log(firstNameValue)

	if(firstNameValue != "" && lastNameValue != "" && phoneNumberValue != "" && emailValue != ""){
		
		alert(`First Name: ${firstNameValue}  Last Name: ${lastNameValue}  Phone Number: ${phoneNumberValue}  Email: ${emailValue}`)
	}
}

submitBtn.addEventListener('click' , onFormClick)



