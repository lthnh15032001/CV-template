$(document).ready(function() {

	$("body").append('<div id="style-switcher"></div>');
	$("#style-switcher").load( "styleswitcher/styleswitcher.html" );

	setTimeout(function() {

		var preColorLink = $("#color" ).attr("href");
		var preColor;
		
		if(preColorLink == "colors/orange.css") preColor = "orange";
		if(preColorLink == "colors/blue.css") preColor = "blue";
		if(preColorLink == "colors/green.css") preColor = "green";
		if(preColorLink == "colors/red.css") preColor = "red";
		if(preColorLink == "colors/violet.css") preColor = "violet";
		if(preColorLink == "colors/yellow.css") preColor = "yellow";
		
		$("#style-switcher .color-switcher li a ").each(function() {
	        if($(this).hasClass(preColor)) $(this).addClass('active');
	    });

		$(".orange" ).click(function()		{ $("#color" ).attr("href", "colors/orange.css" ); });
		$(".blue" ).click(function()			{ $("#color" ).attr("href", "colors/blue.css" );	});
		$(".green" ).click(function()		{ $("#color" ).attr("href", "colors/green.css" ); });
		$(".red" ).click(function()			{ $("#color" ).attr("href", "colors/red.css" ); });
		$(".violet" ).click(function()			{ $("#color" ).attr("href", "colors/violet.css" ); });
		$(".yellow" ).click(function()		{ $("#color" ).attr("href", "colors/yellow.css" ); });
		
		$('.color-switcher li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
		})
	
		$('#style-switcher .ss-toggle').click(function(){
			var div = $('#style-switcher');
			if (div.css('right') === '-175px') {
				$('#style-switcher').animate({
					right: '0'
				});
				$(this).toggleClass('active');
			} else {
				$('#style-switcher').animate({
					right: '-175px'
				});
				$(this).toggleClass('active');
			}
			return false;
		});
	}, 1000)

});

$(window).load(function() {
	

	
})