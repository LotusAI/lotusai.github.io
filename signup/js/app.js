// make the background subtly move on the right hand side
$(document).ready(function(){
			
	// animate the background to 'move' and 'change' to the two different images
	var tid = setInterval(changefadeimages, 34000);
	function changefadeimages() {
	  $( ".bg-signup2" ).animate({
		  'background-position-y': '50%'
		}, 15000, 'swing', function(){
			$(".bg-signup2").css('background-image', 'url(img/bg1.jpg)').animate({'background-position-y': '53%'}, 15000, 'swing', function(){
				$( ".bg-signup2" ).css('background-image', 'url(img/bg2.jpg)');
			});
	   });
	}
	changefadeimages(); // run it... 

	
	$("button[name='submit1']").click(function(){
		
		// do the validation
		validate('part1');
		
		// stop default submit stuff
		return false;
		
	});
	
	$("button[name='submit2']").click(function(){
		
		// do the validation
		validate('part2');
		
		// stop default submit stuff
		return false;
		
	});
	
	$("button[name='submit3']").click(function(){
		
		// do the validation
		validate('part3');
		
		// stop default submit stuff
		return false;
		
	});
	
	//Make select text dark on change:
	$("select").change(function(){
		$(this).addClass('selected');
	});
	
	//Show billing address if it differs from company address
	$("#billing-company-address-match, input[for='billing-company-address-match']").click(function(){
		if ($('#billing-company-address-match').is(':checked')) {
			$("#billingaddress").fadeOut(500);
		}else{
			$("#billingaddress").fadeIn(500);
		};
	});
	
	//Make default Prefered Billing Email equal to signup email
	$("input[name='email2']").change(function(){
		$("input[name='billingemail']").val($("input[name='email2']").val());
	});
	
	//Make default Business Address to match Billing address
	businessfield = $("input[name='businessaddress1']");
	businessfield2 = $("input[name='businessaddress2']");
	businessfield3 = $("select[name='businesscountry']");
	businessfield4 = $("select[name='businesssuburb']");
	businessfield5 = $("input[name='businesspostcode']");
	billingfield = $("input[name='billingaddress1']");
	billingfield2 = $("input[name='billingaddress2']");
	billingfield3 = $("select[name='billingcountry']");
	billingfield4 = $("select[name='billingsuburb']");
	billingfield5 = $("input[name='billingpostcode']");
	$(".signup-form-part-2 input, .signup-form-part-2 select").change(function(){
		if ($('#billing-company-address-match').is(':checked')) {
			billingfield.val(businessfield.val());
			billingfield2.val(businessfield2.val());
			billingfield3.val(businessfield3.children("option:selected").val());
				if(businessfield3.children("option:selected").val()){
					billingfield3.addClass('selected');
				}else{
					billingfield3.removeClass('selected');
				}
			billingfield4.val(businessfield4.children("option:selected").val());
				if(businessfield4.children("option:selected").val()){
					billingfield4.addClass('selected');
				}else{
					billingfield4.removeClass('selected');
				}
			billingfield5.val(businessfield5.val());
		}
	});
	
	//Select payment cycle
	$(".paymentcycle button").click(function(){
		$(".paymentcycle button").removeClass('selected');
		$(this).addClass('selected').blur();
		return false;
	});
	
	//Activate number spinner:
	$("input[type='number']").inputSpinner();
	
	//Dynamic User Pricing
	var costperuser = 120;
	var finalvalue = 0;
	var yearlydiscount = 0.1;
	var numberofusers = 5;
	var priceperiod = 'yearly';
	
	$(".btn-increment, .btn-decrement, button[name='paymentcycle-year'], button[name='paymentcycle-month']").click(function(){
		crunchnumbers();
	})
});	










function crunchnumbers(){
		
	// get the pricing period
	var numberofusers = $(".form-control").val();
	
	if($("button[name='paymentcycle-year']").hasClass('selected')){
		finalvalue = (numberofusers*costperuser);
		finalvalue = finalvalue - finalvalue*yearlydiscount;
		$("#amt-period-year").show(); $("#amt-period-month").hide();
	}else if($("button[name='paymentcycle-month']").hasClass('selected')){
		finalvalue = (numberofusers*costperuser)/12;
		$("#amt-period-year").hide(); $("#amt-period-month").show();
	}
	
	//apply to page
	$("#amt-amount").html('$' + finalvalue);
	
};










