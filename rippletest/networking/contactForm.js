// JavaScript Document


var formValidity = true;



function validateAddress(fieldsetId) {
	
	var inputElements = document.querySelectorAll("#" + fieldsetId + " input");
	var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage")[0];
	
	var fieldsetValidity = true;
	
	var elementCount = inputElements.length;
	var currentElement;
	
	
	try {
		for (var i = 0; i < elementCount; i++) {
			//validate all input elements in fieldset
			currentElement = inputElements[i];
			
			if (currentElement.value === "") {
				currentElement.style.background = "#FF4D4D";
				
				fieldsetValidity = false;
			}//end IF
			
			
			else {
				currentElement.style.background = "#000000";
			}//end else
			
		}//end for
		
		
	}//end try
	
	catch(msg) {
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		formValidity = false;
	}
	
	
}//end function

///function validates form
function validateForm(evt) {
	
	if (evt.preventDefault) {
		evt.preventDefault();//prevents form from submitting
	}
	else {
		evt.returnValue = false;//prevent IE 8 form from submitting
	}
	
	formValidity = true; //reset for revalidation next submit
	
	validateAddress("fieldsetErrors");
	//replace with calls to validation functions
	if (formValidity === true) {
		document.getElementById("errorText").innerHTML = "";
		document.getElementById("errorText").style.display = "none";
		document.getelementByTagName("form")[0].submit();
		
		alert("Form was successfully submitted!");//if no errors, diplay alert saying good to go
	}
	else {
		document.getElementById("errorText").innerHTML = "Please fix the highlighted issues and resubmit.";
		document.getElementById("errorText").style.display = "inline";
		
		scroll(0,0);
		
	}//end else
	
	
	
	
}//end function

function createEventListeners() {
	
	var form = document.getElementsByTagName("form")[0];
	
	if (form.addEventListener) {
		form.addEventListener("submit", validateForm, false);
	}//end if
	
	else if (form.attachEvent) {
		form.attachEvent("onsubmit", validateForm);
	}//end else if
	
}//end function



function setUpPage() {
	createEventListeners();
}

//run setup func when page finishes loading
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
}	
else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}
// JavaScript Document