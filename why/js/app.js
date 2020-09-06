// make the background subtly move on the right hand side
$(document).ready(function(){
	
	//activate the scroll function
	$(".heroarea a").click(function(){
		populatecontent($(this).attr('data-case'));
		scrolldocument();
	});
	
	//find the scroll point
	function scrolldocument(){
		var scrollamount = $(".white-page").offset().top - 15;
		$("html, body").animate({ scrollTop: scrollamount });

	};
	
	//populate data
	
	//// CEO / Other:
	var header1_ceo = 		'Keep track of your company&#8217;s hours without <br class="d-none d-md-block hide-small">the blah lorem ipsum dolor sit amet line for a CEO.';
	var header2_ceo = 		'A simple closing statement to the reader, the closing reason they absolutely need Lotus.ai';
	var parahead1_ceo = 	'The <span class="yellow">transparency</span> you need for your dispersed workforce';
	var parahead2_ceo = 	'<span class="yellow">Compliance</span> and Customer reconciliations made simple';
	var parahead3_ceo = 	'Leave no <br><span class="yellow">revenue</span> behind';
	var parabody1_ceo = 	'Understand with accuracy which clients and projects the time in your business is going to.';
	var parabody2_ceo = 	'Auditable at a granular level, activity logs provide confidence that your compliance needs are covered.';
	var parabody3_ceo =		'Increase billables through automatically capturing time spent on emails, meetings and phone calls.';
	var bullets1_ceo = 		'Automated timesheets, <span class="yellow">automated transparency</span>.';
	var bullets2_ceo = 		'Ensure your billable time holistically <span class="yellow">reflects time spent on your clients</span> and revenue doesn&#8217;t fall through the memory cracks.';
	var bullets3_ceo = 		'The system <span class="yellow">you can trust</span>, so you can focus on your business.';
	var bullets1icon_ceo = 	'img/icon-time.svg';
	var bullets2icon_ceo = 	'img/icon-money.svg';
	var bullets3icon_ceo = 	'img/icon-shield.svg';
	
	//// HR:
	var header1_hr = 		'Keep track of your company&#8217;s hours without <br class="d-none d-md-block hide-small">the blah lorem ipsum dolor sit amet line for a HR&nbsp;manager.';
	var header2_hr = 		'A simple closing statement to the reader, the closing reason they absolutely need Lotus.ai';
	var parahead1_hr = 		'The <span class="yellow">transparency</span> you need for your dispersed workforce';
	var parahead2_hr = 		'Automated productivity <span class="yellow">measurements for your organisation and staff</span>';
	var parahead3_hr = 		'<span class="yellow">Compliance</span> and Customer reconciliations made simple';
	var parabody1_hr = 		'Understand with accuracy which clients and projects the time in your business is going to.';
	var parabody2_hr = 		'Manage company time with automated productivity reporting, and support your staff with extended insights into how their time is spent.';
	var parabody3_hr = 		'Auditable at a granular level, activity logs provide confidence that your compliance needs are covered.';
	var bullets1_hr = 		'Automated timesheets, <span class="yellow">automated transparency</span>.';
	var bullets2_hr = 		'The smart solution to <span class="yellow">improve personal productivity and role fulfilment</span> whilst increasing employee outputs.';
	var bullets3_hr = 		'The system you can <span class="yellow">trust</span>, so you can <span class="yellow">focus on your business</span>.';
	var bullets1icon_hr = 	'img/icon-time.svg';
	var bullets2icon_hr = 	'img/icon-productivity.svg';
	var bullets3icon_hr = 	'img/icon-shield.svg';
	
	//// Finanaces:
	var header1_fin = 		'Keep track of your company&#8217;s hours without <br class="d-none d-md-block hide-small">the blah lorem ipsum dolor sit amet line for a Finance&nbsp;Manager.';
	var header2_fin = 		'A simple closing statement to the reader, the closing reason they absolutely need Lotus.ai';
	var parahead1_fin = 	'The <span class="yellow">transparency</span> you need for your dispersed workforce';
	var parahead2_fin = 	'<span class="yellow">Automated Timesheets</span> generating real time data providing immediate insights';
	var parahead3_fin = 	'<span class="yellow">Compliance and Customer reconciliations</span> made simple';
	var parabody1_fin = 	'Understand with accuracy which clients and projects the time in your business is going to.';
	var parabody2_fin = 	'Real time actuals support timely reconciliations and 3 way matching accurately';
	var parabody3_fin = 	'Auditable at a granular level, activity logs provide confidence that your compliance needs are covered.';
	var bullets1_fin = 		'Automated timesheets, <span class="yellow">automated transparency</span>.';
	var bullets2_fin = 		'The system you can count on when you need <span class="yellow">answers now</span>.';
	var bullets3_fin = 		'Auditable at a granular level, activity logs provide confidence that your <span class="yellow">compliance needs are covered</span>.';
	var bullets1icon_fin = 	'img/icon-time.svg';
	var bullets2icon_fin = 	'img/icon-chart.svg';
	var bullets3icon_fin = 	'img/icon-clipboard.svg';
	
	function populatecontent(datacase){
		if(datacase == 'ceo'){
			$("#dynamicdata_1").html(header1_ceo);
			$("#dynamicdata_2").html(parahead1_ceo);
			$("#dynamicdata_3").html(parahead2_ceo);
			$("#dynamicdata_4").html(parahead3_ceo);
			$("#dynamicdata_5").html(parabody1_ceo);
			$("#dynamicdata_6").html(parabody2_ceo);
			$("#dynamicdata_7").html(parabody3_ceo);
			$("#dynamicdata_8").html(header2_ceo);
			$("#dynamicdata_9").html(bullets1_ceo);
			$("#dynamicdata_10").html(bullets2_ceo);
			$("#dynamicdata_11").html(bullets3_ceo);
			$("#dynamicdata_12").attr('src', bullets1icon_ceo);
			$("#dynamicdata_13").attr('src', bullets2icon_ceo);
			$("#dynamicdata_14").attr('src', bullets3icon_ceo);
		};
		if(datacase == 'hr'){
			$("#dynamicdata_1").html(header1_hr);
			$("#dynamicdata_2").html(parahead1_hr);
			$("#dynamicdata_3").html(parahead2_hr);
			$("#dynamicdata_4").html(parahead3_hr);
			$("#dynamicdata_5").html(parabody1_hr);
			$("#dynamicdata_6").html(parabody2_hr);
			$("#dynamicdata_7").html(parabody3_hr);
			$("#dynamicdata_8").html(header2_hr);
			$("#dynamicdata_9").html(bullets1_hr);
			$("#dynamicdata_10").html(bullets2_hr);
			$("#dynamicdata_11").html(bullets3_hr);
			$("#dynamicdata_12").attr('src', bullets1icon_hr);
			$("#dynamicdata_13").attr('src', bullets2icon_hr);
			$("#dynamicdata_14").attr('src', bullets3icon_hr);
		};
		if(datacase == 'fin'){
			$("#dynamicdata_1").html(header1_fin);
			$("#dynamicdata_2").html(parahead1_fin);
			$("#dynamicdata_3").html(parahead2_fin);
			$("#dynamicdata_4").html(parahead3_fin);
			$("#dynamicdata_5").html(parabody1_fin);
			$("#dynamicdata_6").html(parabody2_fin);
			$("#dynamicdata_7").html(parabody3_fin);
			$("#dynamicdata_8").html(header2_fin);
			$("#dynamicdata_9").html(bullets1_fin);
			$("#dynamicdata_10").html(bullets2_fin);
			$("#dynamicdata_11").html(bullets3_fin);
			$("#dynamicdata_12").attr('src', bullets1icon_fin);
			$("#dynamicdata_13").attr('src', bullets2icon_fin);
			$("#dynamicdata_14").attr('src', bullets3icon_fin);
		};
	};
	
});	







