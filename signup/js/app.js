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
	$(".signup-form-part-2 input, .signup-form-part-2 select").change(function() 
	{
		//TODO: Nope.
		// if ($('#billing-company-address-match').is(':checked')) 
		// {
		// 	billingfield.val(businessfield.val());
		// 	billingfield2.val(businessfield2.val());
		// 	billingfield3.val(businessfield3.children("option:selected").val());
		// 		if(businessfield3.children("option:selected").val()){
		// 			billingfield3.addClass('selected');
		// 		}else{
		// 			billingfield3.removeClass('selected');
		// 		}
		// 	billingfield4.val(businessfield4.children("option:selected").val());
		// 		if(businessfield4.children("option:selected").val()){
		// 			billingfield4.addClass('selected');
		// 		}else{
		// 			billingfield4.removeClass('selected');
		// 		}
		// 	billingfield5.val(businessfield5.val());
		// }
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


	// Get country codes list.
	$("input[name='businessstate_text']").hide();
	$("input[name='billingstate_text']").hide();
	
	getData("Signup/GetAllCountries")
		.then(response => response.json())
		.then(countryCodes => { 
			console.log("countryCodes=", countryCodes);
			var i = 0;
			
			// Load the "Business Country" lists. Select "Australia" by default. Wire up event handler when changes.
			var businessCountry = $("select[name='businesscountry']");	
			businessCountry.empty();
			businessCountry.append("<option selected disabled hidden value=''>Country</option>"); 

			for (i = 0; i < countryCodes.length; i++)
			{
				businessCountry.append($("<option></option>").attr("value", countryCodes[i].ID).attr("data-country-code", countryCodes[i].ISO366x1Alpha2Code).text(countryCodes[i].CountryName)); 
			}
			$("select[name='businesscountry'] option[data-country-code='AU']").attr("selected","selected");
			$("select[name='businesscountry']").change(function() { 
				var newCountryCode = $(this).children("option:Selected").attr("data-country-code");

				if (newCountryCode == "AU")
				{
					// Show the state drop-down list
					$("select[name='businessstate']").show();
					$("input[name='businessstate_text']").hide();
				}
				else
				{
					// Show the free text entry.
					$("select[name='businessstate']").hide();
					$("input[name='businessstate_text']").show();
				}
			});

			// Load the "Billing Country" lists. Select "Australia" by default. Wire up event handler when changes.
			var billingcountry = $("select[name='billingcountry']");	
			billingcountry.empty();
			billingcountry.append("<option selected disabled hidden value=''>Country</option>"); 

			for (i = 0; i < countryCodes.length; i++)
			{
				billingcountry.append($("<option></option>").attr("value", countryCodes[i].ID).attr("data-country-code", countryCodes[i].ISO366x1Alpha2Code).text(countryCodes[i].CountryName)); 
			}
			$("select[name='billingcountry'] option[data-country-code='AU']").attr("selected","selected");
			$("select[name='billingcountry']").change(function() { 
				var newCountryCode = $(this).children("option:Selected").attr("data-country-code");

				if (newCountryCode == "AU")
				{
					// Show the state drop-down list
					$("select[name='billingstate']").show();
					$("input[name='billingstate_text']").hide();
				}
				else
				{
					// Show the free text entry.
					$("select[name='billingstate']").hide();
					$("input[name='billingstate_text']").show();
				}
			});
		 });
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

			saveFormValue("FirstName", firstNameField.val());
			saveFormValue("LastName", lastNameField.val());
			saveFormValue("Phone", phoneField.val());
			saveFormValue("Email", email1Field.val());
			saveFormValue("Password", passwordField.val());


			// populate dynamic name areas
			//var dynamicName = $("input[name='name']").val().replace(/ .*/,'');	// When we had a full name field.
			var dynamicName = $("input[name='firstName']").val();
			$(".dynamicName").html(dynamicName);
			
			// fade out form part 1
			$(".signup-form-part-1").fadeOut(500);
			$(".validation-message").fadeOut(1000);
			$(".signup-form-part-2").delay(500).fadeIn(1000);
		}
		else
		{
			// show default validation message
			$(".validation-message").fadeIn(500);
		}

	}










	function processForm2()
	{
		var validcount = 0;
		var billingIsValid = true;
		
		// name
		var businessNameField = $("input[name='businessname']");
		var businessNameLabel = $("label[for='businessname']");
		if(businessNameField.val().length > 3)
		{
			removeerrors(businessNameField, businessNameLabel);
			validcount++;
		}
		else
		{
			adderrors('- please enter your business name', businessNameField, businessNameLabel);
			validcount--;
		}
		
		// abn
		var businessAbnField = $("input[name='abn']");
		var businessAbnLabel = $("label[for='abn']");
		if(businessAbnField.val().length > 3)
		{
			removeerrors(businessAbnField, businessAbnLabel);
			validcount++;
		}
		else
		{
			adderrors('- please enter a valid ABN', businessAbnField, businessAbnLabel);
			validcount--;
		}
		
		//business address
		var businessAddressLabel = $("label[for='businessaddress1']");
		var businessAddressLine1 = $("input[name='businessaddress1']");
		var businessAddressLine2 = $("input[name='businessaddress2']");
		var businessAddressCountry = $("select[name='businesscountry']");
		var businessAddressState = $("select[name='businessstate']");
		var businessAddressStateText = $("input[name='businessstate_text']");
		var businessAddressCity = $("input[name='businesscity']");
		var businessAddressPostCode = $("input[name='businesspostcode']");

		console.log("businessAddressCountry=", businessAddressCountry.val());

		if(
			businessAddressLine1.val().length > 1 && 
			businessAddressPostCode.val().length > 1 && 
			businessAddressCity.val().length > 1 && 
			//businessAddressCountry.hasClass('selected') && 
			businessAddressCountry.val() != "" && 
			(businessAddressState.hasClass('selected') || businessAddressStateText.val().length > 0)
		)
		{
			removeerrors(businessAddressLine1, businessAddressLabel);
			validcount++;
		}
		else
		{
			adderrors('- please enter a valid address', businessAddressLine1, businessAddressLabel);
			validcount--;
		}
		
		//billing address
		var billingMatchesBusiness = $("#billing-company-address-match").prop("checked");
		console.log("billingMatchesBusiness=", billingMatchesBusiness);
		if (billingMatchesBusiness == false)
		{
			var billingAddressLabel = $("label[for='billingaddress1']");
			console.log("billingAddressLabel=", billingAddressLabel.length, billingAddressLabel);
			var billingAddressLine1 = $("input[name='billingaddress1']");
			var billingAddressLine2 = $("input[name='billingaddress2']");
			var billingAddressCountry = $("select[name='billingcountry']");
			var billingAddressState = $("select[name='billingstate']");
			var billingAddressStateText = $("input[name='billingstate_text']");
			var billlingAddressCity = $("input[name='billingcity']");
			var billingAddressPostCode = $("input[name='billingpostcode']");
			if(
				billingAddressLine1.val().length > 1 && 
				billingAddressPostCode.val().length > 1 && 
				billlingAddressCity.val().length > 1 && 
				//billingAddressCountry.hasClass('selected') && 
				billingAddressCountry.val() != "" && 
				(billingAddressState.hasClass('selected') || billingAddressStateText.val().length > 0)
			)
			{
				removeerrors(billingAddressLine1, billingAddressLabel);
				//validcount++;
				billingIsValid = true;
			}
			else
			{
				adderrors('- please enter a valid address', billingAddressLine1, billingAddressLabel);
				//validcount--;
				billingIsValid = false;
			}
		}
		
		//email
		var billingEmailField = $("input[name='billingemail']");
		var billingEmailLabel = $("label[for='billingemail']");
		var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		if(!pattern.test(billingEmailField.val()))
		{
			adderrors('- please enter a valid email address', billingEmailField, billingEmailLabel);
			validcount--;
		}
		else
		{
			removeerrors(billingEmailField, billingEmailLabel);
			validcount++;
		}

		if(validcount == 4 && billingIsValid == true)
		{
			saveFormValue("BusinessName", $("input[name='businessname']").val());
			saveFormValue("AustralianBusinessNumber", $("input[name='abn']").val());

			var billingState = $("input[name='businessstate_text']").val();
			if (billingState == "") billingState = $("select[name='businessstate']").val();

			saveFormValue("BusinessAddress1", $("input[name='businessaddress1']").val());
			saveFormValue("BusinessAddress2", $("input[name='businessaddress2']").val());
			saveFormValue("BusinessAddressCountryID", $("select[name='businesscountry']").val());
			saveFormValue("BusinessAddressCity", $("input[name='businesscity']").val());
			saveFormValue("BusinessAddressState", billingState);
			saveFormValue("BusinessAddressPostCode", $("input[name='businesspostcode']").val());

			saveFormValue("PreferredBillingEmail", $("input[name='billingemail']").val());

			saveFormValue("BillingAddressMatchesBusinessAddress", $("#billing-company-address-match").prop("checked"));

			var businessState = $("input[name='billingstate_text']").val();
			if (businessState == "") businessState = $("select[name='billingstate']").val();

			saveFormValue("BillingAddress1", $("input[name='billingaddress1']").val());
			saveFormValue("BillingAddress2", $("input[name='billingaddress2']").val());
			saveFormValue("BillingAddressCountryID", $("select[name='billingcountry']").val());
			saveFormValue("BillingAddressCity", $("input[name='billingcity']").val());
			saveFormValue("BillingAddressState", businessState);
			saveFormValue("BillingAddressPostCode", $("input[name='billingpostcode']").val());


			submitForm(function() {
				// populate dynamic name areas
				//var dynamicName = $("input[name='name']").val().replace(/ .*/,'');
				var dynamicName = $("input[name='firstName']").val();
				$(".dynamicName").html(dynamicName);
				var dynamicCompany = $("input[name='businessname']").val().replace(/ .*/,'');
				$(".dynamicCompany").html(dynamicCompany);
				
				// fade out form part 1
				$(".signup-form-part-2").fadeOut(500);
				$(".validation-message").fadeOut(1000);
				
				//TODO: Skipping the billing section for now (26 Aug 2020)
				//$(".signup-form-part-3").delay(500).fadeIn(1000);
				$(".signup-form-part-4").delay(500).fadeIn(1000);	
			});
			


		}
		else
		{	
			// show default validation message
			$(".validation-message").fadeIn(500);
		}
	}










	


	function submitForm(callback)
	{
		// Call the API

		var requestData = formData;	//getLocalStorage();

		console.log("submitForm(): requestData=", requestData);

		// callback();
		// return;	//TODO: Testing

		postData('Signup/CreateAccountAndFirstUser', requestData)
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






function GetCreateFirstUserAndAccountRequest()
{
	return  {
		FirstName: "",
		LastName: "",
		Phone: "",
		Email: "",
		Password: "",

		BusinessName: "",
		AustralianBusinessNumber: "",
		BusinessAddress1: "",
		BusinessAddress2: "",
		BusinessAddressCountryID: "",
		BusinessAddressCity: "",
		BusinessAddressState: "",
		BusinessAddressPostCode: "",
		PreferredBillingEmail: "",
		BillingAddressMatchesBusinessAddress: true,
		BillingAddress1: "",
		BillingAddress2: "",
		BillingAddressCountryID: "",
		BillingAddressCity: "",
		BillingAddressState: "",
		BillingAddressPostCode: "",
	};
}

// Initialise the data store
var formData = GetCreateFirstUserAndAccountRequest();



function saveFormValue(key, value)
{
	//var data = getLocalStorage();
	//
	//data[key] = value;
	//
	//localStorage["SignUpForm"] = JSON.stringify(data);

	formData[key] = value;
}


function getLocalStorage()
{
	var data = localStorage["SignUpForm"];

	if (data == undefined || data == null || data == "")
	{
		data = GetCreateFirstUserAndAccountRequest();

		localStorage["SignUpForm"] = JSON.stringify(data);
	}
	else
	{
		data = JSON.parse(data);
	}

	return data;
}




var config = {
	//apiBaseUrl: "https://lotusai-production-portal.azurewebsites.net/API/"
	apiBaseUrl: "https://localhost:44393/API/"
};

async function postData(url = '', data = {}) 
{
	url = config.apiBaseUrl + url;
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


async function getData(url = '') 
{
	url = config.apiBaseUrl + url;

	// Default options are marked with *
	const response = await fetch(url, {
		method: 'GET',
		mode: 'cors', // no-cors, *cors, same-origin
		//cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		//credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		//redirect: 'follow', // manual, *follow, error
		//referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		//body: JSON.stringify(data) // body data type must match "Content-Type" header
	});

	return response;	//.json(); // parses JSON response into native JavaScript objects
}