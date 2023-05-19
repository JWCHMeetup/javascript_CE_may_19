var $ = function( id ) { 
	return document.getElementById(id);
};


var joinList = function() {
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	var isValid = true;
	
	if (emailAddress1 === "") { 
		$("email_address1_error").firstChild.nodeValue = "This field is required for input.";
		isValid = false;
	} else { $("email_address1_error").firstChild.nodeValue = "All is Good"; } 


	if (emailAddress1 !== emailAddress2) { 
		$("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
		isValid = false;
	} else { $("email_address2_error").firstChild.nodeValue = "All is Good"; }     
   
	
	if ( $("first_name").value === "" ) {
		$("first_name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("first_name_error").firstChild.nodeValue = "all is cool"; }  
	
	if (isValid) { $("email_form").submit(); }

};

window.onload = function() {

	// $("email_address1").onchange = joinList;
	// $("email_address2").onchange = joinList;
	// $("first_name").onchange = joinList;

	$("join_list").onclick = joinList;
	$("email_address1").focus();
	
};