function submitSubscribeForm()
{
	//-- Get the values
	var email = document.getElementById("subscribe-form-email").value;

	console.log("submitSubscribeForm():");
	console.log("email=", email);

	//-- Call the API
	// 
	var requestData = {
		email: email,
	};

	url = config.GetApiBaseUrl() + "/SubmitLandingPageSubscribeForm:";
	console.log("submitSubscribeForm()", url, requestData);

	return false;

	postData(url, requestData)
		.then(response => response.json())
		.then(responseData => handleSubmitResponse(responseData));


	function handleSubmitResponse(responseData)
	{
		console.log("responseData=", responseData)

		var subscribeModalHeader = document.getElementById("subscribeModalHeader");
		var subscribeModalValidation = document.getElementById("subscribeModalValidation");
		var subscribeModalSuccess = document.getElementById("subscribeModalSuccess");

		if (responseData.Status == "Invalid")
		{
			// Validation error
			var validationMessage = responseData.ValidationMessage;
			console.error("Invalid: ", validationMessage);

			// Hide the header
			subscribeModalHeader.style.display = "none";

			// Show the error
			subscribeModalValidation.style.display = "block";
			subscribeModalValidation.innerHTML = "<p style='color: #aa0000; text-align: center'>" + validationMessage + "</p>";

			// Hide the success message
			subscribeModalSuccess.style.display = "none";
		}
		else
		{
			// Success

			// Show the header
			subscribeModalHeader.style.display = "block";

			// Hide the error
			subscribeModalValidation.style.display = "none";

			// Show the success message
			subscribeModalSuccess.style.display = "block";
		}

	}
}

$("#subscribe-form").submit(function(e) 
{

	e.preventDefault();
	
	submitSubscribeForm();
});


// // Bind submitSubscribeForm() to the #subscribe-form-submit button click event.
// document.addEventListener('click', function (event) {

// 	// If the clicked element doesn't have the right selector, bail
// 	if (!event.target.matches('#subscribe-form-submit')) return;

// 	// Don't follow the link
// 	event.preventDefault();

// 	// Log the clicked element in the console
// 	console.log("Clicked", event.target);

// 	submitSubscribeForm();

// }, false);