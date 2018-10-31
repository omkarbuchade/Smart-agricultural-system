$( document ).ready(function() {
    $(".cta").click(function() {
		 $("form").slideDown(250);
		 // if form is visible
		 if ($("form").is(":visible")) {
			 // change .cta cursor to default
			 $(".cta").css('cursor', 'default');
		 }
		 $("#email").focus();
	 });
});