function validate(formpart)
{
	var validcount = 0;
	var field; var field2; var field3; var field4; var field5;
	var label;
	

	if(formpart == 'part1')
	{
		processForm1();
	};
	
	if(formpart == 'part2')
	{
		processForm2();	
	};

	if(formpart == 'part3')
	{
		processForm3();
	}










	function processForm1()
	{
		var validcount = 0;
		// var field; var field2; var field3; var field4; var field5;
		// var label;

		validcount = 0;
		
		// first name
		var firstNameField = $("input[name='firstName']");
		var firstNameLabel = $("label[for='firstName']");
		if(firstNameField.val().length > 3)
		{
			removeerrors(firstNameField, firstNameLabel);
			validcount++;
		}
		else
		{
			adderrors('- please enter your first name', firstNameField, firstNameLabel);
			validcount--;
		}

		// last name
		var lastNameField = $("input[name='lastName']");
		var lastNameLabel = $("label[for='lastName']");
		if(lastNameField.val().length > 3)
		{
			removeerrors(lastNameField, lastNameLabel);
			validcount++;
		}
		else
		{
			adderrors('- please enter your last name', lastNameField, lastNameLabel);
			validcount--;
		}
		
		// phone
		var phoneField = $("input[name='phone']");
		var phoneLabel = $("label[for='phone']");
		if(phoneField.val().length > 6)
		{
			removeerrors(phoneField, phoneLabel);
			validcount++;
		}
		else
		{
			adderrors('- please enter a valid phone number', phoneField, phoneLabel);
			validcount--;
		}
		
		//email
		var email1Field = $("input[name='email1']");
		var email1Label = $("label[for='email1']");
		var email2Field = $("input[name='email2']");
		var email2Label = $("label[for='email2']");
		var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		if(!pattern.test(email1Field.val()))
		{
			adderrors('- please enter a valid email address', email1Field, email1Label);
			$("input[name='email2']").addClass('invalid');
			validcount--;
		}
		else
		{
			validcount++;
			if(email1Field.val() != email2Field.val())
			{
				adderrors('- emails do not match', email1Field, email1Label);
				$("input[name='email2']").addClass('invalid');
				validcount--; 
			}
			else
			{
				removeerrors(email1Field, email1Label);
				$("input[name='email2']").removeClass('invalid');
				validcount++;
			}
		}
		
		// password
		var passwordField = $("input[name='password']");
		var passwordLabel = $("label[for='password']");
		if(passwordField.val().length > 7)
		{
			removeerrors(passwordField, passwordLabel);
			validcount++;
		}
		else
		{
			adderrors('- please enter an email with 8 or more characters', passwordField, passwordLabel);
			validcount--;
		}
		
		// validate this part of the form
		if(validcount == 6)
		{
			// Save the form.
			saveForm1(firstNameField.val(), lastNameField.val(), phoneField.val(), email1Field.val(), passwordField.val(), function() {
				// populate dynamic name areas
				//var dynamicName = $("input[name='name']").val().replace(/ .*/,'');	// When we had a full name field.
				var dynamicName = $("input[name='firstName']").val();
				$(".dynamicName").html(dynamicName);
				
				// fade out form part 1
				$(".signup-form-part-1").fadeOut(500);
				$(".validation-message").fadeOut(1000);
				$(".signup-form-part-2").delay(500).fadeIn(1000);
			});
		}
		else
		{
			// show default validation message
			$(".validation-message").fadeIn(500);
		}
	}



	function saveForm1(firstName, lastName, phone, email, password, callback)
	{
		//-- Call the API
		// 
		var requestData = {
			FirstName: firstName,
			LastName: lastName,
			Phone: phone,
			Email: email,
			Password: password
		};

		console.log("saveForm1(): requestData=", requestData);

		postData('Signup/CreateFirstUserAndAccount', requestData)
			.then(response => response.json())
			.then(responseData => handleSubmitResponse(responseData));


		function handleSubmitResponse(responseData)
		{
			console.log("saveForm1.handleSubmitResponse(): responseData=", responseData)

			if (responseData.Status == "EmailExists")
			{
				// Validation error
				//var validationMessage = responseData.ValidationMessage;
				console.error("Email already exists");
			}
			else
			{
				// Success
			}
			
			callback();
		}
	}










	function processForm2()
	{
		var validcount = 0;
		var field; var field2; var field3; var field4; var field5;
		var label;

		validcount = 0;
		
		// name
		field = $("input[name='businessname']");
		label = $("label[for='businessname']");
		if(field.val().length > 3)
		{
			removeerrors(field, label);
			validcount++;
		}
		else
		{
			adderrors('- please enter your business name', field, label);
			validcount--;
		}
		
		// abn
		field = $("input[name='abn']");
		label = $("label[for='abn']");
		if(field.val().length > 3)
		{
			removeerrors(field, label);
			validcount++;
		}
		else
		{
			adderrors('- please enter a valid ABN', field, label);
			validcount--;
		}
		
		//business address
		label = $("label[for='businessaddress1']");
		field = $("input[name='businessaddress1']");
		field2 = $("input[name='businessaddress2']");
		field3 = $("select[name='businesscountry']");
		field4 = $("select[name='businesssuburb']");
		field5 = $("input[name='businesspostcode']");
		if(field.val().length > 1 && field5.val().length > 1 && field3.hasClass('selected') && field4.hasClass('selected'))
		{
			removeerrors(field, label);
			validcount++;
		}
		else
		{
			adderrors('- please enter a valid address', field, label);
			validcount--;
		}
		
		//billing address
		label = $("label[for='billingaddress1']");
		field = $("input[name='billingaddress1']");
		field2 = $("input[name='billingaddress2']");
		field3 = $("select[name='billingcountry']");
		field4 = $("select[name='billingsuburb']");
		field5 = $("input[name='billingpostcode']");
		if(field.val().length > 1 && field5.val().length > 1 && field3.hasClass('selected') && field4.hasClass('selected'))
		{
			removeerrors(field, label);
			validcount++;
		}
		else
		{
			adderrors('- please enter a valid address', field, label);
			validcount--;
		}
		
		//email
		field = $("input[name='billingemail']");
		label = $("label[for='billingemail']");
		var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		if(!pattern.test(field.val()))
		{
			adderrors('- please enter a valid email address', field, label);
			validcount--;
		}
		else
		{
			removeerrors(field, label);
			validcount++;
		}

		if(validcount == 5)
		{
			
			// populate dynamic name areas
			var dynamicName = $("input[name='name']").val().replace(/ .*/,'');
			$(".dynamicName").html(dynamicName);
			var dynamicCompany = $("input[name='businessname']").val().replace(/ .*/,'');
			$(".dynamicCompany").html(dynamicCompany);
			
			// fade out form part 1
			$(".signup-form-part-2").fadeOut(500);
			$(".validation-message").fadeOut(1000);
			$(".signup-form-part-3").delay(500).fadeIn(1000);
		}
		else
		{	
			// show default validation message
			$(".validation-message").fadeIn(500);
		}
	}



	function saveForm2(nameField, phoneField, email1Field, email2Field, passwordField, callback)
	{
		alert("saved)");

		callback();
	}









	function processForm3()
	{
		var validcount = 0;
		var field; var field2; var field3; var field4; var field5;
		var label;

		validcount = 0;
		
		//business address
		label = $("label[for='paymentname']");
		field = $("input[name='paymentname']");
		field2 = $("input[name='paymentcard']");
		field3 = $("input[name='paymentexpiration-m']");
		field4 = $("input[name='paymentexpiration-y']");
		field5 = $("input[name='paymentcvv']");
		
		if(field.val().length > 1 && field2.val().length > 15 && field3.val().length > 1 && field4.val().length > 1 && field5.val().length > 2)
		{
			removeerrors(field, label);
			validcount++;
		}
		else
		{
			adderrors('- please enter valid card details', field, label);
			validcount--;
		}
		
		if(validcount == 1)
		{	
			// fade out form part 3
			$(".signup-form-part-3").fadeOut(500);
			$(".validation-message").fadeOut(1000);
			$(".signup-form-part-4").delay(500).fadeIn(1000);	
		}
		else
		{
			// show default validation message
			$(".validation-message").fadeIn(500);
		}
	}
	


	function saveForm3(nameField, phoneField, email1Field, email2Field, passwordField, callback)
	{
		alert("saved)");

		callback();
	}




	// error handling
	// function removeerrors()
	// {
	// 	field.removeClass('invalid');
	// 	label.removeClass('invalid');
	// 	label.children('.validation-message-inline')[0].innerHTML = '';
	// }
	function removeerrors(field, label)
	{
		field.removeClass('invalid');
		label.removeClass('invalid');
		label.children('.validation-message-inline')[0].innerHTML = '';
	}
	




	// function adderrors(errormessage)
	// {
	// 	field.addClass('invalid');
	// 	label.addClass('invalid');
	// 	label.children('.validation-message-inline')[0].innerHTML = errormessage;
	// }
	function adderrors(errormessage, field, label)
	{
		field.addClass('invalid');
		label.addClass('invalid');
		label.children('.validation-message-inline')[0].innerHTML = errormessage;
	}
	
};










async function postData(url = '', data = {}) 
{
	//var apiBaseUrl = "https://lotusai-production-portal.azurewebsites.net/API/";
	var apiBaseUrl = "https://localhost:44393/API/";

	url = apiBaseUrl + url;
	console.log("postData()", data);

	// Default options are marked with *
	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors', // no-cors, *cors, same-origin
		//cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		//credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		//redirect: 'follow', // manual, *follow, error
		//referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});

	return response;	//.json(); // parses JSON response into native JavaScript objects
}