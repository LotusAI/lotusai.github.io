//TODO: I think this is obsolete and left-over from a copy and paste of past work.
// $(document).ready((function () {
// 	$("#datepicker").datepicker({
// 		templates: {
// 			leftArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.8 11.94"><g data-name="Layer 2"><path d="M11.8 6.54H2.19l4.59 4.59-.78.81L0 6l6-6 .81.81L2.19 5.4h9.61z" data-name="Layer 1" fill="#222f38"/></g></svg>',
// 			rightArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.8 11.94"><g data-name="Layer 2"><path d="M0 5.4h9.61L5 .81 5.83 0l6 6-6 6-.83-.87 4.6-4.59H0z" data-name="Layer 1" fill="#222f38"/></g></svg>'
// 		},
// 		todayHighlight: !0
// 	}).on("changeDate", (function () {
// 		$("body").removeClass("show-cal"), $("#cal-link").removeClass("active")
// 	})), $("#profile-link").popover({
// 		trigger: "manual",
// 		html: !0,
// 		animation: !1,
// 		content: '<a href="#" class="btn px-4 py-3 shadow-sm"><img src="img/logout-dark.svg" alt=""> LOGOUT</a>'
// 	}).on("mouseenter", (function () {
// 		var e = this;
// 		$(this).popover("show"), $(".popover").on("mouseleave", (function () {
// 			$(e).popover("hide")
// 		}))
// 	})).on("mouseleave", (function () {
// 		$(".popover:hover").length || $(this).popover("hide")
// 	})), $("#cal-link").click((function () {
// 		$("body").removeClass("show-sheet"), $(".nav a").removeClass("active"), $("body").toggleClass("show-cal"), $(this).toggleClass("active")
// 	})), $("#sheet-list-link").click((function () {
// 		$("body").removeClass("show-cal"), $(".nav a").removeClass("active"), $("body").toggleClass("show-sheet"), $(this).toggleClass("active")
// 	})), $("#sheet-link").click((function () {
// 		$("body").removeClass("show-cal"), $("body").removeClass("show-sheet"), $(".nav a").removeClass("active"), $(this).toggleClass("active")
// 	}))
// })),
// 	$((function () {
// 		var e = $(document),
// 			t = $('input[type="range"]');

// 		function a() {
// 			for (var e = $("#total-time")[0], a = 0, o = t.length - 1; o >= 0; o--) a += parseInt(t[o].value);
// 			var l = Math.floor(a / 60),
// 				n = a % 60;
// 			e.innerHTML = l + "h " + n + "m"
// 		}

// 		function o(e) {
// 			var t = e.value,
// 				a = e.parentNode.getElementsByTagName("output")[0],
// 				o = Math.floor(t / 60),
// 				l = t % 60;
// 			a.innerHTML = o + "h " + l + "m", a.style.visibility = t < 60 ? "hidden" : "visible", e.parentNode.parentNode.querySelectorAll(".sliderText")[0] && (e.parentNode.parentNode.querySelectorAll(".sliderText")[0].innerHTML = o + "h " + l + "m")
// 		}
// 		for (var l = t.length - 1; l >= 0; l--) o(t[l]), a();
// 		e.on("input", 'input[type="range"]', (function (e) {
// 			o(e.target), a()
// 		})), t.rangeslider({
// 			polyfill: !1
// 		})
// 	}));