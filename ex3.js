
function checkName() {
    var myName = document.getElementById("name");
  // Test the format of the input name 
  //   Allow one or more letter after the first initial letter
    if(myName.value==""){
        alert("You did not enter your Name\n"+
                "Please enter");
        return false;
    }
	var pos = myName.value.search(
			  /^[A-Z][a-z]+$/);
	if (pos != 0) {
	    alert("The name you entered (" + myName.value + 
			") is not in the correct form. \n" +
			"The correct form is:" +
			"your only first name with first letter in capital\n"+
			"Please fix your name");
	  return false;
	} else
	  return true;
}

function checkID() {
	var stdID = document.getElementById("stdID");
  // Test the format of the input ID
    if(stdID.value==""){
        alert("You did not enter your student ID\n"+
                "Please enter");
        return false;
    }
	var pos = stdID.value.search(
			  /\d\d\d\d\d\d\d\d\d/);
	if (pos != 0) {
	    alert("The ID you entered (" + stdID.value + 
			") is not in the correct form.\n" +
			"The correct form has 9 digits\n"+
			"Please enter correct ID");
	  return false;
	} else
	  return true;
}
function checkEmail() {
	var email = document.getElementById("email");
  // Test the format of the input Email
    if(email.value==""){
        alert("You did not enter your Email\n"+
                "Please enter");
        return false;
    }
	var pos = email.value.search(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+\.+com$/);
	if (pos != 0) {
	    alert("The Email you entered (" + email.value + ") is not in the correct form.\n"+
                "The correct form ends with @sp.com where sp is service provider.\n"+
                "Please enter valid email");
	  return false;
	} else
	  return true;
}