$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Fancybox
	$('.work-box').fancybox();

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});


	$("#emailsubmit").on("click", function(e) {
		e.preventDefault();

		if($("#formname").val() !== "" && $("#formemail").val() !== "" && $("#formcomments").val() !== "") {

		$("#emailsubmit").attr("value", "Please wait...");
		(function(){

     	emailjs.init("user_A8Gpf0V6Ul0Qe6glnZckw");
   		})();

		emailjs.send("gmail","portfolio_page_contact_submission",
			{
				name: $("#formname").val(), 
				email: $("#formemail").val(),
				phone: $("#formphone").val(),
				comments: $("#formcomments").val()
			}).then(function(response) {
					alert("Your request has been sent. Thank you!");
					$("#emailsubmit").attr("value", "Sent!");
   					console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
			}, function(err) {
					$("#emailsubmit").attr("value", "Submit");
   					console.log("FAILED. error=", err);
			});
		}
		else {
			alert("Please fill out the required fields and try again.")
		}
	})
	
});