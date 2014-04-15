
/* Document ready
================================================== */

$(document).ready(function() {

	/* subscribe form
	================================================== */
	$("#subscribe-submit").click(function(){
		var valid = '';
		var isr = ' required.';
		var mail = $("#mail").val();
		if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<br />Email'+isr;
		}
		if (valid!='') {
			$("#response").fadeIn("slow");
			$("#response").html("Required");
		}
		else {
			var datastr ='&mail=' + mail;
			$("#response").css("display", "block");
			$("#response").html("Sending...");
			$("#response").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		return false;
	});

	/* image slider
	================================================== */
		var options = {
			autoPlay: true,
			animateStartingFrameIn: true,
			autoPlayDelay: 3000,
			transitionThreshold: 500,
		};
		var sequence = $("#image-slideshow").sequence(options).data("image-slideshow");

	/* jQuery countdown
	================================================== */

		function parseDate(input) {
			var parts = input.match(/(\d+)/g);
			return new Date(parts[0], parts[1]-1, parts[2]);
		}
		$('#countdown').countdown({
			layout:	'<div class="counter-block"><span id="days-num">{dn}</span><span id="days-desc">{dl}</span></div>' +
				'<div class="counter-block"><span id="hours-num">{hn}</span><span id="hours-desc">{hl}</span></div>' +
				'<div class="counter-block"><span id="min-num">{mn}</span><span id="min-desc">{ml}</span></div>' +
				'<div class="counter-block"><span id="sec-num">{sn}</span><span id="sec-desc">{sl}</span></div>',
			until: new Date(parseDate($('#countdown').data('date')))
		});
	
	/* Twitter integration
	================================================== */
	jQuery(function($){
		$("#ticker").tweet({
			username: "ResetBlueArt",
			page: 1,
			count: 3,
			loading_text: "loading ...",
			template: "{text}"
		}).bind("loaded", function() {
			var ul = $(this).find(".tweet_list");
			var ticker = function() {
				setTimeout(function() {
					ul.find('li:first').animate( {marginTop: '-20px'}, 900, function() {
						$(this).detach().appendTo(ul).removeAttr('style');
					});
					ticker();
				}, 5000);
			};
			ticker();
		});
	});

});

function send(datastr){
	$.ajax({	
		type: "POST",
		url: "subscribe.php",
		data: datastr,
		cache: false,
		success: function(html){
		$("#response").fadeIn("slow");
		$("#response").html(html);
		setTimeout('$("#response").fadeOut("slow")',2000);
	}
	});
}

