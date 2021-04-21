




function validateForm() {
	
	var row2input = document.getElementById("row2").value;
	var row5input = document.getElementById("row5").value;
	var row8input = document.getElementById("row8").value;
	var col2input = document.getElementById("col2").value;
	var col5input = document.getElementById("col5").value;
	var col8input = document.getElementById("col8").value;
	
//ROW 2 IF	
	//check for 9 chars entered first
	if (row2input.length === 9) {
		//check that chars are correct
		if (row2input === "154327698") {
			//if correct, green bgcolor and focus cursor on next field
			document.getElementById("row2").style.backgroundColor = "#80FF80";
			document.getElementById("row5").focus();
		}else {
			//if wrong, pink bgcolor
			document.getElementById("row2").style.backgroundColor = "#FF8080";
		}
	}
//ROW 2 IF
	
//ROW 5 IF
	//check for 9 chars entered first
	if (row5input.length === 9) {
		//check that chars are correct
		if (row5input === "341569287") {
			//if correct, green bgcolor and focus cursor on next field
			document.getElementById("row5").style.backgroundColor = "#80FF80";
			document.getElementById("row8").focus();
		}else {
			//if wrong, pink bgcolor
			document.getElementById("row5").style.backgroundColor = "#FF8080";
		}
	}
//ROW 5 IF

//ROW 8 IF
	//check for 9 chars entered first
	if (row8input.length === 9) {
		//check that chars are correct
		if (row8input === "435671829") {
			//if correct, green bgcolor and focus cursor on next field
			document.getElementById("row8").style.backgroundColor = "#80FF80";
			document.getElementById("col2").focus();
		}else {
			//if wrong, pink bgcolor
			document.getElementById("row8").style.backgroundColor = "#FF8080";
		}
	}
//ROW 8 IF

//END ROW, BEGIN COL
	
//COL 2 IF	
	//check for 9 chars entered first
	if (col2input.length === 9) {
		//check that chars are correct
		if (col2input === "759842631") {
			//if correct, green bgcolor and focus cursor on next field
			document.getElementById("col2").style.backgroundColor = "#80FF80";
			document.getElementById("col5").focus();
		}else {
			//if wrong, pink bgcolor
			document.getElementById("col2").style.backgroundColor = "#FF8080";
		}
	}
//COL 2 IF
	
//COL 5 IF
	//check for 9 chars entered first
	if (col5input.length === 9) {
		//check that chars are correct
		if (col5input === "521463978") {
			//if correct, green bgcolor and focus cursor on next field
			document.getElementById("col5").style.backgroundColor = "#80FF80";
			document.getElementById("col8").focus();
		}else {
			//if wrong, pink bgcolor
			document.getElementById("col5").style.backgroundColor = "#FF8080";
		}
	}
//COL 5 IF

//COL 8 IF
	//check for 9 chars entered first
	if (col8input.length === 9) {
		//check that chars are correct
		if (col8input === "397584126") {
			//if correct, green bgcolor and focus cursor on next field
			document.getElementById("col8").style.backgroundColor = "#80FF80";
			document.getElementById("col8").blur();
			document.getElementById("link").style.visibility = "visible";
			document.getElementById("congrats").style.visibility = "visible";
		}else {
			//if wrong, pink bgcolor
			document.getElementById("col8").style.backgroundColor = "#FF8080";
		}
	}
//COL 8 IF

	

}





function createEventListeners() {
	
	var form1 = document.getElementsByTagName("form")[0];
	
	if (form1.addEventListener) {
		form1.addEventListener("keyup", validateForm, false);
	}//end if
	
	else if (form1.attachEvent) {
		form1.attachEvent("onkeyup", validateForm);
	}//end else if
	
	
	//FOR FORM #2
	var form2 = document.getElementsByTagName("form")[1];
	
	if (form2.addEventListener) {
		form2.addEventListener("keyup", validateForm, false);
	}//end if
	
	else if (form2.attachEvent) {
		form2.attachEvent("onkeyup", validateForm);
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

