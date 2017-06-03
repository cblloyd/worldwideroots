$(document).ready(function(){

	$( ".koffee" ).click(function() {
	  $(".koffee-fade").fadeToggle( "slow", "linear" );
	});

	$( ".alien" ).click(function() {
	  $(".alien-fade").fadeToggle( "slow", "linear" );
	});

	$( ".freeze" ).click(function() {
	  $(".freeze-fade").fadeToggle( "slow", "linear" );
	});

	$( ".gasmask" ).click(function() {
	  $(".gasmask-fade").fadeToggle( "slow", "linear" );
	});

	$( ".special" ).click(function() {
		$(".special-fade").fadeToggle( "slow", "linear" );
	});

	$( "#menu-title" ).click(function() {
		$(".group").fadeToggle( "slow", "linear" );
	});


});
