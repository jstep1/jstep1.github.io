// Home screen functions

var i = 0;
var txt1 = 'Hello, world! ';
var txt2 = ' My name is Jeremy Stepanovich and I\'m a full stack web developer.';
var speed = 30;

$(document).ready(

function typeWriter() {
    if (i < txt1.length) {
        document.getElementById('welcome').innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

    else if (i === txt1.length) {
        setTimeout(typeWriter, 500);
        i++;
    }

    else if (i > txt1.length) {
        document.getElementById('welcome').innerHTML += txt2.charAt(i - txt1.length);
        i++;
        setTimeout(typeWriter, speed);
    }
    

    }

)

// Contact Form functions

$("#emailsubmit").on("click", function(e) {
    e.preventDefault();

    if($("#formname").val() !== "" && $("#formemail").val() !== "" && $("#formcomments").val() !== "") {

    $("#emailsubmit").text("Please wait...");
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
                $("#emailsubmit").text("Success!");
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